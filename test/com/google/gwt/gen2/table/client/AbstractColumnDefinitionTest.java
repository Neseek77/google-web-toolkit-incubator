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

import com.google.gwt.gen2.base.client.Gen2TestBase;
import com.google.gwt.gen2.table.client.TableDefinition.AbstractCellView;
import com.google.gwt.gen2.table.client.property.ColumnProperty;

/**
 * Tests for {@link AbstractColumnDefinition}.
 */
public class AbstractColumnDefinitionTest extends Gen2TestBase {
  /**
   * A property used for testing.
   */
  private static class CustomProperty extends ColumnProperty {
    public static final Type<CustomProperty> TYPE = new Type<CustomProperty>() {
      private CustomProperty instance;

      @Override
      public CustomProperty getDefault() {
        if (instance == null) {
          instance = new CustomProperty(null);
        }
        return instance;
      }
    };

    private String value;

    public CustomProperty(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }
  }

  /**
   * A custom {@link CellRenderer} that prints all cells in the form "cell r:c"
   * where 'r' is the row index and 'c' is the cell index.
   * 
   * @param <RowType> the type of the row value
   * @param <ColType> the data type of the column
   */
  public static class CustomCellRenderer<RowType, ColType> implements
      CellRenderer<RowType, ColType> {
    /**
     * The last row value that was rendered.
     */
    private RowType lastRowValue = null;

    /**
     * Assert that the last row value that was rendered equals the expected row
     * value.
     * 
     * @param expected the expected row value
     */
    public void assertLastRowValue(RowType expected) {
      assertEquals(expected, lastRowValue);
    }

    public void renderRowValue(RowType rowValue,
        ColumnDefinition<RowType, ColType> columnDef,
        AbstractCellView<RowType> view) {
      lastRowValue = rowValue;
      view.setHTML("cell " + view.getRowIndex() + ":" + view.getCellIndex());
    }
  }

  /**
   * A custom {@link ColumnDefinition} used for testing.
   * 
   * @param <RowType> the type of the row value
   * @param <ColType> the data type of the column
   */
  public static class CustomColumnDefinition<RowType, ColType> extends
      AbstractColumnDefinition<RowType, ColType> {
    private CustomCellRenderer<RowType, ColType> cellRenderer = new CustomCellRenderer<RowType, ColType>();

    public CustomColumnDefinition() {
      setCellRenderer(cellRenderer);
    }

    /**
     * @see CustomCellRenderer#assertLastRowValue(Object)
     */
    public void assertLastRowValue(RowType expected) {
      cellRenderer.assertLastRowValue(expected);
    }

    @Override
    public ColType getCellValue(RowType rowValue) {
      return null;
    }

    @Override
    public void setCellValue(RowType rowValue, ColType cellValue) {
      // Do not do anything
    }
  }

  /**
   * Test the accessors.
   */
  public void testAccessors() {
    // setCellEditor
    {
      AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
      CellEditor<Object> cellEditor = new CellEditor<Object>() {
        public void editCell(CellEditInfo cellEditInfo, Object cellValue,
            Callback<Object> callback) {
        }
      };
      colDef.setCellEditor(null);
      assertNull(colDef.getCellEditor());
      colDef.setCellEditor(cellEditor);
      assertEquals(cellEditor, colDef.getCellEditor());
    }

    // setCellRenderer
    {
      AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
      CellRenderer<Object, Object> cellRenderer = new CustomCellRenderer<Object, Object>();
      assertNotNull(colDef.getCellRenderer());
      colDef.setCellRenderer(cellRenderer);
      assertEquals(cellRenderer, colDef.getCellRenderer());
      try {
        colDef.setCellRenderer(null);
        fail("Expected assertion error");
      } catch (AssertionError e) {
        // Expected
      }
    }

    // sortable
    {
      AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
      colDef.setColumnSortable(true);
      assertTrue(colDef.isColumnSortable());
      colDef.setColumnSortable(false);
      assertFalse(colDef.isColumnSortable());
    }

    // truncatable
    {
      AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
      colDef.setColumnTruncatable(true);
      assertTrue(colDef.isColumnTruncatable());
      colDef.setColumnTruncatable(false);
      assertFalse(colDef.isColumnTruncatable());

      colDef.setHeaderTruncatable(true);
      assertTrue(colDef.isHeaderTruncatable());
      colDef.setHeaderTruncatable(false);
      assertFalse(colDef.isHeaderTruncatable());

      colDef.setFooterTruncatable(true);
      assertTrue(colDef.isFooterTruncatable());
      colDef.setFooterTruncatable(false);
      assertFalse(colDef.isFooterTruncatable());

      assertFalse(colDef.isColumnTruncatable());
      assertFalse(colDef.isHeaderTruncatable());
      assertFalse(colDef.isFooterTruncatable());
    }

    // column width
    {
      AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
      colDef.setMaximumColumnWidth(100);
      assertEquals(100, colDef.getMaximumColumnWidth());
      colDef.setMinimumColumnWidth(50);
      assertEquals(50, colDef.getMinimumColumnWidth());
      colDef.setPreferredColumnWidth(75);
      assertEquals(75, colDef.getPreferredColumnWidth());
    }

    // header
    {
      AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
      assertEquals(0, colDef.getHeaderCount());
      assertNull(colDef.getHeader(0));

      colDef.setHeaderCount(1);
      assertEquals(1, colDef.getHeaderCount());

      String header = "header";
      colDef.setHeader(1, header);
      assertEquals(2, colDef.getHeaderCount());
      assertEquals(header, colDef.getHeader(1));
    }
  }

  public void testProperties() {
    AbstractColumnDefinition<Object, Object> colDef = new CustomColumnDefinition<Object, Object>();
    CustomProperty prop = new CustomProperty("test");

    // Retrieve a non existent property (the default value)
    {
      assertNull(colDef.getColumnProperty(CustomProperty.TYPE).getValue());
    }

    // Set and retrieve a property
    {
      colDef.setColumnProperty(CustomProperty.TYPE, prop);
      assertEquals("test",
          colDef.getColumnProperty(CustomProperty.TYPE).getValue());
    }

    // Remove a property
    {
      colDef.removeColumnProperty(CustomProperty.TYPE);

      // Should reset to the default value
      assertNull(colDef.getColumnProperty(CustomProperty.TYPE).getValue());
    }
  }
}
