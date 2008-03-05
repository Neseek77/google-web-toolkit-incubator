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

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.SourcesTableEvents;
import com.google.gwt.user.client.ui.TableListener;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.widgetideas.table.client.SortableColumnsListener;
import com.google.gwt.widgetideas.table.client.SortableFixedWidthGrid;
import com.google.gwt.widgetideas.table.client.SourceTableSelectionEvents;
import com.google.gwt.widgetideas.table.client.TableSelectionListener;
import com.google.gwt.widgetideas.table.client.TableModel.ColumnSortList;

/**
 * Logs events fired by the ScrollTable.
 */
public class DemoTabPanelLog extends DemoTab implements TableSelectionListener,
    ClickListener, SortableColumnsListener, TableListener {
  /**
   * The button used to clear the log.
   */
  Button clearButton = new Button("Clear Log", this);

  /**
   * The label that contains the log info.
   */
  HTML label = new HTML();

  /**
   * The line count in the log.
   */
  int lineCount = 0;

  /**
   * The scroll panel that holds the log.
   */
  ScrollPanel scrollPanel = new ScrollPanel(label);

  public void onAllRowsDeselected(SourceTableSelectionEvents sender) {
    addText("all rows deselected", "green");
  }

  public void onCellClicked(SourcesTableEvents sender, int row, int cell) {
    addText("cell clicked: (" + row + "," + cell + ")", "#ff00ff");
  }

  public void onCellHover(SourceTableSelectionEvents sender, int row, int cell) {
  }

  public void onCellUnhover(SourceTableSelectionEvents sender, int row, int cell) {
  }

  /**
   * Handle click events from the buttons in this panel.
   * 
   * @param sender
   */
  public void onClick(Widget sender) {
    if (sender == clearButton) {
      label.setHTML("");
      lineCount = 0;
    }
  }

  /**
   * Fired when the currently sorted column changes.
   * 
   * @param sortList the list of sorted columns
   */
  public void onColumnSorted(ColumnSortList sortList) {
    int column = -1;
    boolean ascending = true;
    if (sortList != null) {
      column = sortList.getPrimaryColumn();
      ascending = sortList.isPrimaryAscending();
    }
    if (ascending) {
      addText("sorted column: " + column + " (ascending)", "black");
    } else {
      addText("sorted column: " + column, "black");
    }
  }

  /**
   * Fired when a row is deselected.
   * 
   * @param row the row index
   */
  public void onRowDeselected(SourceTableSelectionEvents sender, int row) {
    addText("row deselected: " + row, "green");
  }

  /**
   * Fired when one or more rows are selected.
   * 
   * @param firstRow the row index of the first row
   * @param numRows the number of selected rows
   */
  public void onRowsSelected(SourceTableSelectionEvents sender, int firstRow,
      int numRows) {
    int lastRow = firstRow + numRows - 1;
    addText("rows selected: " + firstRow + " through " + lastRow, "blue");
  }

  @Override
  protected Widget onInitialize() {
    SortableFixedWidthGrid dataTable = ScrollTableDemo.getDataTable();
    label.setHeight("200px");
    scrollPanel.setWidth("95%");
    scrollPanel.setHeight("200px");
    DOM.setStyleAttribute(label.getElement(), "font", "8pt/10pt courier");
    DOM.setStyleAttribute(scrollPanel.getElement(), "border", "1px solid black");
    dataTable.addTableSelectionListener(this);
    dataTable.addSortableColumnsListener(this);

    VerticalPanel panel = new VerticalPanel();
    panel.setWidth("100%");
    panel.add(scrollPanel);
    panel.add(clearButton);
    return panel;
  }

  /**
   * Add some data to the log.
   * 
   * @param text the text to add
   * @param color the text color
   */
  private void addText(String text, String color) {
    text = "<B>" + lineCount + ":</B> " + "<FONT color=\"" + color + "\">"
        + text + "</FONT>" + "<BR>" + label.getHTML();
    label.setHTML(text);
    lineCount++;
  }
}
