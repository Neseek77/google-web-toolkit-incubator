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
import com.google.gwt.gen2.table.client.CachedTableModel;
import com.google.gwt.gen2.table.client.PagingScrollTable;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

/**
 * Panel with options for paging.
 */
public class ModeledTabPaging extends DemoTab implements ClickListener {
  /**
   * The cache size.
   */
  private TextBox cacheSizeBox = new TextBox();

  /**
   * The button used to set the post cache size.
   */
  private Button cachePostSizeButton = new Button("Set Post Cache Size", this);

  /**
   * The button used to set the pre cache size.
   */
  private Button cachePreSizeButton = new Button("Set Pre Cache Size", this);

  /**
   * The button used to toggle error mode.
   */
  private Button errorModeButton = new Button("Toggle Error Mode", this);

  /**
   * The main layout grid.
   */
  private Grid grid = null;

  /**
   * The num rows box.
   */
  private TextBox numRowsBox = new TextBox();

  /**
   * The button used to set the number of rows.
   */
  private Button numRowsButton = new Button("Set Num Rows", this);

  /**
   * The page size box.
   */
  private TextBox pageSizeBox = new TextBox();

  /**
   * The button used to set the number of rows per page.
   */
  private Button pageSizeButton = new Button("Set Page Size", this);

  /**
   * The button used to toggle RPC mode.
   */
  private Button rpcModeButton = new Button("Toggle RPC Mode", this);

  /**
   * The button used to toggle zero mode.
   */
  private Button zeroModeButton = new Button("Toggle Zero Mode", this);

  /**
   * Handle click events from the buttons in this panel.
   * 
   * @param sender
   */
  public void onClick(Widget sender) {
    PagingScrollTable<Student> scrollTable = PagingScrollTableDemo.getPagingScrollTable();
    DataSourceTableModel tableModel = PagingScrollTableDemo.getTableModel();
    CachedTableModel<Student> cachedTableModel = PagingScrollTableDemo.getCachedTableModel();
    try {
      if (sender == numRowsButton) {
        // Set number of rows
        int numRows = Integer.parseInt(numRowsBox.getText());
        cachedTableModel.setRowCount(numRows);
      } else if (sender == pageSizeButton) {
        // Set page size
        int pageSize = Integer.parseInt(pageSizeBox.getText());
        scrollTable.setPageSize(pageSize);
      } else if (sender == cachePreSizeButton) {
        // Set Precached rows
        int cacheSize = Integer.parseInt(cacheSizeBox.getText());
        cachedTableModel.setPreCachedRowCount(cacheSize);
      } else if (sender == cachePostSizeButton) {
        // Set Post cached rows
        int cacheSize = Integer.parseInt(cacheSizeBox.getText());
        cachedTableModel.setPostCachedRowCount(cacheSize);
      } else if (sender == errorModeButton) {
        // Toggle error mode
        boolean enabled = tableModel.isErrorModeEnabled();
        tableModel.setErrorModeEnabled(!enabled);
        if (enabled) {
          grid.setHTML(3, 1, "disabled");
        } else {
          grid.setHTML(3, 1, "enabled");
        }
      } else if (sender == rpcModeButton) {
        // Toggle RPC mode
        boolean enabled = tableModel.isRPCModeEnabled();
        tableModel.setRPCModeEnabled(!enabled);
        if (enabled) {
          grid.setHTML(4, 1, "disabled");
        } else {
          grid.setHTML(4, 1, "enabled");
        }
      } else if (sender == zeroModeButton) {
        // Toggle RPC mode
        boolean enabled = tableModel.isZeroModeEnabled();
        tableModel.setZeroModeEnabled(!enabled);
        if (enabled) {
          grid.setHTML(5, 1, "disabled");
        } else {
          grid.setHTML(5, 1, "enabled");
        }
      }
    } catch (NumberFormatException e) {
      Window.alert("Please enter valid integers for the row and column.");
    }
  }

  @Override
  protected Widget onInitialize() {
    grid = new Grid(6, 3);

    // Num Rows
    HorizontalPanel panel1 = new HorizontalPanel();
    panel1.add(numRowsButton);
    numRowsBox.setWidth("50px");
    numRowsBox.setText("1000");
    grid.setHTML(0, 0, "<B>Num Rows:</B>");
    grid.setWidget(0, 1, numRowsBox);
    grid.setWidget(0, 2, panel1);

    // Page Size
    HorizontalPanel panel2 = new HorizontalPanel();
    panel2.add(pageSizeButton);
    pageSizeBox.setWidth("50px");
    pageSizeBox.setText("8");
    grid.setHTML(1, 0, "<B>Page Size:</B>");
    grid.setWidget(1, 1, pageSizeBox);
    grid.setWidget(1, 2, panel2);

    // Cache size
    HorizontalPanel panel3 = new HorizontalPanel();
    panel3.add(cachePreSizeButton);
    panel3.add(new HTML("&nbsp;"));
    panel3.add(cachePostSizeButton);
    cacheSizeBox.setWidth("50px");
    cacheSizeBox.setText("16");
    grid.setHTML(2, 0, "<B>Cache Size:</B>");
    grid.setWidget(2, 1, cacheSizeBox);
    grid.setWidget(2, 2, panel3);

    // Error mode
    grid.setWidget(3, 0, errorModeButton);
    grid.setHTML(3, 1, "disabled");
    grid.setHTML(3, 2, "If the table model throws an error during a paging "
        + "request, the ScrollTable will display the error gracefully.");

    // RPC mode
    grid.setWidget(4, 0, rpcModeButton);
    grid.setHTML(4, 1, "disabled");
    grid.setHTML(4, 2, "Retrieve data from a server using an RPC request"
        + " instead of generating data locally. This requests an RPC server.");

    // RPC mode
    grid.setWidget(5, 0, zeroModeButton);
    grid.setHTML(5, 1, "disabled");
    grid.setHTML(5, 2, "Enable to return zero results for each request, "
        + "resulting in a special widget being display.");

    return grid;
  }
}
