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
package com.google.gwt.gen2.demo.scrolltable.client;

import com.google.gwt.gen2.demo.scrolltable.shared.Student;
import com.google.gwt.gen2.demo.scrolltable.shared.StudentGenerator;
import com.google.gwt.gen2.table.client.AbstractColumnDefinition;
import com.google.gwt.gen2.table.client.CachedTableModel;
import com.google.gwt.gen2.table.client.CellRenderer;
import com.google.gwt.gen2.table.client.ColumnDefinition;
import com.google.gwt.gen2.table.client.DefaultTableDefinition;
import com.google.gwt.gen2.table.client.FixedWidthGrid;
import com.google.gwt.gen2.table.client.FixedWidthGridBulkRenderer;
import com.google.gwt.gen2.table.client.ListCellEditor;
import com.google.gwt.gen2.table.client.PagingOptions;
import com.google.gwt.gen2.table.client.PagingScrollTable;
import com.google.gwt.gen2.table.client.RadioCellEditor;
import com.google.gwt.gen2.table.client.TableDefinition;
import com.google.gwt.gen2.table.client.TextCellEditor;
import com.google.gwt.gen2.table.client.SelectionGrid.SelectionPolicy;
import com.google.gwt.gen2.table.client.TableDefinition.HTMLCellView;
import com.google.gwt.gen2.table.client.TableDefinition.TableCellView;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TabPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class PagingScrollTableDemo extends ScrollTableDemo {
  /**
   * An {@link AbstractColumnDefinition} applied to {@link Student} row values.
   * 
   * @param <ColType> the data type of the column
   */
  private abstract static class StudentColumnDefinition<ColType> extends
      AbstractColumnDefinition<Student, ColType> {
  }

  /**
   * The {@link CachedTableModel} around the main table model.
   */
  protected static CachedTableModel<Student> cachedTableModel = null;

  /**
   * The {@link DataSourceTableModel}.
   */
  protected static DataSourceTableModel tableModel = null;

  /**
   * Get the cached table model.
   * 
   * @return the cached table model
   */
  public static CachedTableModel<Student> getCachedTableModel() {
    return cachedTableModel;
  }

  /**
   * Get the scroll table.
   * 
   * @return the scroll table.
   */
  public static PagingScrollTable<Student> getPagingScrollTable() {
    return (PagingScrollTable<Student>) scrollTable;
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
    // Create the tables
    createScrollTable();

    // Create an options panel
    PagingOptions pagingOptions = new PagingOptions(getPagingScrollTable());

    // Add the table to the page
    RootPanel.get().add(scrollTable);
    RootPanel.get().add(pagingOptions);
    RootPanel.get().add(new HTML("<BR>"));
    RootPanel.get().add(createTabPanel());
  }

  /**
   * Setup the scroll table.
   */
  @Override
  protected void createScrollTable() {
    // Create the inner tables
    createHeaderTable();
    createFooterTable();
    dataTable = new FixedWidthGrid();
    dataTable.setSelectionPolicy(SelectionPolicy.CHECKBOX);

    // Setup the controller
    tableModel = new DataSourceTableModel();
    cachedTableModel = new CachedTableModel<Student>(tableModel);
    cachedTableModel.setPreCachedRowCount(50);
    cachedTableModel.setPostCachedRowCount(50);
    cachedTableModel.setRowCount(1000);

    // Create a TableCellRenderer
    TableDefinition<Student> tableDef = createTableDefinition();

    // Create the scroll table
    scrollTable = new PagingScrollTable<Student>(cachedTableModel, dataTable,
        headerTable, tableDef);
    PagingScrollTable<Student> pagingScrollTable = getPagingScrollTable();
    pagingScrollTable.setPageSize(50);
    pagingScrollTable.setEmptyTableWidget(new HTML(
        "There is no data to display"));
    scrollTable.setFooterTable(getFooterTable());

    // Setup the bulk renderer
    FixedWidthGridBulkRenderer<Student> bulkRenderer = new FixedWidthGridBulkRenderer<Student>(
        dataTable, getPagingScrollTable());
    pagingScrollTable.setBulkRenderer(bulkRenderer);

    // Setup the scroll table
    setupScrollTable();
  }

  /**
   * @return the {@link TableDefinition} with all ColumnDefinitions defined.
   */
  private TableDefinition<Student> createTableDefinition() {
    // Define some cell renderers
    CellRenderer<Student, Integer> intCellRenderer = new CellRenderer<Student, Integer>() {
      public void renderRowValue(Student rowValue,
          ColumnDefinition<Student, Integer> columnDef,
          HTMLCellView<Student> view) {
        view.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
        view.addHTML(columnDef.getCellValue(rowValue).toString());
      }

      public void renderRowValue(Student rowValue,
          ColumnDefinition<Student, Integer> columnDef,
          TableCellView<Student> view) {
        view.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
        view.setHTML(columnDef.getCellValue(rowValue).toString());
      }
    };

    // Create the table definition
    DefaultTableDefinition<Student> tcr = new DefaultTableDefinition<Student>();

    // First name
    tcr.addColumnDefinition(new StudentColumnDefinition<String>() {
      @Override
      public String getCellValue(Student rowValue) {
        return rowValue.getFirstName();
      }

      @Override
      public void setCellValue(Student rowValue, String cellValue) {
        rowValue.setFirstName(cellValue);
      }
    });

    // Last name
    tcr.addColumnDefinition(new StudentColumnDefinition<String>() {
      @Override
      public String getCellValue(Student rowValue) {
        return rowValue.getLastName();
      }

      @Override
      public void setCellValue(Student rowValue, String cellValue) {
        rowValue.setLastName(cellValue);
      }
    });

    // Age
    {
      StudentColumnDefinition<Integer> columnDef = new StudentColumnDefinition<Integer>() {
        @Override
        public Integer getCellValue(Student rowValue) {
          return rowValue.getAge();
        }

        @Override
        public void setCellValue(Student rowValue, Integer cellValue) {
          rowValue.setAge(cellValue);
        }
      };
      columnDef.setCellRenderer(intCellRenderer);
      tcr.addColumnDefinition(columnDef);
    }

    // Gender
    {
      StudentColumnDefinition<Boolean> columnDef = new StudentColumnDefinition<Boolean>() {
        @Override
        public Boolean getCellValue(Student rowValue) {
          return rowValue.isMale();
        }

        @Override
        public void setCellValue(Student rowValue, Boolean cellValue) {
          rowValue.setMale(cellValue);
        }
      };
      columnDef.setCellRenderer(new CellRenderer<Student, Boolean>() {
        public void renderRowValue(Student rowValue,
            ColumnDefinition<Student, Boolean> columnDef,
            HTMLCellView<Student> view) {
          if (rowValue.isMale()) {
            view.addHTML("male");
          } else {
            view.addHTML("female");
          }
        }

        public void renderRowValue(Student rowValue,
            ColumnDefinition<Student, Boolean> columnDef,
            TableCellView<Student> view) {
          if (rowValue.isMale()) {
            view.setHTML("male");
          } else {
            view.setHTML("female");
          }
        }
      });
      tcr.addColumnDefinition(columnDef);

      // Setup the cellEditor
      RadioCellEditor<Boolean> cellEditor = new RadioCellEditor<Boolean>();
      cellEditor.setLabel("Select a gender:");
      cellEditor.addRadioButton(new RadioButton("editorGender", "male"), true);
      cellEditor.addRadioButton(new RadioButton("editorGender", "female"),
          false);
      columnDef.setCellEditor(cellEditor);
    }

    // Race
    {
      StudentColumnDefinition<String> columnDef = new StudentColumnDefinition<String>() {
        @Override
        public String getCellValue(Student rowValue) {
          return rowValue.getRace();
        }

        @Override
        public void setCellValue(Student rowValue, String cellValue) {
          rowValue.setRace(cellValue);
        }
      };
      tcr.addColumnDefinition(columnDef);

      // Setup the cell editor
      ListCellEditor<String> cellEditor = new ListCellEditor<String>();
      for (int i = 0; i < StudentGenerator.races.length; i++) {
        String race = StudentGenerator.races[i];
        cellEditor.addItem(race, race);
      }
      columnDef.setCellEditor(cellEditor);
    }

    // Favorite color
    {
      StudentColumnDefinition<String> columnDef = new StudentColumnDefinition<String>() {
        @Override
        public String getCellValue(Student rowValue) {
          return rowValue.getFavoriteColor();
        }

        @Override
        public void setCellValue(Student rowValue, String cellValue) {
          rowValue.setFavoriteColor(cellValue);
        }
      };
      columnDef.setCellRenderer(new CellRenderer<Student, String>() {
        public void renderRowValue(Student rowValue,
            ColumnDefinition<Student, String> columnDef,
            HTMLCellView<Student> view) {
          String color = rowValue.getFavoriteColor();
          view.setStyleAttribute("color", color);
          view.addHTML(color);
        }

        public void renderRowValue(Student rowValue,
            ColumnDefinition<Student, String> columnDef,
            TableCellView<Student> view) {
          String color = rowValue.getFavoriteColor();
          view.setStyleAttribute("color", color);
          view.setHTML(color);
        }
      });
      tcr.addColumnDefinition(columnDef);

      // Setup the cell editor
      RadioCellEditor<String> cellEditor = new RadioCellEditor<String>();
      cellEditor.setLabel("Select a color:");
      for (int i = 0; i < StudentGenerator.colors.length; i++) {
        String color = StudentGenerator.colors[i];
        String text = "<FONT color=\"" + color + "\">" + color + "</FONT>";
        cellEditor.addRadioButton(new RadioButton("editorColor", text, true),
            color);
      }
      columnDef.setCellEditor(cellEditor);
    }

    // Favorite Sport
    {
      StudentColumnDefinition<String> columnDef = new StudentColumnDefinition<String>() {
        @Override
        public String getCellValue(Student rowValue) {
          return rowValue.getFavoriteSport();
        }

        @Override
        public void setCellValue(Student rowValue, String cellValue) {
          rowValue.setFavoriteSport(cellValue);
        }
      };
      tcr.addColumnDefinition(columnDef);

      // Setup the cell editor
      ListCellEditor<String> cellEditor = new ListCellEditor<String>();
      cellEditor.setLabel("Select a sport:");
      for (int i = 0; i < StudentGenerator.sports.length; i++) {
        String sport = StudentGenerator.sports[i];
        cellEditor.addItem(sport, sport);
      }
      columnDef.setCellEditor(cellEditor);
    }

    // College
    {
      StudentColumnDefinition<String> columnDef = new StudentColumnDefinition<String>() {
        @Override
        public String getCellValue(Student rowValue) {
          return rowValue.getCollege();
        }

        @Override
        public void setCellValue(Student rowValue, String cellValue) {
          rowValue.setCollege(cellValue);
        }
      };
      tcr.addColumnDefinition(columnDef);

      // Setup the cell editor
      TextCellEditor cellEditor = new TextCellEditor() {
        @Override
        public boolean onAccept() {
          if (getValue().equals("")) {
            Window.alert("You must enter a school");
            return false;
          }
          return true;
        }

        @Override
        protected int getOffsetLeft() {
          return -8;
        }

        @Override
        protected int getOffsetTop() {
          return -10;
        }
      };
      columnDef.setCellEditor(cellEditor);
    }

    // Graduation year
    {
      StudentColumnDefinition<Integer> columnDef = new StudentColumnDefinition<Integer>() {
        @Override
        public Integer getCellValue(Student rowValue) {
          return rowValue.getGraduationYear();
        }

        @Override
        public void setCellValue(Student rowValue, Integer cellValue) {
          rowValue.setGraduationYear(cellValue);
        }
      };
      columnDef.setCellRenderer(intCellRenderer);
      tcr.addColumnDefinition(columnDef);
    }

    // GPA
    {
      StudentColumnDefinition<Double> columnDef = new StudentColumnDefinition<Double>() {
        @Override
        public Double getCellValue(Student rowValue) {
          return rowValue.getGpa();
        }

        @Override
        public void setCellValue(Student rowValue, Double cellValue) {
          rowValue.setGpa(cellValue);
        }
      };
      columnDef.setCellRenderer(new CellRenderer<Student, Double>() {
        public void renderRowValue(Student rowValue,
            ColumnDefinition<Student, Double> columnDef,
            HTMLCellView<Student> view) {
          view.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
          double gpa = rowValue.getGpa();
          if (gpa < 2) {
            view.setStyleName("badGPA");
          } else if (gpa < 3) {
            view.setStyleName("goodGPA");
          } else {
            view.setStyleName("greatGPA");
          }
          view.addHTML(gpaToString(gpa));
        }

        public void renderRowValue(Student rowValue,
            ColumnDefinition<Student, Double> columnDef,
            TableCellView<Student> view) {
          view.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
          double gpa = rowValue.getGpa();
          if (gpa < 2) {
            view.setStyleName("badGPA");
          } else if (gpa < 3) {
            view.setStyleName("goodGPA");
          } else {
            view.setStyleName("greatGPA");
          }
          view.setHTML(gpaToString(gpa));
        }

        /**
         * Convert a double to human readable format with a max of 2 significant
         * digits.
         * 
         * @param gpa the GPA as a double
         * @return a more readable format of the GPA
         */
        private String gpaToString(Double gpa) {
          String gpaString = gpa.toString();
          if (gpaString.length() > 4) {
            gpaString = gpaString.substring(0, 4);
          }
          return gpaString;
        }
      });
      tcr.addColumnDefinition(columnDef);
    }

    // ID
    {
      StudentColumnDefinition<Integer> columnDef = new StudentColumnDefinition<Integer>() {
        @Override
        public Integer getCellValue(Student rowValue) {
          return rowValue.getId();
        }

        @Override
        public void setCellValue(Student rowValue, Integer cellValue) {
          rowValue.setId(cellValue);
        }
      };
      columnDef.setCellRenderer(intCellRenderer);
      tcr.addColumnDefinition(columnDef);
    }

    // Pin
    {
      StudentColumnDefinition<Integer> columnDef = new StudentColumnDefinition<Integer>() {
        @Override
        public Integer getCellValue(Student rowValue) {
          return rowValue.getPin();
        }

        @Override
        public void setCellValue(Student rowValue, Integer cellValue) {
          rowValue.setPin(cellValue);
        }
      };
      columnDef.setCellRenderer(intCellRenderer);
      tcr.addColumnDefinition(columnDef);
    }

    return tcr;
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
}
