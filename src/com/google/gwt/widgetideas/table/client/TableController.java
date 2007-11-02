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

import com.google.gwt.widgetideas.table.client.TableModel.Callback;
import com.google.gwt.widgetideas.table.client.TableModel.Request;
import com.google.gwt.widgetideas.table.client.TableModel.Response;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * A controller that interfaces between a {@link TableModel} and one or more
 * views of the 2-dimensional data. This model does not include any internal
 * caching, and as such it will send a new request to the {@link TableModel}
 * with every request for rows.
 */
public class TableController {
  /**
   * A callback that automatically updates a {@link ControllableTable}.
   */
  public class ControllableTableCallback implements Callback {
    /**
     * The table that requested the data.
     */
    private ControllableTable controllableTable;

    /**
     * Constructor.
     * 
     * @param controllableTable the {@link ControllableTable} instance
     */
    public ControllableTableCallback(ControllableTable controllableTable) {
      this.controllableTable = controllableTable;
    }

    /**
     * Get the {@link ControllableTable}.
     * 
     * @return the table
     */
    public ControllableTable getControllableTable() {
      return controllableTable;
    }

    /**
     * Update the table with the requested data.
     * 
     * @param request the request
     * @param response the response
     */
    public void onRowsReady(Request request, Response response) {
      controllableTable.setData(request.getStartRow(), response.iterator());
    }
  }

  /**
   * The {@link ControllableTable}s attached to this controller.
   */
  private List controllableTables;

  /**
   * The total number of rows that we predict the model can return.
   */
  private int numRows = -1;

  /**
   * The underlying table model.
   */
  private TableModel tableModel;

  /**
   * Constructor.
   * 
   * @param tableModel the underlying {@link ReadOnlyTableModel}
   */
  public TableController(TableModel tableModel) {
    this.tableModel = tableModel;
  }

  /**
   * Add a new {@link ControllableTable}.
   * 
   * @param controllableTable the ControllableTable widget
   */
  public void addControllableTable(final ControllableTable controllableTable) {
    // Keep a reference to the table
    if (controllableTables == null) {
      controllableTables = new ArrayList();
    }
    controllableTables.add(controllableTable);

    // Set the number of rows
    controllableTable.setNumRows(numRows);

    // Listen for data request events from the table
    controllableTable.addDataRequestListener(new DataRequestListener() {
      public void onRequestData(int firstRow, int rowCount, int sortIndex,
          boolean sortAscending) {
        requestRows(firstRow, rowCount, sortIndex, sortAscending,
            controllableTable);
      }
    });
  }

  /**
   * Get the number of rows. If the number of rows is not known, return -1.
   * 
   * @return the number of rows
   */
  public int getNumRows() {
    return numRows;
  }

  /**
   * Get the underlying {@link TableModel}.
   * 
   * @return the table model
   */
  public TableModel getTableModel() {
    return tableModel;
  }

  /**
   * Insert a row of data.
   * 
   * @param beforeRow the row to insert
   */
  public void insertRow(int beforeRow) {
    // Allow a new row to be appended
    if (beforeRow != numRows) {
      checkRowBounds(beforeRow);
    }

    // Fire listeners
    tableModel.onRowInserted(beforeRow);

    // Increment number of rows
    if (numRows >= 0) {
      numRows++;
    }

    // Update tables
    if (controllableTables != null) {
      Iterator it = controllableTables.iterator();
      while (it.hasNext()) {
        ControllableTable controllableTable = (ControllableTable) it.next();
        controllableTable.setNumRows(numRows);
        controllableTable.insertRow(beforeRow);
      }
    }
  }

  /**
   * Remove a {@link ControllableTable}.
   * 
   * @param controllableTable the controllable table to remove
   */
  public void removeControllableTable(ControllableTable controllableTable) {
    if (controllableTables != null) {
      controllableTables.remove(controllableTable);
    }
  }

  /**
   * Remove a row of data and decrement all rows after the removed row.
   * 
   * @param row the row to remove
   * @throws IndexOutOfBoundsException
   */
  public void removeRow(int row) {
    // Check row bounds
    checkRowBounds(row);

    // Fire listeners
    tableModel.onRowRemoved(row);

    // Decrement the number of rows
    if (numRows >= 0) {
      numRows--;
    }

    // Update tables
    if (controllableTables != null) {
      Iterator it = controllableTables.iterator();
      while (it.hasNext()) {
        ControllableTable controllableTable = (ControllableTable) it.next();
        controllableTable.setNumRows(numRows);
        controllableTable.removeRow(row);
      }
    }
  }

  /**
   * Set data in the controller.
   * 
   * @param row the row index
   * @param column the column index
   * @param data the data to set
   */
  public void setData(int row, int column, Object data) {
    tableModel.onSetData(row, column, data);
    if (controllableTables != null) {
      Iterator it = controllableTables.iterator();
      while (it.hasNext()) {
        ControllableTable controllableTable = (ControllableTable) it.next();
        controllableTable.setData(row, column, data);
      }
    }
  }

  /**
   * Set the total number of rows. Pass in -1 if the number of rows is not
   * known.
   * 
   * @param numRows the total number of rows
   */
  public void setNumRows(int numRows) {
    this.numRows = Math.max(-1, numRows);

    // Fire listeners
    if (controllableTables != null) {
      Iterator it = controllableTables.iterator();
      while (it.hasNext()) {
        ControllableTable controllableTable = (ControllableTable) it.next();
        controllableTable.setNumRows(this.numRows);
      }
    }
  }

  /**
   * Verify that a row is within the row bounds.
   * 
   * @param row the row index to check
   * @throws IndexOutOfBoundsException
   */
  protected void checkRowBounds(int row) {
    if ((numRows >= 0) && ((row >= numRows) || (row < 0))) {
      throw new IndexOutOfBoundsException("Row index: " + row + ", Row size: "
          + numRows);
    }
  }

  /**
   * Get the collection of {@link ControllableTable}s.
   * 
   * @return the controllableTables
   */
  protected List getControllableTables() {
    return controllableTables;
  }

  /**
   * Request some data from the model and respond with the specified callback.
   * 
   * @param startRow the first row to request
   * @param numRows the number of rows to request
   * @param sortIndex the index to sort by
   * @param sortAscending true to sort ascending, false for descending
   * @param table the table requesting the rows
   */
  protected void requestRows(int startRow, int numRows, int sortIndex,
      boolean sortAscending, ControllableTable table) {
    requestRows(startRow, numRows, sortIndex, sortAscending, table,
        new ControllableTableCallback(table));
  }

  /**
   * Request some data from the model and respond with the specified callback.
   * 
   * @param startRow the first row to request
   * @param numRows the number of rows to request
   * @param sortIndex the index to sort by
   * @param sortAscending true to sort ascending, false for descending
   * @param table the table requesting the rows
   */
  protected void requestRows(int startRow, int numRows, int sortIndex,
      boolean sortAscending, ControllableTable table,
      ControllableTableCallback callback) {
    if (sortIndex < 0) {
      tableModel.requestRows(new Request(startRow, numRows), callback);
    } else {
      tableModel.requestRows(new Request(startRow, numRows, sortIndex,
          sortAscending), callback);
    }
  }
}
