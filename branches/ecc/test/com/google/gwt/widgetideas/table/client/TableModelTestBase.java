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

import com.google.gwt.junit.client.GWTTestCase;
import com.google.gwt.widgetideas.table.client.TableModel.Callback;
import com.google.gwt.widgetideas.table.client.TableModel.ColumnSortList;
import com.google.gwt.widgetideas.table.client.TableModel.Request;
import com.google.gwt.widgetideas.table.client.TableModel.Response;

/**
 * Tests methods used for all {@link TableModel} class.
 */
public abstract class TableModelTestBase extends GWTTestCase {
  /**
   * A {@link Callback} used for testing.
   */
  private class TestCallback implements Callback {
    /**
     * A boolean indicating that this callback has been executed.
     */
    private boolean executed = false;

    /**
     * Expected num rows in Request.
     */
    private int numRows;
    
    /**
     * A boolean indicating that a failure occured.
     */
    private boolean failed = false;
    
    /**
     * Column sort infot.
     */
    private ColumnSortList sortList;

    /**
     * Expected start row in Request.
     */
    private int startRow;

    /**
     * Constructor.
     * 
     * @param startRow expected start row in request
     * @param numRows expected num rows in request
     * @param sortList the column sort information
     */
    public TestCallback(int startRow, int numRows, ColumnSortList sortList) {
      this.startRow = startRow;
      this.numRows = numRows;
      this.sortList = sortList;
    }

    /**
     * Check if this callback has been executed.
     * 
     * @return true if executed
     */
    public boolean isExecuted() {
      return executed;
    }
    
    /**
     * Check if this callback failed.
     * 
     * @return true if failed
     */
    public boolean isFailed() {
      return failed;
    }

    public void onFailure(Throwable caught) {
      failed = true;
    }

    public void onRowsReady(Request request, Response response) {
      executed = true;
      assertEquals(request.getStartRow(), startRow);
      assertEquals(request.getNumRows(), numRows);
      if (sortList == null) {
        if (request.getColumnSortList() != null) {
          fail("inconsistent sortLists");
        }
      } else {
        assertTrue(sortList.equals(request.getColumnSortList()));
      }
    }
  }

  public String getModuleName() {
    return "com.google.gwt.widgetideas.WidgetIdeas";
  }

  /**
   * Get an instance of the table model.
   * 
   * @param failureMode if true, all requests should return an error
   * @return the table model
   */
  public abstract TableModel getTableModel(boolean failureMode);

  /**
   * Test requestRows method.
   */
  public void testRequestRows() {
    // Get the table model
    TableModel tableModel = getTableModel(false);

    // Request some rows without sorting
    TestCallback callback1 = new TestCallback(10, 20, null);
    tableModel.requestRows(10, 20, callback1);
    assertTrue(callback1.isExecuted());
    assertFalse(callback1.isFailed());

    // Request some rows with sorting
    ColumnSortList sortList = new ColumnSortList();
    sortList.add(5, true);
    TestCallback callback2 = new TestCallback(5, 6, sortList);
    tableModel.requestRows(5, 6, sortList, callback2);
    assertTrue(callback2.isExecuted());
    assertFalse(callback2.isFailed());

    // Request some rows with sorting descending
    sortList.add(5, false);
    TestCallback callback3 = new TestCallback(5, 6, sortList);
    tableModel.requestRows(5, 6, sortList, callback3);
    assertTrue(callback3.isExecuted());
    assertFalse(callback3.isFailed());
    
    // Request some rows and fail to return them
    TableModel failureModel = getTableModel(true);
    TestCallback callback4 = new TestCallback(-1, -1, null);
    failureModel.requestRows(5, 6, sortList, callback4);
    assertFalse(callback4.isExecuted());
    assertTrue(callback4.isFailed());
  }
}
