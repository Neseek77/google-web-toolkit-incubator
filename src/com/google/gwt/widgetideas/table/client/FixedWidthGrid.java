/*
 * Copyright 2007 Google Inc.
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
package com.google.gwt.widgetideas.table.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Event;
import com.google.gwt.widgetideas.table.client.overrides.OverrideDOM;

import java.util.HashMap;

/**
 * A variation of the
 * {@link com.google.gwt.widgetideas.table.client.overrides.Grid} that resizes
 * columns using a fixed table width.
 */
public class FixedWidthGrid extends SelectionGrid implements
    HasFixedColumnWidth, HasAutoFitColumn {
  /**
   * This class contains methods used to format a table's cells.
   */
  public class FixedWidthGridCellFormatter extends CellFormatter {
    public void setWidth(int row, int column, String width) {
      throw new UnsupportedOperationException("setWidth is not supported.  "
          + "Use FixedWidthGrid.setColumnWidth(int, int) instead.");
    }

    protected Element getRawElement(int row, int column) {
      return super.getRawElement(row + 1, column);
    }
  }

  /**
   * This class contains methods used to format a table's columns. It is limited
   * by the support cross-browser HTML support for column formatting.
   */
  public class FixedWidthGridColumnFormatter extends ColumnFormatter {
    public void setWidth(int column, String width) {
      throw new UnsupportedOperationException("setWidth is not supported.  "
          + "Use FixedWidthdGrid.setColumnWidth(int, int) instead.");
    }
  }

  /**
   * This class contains methods used to format a table's rows.
   */
  public class FixedWidthGridRowFormatter extends SelectedGridRowFormatter {
    protected Element getRawElement(int row) {
      return super.getRawElement(row + 1);
    }
  }

  /**
   * An implementation used to accommodate differences in column width
   * implementations between browsers.
   */
  private static class FixedWidthGridImpl {
    /**
     * Native method to add rows into a table with a given number of columns.
     * 
     * @param table the table element
     * @param rows number of rows to add
     * @param columns the number of columns per row
     */
    public native void addRows(Element table, int rows, int columns) /*-{
         var span = $doc.createElement("span");
         span.style["padding"] = "0px";
         span.innerHTML = "&nbsp;";
         var td = $doc.createElement("td");
         td.style["overflow"] = "hidden";
         td.appendChild(span);

         var row = $doc.createElement("tr");
         for(var cellNum = 0; cellNum < columns; cellNum++) {
           var cell = td.cloneNode(true);
           row.appendChild(cell);
         }
         table.appendChild(row);
         for(var rowNum = 1; rowNum < rows; rowNum++) {  
           table.appendChild(row.cloneNode(true));
         }
       }-*/;

    /**
     * Create the ghost row.
     * 
     * @return the ghost row element
     */
    public Element createGhostRow() {
      Element ghostRow = DOM.createTR();
      DOM.setStyleAttribute(ghostRow, "margin", "0px");
      DOM.setStyleAttribute(ghostRow, "padding", "0px");
      DOM.setStyleAttribute(ghostRow, "height", "0px");
      DOM.setStyleAttribute(ghostRow, "overflow", "hidden");
      return ghostRow;
    }
    
    /**
     * Set the width of a column.
     * 
     * @param grid the grid to resize
     * @param column the index of the column
     * @param width the width in pixels
     * @throws IndexOutOfBoundsException
     */
    public void setColumnWidth(FixedWidthGrid grid, int column, int width) {
      DOM.setStyleAttribute(grid.getGhostCellElement(column), "width", width
          + "px");
    }
  }

  /**
   * IE6 version of the implementation. IE6 sets the overall column width
   * instead of the innerWidth, so we need to add the padding and spacing.
   */
  private static class FixedWidthGridImplIE6 extends FixedWidthGridImpl {
    public Element createGhostRow() {
      Element ghostRow = super.createGhostRow();
      DOM.setStyleAttribute(ghostRow, "display", "none");
      return ghostRow;
    }
    
    public void setColumnWidth(FixedWidthGrid grid, int column, int width) {
      width += 2 * grid.getCellPadding() + grid.getCellSpacing();
      super.setColumnWidth(grid, column, width);
    }
  }

  /**
   * Opera version of the implementation refreshes the table display so the new
   * column size takes effect. Without the display refresh, the column width
   * doesn't update in the browser.
   */
  private static class FixedWidthGridImplOpera extends FixedWidthGridImpl {
    public void setColumnWidth(FixedWidthGrid grid, int column, int width) {
      super.setColumnWidth(grid, column, width);
      Element tableElem = grid.getElement();
      Element parentElem = DOM.getParent(tableElem);
      int scrollLeft = 0;
      if (parentElem != null) {
        scrollLeft = DOM.getElementPropertyInt(parentElem, "scrollLeft");
      }
      DOM.setStyleAttribute(tableElem, "display", "none");
      DOM.setStyleAttribute(tableElem, "display", "");
      if (parentElem != null) {
        DOM.setElementPropertyInt(parentElem, "scrollLeft", scrollLeft);
      }
    }
  }

  /**
   * Safari version of the implementation. Safari sets the overall column width
   * instead of the innerWidth, so we need to add the padding and spacing.
   */
  private static class FixedWidthGridImplSafari extends FixedWidthGridImpl {
    public void setColumnWidth(FixedWidthGrid grid, int column, int width) {
      width += 2 * grid.getCellPadding() + grid.getCellSpacing();
      super.setColumnWidth(grid, column, width);
    }
  }

  /**
   * The default width of a column in pixels.
   */
  public static final int DEFAULT_COLUMN_WIDTH = 80;

  /**
   * The minimum width of any column.
   */
  public static final int MIN_COLUMN_WIDTH = 1;

  /**
   * The implementation class.
   */
  private static FixedWidthGridImpl impl =
      (FixedWidthGridImpl) GWT.create(FixedWidthGridImpl.class);

  /**
   * A mapping of column indexes to their widths in pixels.
   */
  private HashMap/* <Integer, Integer> */colWidths = new HashMap();

  /**
   * The hidden, ghost row used for sizing the columns.
   */
  private Element ghostRow = null;

  /**
   * Constructor.
   */
  public FixedWidthGrid() {
    super();
    setClearText("&nbsp;");

    // Setup the table element
    Element tableElem = getElement();
    DOM.setStyleAttribute(tableElem, "tableLayout", "fixed");
    DOM.setStyleAttribute(tableElem, "width", "0px");

    // Replace the formatters
    setRowFormatter(new FixedWidthGridRowFormatter());
    setCellFormatter(new FixedWidthGridCellFormatter());
    setColumnFormatter(new FixedWidthGridColumnFormatter());

    // Create the ghost row for sizing
    ghostRow = impl.createGhostRow();
    DOM.insertChild(getBodyElement(), ghostRow, 0);

    // Sink hover and selection events
    sinkEvents(Event.ONMOUSEOVER | Event.ONMOUSEDOWN | Event.ONCLICK);
  }

  /**
   * Stretches or shrinks the column to automatically fit its data content.
   * 
   * @param column the column to fit
   * @return the new column width
   * @throws IndexOutOfBoundsException
   */
  public int autoFitColumnWidth(int column) {
    int newWidth = getAutoFitColumnWidth(column);
    setColumnWidth(column, newWidth);
    return newWidth;
  }

  /**
   * Calculate the minimum required width to fit the contents of the column, but
   * do not actually change the column size.
   * 
   * @param column the column to fit
   * @return the minimum column width
   * @throws IndexOutOfBoundsException
   */
  public int getAutoFitColumnWidth(int column) {
    // Ensure that the indices are not negative.
    super.prepareColumn(column);

    // Calculate difference between current width and desired width
    int columnWidth = getColumnWidth(column);
    int widthOffset = -1 * columnWidth;
    int contentVisibleWidth = 0;
    FixedWidthGridCellFormatter formatter = getFixedWidthGridCellFormatter();
    for (int row = 0; row < numRows; row++) {
      Element td = formatter.getRawElement(row, column);

      // Get the visible width for all cells in the column
      if (row == 0) {
        int clientWidth = DOM.getElementPropertyInt(td, "clientWidth");
        int offsetWidth = DOM.getElementPropertyInt(td, "offsetWidth");
        contentVisibleWidth = clientWidth - 2 * getCellPadding();
      }

      // Calculate hidden area for this cell
      widthOffset =
          Math.max(widthOffset, DOM.getElementPropertyInt(getCellContainer(td),
              "offsetWidth")
              - contentVisibleWidth);

      // Scroll back if needed
      DOM.setElementPropertyInt(DOM.getFirstChild(td), "scrollLeft", 0);
    }

    // Set the new width
    int newWidth = columnWidth + widthOffset;
    newWidth = Math.max(newWidth, MIN_COLUMN_WIDTH);
    return newWidth;
  }

  /**
   * Return the column width for a given column index. If a width has not been
   * assigned, the default width is returned.
   * 
   * @param column the column index
   * @return the column width in pixels
   */
  public int getColumnWidth(int column) {
    Object colWidth = colWidths.get(new Integer(column));
    if (colWidth == null) {
      return getDefaultColumnWidth();
    } else {
      return ((Integer) colWidth).intValue();
    }
  }

  public int getDefaultColumnWidth() {
    return DEFAULT_COLUMN_WIDTH;
  }

  /**
   * Inserts a new row into the table.
   * 
   * @param beforeRow the index before which the new row will be inserted
   * @return the index of the newly-created row
   * @throws IndexOutOfBoundsException
   */
  public int insertRow(int beforeRow) {
    // Deselect all rows
    deselectRows();

    // Specifically allow the row count as an insert position.
    if (beforeRow != getRowCount()) {
      checkRowBounds(beforeRow);
    }
    Element tr = DOM.createTR();
    DOM.insertChild(getBodyElement(), tr, beforeRow + 1);
    numRows++;

    // Add cells to the row
    for (int column = 0; column < numColumns; column++) {
      insertCell(beforeRow, column);
    }
    return beforeRow;
  }

  /**
   * Removes the specified row from the table.
   * 
   * @param row the index of the row to be removed
   * @throws IndexOutOfBoundsException
   */
  public void removeRow(int row) {
    super.removeRow(row);
  }

  /**
   * Resizes the grid to the specified number of columns.
   * 
   * @param columns the number of columns
   * @throws IndexOutOfBoundsException
   */
  public void resizeColumns(int columns) {
    super.resizeColumns(columns);
    updateGhostRow();
  }

  /**
   * Resizes the grid to the specified number of rows.
   * 
   * @param rows the number of rows
   * @throws IndexOutOfBoundsException
   */
  public void resizeRows(int rows) {
    int curNumRows = numRows;
    if (numRows == rows) {
      return;
    }
    if (rows < 0) {
      throw new IndexOutOfBoundsException("Cannot set number of rows to "
          + rows);
    }
    if (numRows < rows) {
      impl.addRows(getBodyElement(), rows - numRows, numColumns);
      numRows = rows;
    } else {
      while (numRows > rows) {
        // Fewer rows. Remove extraneous ones.
        removeRow(numRows - 1);
      }
    }
  }

  /**
   * Set the width of a column.
   * 
   * @param column the index of the column
   * @param width the width in pixels
   * @throws IndexOutOfBoundsException
   */
  public void setColumnWidth(int column, int width) {
    // Ensure that the indices are not negative.
    if (column < 0) {
      throw new IndexOutOfBoundsException(
          "Cannot access a column with a negative index: " + column);
    }

    width = Math.max(MIN_COLUMN_WIDTH, width);

    colWidths.put(new Integer(column), new Integer(width));

    // Update the cell width if possible
    if (column >= numColumns) {
      return;
    }

    // Set the actual column width
    impl.setColumnWidth(this, column, width);
  }

  /**
   * Get the container element from a cell. The container element is a span
   * inside of the cell that actually holds the content.
   * 
   * @param td the cell element
   * @return the container element
   */
  protected Element getCellContainer(Element td) {
    return DOM.getFirstChild(td);
  }

  /**
   * Directly ask the underlying DOM what the cell count on the given row is.
   * 
   * @param row the row
   * @return number of columns in the row
   */
  protected int getDOMCellCount(int row) {
    return super.getDOMCellCount(row + 1);
  }

  /**
   * Directly ask the underlying DOM what the row count is.
   * 
   * @return Returns the number of rows in the table
   */
  protected int getDOMRowCount() {
    return super.getDOMRowCount() - 1;
  }

  /**
   * Explicitly gets the {@link FixedWidthGridCellFormatter}. The results of
   * {@link com.google.gwt.user.client.ui.HTMLTable#getCellFormatter()} may also
   * be downcast to a {@link FixedWidthGridCellFormatter}.
   * 
   * @return the {@link FixedWidthGrid}'s cell formatter
   */
  protected FixedWidthGridCellFormatter getFixedWidthGridCellFormatter() {
    return (FixedWidthGridCellFormatter) getCellFormatter();
  }

  /**
   * Explicitly gets the {@link FixedWidthGridRowFormatter}. The results of
   * {@link com.google.gwt.user.client.ui.HTMLTable#getCellFormatter()} may also
   * be downcast to a {@link FixedWidthGridRowFormatter}.
   * 
   * @return the {@link FixedWidthGrid}'s cell formatter
   */
  protected FixedWidthGridRowFormatter getFixedWidthGridRowFormatter() {
    return (FixedWidthGridRowFormatter) getRowFormatter();
  }

  /**
   * Returns the current number of ghost columns in existence.
   * 
   * @return the number of ghost columns
   */
  protected int getGhostColumnCount() {
    return super.getDOMCellCount(0);
  }

  protected Element getGhostRow() {
    return ghostRow;
  }

  /**
   * Get the index of a row given the row element.
   */
  protected int getRowIndex(Element rowElem) {
    return OverrideDOM.getRowIndex(rowElem) - 1;
  }

  /**
   * Inserts a new cell into the specified row.
   * 
   * @param row the row into which the new cell will be inserted
   * @param column the column before which the cell will be inserted
   * @return the new element
   * @throws IndexOutOfBoundsException
   */
  protected Element insertCell(int row, int column) {
    Element tr = getRowFormatter().getElement(row);
    Element td = createCell();
    appendCellContainer(td);
    DOM.insertChild(tr, td, column);
    return td;
  }

  /**
   * Checks that a cell is a valid cell in the table.
   * 
   * @param row the cell's row
   * @param column the cell's column
   * @throws IndexOutOfBoundsException
   */
  protected void prepareCell(int row, int column) {
    prepareColumn(column);
    super.prepareCell(row, column);
  }

  /**
   * Checks that the column index is valid. {@link FixedWidthGrid} lazily
   * creates columns as needed.
   * 
   * @param column The column index to be checked
   * @throws IndexOutOfBoundsException if the column is negative
   */
  protected void prepareColumn(int column) {
    // Ensure that the indices are not negative.
    if (column < 0) {
      throw new IndexOutOfBoundsException(
          "Cannot access a column with a negative index: " + column);
    }

    // FixedWidthGrid lazily creates cells
    if (column >= numColumns) {
      resizeColumns(column + 1);
    }
  }

  /**
   * Checks that the row index is valid. {@link FixedWidthGrid} lazily creates
   * rows as needed.
   * 
   * @param row The row index to be checked
   * @throws IndexOutOfBoundsException if the row is negative
   */
  protected void prepareRow(int row) {
    // Ensure that the indices are not negative.
    if (row < 0) {
      throw new IndexOutOfBoundsException(
          "Cannot access a row with a negative index: " + row);
    }

    // Lazily creates cells
    if (row >= numRows) {
      resizeRows(row + 1);
    }
  }

  /**
   * Sets the ghost row variable. This does not change the underlying structure
   * of the table.
   * 
   * @param ghostRow the new ghost row
   */
  protected void setGhostRow(Element ghostRow) {
    this.ghostRow = ghostRow;
  }

  /**
   * Add or remove ghost cells when the table size changes.
   */
  protected void updateGhostRow() {
    int numGhosts = getGhostColumnCount();
    if (numColumns > numGhosts) {
      // Add ghosts as needed
      for (int i = numGhosts; i < numColumns; i++) {
        Element td = OverrideDOM.createTD();
        DOM.setStyleAttribute(td, "height", "0px");
        DOM.setStyleAttribute(td, "overflow", "hidden");
        DOM.setStyleAttribute(td, "paddingTop", "0px");
        DOM.setStyleAttribute(td, "paddingBottom", "0px");
        DOM.setStyleAttribute(td, "borderTop", "0px");
        DOM.setStyleAttribute(td, "borderBottom", "0px");
        DOM.setStyleAttribute(td, "margin", "0px");
        DOM.appendChild(ghostRow, td);
        setColumnWidth(i, getColumnWidth(i));
      }
    } else if (numColumns < numGhosts) {
      int cellsToRemove = numGhosts - numColumns;
      for (int i = 0; i < cellsToRemove; i++) {
        Element td = getGhostCellElement(numColumns);
        DOM.removeChild(ghostRow, td);
      }
    }
  }

  /**
   * Appends a div and span container to a cell. All cell content is actually
   * added to the container, which allows for forceful control of the width of a
   * column.
   * 
   * @param td the td element
   */
  private void appendCellContainer(Element td) {
    // Set the enforced cell style
    DOM.setInnerHTML(td, "");
    DOM.setStyleAttribute(td, "overflow", "hidden");

    // Add a tight span to hold the contents
    Element span = DOM.createSpan();
    DOM.setStyleAttribute(span, "padding", "0px");
    DOM.setInnerHTML(span, "&nbsp;");
    DOM.appendChild(td, span);
  }

  /**
   * Returns a cell in the ghost row.
   * 
   * @param column the cell's column
   * @return the ghost cell
   */
  private Element getGhostCellElement(int column) {
    return DOM.getChild(ghostRow, column);
  }
}
