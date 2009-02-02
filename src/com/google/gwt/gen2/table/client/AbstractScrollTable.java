/*
 * Copyright 2008 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.google.gwt.gen2.table.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.gen2.event.dom.client.HasScrollHandlers;
import com.google.gwt.gen2.event.dom.client.ScrollEvent;
import com.google.gwt.gen2.event.dom.client.ScrollHandler;
import com.google.gwt.gen2.event.shared.HandlerRegistration;
import com.google.gwt.gen2.table.client.ColumnResizer.ColumnWidthInfo;
import com.google.gwt.gen2.table.client.TableModelHelper.ColumnSortList;
import com.google.gwt.gen2.table.event.client.ColumnSortEvent;
import com.google.gwt.gen2.table.event.client.ColumnSortHandler;
import com.google.gwt.gen2.table.override.client.ComplexPanel;
import com.google.gwt.gen2.table.override.client.OverrideDOM;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.DeferredCommand;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.AbstractImagePrototype;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.ImageBundle;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.widgetideas.client.ResizableWidget;
import com.google.gwt.widgetideas.client.ResizableWidgetCollection;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * A ScrollTable consists of a fixed header and footer (optional) that remain
 * visible and a scrollable body that contains the data.
 * </p>
 * 
 * <p>
 * In order for the columns in the header table and data table to line up, the
 * two table must have the same margin, padding, and border widths. You can use
 * CSS style sheets to manipulate the colors and styles of the cell's, but you
 * must keep the actual sizes consistent (especially with respect to the left
 * and right side of the cells).
 * </p>
 * 
 * <p>
 * NOTE: AbstractScrollTable does not resize correctly in older versions of
 * Mozilla (specifically, Linux hosted mode). In use, the PagingScrollTable will
 * expand horizontally, but it will not contract when you reduce the screen
 * size. However, the AbstractScrollTable resizes naturally (you can set width
 * in percentages) on all modern browsers including IE6+, FF2+, Safari2+,
 * Chrome, Opera 9.6.
 * </p>
 * 
 * <h3>CSS Style Rules</h3>
 * 
 * <dl>
 * <dt>.gwt-ScrollTable</dt>
 * <dd>applied to the entire widget</dd>
 * <dt>.gwt-ScrollTable .headerTable</dt>
 * <dd>applied to the header table</dd>
 * <dt>.gwt-ScrollTable .dataTable</dt>
 * <dd>applied to the data table</dd>
 * <dt>.gwt-ScrollTable .footerTable</dt>
 * <dd>applied to the footer table</dd>
 * <dt>.gwt-ScrollTable .headerWrapper</dt>
 * <dd>wrapper around the header table</dd>
 * <dt>.gwt-ScrollTable .dataWrapper</dt>
 * <dd>wrapper around the data table</dd>
 * <dt>.gwt-ScrollTable .footerWrapper</dt>
 * <dd>wrapper around the footer table</dd>
 * </dl>
 */
