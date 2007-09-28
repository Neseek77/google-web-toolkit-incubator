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

import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DeferredCommand;

import java.util.ArrayList;
import java.util.Iterator;

/**
 * A ModeledGrid can respond to events from an underlying data model.
 */
public class GridView extends ExtendedGrid {
  /**
   * The renderer used to set cell contents.
   */
  public abstract static class CellRenderer {
    /**
     * Render the contents of a cell.
     * 
     * @param grid the grid to render the contents in
     * @param row the row index
     * @param column the column index
     * @param data the data to render
     */
    public abstract void renderCell(ExtendedGrid grid, int row, int column,
        Object data);
  }

  /**
   * The cell rendering object.
   */
  private CellRenderer cellRenderer = null;

  /**
   * The current visible page.
   */
  private int currentPage = 0;

  /**
   * The gridModel that affects this ModeledGrid.
   */
  private TableController gridModel;

  /**
   * The listener that handles events from the grid model.
   */
  private TableControllerListener gridModelListener = new TableControllerListener() {
    /**
     * Fired when the number of rows changes.
     * 
     * @param numRows the new number of rows
     */
    public void onNumRowsChanged(int numRows) {
      // Fire listeners
      if (modeledGridListeners != null) {
        // for (ModeledGridListener listener : modeledGridListeners) {
        Iterator it = modeledGridListeners.iterator();
        while (it.hasNext()) {
          GridViewListener listener = (GridViewListener) it.next();
          listener.onNumRowsChanges(numRows, getNumPages());
        }
      }

      // Make sure we are still on a valid page
      resetPage(false);
    }

    /**
     * Fired when a row is inserted.
     * 
     * @param beforeRow the row index
     */
    public void onRowInserted(int beforeRow) {
      int lastRow = getLastRow();
      if (beforeRow <= lastRow) {
        int firstRow = getFirstRow();
        if (beforeRow >= firstRow) {
          // Insert specified row into current page
          insertRow(beforeRow - firstRow);
        } else {
          // Shift rows down
          insertRow(0);
        }

        // Remove rows past page size
        if (numRows > pageSize) {
          removeRow(pageSize);
        }
      }

      // Update listeners
      onNumRowsChanged(gridModel.getNumRows());
    }

    /**
     * Fired when a row is removed.
     * 
     * @param row the row index
     */
    public void onRowRemoved(int row) {
      int lastRow = getLastRow();
      if (row <= lastRow) {
        int firstRow = getFirstRow();
        if (row >= firstRow) {
          // Remove the actual row
          removeRow(row - firstRow);
        } else {
          // Shift rows up
          removeRow(0);
        }
        
        // Readd row that was removed
        insertRow(pageSize - 1);
      }

      // Update listeners
      onNumRowsChanged(gridModel.getNumRows());
    }

    /**
     * Fired when the data in a given cell changes.
     * 
     * @param row the row index
     * @param column the column index
     * @param data the data to set
     */
    public void onSetData(int row, int column, Object data) {
      int firstRow = getFirstRow();
      if ((row >= firstRow) && (row <= getLastRow())) {
        renderCell(row - firstRow, column, data);
      }
    }

    /**
     * Fired when a block of data changes. This method takes an iterator of
     * Collections, where each collection represents one row of data starting
     * with the first row.
     * 
     * @param firstRow the row index
     * @param rows the 2D iterator of data
     */
    public void onSetData(int firstRow, Iterator/* Iterator<Object> */rows) {
      // Set the HTML data
      if (rows != null) {
        int firstVisibleRow = getFirstRow();
        int lastVisibleRow = getLastRow();
        while (rows.hasNext()) {
          Iterator columnIt = (Iterator) rows.next();
          if ((firstRow >= firstVisibleRow) && (firstRow <= lastVisibleRow)) {
            int curColumn = 0;
            while (columnIt.hasNext()) {
              renderCell(firstRow - firstVisibleRow, curColumn, columnIt.next());
              curColumn++;
            }
          }
  
          // Go to next row
          firstRow++;
        }
      }

      // Fire listeners
      if (modeledGridListeners != null) {
        Iterator it = modeledGridListeners.iterator();
        while (it.hasNext()) {
          GridViewListener listener = (GridViewListener) it.next();
          listener.onPageLoaded();
        }
      }
    }
  };

  /**
   * The listeners attached to this widget.
   */
  private ArrayList/* <ModeledGridListener> */modeledGridListeners;

  /**
   * The number of rows per page. If the number of rows per page is equal to the
   * number of rows, paging is disabled because only one page exists.
   */
  private int pageSize = 0;
 
  /**
   * Constructor.
   * 
   * @param gridModel the underlying grid model
   */
  public GridView(TableController gridModel) {
    this.gridModel = gridModel;
    gridModel.addGridModelListener(gridModelListener);
  }

