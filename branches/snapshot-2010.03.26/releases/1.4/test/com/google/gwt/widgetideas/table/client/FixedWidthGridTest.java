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

/**
 * Tests methods used for all {@link FixedWidthGrid} class.
 */
public class FixedWidthGridTest extends SelectionGridTest {
  /**
   * The grid to test.
   */
  private FixedWidthGrid grid = null;

  /**
   * Get the grid.
   * 
   * @return the grid
   */
  public FixedWidthGrid getFixedWidthGrid() {
    if (grid == null) {
      grid = new FixedWidthGrid();
      grid.resize(10, 10);
    }
    return grid;
  }

  /**
   * Get the selection grid.
   * 
   * @return the grid
   */
  public SelectionGrid getSelectionGrid() {
    return getFixedWidthGrid();
  }
  
  /**
   * Test accessors.
   */
  public void testAccessors() {
    // Initialize the grid
    FixedWidthGrid testGrid = getFixedWidthGrid();

    // Default column width
    int defaultWidth = testGrid.getDefaultColumnWidth();
    assertEquals(FixedWidthGrid.DEFAULT_COLUMN_WIDTH, defaultWidth);

    // Column width
    assertEquals(defaultWidth, testGrid.getColumnWidth(4));
    testGrid.setColumnWidth(4, defaultWidth + 40);
    assertEquals(defaultWidth + 40, testGrid.getColumnWidth(4));
    assertEquals(defaultWidth, testGrid.getColumnWidth(3));
  }
  
  /**
   * Test accessors.
   */
  public void testGhostRow() {
    // Initialize the grid
    FixedWidthGrid testGrid = getFixedWidthGrid();
    
    // Resize columns
    testGrid.resizeColumns(10);
    assertEquals(10, testGrid.getColumnCount());
    assertEquals(10, testGrid.getGhostColumnCount());
    testGrid.resizeColumns(4);
    assertEquals(4, testGrid.getColumnCount());
    assertEquals(4, testGrid.getGhostColumnCount());
    testGrid.resize(10, 10);
    
    assertEquals(10, testGrid.getColumnCount());
    assertEquals(10, testGrid.getGhostColumnCount());
  }
  
  /**
   * Test selection with row insertion and removal.
   */
  public void testSelectionInsertion() {
    // Initialize the grid
    FixedWidthGrid testGrid = getFixedWidthGrid();
    
    // Row removal with selection
    testGrid.deselectRows();
    testGrid.selectRow(2, false);
    testGrid.selectRow(4, false);
    testGrid.selectRow(6, false);
    assertEquals(3, testGrid.getSelectedRows().size());
    testGrid.removeRow(5);
    assertEquals(0, testGrid.getSelectedRows().size());

    // Row insertion with selection
    testGrid.deselectRows();
    testGrid.selectRow(2, false);
    testGrid.selectRow(4, false);
    testGrid.selectRow(6, false);
    assertEquals(3, testGrid.getSelectedRows().size());
    testGrid.insertRow(5);
    assertEquals(0, testGrid.getSelectedRows().size());
  }
}
