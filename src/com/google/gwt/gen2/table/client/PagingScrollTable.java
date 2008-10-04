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
import com.google.gwt.gen2.event.shared.HandlerRegistration;
import com.google.gwt.gen2.table.client.CellEditor.CellEditInfo;
import com.google.gwt.gen2.table.client.SortableGrid.ColumnSorter;
import com.google.gwt.gen2.table.client.SortableGrid.ColumnSorterCallback;
import com.google.gwt.gen2.table.client.TableDefinition.TableCellView;
import com.google.gwt.gen2.table.client.TableModel.Callback;
import com.google.gwt.gen2.table.client.TableModelHelper.ColumnSortList;
import com.google.gwt.gen2.table.client.TableModelHelper.Request;
import com.google.gwt.gen2.table.client.TableModelHelper.Response;
import com.google.gwt.gen2.table.event.client.HasPageChangeHandlers;
import com.google.gwt.gen2.table.event.client.HasPageCountChangeHandlers;
import com.google.gwt.gen2.table.event.client.HasPageLoadHandlers;
import com.google.gwt.gen2.table.event.client.HasPagingFailureHandlers;
import com.google.gwt.gen2.table.event.client.HasRowInsertionHandlers;
import com.google.gwt.gen2.table.event.client.HasRowRemovalHandlers;
import com.google.gwt.gen2.table.event.client.HasRowValueChangeHandlers;
import com.google.gwt.gen2.table.event.client.PageChangeEvent;
import com.google.gwt.gen2.table.event.client.PageChangeHandler;
import com.google.gwt.gen2.table.event.client.PageCountChangeEvent;
import com.google.gwt.gen2.table.event.client.PageCountChangeHandler;
import com.google.gwt.gen2.table.event.client.PageLoadEvent;
import com.google.gwt.gen2.table.event.client.PageLoadHandler;
import com.google.gwt.gen2.table.event.client.PagingFailureEvent;
import com.google.gwt.gen2.table.event.client.PagingFailureHandler;
import com.google.gwt.gen2.table.event.client.RowCountChangeEvent;
import com.google.gwt.gen2.table.event.client.RowCountChangeHandler;
import com.google.gwt.gen2.table.event.client.RowInsertionEvent;
import com.google.gwt.gen2.table.event.client.RowInsertionHandler;
import com.google.gwt.gen2.table.event.client.RowRemovalEvent;
import com.google.gwt.gen2.table.event.client.RowRemovalHandler;
import com.google.gwt.gen2.table.event.client.RowValueChangeEvent;
import com.google.gwt.gen2.table.event.client.RowValueChangeHandler;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.SourcesTableEvents;
import com.google.gwt.user.client.ui.TableListener;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant;
import com.google.gwt.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

/**
 * A {@link ScrollTable} that acts as a view for an underlying
 * {@link MutableTableModel}.
 * 
 * @param <RowType> the data type of the row values
 */
