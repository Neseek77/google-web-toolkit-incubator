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
package com.google.gwt.widgetideas.table.client;

import com.google.gwt.junit.client.GWTTestCase;
import com.google.gwt.widgetideas.table.client.overrides.HTMLTable.CellFormatter;
import com.google.gwt.widgetideas.table.client.overrides.HTMLTable.RowFormatter;

import java.util.Set;

/**
 * Tests methods used for all {@link SelectionGrid} class.
 */
public class SelectionGridTest extends GWTTestCase {
  /**
   * A custom version of {@link TableSelectionListener} used for testing.
   */
  private static class TestTableSelectionListener implements
      TableSelectionListener {
    /**
     * The last row that was deselected.
     */
    private int deselectedRow = -1;

    /**
     * Indicates that onAllRowsDeselected fired.
     */
    private boolean allRowsDeselectedCalled = false;

    /**
     * The last row that was selected.
     */
    private int selectedRow = -1;

    /**
     * The range of selected rows.
     */
    private int selectedRowRange = -1;

    public int getDeselectedRow() {
      return deselectedRow;
    }

    public int getSelectedRow() {
      return selectedRow;
    }

    public int getSelectedRowRange() {
      return selectedRowRange;
    }

    /**
     * Check that onAllRowsDeselected was called.
     * 
     * @return true if called
     */
    public boolean isAllRowsDeselectedCalled() {
      return allRowsDeselectedCalled;
    }

    public void onAllRowsDeselected(SourceTableSelectionEvents sender) {
      allRowsDeselectedCalled = true;
    }

    public void onCellHover(SourceTableSelectionEvents sender, int row, int cell) {
    }

    public void onCellUnhover(SourceTableSelectionEvents sender, int row,
        int cell) {
    }

    public void onRowDeselected(SourceTableSelectionEvents sender, int row) {
      deselectedRow = row;
    }

    public void onRowsSelected(SourceTableSelectionEvents sender, int firstRow,
        int numRows) {
      selectedRow = firstRow;
      selectedRowRange = numRows;
    }
  }

  @Override
  public String getModuleName() {
    return "com.google.gwt.widgetideas.WidgetIdeas";
  }

  /**
   * Get the selection grid.
   * 
   * @return the grid
   */
  public SelectionGrid getSelectionGrid() {
    return new SelectionGrid(10, 10);
  }

  /**
   * Test accessors.
   */
  public void testAccessors() {
    // Initialize the grid
    SelectionGrid testGrid = getSelectionGrid();

    // Selection policy
    testGrid.setSelectionPolicy(SelectionGrid.SelectionPolicy.DISABLED);
    assertEquals(SelectionGrid.SelectionPolicy.DISABLED,
        testGrid.getSelectionPolicy());
    testGrid.setSelectionPolicy(SelectionGrid.SelectionPolicy.ONE_ROW);
    assertEquals(SelectionGrid.SelectionPolicy.ONE_ROW,
        testGrid.getSelectionPolicy());
  }