  /**
   * Constructor.
   * 
   * @param oracle the {@link MutableTableModel} used to retrieve data
   */
  public GridView(MutableTableModel oracle) {
    this(new TableController(oracle));
  }

  /**
   * Add a new modeled grid listener.
   * 
   * @param listener the listener
   */
  public void addModeledGridListener(GridViewListener listener) {
    if (modeledGridListeners == null) {
      modeledGridListeners = new ArrayList/* <ModeledGridListener> */();
    }
    modeledGridListeners.add(listener);
  }

  /**
   * Get the cell renderer.
   * 
   * @return the cell rendered
   */
  public CellRenderer getCellRenderer() {
    return cellRenderer;
  }

  /**
   * Returns the currently visible page.
   * 
   * @return the current page
   */
  public int getCurrentPage() {
    return currentPage;
  }

  /**
   * Get the grid model from the grid.
   * 
   * @return the grid model
   */
  public TableController getGridModel() {
    return gridModel;
  }

  /**
   * Get the number of pages.
   * 
   * @return the page count
   */
  public int getNumPages() {
    if (pageSize < 1) {
      return 1;
    } else {
      return (int) Math.ceil(gridModel.getNumRows() / (pageSize + 0.0));
    }
  }

  /**
   * Get the number of rows per page.
   * 
   * @return the number of rows per page
   */
  public int getPageSize() {
    return pageSize;
  }

  /**
   * Go to the first page.
   */
  public void gotoFirstPage() {
    gotoPage(0);
  }

  /**
   * Go to the last page.
   */
  public void gotoLastPage() {
    gotoPage(getNumPages());
  }

  /**
   * Go to the next page.
   */
  public void gotoNextPage() {
    gotoPage(currentPage + 1);
  }

  /**
   * Set the current page. If the page is out of bounds, it will be
   * automatically set to zero or the last page without throwing any errors.
   * 
   * @param page the page
   */
  public void gotoPage(int page) {
    int oldPage = currentPage;
    currentPage = Math.max(0, Math.min(page, getNumPages() - 1));

    if (currentPage != oldPage) {
      // Deselect rows when switching pages
      deselectRows();
      
      // Fire listeners
      if (modeledGridListeners != null) {
        // for (ModeledGridListener listener : modeledGridListeners) {
        Iterator it = modeledGridListeners.iterator();
        while (it.hasNext()) {
          GridViewListener listener = (GridViewListener) it.next();
          listener.onPageChanged(currentPage);
        }
      }

      // Clear the current data in the grid
      DeferredCommand.addCommand(new Command() {
        public void execute() {
          // Resize the grid if needed
          int numRows = getLastRow() - getFirstRow() + 1;
          if (numRows != getRowCount()) {
            resizeRows(numRows);
          }

          // Clear out existing data
          clearAll();
  
          // Request the new data from the model
          gridModel.requestData(currentPage * pageSize, pageSize);
        }
      });
    }
  }

  /**
   * Go to the previous page.
   */
  public void gotoPreviousPage() {
    gotoPage(currentPage - 1);
  }

  /**
   * Reload the current page.
   */
  public void reloadPage() {
    resetPage(true);
  }
  
  /**
   * Remove a grid model listener.
   * 
   * @param listener the listener to remove
   */
  public void removeModeledGridListener(GridViewListener listener) {
    if (modeledGridListeners != null) {
      modeledGridListeners.remove(listener);
    }
  }

  /**
   * Render the contents of the cell.
   * 
   * @param row the row index
   * @param column the column index
   * @param data the data to render
   */
  public void renderCell(int row, int column, Object data) {
    if (cellRenderer == null) {
      setHTML(row, column, data + "");
    } else {
      cellRenderer.renderCell(this, row, column, data);
    }
  }

  /**
   * Set the cell renderer.
   * 
   * @param cellRenderer the new renderer
   */
  public void setCellRenderer(CellRenderer cellRenderer) {
    this.cellRenderer = cellRenderer;
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
    this.pageSize = pageSize;
    resetPage(true);

    // Fire listeners
    if (modeledGridListeners != null) {
      // for (ModeledGridListener listener : modeledGridListeners) {
      Iterator it = modeledGridListeners.iterator();
      while (it.hasNext()) {
        GridViewListener listener = (GridViewListener) it.next();
        listener.onPageSizeChange(pageSize, getNumPages());
      }
    }
  }

  /**
   * Get the first visible row index.
   * 
   * @return the first row index
   */
  protected int getFirstRow() {
    return currentPage * pageSize;
  }

  /**
   * Get the last visible row index.
   * 
   * @return the last row index
   */
  protected int getLastRow() {
    return Math.min(gridModel.getNumRows(), (currentPage + 1) * pageSize) - 1;
  }

  /**
   * Reset the current page.
   * 
   * @param force true to force a refresh
   */
  private void resetPage(boolean force) {
    int curPage = getCurrentPage();
    if (force) {
      currentPage = -1;
    }
    gotoPage(curPage);
  }
}