public class PagingScrollTable<RowType> extends ScrollTable implements
    HasPageCountChangeHandlers, HasPageLoadHandlers, HasPageChangeHandlers,
    HasPagingFailureHandlers {
  /**
   * An iterator over the visible rows in an iterator over many rows.
   */
  private class VisibleRowsIterator implements Iterator<RowType> {
    /**
     * The iterator of row data.
     */
    private Iterator<RowType> rows;

    /**
     * The current row of the rows iterator.
     */
    private int curRow;

    /**
     * The last visible row in the grid.
     */
    private int lastVisibleRow;

    /**
     * Constructor.
     * 
     * @param rows the iterator over row data
     * @param firstRow the first absolute row of the rows iterator
     * @param firstVisibleRow the first visible row in this grid
     * @param lastVisibleRow the last visible row in this grid
     */
    public VisibleRowsIterator(Iterator<RowType> rows, int firstRow,
        int firstVisibleRow, int lastVisibleRow) {
      this.curRow = firstRow;
      this.lastVisibleRow = lastVisibleRow;

      // Iterate up to the first row
      while (curRow < firstVisibleRow && rows.hasNext()) {
        rows.next();
        curRow++;
      }
      this.rows = rows;
    }

    public boolean hasNext() {
      return (curRow <= lastVisibleRow && rows.hasNext());
    }

    public RowType next() {
      // Check that the next row exists
      if (!hasNext()) {
        throw new NoSuchElementException();
      }
      return rows.next();
    }

    public void remove() {
      throw new UnsupportedOperationException("Remove not supported");
    }
  }

  /**
   * The bulk render used to render the contents of this table.
   */
  private FixedWidthGridBulkRenderer<RowType> bulkRenderer = null;

  /**
   * The callback used with cell editors.
   */
  private CellEditor.Callback cellEditorCallback = null;

  /**
   * The wrapper around the empty table widget.
   */
  private SimplePanel emptyTableWidgetWrapper = new SimplePanel();

  /**
   * The definition of the columns in the table.
   */
  private TableDefinition<RowType> tableDefinition = null;

  /**
   * The view of this table.
   */
  private TableCellView<RowType> tableCellView = new TableCellView<RowType>() {

    @Override
    public void setHorizontalAlignment(HorizontalAlignmentConstant align) {
      PagingScrollTable.this.getDataTable().getCellFormatter().setHorizontalAlignment(
          getRowIndex(), getCellIndex(), align);
    }

    @Override
    public void setHTML(String html) {
      PagingScrollTable.this.getDataTable().setHTML(getRowIndex(),
          getCellIndex(), html);
    }

    @Override
    public void setStyleAttribute(String attr, String value) {
      PagingScrollTable.this.getDataTable().getFixedWidthGridCellFormatter().getRawElement(
          getRowIndex(), getCellIndex()).getStyle().setProperty(attr, value);
    }

    @Override
    public void setStyleName(String stylename) {
      PagingScrollTable.this.getDataTable().getCellFormatter().setStyleName(
          getRowIndex(), getCellIndex(), stylename);
    }

    @Override
    public void setText(String text) {
      PagingScrollTable.this.getDataTable().setText(getRowIndex(),
          getCellIndex(), text);
    }

    @Override
    public void setVerticalAlignment(VerticalAlignmentConstant align) {
      PagingScrollTable.this.getDataTable().getCellFormatter().setVerticalAlignment(
          getRowIndex(), getCellIndex(), align);
    }

    @Override
    public void setWidget(Widget widget) {
      PagingScrollTable.this.getDataTable().setWidget(getRowIndex(),
          getCellIndex(), widget);
    }
  };

  /**
   * The current visible page.
   */
  private int currentPage = -1;

  /**
   * The old page count, used to detect when the number of pages changes.
   */
  private int oldPageCount;

  /**
   * The number of rows per page. If the number of rows per page is equal to the
   * number of rows, paging is disabled because only one page exists.
   */
  private int pageSize = 0;

  /**
   * The callback that handles page requests.
   */
  private Callback<RowType> pagingCallback = new Callback<RowType>() {
    public void onFailure(Throwable caught) {
      fireEvent(new PagingFailureEvent(caught));
    }

    public void onRowsReady(Request request, Response<RowType> response) {
      setData(request.getStartRow(), response.getRowValues());
    }
  };

  /**
   * The values associated with each row. This is an optional list of data that
   * ties the visible content in each row to an underlying object.
   */
  private List<RowType> rowValues = null;

  /**
   * The underlying table model.
   */
  private TableModel<RowType> tableModel;

  /**
   * The {@link RendererCallback} used when table rendering completes.
   */
  private RendererCallback tableRendererCallback = new RendererCallback() {
    public void onRendered() {
      fireEvent(new PageLoadEvent(currentPage));
    }
  };

  /**
   * Construct a new {@link PagingScrollTable}.
   * 
   * @param tableModel the underlying table model
   * @param dataTable the table used to display data
   * @param headerTable the header table
   * @param tableDefinition the column definitions
   */
  public PagingScrollTable(TableModel<RowType> tableModel,
      FixedWidthGrid dataTable, FixedWidthFlexTable headerTable,
      TableDefinition<RowType> tableDefinition) {
    this(tableModel, dataTable, headerTable, tableDefinition,
        GWT.<ScrollTableImages> create(ScrollTableImages.class));
  }

  /**
   * Construct a new {@link PagingScrollTable} with custom images.
   * 
   * @param tableModel the underlying table model
   * @param dataTable the table used to display data
   * @param headerTable the header table
   * @param tableDefinition the column definitions
   * @param images the images to use in the table
   */
  public PagingScrollTable(TableModel<RowType> tableModel,
      FixedWidthGrid dataTable, FixedWidthFlexTable headerTable,
      TableDefinition<RowType> tableDefinition, ScrollTableImages images) {
    super(dataTable, headerTable, images);
    this.tableModel = tableModel;
    insert(emptyTableWidgetWrapper, getElement(), 2, true);
    setTableDefinition(tableDefinition);
    oldPageCount = getPageCount();

    // Listen to table model events
    tableModel.addRowCountChangeHandler(new RowCountChangeHandler() {
      public void onRowCountChange(RowCountChangeEvent event) {
        int pageCount = getPageCount();
        if (pageCount != oldPageCount) {
          fireEvent(new PageCountChangeEvent(oldPageCount, pageCount));
          oldPageCount = pageCount;
        }
      }
    });
    if (tableModel instanceof HasRowInsertionHandlers) {
      ((HasRowInsertionHandlers) tableModel).addRowInsertionHandler(new RowInsertionHandler() {
        public void onRowInsertion(RowInsertionEvent event) {
          insertAbsoluteRow(event.getRowIndex());
        }
      });
    }
    if (tableModel instanceof HasRowRemovalHandlers) {
      ((HasRowRemovalHandlers) tableModel).addRowRemovalHandler(new RowRemovalHandler() {
        public void onRowRemoval(RowRemovalEvent event) {
          removeAbsoluteRow(event.getRowIndex());
        }
      });
    }
    if (tableModel instanceof HasRowValueChangeHandlers) {
      ((HasRowValueChangeHandlers<RowType>) tableModel).addRowValueChangeHandler(new RowValueChangeHandler<RowType>() {
        public void onRowValueChange(RowValueChangeEvent<RowType> event) {
          setRowValue(event.getRowIndex(), event.getRowValue());
        }
      });
    }

    // Listen for cell click events
    dataTable.addTableListener(new TableListener() {
      public void onCellClicked(SourcesTableEvents sender, int row, int cell) {
        editCell(row, cell);
      }
    });

    // Override the column sorter
    if (dataTable.getColumnSorter() == null) {
      ColumnSorter sorter = new ColumnSorter() {
        @Override
        public void onSortColumn(SortableGrid grid, ColumnSortList sortList,
            ColumnSorterCallback callback) {
          reloadPage();
          callback.onSortingComplete();
        }
      };
      dataTable.setColumnSorter(sorter);
    }
  }

  public HandlerRegistration addPageChangeHandler(PageChangeHandler handler) {
    return addHandler(PageChangeEvent.KEY, handler);
  }

  public HandlerRegistration addPageCountChangeHandler(
      PageCountChangeHandler handler) {
    return addHandler(PageCountChangeEvent.KEY, handler);
  }

  public HandlerRegistration addPageLoadHandler(PageLoadHandler handler) {
    return addHandler(PageLoadEvent.KEY, handler);
  }

  public HandlerRegistration addPagingFailureHandler(
      PagingFailureHandler handler) {
    return addHandler(PagingFailureEvent.KEY, handler);
  }

  /**
   * @return the current page
   */
  public int getCurrentPage() {
    return currentPage;
  }

  /**
   * @return the widget displayed when the data table is empty
   */
  public Widget getEmptyTableWidget() {
    return emptyTableWidgetWrapper.getWidget();
  }

  /**
   * @return the number of pages, or -1 if not known
   */
  public int getPageCount() {
    if (pageSize < 1) {
      return 1;
    } else {
      int numDataRows = tableModel.getRowCount();
      if (numDataRows < 0) {
        return -1;
      }
      return (int) Math.ceil(numDataRows / (pageSize + 0.0));
    }
  }

  /**
   * @return the number of rows per page
   */
  public int getPageSize() {
    return pageSize;
  }

  /**
   * Get the value associated with a row.
   * 
   * @param row the row index
   * @return the value associated with the row
   */
  public RowType getRowValue(int row) {
    if (rowValues == null || rowValues.size() <= row) {
      return null;
    }
    return rowValues.get(row);
  }

  /**
   * @return the {@link TableDefinition} used to render cells.
   */
  public TableDefinition<RowType> getTableDefinition() {
    return tableDefinition;
  }

  /**
   * @return the table model
   */
  public TableModel<RowType> getTableModel() {
    return tableModel;
  }

  /**
   * Go to the first page.
   */
  public void gotoFirstPage() {
    gotoPage(0, false);
  }

  /**
   * Go to the last page. If the number of pages is not known, this method is
   * ignored.
   */
  public void gotoLastPage() {
    if (getPageCount() >= 0) {
      gotoPage(getPageCount(), false);
    }
  }

  /**
   * Go to the next page.
   */
  public void gotoNextPage() {
    gotoPage(currentPage + 1, false);
  }

  /**
   * Set the current page. If the page is out of bounds, it will be
   * automatically set to zero or the last page without throwing any errors.
   * 
   * @param page the page
   * @param forced reload the page even if it is already loaded
   */
  public void gotoPage(int page, boolean forced) {
    int oldPage = currentPage;
    int numPages = getPageCount();
    if (numPages >= 0) {
      currentPage = Math.max(0, Math.min(page, numPages - 1));
    } else {
      currentPage = page;
    }

    if (currentPage != oldPage || forced) {
      // Deselect rows when switching pages
      FixedWidthGrid dataTable = getDataTable();
      dataTable.deselectRows();

      // Fire listeners
      fireEvent(new PageChangeEvent(oldPage, currentPage));

      // Clear out existing data if we aren't bulk rendering
      if (bulkRenderer == null) {
        int rowCount = getLastRow() - getFirstRow() + 1;
        if (rowCount != dataTable.getRowCount()) {
          dataTable.resizeRows(rowCount);
        }
        dataTable.clearAll();
      }

      // Request the new data from the table model
      Request request = new Request(currentPage * pageSize, pageSize,
          dataTable.getColumnSortList());
      tableModel.requestRows(request, pagingCallback);
    }
  }

  /**
   * Go to the previous page.
   */
  public void gotoPreviousPage() {
    gotoPage(currentPage - 1, false);
  }

  /**
   * Reload the current page.
   */
  public void reloadPage() {
    if (currentPage >= 0) {
      gotoPage(currentPage, true);
    } else {
      gotoPage(0, true);
    }
  }

  /**
   * Set the {@link FixedWidthGridBulkRenderer} used to render the data table.
   * 
   * @param bulkRenderer the table renderer
   */
  public void setBulkRenderer(FixedWidthGridBulkRenderer<RowType> bulkRenderer) {
    this.bulkRenderer = bulkRenderer;
  }

  /**
   * Set the {@link Widget} that will be displayed in place of the data table
   * when the data table has no data to display.
   * 
   * @param emptyTableWidget the widget to display when the data table is empty
   */
  public void setEmptyTableWidget(Widget emptyTableWidget) {
    emptyTableWidgetWrapper.setWidget(emptyTableWidget);
  }

  /**
   * Set the number of rows per page.
   * 
   * By default, the page size is zero, which indicates that all rows should be
   * shown on the page.
   * 
   * @param pageSize the number of rows per page
   */
  public void setPageSize(int pageSize) {
    pageSize = Math.max(0, pageSize);
    this.pageSize = pageSize;

    int pageCount = getPageCount();
    if (pageCount != oldPageCount) {
      fireEvent(new PageCountChangeEvent(oldPageCount, pageCount));
      oldPageCount = pageCount;
    }

    // Reset the page
    if (currentPage >= 0) {
      gotoPage(currentPage, true);
    }
  }

  /**
   * Associate a row in the table with a value.
   * 
   * @param row the row index
   * @param value the value to associate
   */
  public void setRowValue(int row, RowType value) {
    // Make sure the list can fit the row
    if (rowValues == null) {
      rowValues = new ArrayList<RowType>(row + 1);
    }
    for (int i = rowValues.size(); i <= row; i++) {
      rowValues.add(null);
    }

    // Set the row value
    rowValues.set(row, value);

    // Render the new row value
    refreshRow(row);
  }

  /**
   * Set the {@link TableDefinition} used to define the columns.
   * 
   * @param tableDefinition the new table definition.
   */
  public void setTableDefinition(TableDefinition<RowType> tableDefinition) {
    assert tableDefinition != null : "tableDefinition cannot be null";
    this.tableDefinition = tableDefinition;
  }

  /**
   * Invoke the cell editor on a cell, if one is set. If a cell editor is not
   * specified, this method has no effect.
   */
  protected void editCell(int row, int column) {
    ColumnDefinition<RowType, ?> colDef = tableDefinition.getVisibleColumnDefinitions().get(
        column);
    CellEditInfo editInfo = new CellEditInfo(getDataTable(), row, column);
    colDef.editCell(editInfo, getRowValue(row), getCellEditorCallback());
  }

  /**
   * @return the cell editor callback
   */
  protected CellEditor.Callback getCellEditorCallback() {
    if (cellEditorCallback == null) {
      cellEditorCallback = new CellEditor.Callback() {
        public void onCancel(CellEditInfo cellEditInfo) {
        }

        public void onComplete(CellEditInfo cellEditInfo, Object cellValue) {
          refreshRow(cellEditInfo.getRowIndex());
        }
      };
    }
    return cellEditorCallback;
  }

  /**
   * @return the index of the first visible row
   */
  protected int getFirstRow() {
    return currentPage * pageSize;
  }

  /**
   * @return the index of the last visible row
   */
  protected int getLastRow() {
    if (tableModel.getRowCount() < 0) {
      return (currentPage + 1) * pageSize - 1;
    }
    return Math.min(tableModel.getRowCount(), (currentPage + 1) * pageSize) - 1;
  }

  /**
   * Insert a row into the table relative to the total number of rows.
   * 
   * @param beforeRow the row index
   */
  protected void insertAbsoluteRow(int beforeRow) {
    // Physically insert the row
    int lastRow = getLastRow() + 1;
    if (beforeRow <= lastRow) {
      int firstRow = getFirstRow();
      if (beforeRow >= firstRow) {
        // Insert row in the middle of the page
        getDataTable().insertRow(beforeRow - firstRow);
      } else {
        // Insert zero row because row is before this page
        getDataTable().insertRow(0);
      }
      if (getDataTable().getRowCount() > pageSize) {
        getDataTable().removeRow(pageSize);
      }
    }
  }

  @Override
  protected void onLoad() {
    super.onLoad();

    // If we have not loaded any pages, load one now
    if (currentPage < 0) {
      gotoPage(0, true);
    }
  }

  /**
   * Remove a row from the table relative to the total number of rows.
   * 
   * @param row the row index
   */
  protected void removeAbsoluteRow(int row) {
    // Physically remove the row
    int lastRow = getLastRow();
    if (row <= lastRow) {
      int firstRow = getFirstRow();
      if (row >= firstRow) {
        // Remove a row in the middle of the page
        getDataTable().removeRow(row - firstRow);
      } else {
        // Remove first row because row is before this page
        getDataTable().removeRow(0);
      }
      getDataTable().insertRow(pageSize - 1);
    }
  }

  /**
   * Set a block of data. This method is used when responding to data requests.
   * 
   * This method takes an iterator of iterators, where each iterator represents
   * one row of data starting with the first row.
   * 
   * @param firstRow the row index that the rows iterator starts with
   * @param rows the values associated with each row
   */
  protected void setData(int firstRow, Iterator<RowType> rows) {
    rowValues = new ArrayList<RowType>();
    if (rows != null && rows.hasNext()) {
      setEmptyTableWidgetVisible(false);

      // Get an iterator over the visible rows
      int firstVisibleRow = getFirstRow();
      int lastVisibleRow = getLastRow();
      Iterator<RowType> visibleIter = new VisibleRowsIterator(rows, firstRow,
          firstVisibleRow, lastVisibleRow);

      // Set the row values
      while (visibleIter.hasNext()) {
        rowValues.add(visibleIter.next());
      }

      if (bulkRenderer != null) {
        bulkRenderer.renderRows(rowValues.iterator(), tableRendererCallback);
        return;
      }

      // Get rid of unneeded rows and columns
      int rowCount = rowValues.size();
      int colCount = tableDefinition.getVisibleColumnDefinitions().size();
      getDataTable().resize(rowCount, colCount);

      // Render the rows
      tableDefinition.renderRows(0, rowValues.iterator(), tableCellView);
    } else {
      setEmptyTableWidgetVisible(true);
    }

    // Fire page loaded event
    tableRendererCallback.onRendered();
  }

  /**
   * Refresh a single row in the table.
   * 
   * @param rowIndex the index of the row
   */
  private void refreshRow(int rowIndex) {
    final RowType rowValue = getRowValue(rowIndex);
    Iterator<RowType> singleIterator = new Iterator<RowType>() {
      private boolean nextCalled = false;
      
      public boolean hasNext() {
        return !nextCalled;
      }

      public RowType next() {
        if (!hasNext()) {
          throw new NoSuchElementException();
        }
        nextCalled = true;
        return rowValue;
      }

      public void remove() {
        throw new UnsupportedOperationException();
      }
    };
    tableDefinition.renderRows(rowIndex, singleIterator, tableCellView);
  }

  /**
   * Set whether or not the empty table widget is visible.
   * 
   * @param visible true to show the empty table widget
   */
  private void setEmptyTableWidgetVisible(boolean visible) {
    emptyTableWidgetWrapper.setVisible(visible);
    if (visible) {
      getDataWrapper().getStyle().setProperty("display", "none");
    } else {
      getDataWrapper().getStyle().setProperty("display", "");
    }
  }
}
