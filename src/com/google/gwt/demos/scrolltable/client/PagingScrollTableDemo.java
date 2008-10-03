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
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.KeyboardListenerAdapter;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.widgetideas.table.client.CachedTableModel;
import com.google.gwt.widgetideas.table.client.FixedWidthGrid;
import com.google.gwt.widgetideas.table.client.FixedWidthGridBulkRenderer;
import com.google.gwt.widgetideas.table.client.ListCellEditor;
import com.google.gwt.widgetideas.table.client.PagingOptions;
import com.google.gwt.widgetideas.table.client.PagingScrollTable;
import com.google.gwt.widgetideas.table.client.RadioCellEditor;
import com.google.gwt.widgetideas.table.client.ScrollTable;
import com.google.gwt.widgetideas.table.client.TableBulkRenderer;
import com.google.gwt.widgetideas.table.client.TextCellEditor;
import com.google.gwt.widgetideas.table.client.PagingScrollTable.CellRenderer;
import com.google.gwt.widgetideas.table.client.SelectionGrid.SelectionPolicy;
import com.google.gwt.widgetideas.table.client.overrides.FlexTable.FlexCellFormatter;

import java.io.Serializable;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class PagingScrollTableDemo extends ScrollTableDemo {
  /**
   * A custom cell renderer.
   */
  private static class CustomBulkRenderer extends
      TableBulkRenderer.CellRenderer {
    @Override
    public void renderCell(int row, int column, Object cellData,
        StringBuffer accum) {
      if (cellData == null) {
        return;
      }

      switch (column) {
        case 5:
          accum.append("<FONT color=\"" + cellData + "\">" + cellData
              + "</FONT>");
          return;
        default:
          accum.append(cellData + "");
      }
    }
  }

  /**
   * A custom cell renderer.
   */
  private static class CustomCellRenderer implements CellRenderer {
    public void renderCell(FixedWidthGrid grid, int row, int column, Object data) {
      if (data == null) {
        grid.clearCell(row, column);
        return;
      }

      switch (column) {
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
   * The {@link CachedTableModel} around the main table model.
   */
  protected static CachedTableModel<Serializable> cachedTableModel = null;

  /**
   * The {@link DataSourceTableModel}.
   */
  protected static DataSourceTableModel tableModel = null;

  /**
   * Get the cached table model.
   * 
   * @return the cached table model
   */
  public static CachedTableModel<Serializable> getCachedTableModel() {
    return cachedTableModel;
  }

  /**
   * Get the scroll table.
   * 
   * @return the scroll table.
   */
  public static PagingScrollTable<Serializable> getPagingScrollTable() {
    return (PagingScrollTable<Serializable>) scrollTable;
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
    getCachedTableModel().insertRow(beforeRow);
  }

  /**
   * This is the entry point method.
   */
  @Override
  public void onModuleLoad() {
    // Create the inner tables
    getHeaderTable();
    getFooterTable();

    // Setup the controller
    tableModel = new DataSourceTableModel();
    cachedTableModel = new CachedTableModel<Serializable>(tableModel);
    cachedTableModel.setPreCachedRowCount(20);
    cachedTableModel.setPostCachedRowCount(20);
    cachedTableModel.setRowCount(1000);

    // Setup the view
    dataTable = new FixedWidthGrid();
    dataTable.setSelectionPolicy(SelectionPolicy.CHECKBOX);

    // Create the scroll table
    scrollTable = new PagingScrollTable<Serializable>(cachedTableModel,
        dataTable, headerTable);
    getPagingScrollTable().setCellRenderer(new CustomCellRenderer());
    getPagingScrollTable().setPageSize(20);
    getPagingScrollTable().setEmptyTableWidget(
        new HTML("There is no data to display"));
    scrollTable.setFooterTable(getFooterTable());
    setupCellEditors(getPagingScrollTable());

    // Setup the bulk renderer
    FixedWidthGridBulkRenderer bulkRenderer = new FixedWidthGridBulkRenderer(
        dataTable, DataSourceTableModel.COLUMN_COUNT);
    bulkRenderer.setCellRenderer(new CustomBulkRenderer());
    getPagingScrollTable().setBulkRenderer(bulkRenderer);

    // Add some data to the footer table
    footerTable.setHTML(0, 0, "&nbsp;");
    for (int i = 0; i < 12; i++) {
      footerTable.setText(0, i + 1, "Col " + i);
    }
    scrollTable.setFooterTable(footerTable);

    // Setup the scroll table
    setupScrollTable();

    // Create an options panel
    PagingOptions pagingOptions = new PagingOptions(getPagingScrollTable());

    // Add the table to the page
    RootPanel.get().add(scrollTable);
    RootPanel.get().add(pagingOptions);
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
    scrollTable.setResizePolicy(ScrollTable.ResizePolicy.FILL_WIDTH);

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
    headerFormatter.setColSpan(0, 0, 13);

    // Create the select all checkbox
    final CheckBox selectAll = new CheckBox();
    selectAll.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        if (selectAll.isChecked()) {
          dataTable.selectRows();
        } else {
          dataTable.deselectRows();
        }
      }
    });

    // Level 2 headers
    headerTable.setWidget(1, 0, selectAll);
    headerFormatter.setRowSpan(1, 0, 2);
    headerFormatter.setHorizontalAlignment(1, 0,
        HasHorizontalAlignment.ALIGN_CENTER);
    headerTable.setHTML(1, 1, "First and Last Name");
    headerFormatter.setColSpan(1, 1, 2);
    headerFormatter.setRowSpan(1, 1, 2);
    headerTable.setHTML(1, 2, "General Info");
    headerFormatter.setColSpan(1, 2, 3);
    headerTable.setHTML(1, 3, "Favorite Color");
    headerFormatter.setColSpan(1, 3, 1);
    headerFormatter.setRowSpan(1, 3, 2);
    headerTable.setHTML(1, 4, "Preferred Sport");
    headerFormatter.setColSpan(1, 4, 1);
    headerFormatter.setRowSpan(1, 4, 2);
    headerTable.setHTML(1, 5, "School Info");
    headerFormatter.setColSpan(1, 5, 3);
    headerTable.setHTML(1, 6, "Login Info");
    headerFormatter.setColSpan(1, 6, 2);

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
  private void setupCellEditors(PagingScrollTable<Serializable> table) {
    // Integer only cell editor for age
    TextBox intOnlyTextBox = new TextBox();
    intOnlyTextBox.setWidth("4em");
    intOnlyTextBox.addKeyboardListener(new KeyboardListenerAdapter() {
      @Override
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
    table.setCellEditor(2, new TextCellEditor<Serializable>(intOnlyTextBox));

    // Gender cell editor
    RadioCellEditor<Serializable> genderEditor = new RadioCellEditor<Serializable>();
    genderEditor.setLabel("Select a gender:");
    genderEditor.addRadioButton(new RadioButton("editorGender", "male"));
    genderEditor.addRadioButton(new RadioButton("editorGender", "female"));
    table.setCellEditor(3, genderEditor);

    // Race cell editor
    ListCellEditor<Serializable> raceEditor = new ListCellEditor<Serializable>();
    ListBox raceBox = raceEditor.getListBox();
    for (int i = 0; i < DataSourceData.races.length; i++) {
      raceBox.addItem(DataSourceData.races[i]);
    }
    table.setCellEditor(4, raceEditor);

    // Color cell editor
    RadioCellEditor<Serializable> colorEditor = new RadioCellEditor<Serializable>() {
      /**
       * An element used to string the HTML portion of the color.
       */
      private HTML html = new HTML();

      @Override
      protected void setValue(Object value) {
        html.setHTML(value.toString());
        super.setValue(html.getText());
      }
    };
    colorEditor.setLabel("Select a color:");
    for (int i = 0; i < DataSourceData.colors.length; i++) {
      String color = DataSourceData.colors[i];
      colorEditor.addRadioButton(new RadioButton("editorColor", color));
    }
    table.setCellEditor(5, colorEditor);

    // Sport cell editor
    ListCellEditor<Serializable> sportEditor = new ListCellEditor<Serializable>();
    sportEditor.setLabel("Select a sport:");
    ListBox sportBox = sportEditor.getListBox();
    for (int i = 0; i < DataSourceData.sports.length; i++) {
      sportBox.addItem(DataSourceData.sports[i]);
    }
    table.setCellEditor(6, sportEditor);

    // College cell editor
    TextCellEditor<Serializable> collegeEditor = new TextCellEditor<Serializable>() {
      @Override
      protected Object getValue() {
        return "University of " + super.getValue();
      }

      @Override
      public boolean onAccept() {
        if (getValue().equals("")) {
          Window.alert("You must enter a school");
          return false;
        }
        return true;
      }

      @Override
      protected void setValue(Object value) {
        super.setValue(value.toString().substring(14));
      }
    };
    collegeEditor.setLabel("University of");
    table.setCellEditor(7, collegeEditor);
  }
}