public abstract class AbstractScrollTable extends ComplexPanel implements
    ResizableWidget, HasScrollHandlers {
  /**
   * A helper class that handles some of the mouse events associated with
   * resizing columns.
   */
  private static class MouseResizeWorker {
    /**
     * The current header cell that the mouse is affecting.
     */
    private Element curCell = null;

    /**
     * The columns under the colSpan of the current cell.
     */
    private List<ColumnWidthInfo> curCells = new ArrayList<ColumnWidthInfo>();

    /**
     * The index of the current header cell.
     */
    private int curCellIndex = 0;

    /**
     * The current x position of the mouse.
     */
    private int mouseXCurrent = 0;

    /**
     * The last x position of the mouse when we resized.
     */
    private int mouseXLast = 0;

    /**
     * The starting x position of the mouse when resizing a column.
     */
    private int mouseXStart = 0;

    /**
     * A timer used to resize the columns. As long as the timer is active, it
     * will poll for the new row size and resize the columns.
     */
    private Timer resizeTimer = new Timer() {
      @Override
      public void run() {
        resizeColumn();
        schedule(100);
      }
    };

    /**
     * A boolean indicating that we are resizing the current header cell.
     */
    private boolean resizing = false;

    /**
     * The index of the first column that will be sacrificed.
     */
    private int sacrificeCellIndex = -1;

    /**
     * The cells that will be sacrificed so the current cells can be resized.
     */
    private List<ColumnWidthInfo> sacrificeCells = new ArrayList<ColumnWidthInfo>();

    /**
     * The table that this worker affects.
     */
    private AbstractScrollTable table = null;

    /**
     * @return the current cell
     */
    public Element getCurrentCell() {
      return curCell;
    }

    /**
     * @return true if a header is currently being resized
     */
    public boolean isResizing() {
      return resizing;
    }

    /**
     * Resize the column on a mouse event. This method also marks the client as
     * busy so we do not try to change the size repeatedly.
     * 
     * @param event the mouse event
     */
    public void resizeColumn(Event event) {
      mouseXCurrent = DOM.eventGetClientX(event);
    }

    /**
     * Set the current cell that will be resized based on the mouse event.
     * 
     * @param event the event that triggered the new cell
     * @return true if the cell was actually changed
     */
    public boolean setCurrentCell(Event event) {
      // Check the resize policy of the table
      Element cell = null;
      if (table.columnResizePolicy == ColumnResizePolicy.MULTI_CELL) {
        cell = table.headerTable.getEventTargetCell(event);
      } else if (table.columnResizePolicy == ColumnResizePolicy.SINGLE_CELL) {
        cell = table.headerTable.getEventTargetCell(event);
        if (cell != null && cell.getPropertyInt("colSpan") > 1) {
          cell = null;
        }
      }

      // See if we are near the edge of the cell
      int clientX = event.getClientX();
      if (cell != null) {
        int absRight = cell.getAbsoluteLeft() + cell.getOffsetWidth();
        if (clientX < absRight - 15 || clientX > absRight) {
          cell = null;
        }
      }

      // Change out the current cell
      if (cell != curCell) {
        // Clear the old cell
        if (curCell != null) {
          curCell.getStyle().setProperty("cursor", "");
        }

        // Set the new cell
        curCell = cell;
        if (curCell != null) {
          // Check the cell index
          curCellIndex = getCellIndex(curCell);
          if (curCellIndex < 0) {
            curCell = null;
            return false;
          }

          // Check for resizable columns within one of the cells in the colspan
          boolean resizable = false;
          int colSpan = cell.getPropertyInt("colSpan");
          curCells = table.getColumnWidthInfo(curCellIndex, colSpan);
          for (ColumnWidthInfo info : curCells) {
            if (!info.hasMaximumWidth() || !info.hasMinimumWidth()
                || info.getMaximumWidth() != info.getMinimumWidth()) {
              resizable = true;
            }
          }
          if (!resizable) {
            curCell = null;
            curCells = null;
            return false;
          }

          // Update the cursor on the cell
          curCell.getStyle().setProperty("cursor", "e-resize");
        }
        return true;
      }

      // The cell did not change
      return false;
    }

    /**
     * Set the ScrollTable table that this worker affects.
     * 
     * @param table the scroll table
     */
    public void setScrollTable(AbstractScrollTable table) {
      this.table = table;
    }

    /**
     * Start resizing the current cell when the user clicks on the right edge of
     * the cell.
     * 
     * @param event the mouse event
     */
    public void startResizing(Event event) {
      if (curCell != null) {
        resizing = true;
        mouseXStart = event.getClientX();
        mouseXLast = mouseXStart;
        mouseXCurrent = mouseXStart;

        // Add the sacrifice cells
        int numColumns = table.getDataTable().getColumnCount();
        int colSpan = curCell.getPropertyInt("colSpan");
        sacrificeCellIndex = curCellIndex + colSpan;
        sacrificeCells = table.getColumnWidthInfo(sacrificeCellIndex,
            numColumns - sacrificeCellIndex);

        // Start the timer and listen for changes
        DOM.setCapture(table.headerWrapper);
        resizeTimer.schedule(20);
      }
    }

    /**
     * Stop resizing the current cell.
     * 
     * @param event the mouse event
     */
    public void stopResizing(Event event) {
      if (curCell != null && resizing) {
        curCell = null;
        resizing = false;
        DOM.releaseCapture(table.headerWrapper);
        resizeTimer.cancel();
        resizeColumn();
        curCells = null;
        sacrificeCells = null;
      }
    }

    /**
     * Get the scroll table.
     * 
     * @return the scroll table
     */
    protected AbstractScrollTable getScrollTable() {
      return table;
    }

    /**
     * Get the actual cell index of a cell in the header table.
     * 
     * @param cell the cell element
     * @return the cell index
     */
    private int getCellIndex(Element cell) {
      int row = OverrideDOM.getRowIndex(DOM.getParent(cell)) - 1;
      int column = OverrideDOM.getCellIndex(cell);
      return table.headerTable.getColumnIndex(row, column)
          - table.getHeaderOffset();
    }

    /**
     * Helper method that actually sets the column size. This method is called
     * periodically by a timer.
     */
    private void resizeColumn() {
      if (mouseXLast != mouseXCurrent) {
        mouseXLast = mouseXCurrent;

        // Distribute to the cells being resized
        int totalDelta = mouseXCurrent - mouseXStart;
        totalDelta -= table.columnResizer.distributeWidth(curCells, totalDelta);

        // Distribute to the sacrifice cells
        if (table.resizePolicy.isSacrificial()) {
          int remaining = table.columnResizer.distributeWidth(sacrificeCells,
              -totalDelta);

          // We don't have enough to sacrifice, redistribute the width
          if (remaining != 0 && table.resizePolicy.isFixedWidth()) {
            totalDelta += remaining;
            table.columnResizer.distributeWidth(curCells, totalDelta);
          }

          // Apply the widths to the sacrifice column
          table.applyNewColumnWidths(sacrificeCellIndex, sacrificeCells, true);
        }

        // Set the new widths
        table.applyNewColumnWidths(curCellIndex, curCells, true);

        // Scroll to table back into alignment
        table.scrollTables(false);
      }
    }
  }

  /**
   * The Opera version of the mouse worker fixes an Opera bug where the cursor
   * isn't updated if the mouse is hovering over an element DOM object when its
   * cursor style is changed.
   */
  @SuppressWarnings("unused")
  private static class MouseResizeWorkerOpera extends MouseResizeWorker {
    /**
     * A div used to force the cursor to update.
     */
    private Element cursorUpdateDiv;

    /**
     * Constructor.
     */
    public MouseResizeWorkerOpera() {
      cursorUpdateDiv = DOM.createDiv();
      DOM.setStyleAttribute(cursorUpdateDiv, "position", "absolute");
    }

    /**
     * Set the current cell that will be resized based on the mouse event.
     * 
     * @param event the event that triggered the new cell
     * @return true if the cell was actually changed
     */
    @Override
    public boolean setCurrentCell(Event event) {
      // Check if cursor update div is active
      if (DOM.eventGetTarget(event) == cursorUpdateDiv) {
        removeCursorUpdateDiv();
        return false;
      }

      // Use the parent method
      boolean cellChanged = super.setCurrentCell(event);

      // Position a div that forces a cursor redraw in Opera
      if (cellChanged) {
        DOM.setCapture(getScrollTable().headerWrapper);
        DOM.setStyleAttribute(cursorUpdateDiv, "height",
            (Window.getClientHeight() - 1) + "px");
        DOM.setStyleAttribute(cursorUpdateDiv, "width",
            (Window.getClientWidth() - 1) + "px");
        DOM.setStyleAttribute(cursorUpdateDiv, "left", "0px");
        DOM.setStyleAttribute(cursorUpdateDiv, "top", "0px");
        DOM.appendChild(RootPanel.getBodyElement(), cursorUpdateDiv);
      }
      return cellChanged;
    }

    /**
     * Start resizing the current cell.
     * 
     * @param event the mouse event
     */
    @Override
    public void startResizing(Event event) {
      removeCursorUpdateDiv();
      super.startResizing(event);
    }

    /**
     * Remove the cursor update div from the page.
     */
    private void removeCursorUpdateDiv() {
      if (DOM.getCaptureElement() != null) {
        DOM.removeChild(RootPanel.getBodyElement(), cursorUpdateDiv);
        DOM.releaseCapture(getScrollTable().headerWrapper);
      }
    }
  }

  /**
   * An {@link ImageBundle} that provides images for {@link AbstractScrollTable}
   * .
   */
  public static interface ScrollTableImages extends ImageBundle {
    /**
     * An image used to fill the available width.
     * 
     * @return a prototype of this image
     */
    AbstractImagePrototype scrollTableFillWidth();

    /**
     * An image indicating that a column is sorted in ascending order.
     * 
     * @return a prototype of this image
     */
    AbstractImagePrototype scrollTableAscending();

    /**
     * An image indicating a column is sorted in descending order.
     * 
     * @return a prototype of this image
     */
    AbstractImagePrototype scrollTableDescending();
  }

  /**
   * The default style name.
   */
  public static final String DEFAULT_STYLE_NAME = "gwt-ScrollTable";

  /**
   * The resize policies related to user resizing.
   * 
   * <ul>
   * <li>DISABLED - Columns cannot be resized by the user</li>
   * <li>SINGLE_CELL - Only cells with a colspan of 1 can be resized</li>
   * <li>MULTI_CELL - All cells can be resized by the user</li>
   * </ul>
   */
  public static enum ColumnResizePolicy {
    DISABLED, SINGLE_CELL, MULTI_CELL
  }

  /**
   * The resize policies of table cells.
   * 
   * <ul>
   * <li>UNCONSTRAINED - Columns shrink and expand independently of each other</li>
   * <li>FLOW - As one column expands or shrinks, the columns to the right will
   * do the opposite, trying to maintain the same size. The user can still
   * expand the grid if there is no more space to take from the columns on the
   * right.</li>
   * <li>FIXED_WIDTH - As one column expands or shrinks, the columns to the
   * right will do the opposite, trying to maintain the same size. The width of
   * the grid will remain constant, ignoring column resizing that would result
   * in the grid growing in size.</li>
   * <li>FILL_WIDTH - Same as FIXED_WIDTH, but the grid will always fill the
   * available width, even if the widget is resized.</li>
   * </ul>
   */
  public static enum ResizePolicy {
    UNCONSTRAINED(false, false), FLOW(false, true), FIXED_WIDTH(true, true), FILL_WIDTH(
        true, true);

    private boolean isSacrificial;
    private boolean isFixedWidth;

    private ResizePolicy(boolean isFixedWidth, boolean isSacrificial) {
      this.isFixedWidth = isFixedWidth;
      this.isSacrificial = isSacrificial;
    }

    private boolean isFixedWidth() {
      return isFixedWidth;
    }

    private boolean isSacrificial() {
      return isSacrificial;
    }
  }

  /**
   * The scroll policy of the table.
   * 
   * <ul>
   * <li>HORIZONTAL - Only a horizontal scrollbar will be present.</li>
   * <li>BOTH - Both a vertical and horizontal scrollbar will be present.</li>
   * <li>DISABLED - Scrollbars will not appear, even if content doesn't fit</li>
   * </ul>
   */
  public static enum ScrollPolicy {
    HORIZONTAL, BOTH, DISABLED
  }

  /**
   * The sorting policies related to user column sorting.
   * 
   * <ul>
   * <li>DISABLED - Columns cannot be sorted by the user</li>
   * <li>SINGLE_CELL - Only cells with a colspan of 1 can be sorted</li>
   * <li>MULTI_CELL - All cells can be sorted by the user</li>
   * </ul>
   */
  public static enum SortPolicy {
    DISABLED, SINGLE_CELL, MULTI_CELL
  }

  /**
   * The div that wraps the table wrappers.
   */
  private Element absoluteElem;

  /**
   * The helper class used to resize columns.
   */
  private ColumnResizer columnResizer = new ColumnResizer();

  /**
   * The policy applied to user actions that resize columns.
   */
  private ColumnResizePolicy columnResizePolicy = ColumnResizePolicy.MULTI_CELL;

  /**
   * If true, a fill width is already pending.
   */
  private boolean fillWidthPending = false;

  /**
   * The data table.
   */
  private FixedWidthGrid dataTable;

  /**
   * The scrollable wrapper div around the data table.
   */
  private Element dataWrapper;

  /**
   * An image used to show a fill width button.
   */
  private Image fillWidthImage;

  /**
   * A spacer used to stretch the footerTable area so we can scroll past the
   * edge of the footer table.
   */
  private Element footerSpacer = null;

  /**
   * The footer table.
   */
  private FixedWidthFlexTable footerTable = null;

  /**
   * The non-scrollable wrapper div around the footer table.
   */
  private Element footerWrapper = null;

  /**
   * A spacer used to stretch the headerTable area so we can scroll past the
   * edge of the header table.
   */
  private Element headerSpacer;

  /**
   * The header table.
   */
  private FixedWidthFlexTable headerTable = null;

  /**
   * The non-scrollable wrapper div around the header table.
   */
  private Element headerWrapper;

  /**
   * The images applied to the table.
   */
  private ScrollTableImages images;

  /**
   * The last known height of this widget that the user set.
   */
  private String lastHeight = null;

  /**
   * A boolean indicating whether or not the grid should try to maintain its
   * width as much as possible.
   */
  private ResizePolicy resizePolicy = ResizePolicy.FLOW;

  /**
   * The worker that helps with mouse resize events.
   */
  private MouseResizeWorker resizeWorker = GWT.create(MouseResizeWorker.class);

  /**
   * A Deferred command used to resize tables vertically. Using this command
   * ensures that the tables don't resize until the client has time to modify
   * rendering.
   */
  private Command resizeTablesVerticallyCommand = new Command() {
    public void execute() {
      verticalResizePending = false;
      resizeTablesVerticallyNow();
    }
  };

  /**
   * The scrolling policy.
   */
  private ScrollPolicy scrollPolicy = ScrollPolicy.BOTH;

  /**
   * The current {@link SortPolicy}.
   */
  private SortPolicy sortPolicy = SortPolicy.SINGLE_CELL;

  /**
   * The Image use to indicate the currently sorted column.
   */
  private Image sortedColumnIndicator = new Image();

  /**
   * The TD cell that initiated a column sort operation.
   */
  private Element sortedColumnTrigger = null;

  /**
   * The wrapper around the image indicator.
   */
  private Element sortedColumnWrapper = null;

  /**
   * If true, a vertical table resize is already pending.
   */
  private boolean verticalResizePending = false;

  /**
   * Constructor.
   * 
   * @param dataTable the data table
   * @param headerTable the header table
   */
  public AbstractScrollTable(FixedWidthGrid dataTable,
      FixedWidthFlexTable headerTable) {
    this(dataTable, headerTable,
        (ScrollTableImages) GWT.create(ScrollTableImages.class));
  }

  /**
   * Constructor.
   * 
   * @param dataTable the data table
   * @param headerTable the header table
   * @param images the images to use in the table
   */
  public AbstractScrollTable(FixedWidthGrid dataTable,
      FixedWidthFlexTable headerTable, ScrollTableImages images) {
    super();
    this.dataTable = dataTable;
    this.headerTable = headerTable;
    this.images = images;
    resizeWorker.setScrollTable(this);

    // Prepare the header and data tables
    prepareTable(dataTable, "dataTable");
    prepareTable(headerTable, "headerTable");
    if (dataTable.getSelectionPolicy().hasInputColumn()) {
      headerTable.setColumnWidth(0, dataTable.getInputColumnWidth());
    }

    // Create the main div container
    Element mainElem = DOM.createDiv();
    setElement(mainElem);
    setStylePrimaryName(DEFAULT_STYLE_NAME);
    DOM.setStyleAttribute(mainElem, "padding", "0px");
    DOM.setStyleAttribute(mainElem, "overflow", "hidden");
    DOM.setStyleAttribute(mainElem, "position", "relative");

    // Wrap the table wrappers in another div
    absoluteElem = DOM.createDiv();
    absoluteElem.getStyle().setProperty("position", "absolute");
    absoluteElem.getStyle().setProperty("top", "0px");
    absoluteElem.getStyle().setProperty("left", "0px");
    absoluteElem.getStyle().setProperty("width", "100%");
    absoluteElem.getStyle().setProperty("padding", "0px");
    absoluteElem.getStyle().setProperty("margin", "0px");
    absoluteElem.getStyle().setProperty("border", "0px");
    absoluteElem.getStyle().setProperty("overflow", "hidden");
    mainElem.appendChild(absoluteElem);

    // Create the table wrapper and spacer
    headerWrapper = createWrapper("headerWrapper");
    headerSpacer = createSpacer(headerWrapper);
    dataWrapper = createWrapper("dataWrapper");

    // Create image to fill width
    fillWidthImage = new Image() {
      @Override
      public void onBrowserEvent(Event event) {
        super.onBrowserEvent(event);
        if (DOM.eventGetType(event) == Event.ONCLICK) {
          fillWidth();
        }
      }
    };
    fillWidthImage.setTitle("Shrink/Expand to fill visible area");
    images.scrollTableFillWidth().applyTo(fillWidthImage);
    Element fillWidthImageElem = fillWidthImage.getElement();
    DOM.setStyleAttribute(fillWidthImageElem, "cursor", "pointer");
    DOM.setStyleAttribute(fillWidthImageElem, "position", "absolute");
    DOM.setStyleAttribute(fillWidthImageElem, "top", "0px");
    DOM.setStyleAttribute(fillWidthImageElem, "right", "0px");
    DOM.setStyleAttribute(fillWidthImageElem, "zIndex", "1");
    add(fillWidthImage, getElement());

    // Adopt the header and data tables into the panel
    adoptTable(headerTable, headerWrapper, 0);
    adoptTable(dataTable, dataWrapper, 1);

    // Create the sort indicator Image
    sortedColumnWrapper = DOM.createSpan();
    DOM.setInnerHTML(sortedColumnWrapper, "&nbsp;");
    DOM.appendChild(sortedColumnWrapper, sortedColumnIndicator.getElement());

    // Add some event handling
    sinkEvents(Event.ONMOUSEOUT);
    DOM.setEventListener(dataWrapper, this);
    DOM.sinkEvents(dataWrapper, Event.ONSCROLL);
    DOM.setEventListener(headerWrapper, this);
    DOM.sinkEvents(headerWrapper, Event.ONMOUSEMOVE | Event.ONMOUSEDOWN
        | Event.ONMOUSEUP | Event.ONCLICK);

    // Listen for sorting events in the data table
    dataTable.addColumnSortHandler(new ColumnSortHandler() {
      public void onColumnSorted(ColumnSortEvent event) {
        // Get the primary column and sort order
        int column = -1;
        boolean ascending = true;
        ColumnSortList sortList = event.getColumnSortList();
        if (sortList != null) {
          column = sortList.getPrimaryColumn();
          ascending = sortList.isPrimaryAscending();
        }

        // Remove the sorted column indicator
        if (isColumnSortable(column)) {
          Element parent = DOM.getParent(sortedColumnWrapper);
          if (parent != null) {
            parent.removeChild(sortedColumnWrapper);
          }

          // Re-add the sorted column indicator
          if (column < 0) {
            sortedColumnTrigger = null;
          } else if (sortedColumnTrigger != null) {
            applySortedColumnIndicator(sortedColumnTrigger, ascending);
          }
        }
      }
    });

    // Add to Resizable Collection
    ResizableWidgetCollection.get().add(this);
  }

  public HandlerRegistration addScrollHandler(ScrollHandler handler) {
    return addHandler(ScrollEvent.TYPE, handler);
  }

  /**
   * Adjust all column widths so they take up the maximum amount of space
   * without needing a horizontal scroll bar. The distribution will be
   * proportional to the current width of each column.
   * 
   * The {@link AbstractScrollTable} must be visible on the page for this method
   * to work.
   */
  public void fillWidth() {
    // Skip if we aren't attached
    if (!isAttached()) {
      return;
    }

    // Calculate how much room we have to work with
    int clientWidth = -1;
    if (scrollPolicy == ScrollPolicy.BOTH) {
      absoluteElem.getStyle().setProperty("overflow", "scroll");
      clientWidth = absoluteElem.getPropertyInt("clientWidth") - 1;
      absoluteElem.getStyle().setProperty("overflow", "hidden");
    } else {
      clientWidth = absoluteElem.getPropertyInt("clientWidth");
    }
    if (clientWidth <= 0) {
      return;
    }

    // Calculate the difference and number of column to resize
    int diff = 0;
    int numColumns = 0;
    {
      // Calculate the number of columns in each table
      int numHeaderCols = 0;
      int numDataCols = 0;
      int numFooterCols = 0;
      if (headerTable.getElement().getScrollWidth() > 0) {
        numHeaderCols = headerTable.getColumnCount() - getHeaderOffset();
      }
      if (dataTable.getElement().getScrollWidth() > 0) {
        numDataCols = dataTable.getColumnCount();
      }
      if (footerTable != null && footerTable.getOffsetWidth() > 0) {
        numFooterCols = footerTable.getColumnCount() - getHeaderOffset();
      }

      // Determine the largest table
      if (numHeaderCols >= numDataCols && numHeaderCols >= numFooterCols) {
        numColumns = numHeaderCols;
        diff = clientWidth - headerTable.getElement().getScrollWidth();
      } else if (numFooterCols >= numDataCols && numFooterCols >= numHeaderCols) {
        numColumns = numFooterCols;
        diff = clientWidth - footerTable.getElement().getScrollWidth();
      } else if (numDataCols > 0) {
        numColumns = numDataCols;
        diff = clientWidth - dataTable.getElement().getScrollWidth();
      }
    }
    if (numColumns <= 0) {
      return;
    }

    // Calculate the new column widths
    List<ColumnWidthInfo> colWidthInfos = getColumnWidthInfo(0, numColumns);
    columnResizer.distributeWidth(colWidthInfos, diff);

    // Set the new column widths
    applyNewColumnWidths(0, colWidthInfos, false);

    // Rescroll the tables
    scrollTables(false);
  }

  /**
   * @return the cell padding of the tables, in pixels
   */
  public int getCellPadding() {
    return dataTable.getCellPadding();
  }

  /**
   * @return the cell spacing of the tables, in pixels
   */
  public int getCellSpacing() {
    return dataTable.getCellSpacing();
  }

  /**
   * @return the column resize policy
   */
  public ColumnResizePolicy getColumnResizePolicy() {
    return columnResizePolicy;
  }

  /**
   * Return the column width for a given column index.
   * 
   * @param column the column index
   * @return the column width in pixels
   */
  public int getColumnWidth(int column) {
    return dataTable.getColumnWidth(column);
  }

  /**
   * @return the data table
   */
  public FixedWidthGrid getDataTable() {
    return dataTable;
  }

  /**
   * @return the footer table
   */
  public FixedWidthFlexTable getFooterTable() {
    return footerTable;
  }

  /**
   * @return the header table
   */
  public FixedWidthFlexTable getHeaderTable() {
    return headerTable;
  }

  /**
   * Get the absolute maximum width of a column.
   * 
   * @param column the column index
   * @return the maximum allowable width of the column, or -1 if there is none
   */
  public abstract int getMaximumColumnWidth(int column);

  /**
   * Get the absolute minimum width of a column.
   * 
   * @param column the column index
   * @return the minimum allowable width of the column
   */
  public abstract int getMinimumColumnWidth(int column);

  /**
   * Get the preferred width of a column.
   * 
   * @param column the column index
   * @return the preferred width of the column
   */
  public abstract int getPreferredColumnWidth(int column);

  /**
   * @return the resize policy
   */
  public ResizePolicy getResizePolicy() {
    return resizePolicy;
  }

  /**
   * @return the current scroll policy
   */
  public ScrollPolicy getScrollPolicy() {
    return scrollPolicy;
  }

  /**
   * @return the current sort policy
   */
  public SortPolicy getSortPolicy() {
    return sortPolicy;
  }

  /**
   * Returns true if the specified column is sortable.
   * 
   * @param column the column index
   * @return true if the column is sortable, false if it is not sortable
   */
  public abstract boolean isColumnSortable(int column);

  /**
   * Returns true if the specified column can be truncated. If it cannot be
   * truncated, its minimum width will be adjusted to ensure the cell content is
   * visible.
   * 
   * @param column the column index
   * @return true if the column is truncatable, false if it is not
   */
  public abstract boolean isColumnTruncatable(int column);

  @Override
  public void onBrowserEvent(Event event) {
    Element target = DOM.eventGetTarget(event);
    switch (DOM.eventGetType(event)) {
      case Event.ONSCROLL:
        // Reposition the tables on scroll
        scrollTables(false);
        if (dataWrapper.isOrHasChild(target)) {
          fireEvent(new ScrollEvent(event));
        }
        break;

      case Event.ONMOUSEDOWN:
        // Start resizing a header column
        if (DOM.eventGetButton(event) != Event.BUTTON_LEFT) {
          return;
        }
        if (resizeWorker.getCurrentCell() != null) {
          DOM.eventPreventDefault(event);
          DOM.eventCancelBubble(event, true);
          resizeWorker.startResizing(event);
        }
        break;
      case Event.ONMOUSEUP:
        if (DOM.eventGetButton(event) != Event.BUTTON_LEFT) {
          return;
        }
        // Stop resizing the header column
        if (resizeWorker.isResizing()) {
          resizeWorker.stopResizing(event);
        } else {
          // Scroll tables if needed
          if (DOM.isOrHasChild(headerWrapper, target)) {
            scrollTables(true);
          } else {
            scrollTables(false);
          }

          // Get the actual column index
          Element cellElem = headerTable.getEventTargetCell(event);
          if (cellElem != null) {
            // Sorting is disabled
            if (sortPolicy == SortPolicy.DISABLED) {
              return;
            }

            // Check the colSpan
            int colSpan = cellElem.getPropertyInt("colSpan");
            if (colSpan > 1 && getSortPolicy() != SortPolicy.MULTI_CELL) {
              return;
            }

            // Sort the column
            int row = OverrideDOM.getRowIndex(DOM.getParent(cellElem)) - 1;
            int cell = OverrideDOM.getCellIndex(cellElem);
            int column = headerTable.getColumnIndex(row, cell)
                - getHeaderOffset();
            if (column >= 0 && isColumnSortable(column)) {
              if (dataTable.getColumnCount() > column) {
                sortedColumnTrigger = cellElem;
                dataTable.sortColumn(column);
              }
            }
          }
        }
        break;
      case Event.ONMOUSEMOVE:
        // Resize the header column
        if (resizeWorker.isResizing()) {
          resizeWorker.resizeColumn(event);
        } else {
          resizeWorker.setCurrentCell(event);
        }
        break;
      case Event.ONMOUSEOUT:
        // Unhighlight if the mouse leaves the table
        Element toElem = DOM.eventGetToElement(event);
        if (toElem == null || !dataWrapper.isOrHasChild(toElem)) {
          // Check that the coordinates are not directly over the table
          int clientX = event.getClientX() + Window.getScrollLeft();
          int clientY = event.getClientY() + Window.getScrollTop();
          int tableLeft = dataWrapper.getAbsoluteLeft();
          int tableTop = dataWrapper.getAbsoluteTop();
          int tableWidth = dataWrapper.getOffsetWidth();
          int tableHeight = dataWrapper.getOffsetHeight();
          int tableBottom = tableTop + tableHeight;
          int tableRight = tableLeft + tableWidth;
          if (clientX > tableLeft && clientX < tableRight && clientY > tableTop
              && clientY < tableBottom) {
            return;
          }

          dataTable.highlightCell(null);
        }
        break;
    }
  }

  /**
   * This method is called when the dimensions of the parent element change.
   * Subclasses should override this method as needed.
   * 
   * @param width the new client width of the element
   * @param height the new client height of the element
   */
  public void onResize(int width, int height) {
    redraw();
  }

  /**
   * Redraw the table.
   */
  public void redraw() {
    if (!isAttached()) {
      return;
    }
    resizeTablesVertically();
    maybeFillWidth();
  }

  /**
   * Unsupported.
   * 
   * @param child the widget to be removed
   * @return false
   * @throws UnsupportedOperationException
   */
  @Override
  public boolean remove(Widget child) {
    throw new UnsupportedOperationException(
        "This panel does not support remove()");
  }

  /**
   * Reset the widths of all columns to their preferred sizes.
   */
  public void resetColumnWidths() {
    resetColumnWidths(false);
  }

  /**
   * Sets the amount of padding to be added around all cells.
   * 
   * @param padding the cell padding, in pixels
   */
  public void setCellPadding(int padding) {
    headerTable.setCellPadding(padding);
    dataTable.setCellPadding(padding);
    if (footerTable != null) {
      footerTable.setCellPadding(padding);
    }
    redraw();
  }

  /**
   * Sets the amount of spacing to be added around all cells.
   * 
   * @param spacing the cell spacing, in pixels
   */
  public void setCellSpacing(int spacing) {
    headerTable.setCellSpacing(spacing);
    dataTable.setCellSpacing(spacing);
    if (footerTable != null) {
      footerTable.setCellSpacing(spacing);
    }
    redraw();
  }

  /**
   * Set the resize policy applied to user actions that resize columns.
   * 
   * @param columnResizePolicy the resize policy
   */
  public void setColumnResizePolicy(ColumnResizePolicy columnResizePolicy) {
    this.columnResizePolicy = columnResizePolicy;
    updateFillWidthImage();
  }

  /**
   * Set the width of a column.
   * 
   * @param column the index of the column
   * @param width the width in pixels
   * @return the new column width
   */
  public int setColumnWidth(int column, int width) {
    // Constrain the size of the column
    ColumnWidthInfo info = getColumnWidthInfo(column);
    if (info.hasMaximumWidth()) {
      width = Math.min(width, info.getMaximumWidth());
    }
    if (info.hasMinimumWidth()) {
      width = Math.max(width, info.getMinimumWidth());
    }

    // Try to constrain the size of the grid
    if (resizePolicy.isSacrificial()) {
      // Get the sacrifice columns
      int sacrificeColumn = column + 1;
      int numColumns = dataTable.getColumnCount();
      int remainingColumns = numColumns - sacrificeColumn;
      List<ColumnWidthInfo> infos = getColumnWidthInfo(sacrificeColumn,
          remainingColumns);

      // Distribute the width over the sacrifice columns
      int diff = width - getColumnWidth(column);
      int undistributed = columnResizer.distributeWidth(infos, -diff);

      // Set the new column widths
      applyNewColumnWidths(sacrificeColumn, infos, false);

      // Prevent over resizing
      if (resizePolicy.isFixedWidth()) {
        width += undistributed;
      }
    }

    // Resize the column
    int offset = getHeaderOffset();
    dataTable.setColumnWidth(column, width);
    headerTable.setColumnWidth(column + offset, width);
    if (footerTable != null) {
      footerTable.setColumnWidth(column + offset, width);
    }

    // Reposition things as needed
    repositionHeaderSpacer();
    scrollTables(false);
    return width;
  }

  /**
   * Set the footer table that appears under the data table. If set to null, the
   * footer table will not be shown.
   * 
   * @param footerTable the table to use in the footer
   */
  public void setFooterTable(FixedWidthFlexTable footerTable) {
    // Disown the old footer table
    if (this.footerTable != null) {
      super.remove(this.footerTable);
      DOM.removeChild(absoluteElem, footerWrapper);
    }

    // Set the new footer table
    this.footerTable = footerTable;
    if (footerTable != null) {
      footerTable.setCellSpacing(getCellSpacing());
      footerTable.setCellPadding(getCellPadding());
      prepareTable(footerTable, "footerTable");
      if (dataTable.getSelectionPolicy().hasInputColumn()) {
        footerTable.setColumnWidth(0, dataTable.getInputColumnWidth());
      }

      // Create the footer wrapper and spacer
      if (footerWrapper == null) {
        footerWrapper = createWrapper("footerWrapper");
        footerSpacer = createSpacer(footerWrapper);
        DOM.setEventListener(footerWrapper, this);
        DOM.sinkEvents(footerWrapper, Event.ONMOUSEUP);
      }

      // Adopt the header table into the panel
      adoptTable(footerTable, footerWrapper,
          absoluteElem.getChildNodes().getLength());
    }

    // Resize the tables
    resizeTablesVertically();
  }

  @Override
  public void setHeight(String height) {
    this.lastHeight = height;
    super.setHeight(height);
    resizeTablesVertically();
  }

  /**
   * Set the resize policy of the table.
   * 
   * @param resizePolicy the resize policy
   */
  public void setResizePolicy(ResizePolicy resizePolicy) {
    this.resizePolicy = resizePolicy;
    updateFillWidthImage();
    maybeFillWidth();
  }

  /**
   * Set the scroll policy of the table.
   * 
   * @param scrollPolicy the new scroll policy
   */
  public void setScrollPolicy(ScrollPolicy scrollPolicy) {
    this.scrollPolicy = scrollPolicy;

    if (scrollPolicy == ScrollPolicy.DISABLED) {
      // Disabled scroll bars
      dataWrapper.getStyle().setProperty("height", "auto");
      dataWrapper.getStyle().setProperty("overflow", "");
    } else if (scrollPolicy == ScrollPolicy.HORIZONTAL) {
      // Only show horizontal scroll bar
      dataWrapper.getStyle().setProperty("height", "auto");
      dataWrapper.getStyle().setProperty("overflow", "auto");
    } else if (scrollPolicy == ScrollPolicy.BOTH) {
      // Show both scroll bars
      if (lastHeight != null) {
        super.setHeight(lastHeight);
      } else {
        super.setHeight("");
      }
      dataWrapper.getStyle().setProperty("overflow", "auto");
    }

    // Resize the tables
    redraw();
  }

  /**
   * Set the {@link SortPolicy} that defines what columns users can sort.
   * 
   * @param sortPolicy the {@link SortPolicy}
   */
  public void setSortPolicy(SortPolicy sortPolicy) {
    this.sortPolicy = sortPolicy;

    // Remove the sorted indicator image
    applySortedColumnIndicator(null, true);
  }

  /**
   * Apply the sorted column indicator to a specific table cell in the header
   * table.
   * 
   * @param tdElem the cell in the header table, or null to remove it
   * @param ascending true to apply the ascending indicator, false for
   *          descending
   */
  protected void applySortedColumnIndicator(Element tdElem, boolean ascending) {
    // Remove the sort indicator
    if (tdElem == null) {
      Element parent = DOM.getParent(sortedColumnWrapper);
      if (parent != null) {
        parent.removeChild(sortedColumnWrapper);
      }
      return;
    }

    tdElem.appendChild(sortedColumnWrapper);
    if (ascending) {
      images.scrollTableAscending().applyTo(sortedColumnIndicator);
    } else {
      images.scrollTableDescending().applyTo(sortedColumnIndicator);
    }
    sortedColumnTrigger = null;
  }

  /**
   * Create a wrapper element that will hold a table.
   * 
   * @param cssName the style name added to the base name
   * @return a new wrapper element
   */
  protected Element createWrapper(String cssName) {
    Element wrapper = DOM.createDiv();
    wrapper.getStyle().setProperty("width", "100%");
    wrapper.getStyle().setProperty("overflow", "hidden");
    wrapper.getStyle().setProperty("position", "relative");
    wrapper.getStyle().setPropertyPx("padding", 0);
    wrapper.getStyle().setPropertyPx("margin", 0);
    wrapper.getStyle().setPropertyPx("border", 0);
    if (cssName != null) {
      setStyleName(wrapper, cssName);
    }
    return wrapper;
  }

  /**
   * @return the wrapper element around the data table
   */
  protected Element getDataWrapper() {
    return dataWrapper;
  }

  /**
   * Extend the columns to exactly fill the available space, if the current
   * {@link ResizePolicy} requires it.
   */
  protected void maybeFillWidth() {
    if (!fillWidthPending && isAttached()) {
      if (resizePolicy == ResizePolicy.FILL_WIDTH) {
        fillWidthPending = true;
        DeferredCommand.addCommand(new Command() {
          public void execute() {
            fillWidthPending = false;
            fillWidth();
          }
        });
      } else {
        resetColumnWidths(true);
      }
    }
  }

  /**
   * Resize the widget and redistribute space as needed.
   */
  @Override
  protected void onAttach() {
    super.onAttach();
    resizeTablesVertically();
    repositionHeaderSpacer();
    maybeFillWidth();
  }

  /**
   * Fixes the table heights so the header is visible and the data takes up the
   * remaining vertical space.
   */
  protected void resizeTablesVertically() {
    if (!verticalResizePending && isAttached()) {
      verticalResizePending = true;
      DeferredCommand.addCommand(resizeTablesVerticallyCommand);
    }
  }

  /**
   * Helper method that actually performs the vertical resizing.
   */
  protected void resizeTablesVerticallyNow() {
    // If we aren't attached, return immediately
    if (!isAttached()) {
      return;
    }

    // Force browser to redraw
    if (scrollPolicy == ScrollPolicy.DISABLED) {
      dataWrapper.getStyle().setProperty("overflow", "auto");
      dataWrapper.getStyle().setProperty("overflow", "");
      resizeTablesVerticallyNowImpl();
      return;
    } else if (scrollPolicy == ScrollPolicy.HORIZONTAL) {
      dataWrapper.getStyle().setProperty("overflow", "hidden");
      dataWrapper.getStyle().setProperty("overflow", "auto");
      resizeTablesVerticallyNowImpl();
      scrollTables(true);
      return;
    }

    // Give the data wrapper all remaining height
    int totalHeight = DOM.getElementPropertyInt(getElement(), "clientHeight");
    int headerHeight = headerTable.getOffsetHeight();
    int footerHeight = 0;
    if (footerTable != null) {
      footerHeight = footerTable.getOffsetHeight();
    }
    DOM.setStyleAttribute(headerWrapper, "height", headerHeight + "px");
    if (footerWrapper != null) {
      DOM.setStyleAttribute(footerWrapper, "height", footerHeight + "px");
    }
    DOM.setStyleAttribute(dataWrapper, "height", Math.max(totalHeight
        - headerHeight - footerHeight, 0)
        + "px");
    DOM.setStyleAttribute(dataWrapper, "overflow", "hidden");
    DOM.setStyleAttribute(dataWrapper, "overflow", "auto");
    scrollTables(true);
  }

  /**
   * Sets the scroll property of the header and data wrappers when scrolling so
   * that the header, footer, and data tables line up.
   * 
   * @param baseHeader If true, use the header as the alignment source
   */
  protected void scrollTables(boolean baseHeader) {
    // Return if scrolling is disabled
    if (scrollPolicy == ScrollPolicy.DISABLED) {
      return;
    }

    if (isAttached()) {
      if (baseHeader) {
        int headerScrollLeft = headerWrapper.getScrollLeft();
        dataWrapper.setScrollLeft(headerScrollLeft);
      }
      int scrollLeft = dataWrapper.getScrollLeft();
      headerWrapper.setScrollLeft(scrollLeft);
      if (footerWrapper != null) {
        footerWrapper.setScrollLeft(scrollLeft);
      }
    }
  }

  /**
   * @return the absolutely positioned wrapper element
   */
  Element getAbsoluteElement() {
    return absoluteElem;
  }

  /**
   * Adopt a table into this {@link AbstractScrollTable} within its wrapper.
   * 
   * @param table the table to adopt
   * @param wrapper the wrapper element
   * @param index the index to insert the wrapper in the main element
   */
  private void adoptTable(Widget table, Element wrapper, int index) {
    DOM.insertChild(absoluteElem, wrapper, index);
    add(table, wrapper);
  }

  /**
   * Apply the new widths to a list of columns.
   * 
   * @param startIndex the index of the first column
   * @param infos the new column width info
   * @param forced if false, only set column widths that have changed
   */
  private void applyNewColumnWidths(int startIndex,
      List<ColumnWidthInfo> infos, boolean forced) {
    int offset = getHeaderOffset();
    int numColumns = infos.size();
    for (int i = 0; i < numColumns; i++) {
      ColumnWidthInfo info = infos.get(i);
      int newWidth = info.getNewWidth();
      if (forced || info.getCurrentWidth() != newWidth) {
        dataTable.setColumnWidth(startIndex + i, newWidth);
        headerTable.setColumnWidth(startIndex + i + offset, newWidth);
        if (footerTable != null) {
          footerTable.setColumnWidth(startIndex + i + offset, newWidth);
        }
      }
    }
  }

  /**
   * Create a spacer element that allows scrolling past the edge of a table.
   * 
   * @param wrapper the wrapper element
   * @return a new spacer element
   */
  private Element createSpacer(Element wrapper) {
    Element spacer = DOM.createDiv();
    DOM.setStyleAttribute(spacer, "height", "1px");
    DOM.setStyleAttribute(spacer, "width", "10000px");
    DOM.setStyleAttribute(spacer, "position", "absolute");
    DOM.setStyleAttribute(spacer, "top", "1px");
    DOM.setStyleAttribute(spacer, "left", "1px");
    DOM.appendChild(wrapper, spacer);
    return spacer;
  }

  /**
   * Get info about the width of a column.
   * 
   * @param column the column index
   * @return the info about the column width
   */
  private ColumnWidthInfo getColumnWidthInfo(int column) {
    int minWidth = getMinimumColumnWidth(column);
    int maxWidth = getMaximumColumnWidth(column);
    int preferredWidth = getPreferredColumnWidth(column);
    int curWidth = getColumnWidth(column);

    // Adjust the widths if the columns are not truncatable, up to maxWidth
    if (!isColumnTruncatable(column)) {
      int idealWidth = getDataTable().getIdealColumnWidth(column);
      idealWidth = Math.min(idealWidth, maxWidth);
      minWidth = Math.max(minWidth, idealWidth);
    }

    return new ColumnWidthInfo(minWidth, maxWidth, preferredWidth, curWidth);
  }

  /**
   * Get info about the width of multiple columns.
   * 
   * @param column the start column index
   * @param numColumns the number of columns
   * @return the info about the column widths of the columns
   */
  private List<ColumnWidthInfo> getColumnWidthInfo(int column, int numColumns) {
    List<ColumnWidthInfo> infos = new ArrayList<ColumnWidthInfo>();
    for (int i = 0; i < numColumns; i++) {
      infos.add(getColumnWidthInfo(column + i));
    }
    return infos;
  }

  /**
   * Get the offset between the data and header and footer tables. An offset of
   * one means that the header and footer table indexes are one greater than the
   * data table indexes, probably because the data table contains a checkbox
   * column.
   * 
   * @return the offset
   */
  private int getHeaderOffset() {
    if (dataTable.getSelectionPolicy().hasInputColumn()) {
      return 1;
    }
    return 0;
  }

  /**
   * Prepare a table to be added to the {@link AbstractScrollTable}.
   * 
   * @param table the table to prepare
   * @param cssName the style name added to the base name
   */
  private void prepareTable(Widget table, String cssName) {
    Element tableElem = table.getElement();
    DOM.setStyleAttribute(tableElem, "margin", "0px");
    DOM.setStyleAttribute(tableElem, "border", "0px");
    table.addStyleName(cssName);
  }

  /**
   * Reposition the header spacer next to the header table.
   */
  private void repositionHeaderSpacer() {
    int headerWidth = headerTable.getOffsetWidth();
    headerSpacer.getStyle().setPropertyPx("left", headerWidth);
    if (footerTable != null) {
      int footerWidth = footerTable.getOffsetWidth();
      footerSpacer.getStyle().setPropertyPx("left", footerWidth);
    }
  }

  /**
   * Reset the widths of all columns, either to their preferred sizes or just
   * ensure that they are within their min/max boundaries.
   * 
   * @param boundsOnly true to only ensure the widths are within the bounds
   */
  private void resetColumnWidths(boolean boundsOnly) {
    // Calculate the new column widths
    int numColumns = dataTable.getColumnCount();
    int totalWidth = 0;
    List<ColumnWidthInfo> colWidthInfos = getColumnWidthInfo(0, numColumns);

    // If we are reseting to original widths, set all widths to 0
    if (!boundsOnly) {
      for (ColumnWidthInfo info : colWidthInfos) {
        totalWidth += info.getCurrentWidth();
        info.setCurrentWidth(0);
      }
    }

    // Run the resize algorithm
    columnResizer.distributeWidth(colWidthInfos, totalWidth);

    // Set the new column widths
    applyNewColumnWidths(0, colWidthInfos, false);

    // Rescroll the tables
    scrollTables(false);
  }

  /**
   * Set the height of the outer div equal to the height of the absolute
   * element.
   */
  private void resizeTablesVerticallyNowImpl() {
    // Old mozilla reports the offset height of elements as 0px if the parent
    // has a height of 0px, so we need to set the height to 1px as a workaround.
    int height = Math.max(1, absoluteElem.getOffsetHeight());
    super.setHeight(height + "px");
  }

  /**
   * Show or hide to fillWidthImage depending on current policies.
   */
  private void updateFillWidthImage() {
    if (columnResizePolicy == ColumnResizePolicy.DISABLED
        || resizePolicy.isFixedWidth()) {
      fillWidthImage.setVisible(false);
    } else {
      fillWidthImage.setVisible(true);
    }
  }
}