  /**
   * Test selection options.
   */
  public void testBasicSelection() {
    // Initialize the grid
    SelectionGrid testGrid = getSelectionGrid();

    // Selection with deselect
    testGrid.deselectRows();
    testGrid.selectRow(3, true);
    assertTrue(testGrid.isRowSelected(3));
    assertSelected(testGrid, new int[] {3});
    testGrid.selectRow(5, true);
    assertFalse(testGrid.isRowSelected(3));
    assertTrue(testGrid.isRowSelected(5));
    assertSelected(testGrid, new int[] {5});
    testGrid.selectRow(7, true);
    assertSelected(testGrid, new int[] {7});

    // Selection without deselect
    testGrid.deselectRows();
    testGrid.selectRow(3, false);
    assertSelected(testGrid, new int[] {3});
    testGrid.selectRow(5, false);
    assertSelected(testGrid, new int[] {3, 5});
    testGrid.selectRow(7, false);
    assertSelected(testGrid, new int[] {3, 5, 7});

    // Deselection
    testGrid.deselectRows();
    testGrid.selectRow(3, false);
    assertTrue(testGrid.isRowSelected(3));
    testGrid.deselectRow(3);
    assertFalse(testGrid.isRowSelected(3));

    // Deselection of all rows
    testGrid.deselectRows();
    assertEquals(0, testGrid.getSelectedRows().size());
    testGrid.selectRow(3, false);
    testGrid.selectRow(4, false);
    testGrid.selectRow(5, false);
    assertEquals(3, testGrid.getSelectedRows().size());
    testGrid.deselectRows();
    assertEquals(0, testGrid.getSelectedRows().size());

    // Selection Out of bounds
    try {
      testGrid.selectRow(-1, true);
      fail("Expected IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      assertTrue(true);
    }
    try {
      testGrid.selectRow(10, true);
      fail("Expected IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      assertTrue(true);
    }
  }

  /**
   * Test that hovering a cell correctly sets the style.
   */
  public void testHover() {
    // Initialize the grid
    SelectionGrid testGrid = getSelectionGrid();
    RowFormatter rowFormatter = testGrid.getRowFormatter();
    CellFormatter cellFormatter = testGrid.getCellFormatter();

    // Hover a cell
    assertEquals(rowFormatter.getStyleName(1), "");
    assertEquals(cellFormatter.getStyleName(1, 1), "");
    testGrid.hoverCell(cellFormatter.getElement(1, 1));
    assertEquals(rowFormatter.getStyleName(1), "hovering");
    assertEquals(cellFormatter.getStyleName(1, 1), "hovering");

    // Hover a cell in the same row
    testGrid.hoverCell(cellFormatter.getElement(1, 3));
    assertEquals(rowFormatter.getStyleName(1), "hovering");
    assertEquals(cellFormatter.getStyleName(1, 1), "");
    assertEquals(cellFormatter.getStyleName(1, 3), "hovering");

    // Hover a cell in a different row
    testGrid.hoverCell(cellFormatter.getElement(2, 4));
    assertEquals(rowFormatter.getStyleName(1), "");
    assertEquals(cellFormatter.getStyleName(1, 3), "");
    assertEquals(rowFormatter.getStyleName(2), "hovering");
    assertEquals(cellFormatter.getStyleName(2, 4), "hovering");

    // Unhover the cell
    testGrid.hoverCell(null);
    assertEquals(rowFormatter.getStyleName(2), "");
    assertEquals(cellFormatter.getStyleName(2, 4), "");
  }

  /**
   * Test the {@link TableSelectionListener}.
   */
  public void testListeners() {
    // Initialize the grid
    SelectionGrid testGrid = getSelectionGrid();

    // Create some listener
    TestTableSelectionListener listener1 = new TestTableSelectionListener();
    TestTableSelectionListener listener2 = new TestTableSelectionListener();
    TestTableSelectionListener listener3 = new TestTableSelectionListener();
    testGrid.addTableSelectionListener(listener1);
    testGrid.addTableSelectionListener(listener2);
    testGrid.addTableSelectionListener(listener3);

    // Fire deselect rows
    testGrid.deselectRows();
    assertTrue(listener1.isAllRowsDeselectedCalled());
    assertTrue(listener2.isAllRowsDeselectedCalled());
    assertTrue(listener3.isAllRowsDeselectedCalled());

    // Remove listener 2
    testGrid.removeTableSelectionListener(listener2);

    // Fire select row
    testGrid.selectRow(4, true);
    assertEquals(4, listener1.getSelectedRow());
    assertEquals(1, listener1.getSelectedRowRange());
    assertEquals(-1, listener2.getSelectedRow());
    assertEquals(-1, listener2.getSelectedRowRange());
    assertEquals(4, listener3.getSelectedRow());
    assertEquals(1, listener3.getSelectedRowRange());

    // Fire deselect row
    testGrid.deselectRow(4);
    assertEquals(4, listener1.getDeselectedRow());
    assertEquals(4, listener3.getDeselectedRow());
  }

  /**
   * Test selection options using the ctrl/shift method.
   */
  public void testShiftSelection() {
    // Initialize the grid
    SelectionGrid testGrid = getSelectionGrid();

    // Select rows using ctrl
    testGrid.deselectRows();
    testGrid.selectRow(4, false, false);
    testGrid.selectRow(8, true, false);
    assertSelected(testGrid, new int[] {4, 8});
    testGrid.selectRow(6, true, false);
    assertSelected(testGrid, new int[] {4, 6, 8});
    testGrid.selectRow(6, true, false);
    assertSelected(testGrid, new int[] {4, 8});

    // Select rows using shift
    testGrid.deselectRows();
    testGrid.selectRow(2, false, false);
    testGrid.selectRow(4, false, true);
    assertSelected(testGrid, new int[] {2, 3, 4});
    testGrid.selectRow(6, false, true);
    assertSelected(testGrid, new int[] {2, 3, 4, 5, 6});
    testGrid.selectRow(0, false, true);
    assertSelected(testGrid, new int[] {0, 1, 2});

    // Select rows using ctrl + shift
    testGrid.deselectRows();
    testGrid.selectRow(2, false, false);
    testGrid.selectRow(4, false, true);
    assertSelected(testGrid, new int[] {2, 3, 4});
    testGrid.selectRow(6, true, false);
    assertSelected(testGrid, new int[] {2, 3, 4, 6});
    testGrid.selectRow(8, true, true);
    assertSelected(testGrid, new int[] {2, 3, 4, 6, 7, 8});
  }

  /**
   * Verify that a specific set of rows are selected.
   * 
   * @param expected the rows that are expected to be selected
   */
  private void assertSelected(SelectionGrid grid, int[] expected) {
    Set<Integer> selected = grid.getSelectedRows();
    assertEquals(expected.length, selected.size());
    for (int i = 0; i < expected.length; i++) {
      assertTrue(selected.contains(new Integer(expected[i])));
    }
  }
}
