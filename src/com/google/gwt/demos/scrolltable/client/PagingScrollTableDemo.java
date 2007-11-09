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
package com.google.gwt.demos.scrolltable.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.KeyboardListenerAdapter;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.widgetideas.table.client.CachedTableController;
import com.google.gwt.widgetideas.table.client.EditablePagingGrid;
import com.google.gwt.widgetideas.table.client.ListCellEditor;
import com.google.gwt.widgetideas.table.client.PagingGrid;
import com.google.gwt.widgetideas.table.client.PagingGridBulkRenderer;
import com.google.gwt.widgetideas.table.client.PagingScrollTable;
import com.google.gwt.widgetideas.table.client.RadioCellEditor;
import com.google.gwt.widgetideas.table.client.ScrollTable;
import com.google.gwt.widgetideas.table.client.TextCellEditor;
import com.google.gwt.widgetideas.table.client.PagingGrid.CellRenderer;
import com.google.gwt.widgetideas.table.client.TableBulkRenderer.StringCellRenderer;
import com.google.gwt.widgetideas.table.client.overrides.HTMLTable;
import com.google.gwt.widgetideas.table.client.overrides.FlexTable.FlexCellFormatter;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class PagingScrollTableDemo extends ScrollTableDemo {
  /**
   * A custom cell renderer.
   */
  private static class CustomBulkRenderer extends StringCellRenderer {
    public String renderCell(int row, int column, Object cellData) {
      if (cellData == null) {
        return "";
      }

      switch (column) {
        case 5:
          return "<FONT color=\"" + cellData + "\">" + cellData + "</FONT>";
        default:
          return cellData.toString();
      }
    }
  }

  /**
   * A custom cell renderer.
   */
  private static class CustomCellRenderer implements CellRenderer {
    public void renderCell(PagingGrid grid, int row, int column, Object data) {
      if (data == null) {
        grid.clearCell(row, column);
      }

      switch (column) {
        case 0:
          grid.setWidget(row, column, (Widget) data);
          break;
        case 5:
          grid.setHTML(row, column, "<FONT color=\"" + data + "\">" + data
              + "</FONT>");
          break;
        default:
          grid.setHTML(row, column, data + "");
      }
    }
  }

  /**
   * The {@link CachedTableController} used in the {@link PagingScrollTable}.
   */
  protected static CachedTableController tableController = null;

  /**
   * The {@link DataSourceTableModel}.
   */
  protected static DataSourceTableModel tableModel = null;

  /**
   * Get the data table.
   * 
   * @return the data table.
   */
  public static EditablePagingGrid getEditableGridView() {
    return (EditablePagingGrid) dataTable;
  }

  /**
   * Get the scroll table.
   * 
   * @return the scroll table.
   */
  public static PagingScrollTable getPagingScrollTable() {
    return (PagingScrollTable) scrollTable;
  }

  /**
   * Get the table controller.
   * 
   * @return the table controller
   */
  public static CachedTableController getTableController() {
    return tableController;
  }

  /**
   * Get the table model.
   * 
   * @return the table model
   */
  public static DataSourceTableModel getTableModel() {
    return tableModel;
  }

  /**
   * Add a row of data cells each consisting of a string that describes the
   * row:column coordinates of the new cell. The number of columns in the new
   * row will match the number of columns in the grid.
   * 
   * @param beforeRow the index to add the new row into
   */
  public static void insertDataRow(int beforeRow) {
    PagingGrid gridView = (PagingGrid) scrollTable.getDataTable();
    tableController.insertRow(beforeRow);
  }

  /**
   * This is the entry point method.
   */
  public void onModuleLoad() {
    // Create the inner tables
    getHeaderTable();
    getFooterTable();

    // Setup the controller
    tableModel = new DataSourceTableModel();
    tableController = new CachedTableController(tableModel);
    tableController.setNumRows(10000);
    tableController.setNumPreCachedRows(20);
    tableController.setNumPostCachedRows(20);

    // Setup the view
    EditablePagingGrid gridView = new EditablePagingGrid(tableController);
    dataTable = gridView;
    gridView.setCellRenderer(new CustomCellRenderer());
    setupCellEditors(gridView);

    // Setup the renderer
    PagingGridBulkRenderer dataRenderer = new PagingGridBulkRenderer(gridView,
        12);
    dataRenderer.setRenderer(new CustomBulkRenderer());

    // Create the scroll table
    scrollTable = new PagingScrollTable(gridView, headerTable);
    getPagingScrollTable().setPageSize(20);
    scrollTable.setFooterTable(getFooterTable());

    // Add some data to the footer table
    footerTable.resize(1, 12);
    for (int i = 0; i < 12; i++) {
      footerTable.setText(0, i, "Col " + i);
    }
    scrollTable.setFooterTable(footerTable);

    // Setup the scroll table
    setupScrollTable();

    // Add the table to the page
    RootPanel.get().add(scrollTable);
    RootPanel.get().add(new HTML("<BR>"));
    RootPanel.get().add(createTabPanel());
  }

  /**
   * Create a new tab panel with options to affect the grid.
   * 
   * @return the new tab panel
   */
  private TabPanel createTabPanel() {
    TabPanel panel = new TabPanel();
    panel.setWidth("95%");

    // Add the panels
    panel.add(new DemoTabResizing(), "Resizability");
    panel.add(new DemoTabColumnWidth(), "Column Width");
    panel.add(new DemoTabHighlighting(), "Highlighting");
    panel.add(new DemoTabSorting(), "Sorting");
    panel.add(new DemoTabHeaderManipulation(), "Header Manipulation");
    panel.add(new ModeledTabDataManipulation(), "Data Manipulation");
    panel.add(new ModeledTabPaging(), "Paging");
    panel.add(new DemoTabPanelLog(), "Log");
    panel.selectTab(0);

    // Return the new panel
    return panel;
  }

  /**
   * Setup the scroll table.
   */
  private void setupScrollTable() {
    // Setup the formatting
    scrollTable.setCellPadding(3);
    scrollTable.setCellSpacing(0);
    scrollTable.setSize("95%", "50%");
    scrollTable.setResizePolicy(ScrollTable.RESIZE_POLICY_FILL_WIDTH);

    // Set column widths
    scrollTable.setColumnWidth(1, 100);
    scrollTable.setColumnWidth(2, 35);
    scrollTable.setColumnWidth(3, 45);
    scrollTable.setColumnWidth(4, 110);
    scrollTable.setColumnWidth(5, 80);
    scrollTable.setColumnWidth(6, 110);
    scrollTable.setColumnWidth(7, 180);
    scrollTable.setColumnWidth(8, 35);
    scrollTable.setColumnWidth(9, 35);
    scrollTable.setColumnWidth(10, 55);
    scrollTable.setColumnWidth(11, 45);

    // Level 1 headers
    FlexCellFormatter headerFormatter = headerTable.getFlexCellFormatter();
    headerTable.setHTML(0, 0, "User Information");
    headerFormatter.setColSpan(0, 0, 12);

    // Level 2 headers
    headerTable.setHTML(1, 0, "First and Last Name");
    headerFormatter.setColSpan(1, 0, 2);
    headerFormatter.setRowSpan(1, 0, 2);
    headerTable.setHTML(1, 1, "General Info");
    headerFormatter.setColSpan(1, 1, 3);
    headerTable.setHTML(1, 2, "Favorite Color");
    headerFormatter.setColSpan(1, 2, 1);
    headerFormatter.setRowSpan(1, 2, 2);
    headerTable.setHTML(1, 3, "Preferred Sport");
    headerFormatter.setColSpan(1, 3, 1);
    headerFormatter.setRowSpan(1, 3, 2);
    headerTable.setHTML(1, 4, "School Info");
    headerFormatter.setColSpan(1, 4, 3);
    headerTable.setHTML(1, 5, "Login Info");
    headerFormatter.setColSpan(1, 5, 2);

    // Level 3 headers
    headerTable.setHTML(2, 0, "Age");
    headerTable.setHTML(2, 1, "Gender");
    headerTable.setHTML(2, 2, "Race");
    headerTable.setHTML(2, 3, "College");
    headerTable.setHTML(2, 4, "Year");
    headerTable.setHTML(2, 5, "GPA");
    headerTable.setHTML(2, 6, "ID");
    headerTable.setHTML(2, 7, "Pin");
  }

  /**
   * Setup the cell editors on the scroll table.
   */
  private void setupCellEditors(EditablePagingGrid gridView) {
    // Integer only cell editor for age
    TextBox intOnlyTextBox = new TextBox();
    intOnlyTextBox.setWidth("4em");
    intOnlyTextBox.addKeyboardListener(new KeyboardListenerAdapter() {
      public void onKeyPress(Widget sender, char keyCode, int modifiers) {
        if ((!Character.isDigit(keyCode)) && (keyCode != (char) KEY_TAB)
            && (keyCode != (char) KEY_BACKSPACE)
            && (keyCode != (char) KEY_DELETE) && (keyCode != (char) KEY_ENTER)
            && (keyCode != (char) KEY_HOME) && (keyCode != (char) KEY_END)
            && (keyCode != (char) KEY_LEFT) && (keyCode != (char) KEY_UP)
            && (keyCode != (char) KEY_RIGHT) && (keyCode != (char) KEY_DOWN)) {
          ((TextBox) sender).cancelKey();
        }
      }
    });
    gridView.setCellEditor(2, new TextCellEditor(intOnlyTextBox));

    // Gender cell editor
    RadioCellEditor genderEditor = new RadioCellEditor();
    genderEditor.setLabel("Select a gender:");
    genderEditor.addOption("male");
    genderEditor.addOption("female");
    gridView.setCellEditor(3, genderEditor);

    // Race cell editor
    ListCellEditor raceEditor = new ListCellEditor();
    ListBox raceBox = raceEditor.getListBox();
    for (int i = 0; i < DataSourceTableModel.races.length; i++) {
      raceBox.addItem(DataSourceTableModel.races[i]);
    }
    gridView.setCellEditor(4, raceEditor);

    // Color cell editor
    RadioCellEditor colorEditor = new RadioCellEditor() {
      protected Object getCellValue(HTMLTable table, int row, int cell) {
        return table.getText(row, cell);
      }
    };
    colorEditor.setLabel("Select a color:");
    for (int i = 0; i < DataSourceTableModel.colors.length; i++) {
      colorEditor.addOption(DataSourceTableModel.colors[i]);
    }
    gridView.setCellEditor(5, colorEditor);

    // Sport cell editor
    ListCellEditor sportEditor = new ListCellEditor();
    sportEditor.setLabel("Select a sport:");
    ListBox sportBox = sportEditor.getListBox();
    for (int i = 0; i < DataSourceTableModel.sports.length; i++) {
      sportBox.addItem(DataSourceTableModel.sports[i]);
    }
    gridView.setCellEditor(6, sportEditor);

    // College cell editor
    TextCellEditor collegeEditor = new TextCellEditor() {
      public Object getValue() {
        Object value = super.getValue();
        return "University of " + value;
      }

      public boolean onAccept(Object value) {
        if (super.getValue().equals("")) {
          Window.alert("You must enter a school");
          return false;
        }
        return true;
      }

      protected Object getCellValue(HTMLTable table, int row, int cell) {
        return table.getText(row, cell).substring(14);
      }
    };
    collegeEditor.setLabel("University of");
    gridView.setCellEditor(7, collegeEditor);
  }
}
