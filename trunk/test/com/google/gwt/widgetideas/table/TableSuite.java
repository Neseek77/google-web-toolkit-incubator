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

package com.google.gwt.widgetideas.table;

import com.google.gwt.junit.tools.GWTTestSuite;
import com.google.gwt.widgetideas.table.client.CachedTableModelTest;
import com.google.gwt.widgetideas.table.client.ClientTableModelTest;
import com.google.gwt.widgetideas.table.client.FixedWidthFlexTableTest;
import com.google.gwt.widgetideas.table.client.FixedWidthGridTest;
import com.google.gwt.widgetideas.table.client.FlexTableBulkRendererTest;
import com.google.gwt.widgetideas.table.client.GridBulkRendererTest;
import com.google.gwt.widgetideas.table.client.GridTest;
import com.google.gwt.widgetideas.table.client.InlineCellEditorTest;
import com.google.gwt.widgetideas.table.client.ListCellEditorTest;
import com.google.gwt.widgetideas.table.client.ListTableModelTest;
import com.google.gwt.widgetideas.table.client.PagingScrollTableTest;
import com.google.gwt.widgetideas.table.client.RadioCellEditorTest;
import com.google.gwt.widgetideas.table.client.ReadOnlyTableModelTest;
import com.google.gwt.widgetideas.table.client.ScrollTableTest;
import com.google.gwt.widgetideas.table.client.SelectionGridTest;
import com.google.gwt.widgetideas.table.client.SortableGridTest;
import com.google.gwt.widgetideas.table.client.TableModelTest;
import com.google.gwt.widgetideas.table.client.TextCellEditorTest;

import junit.framework.Test;

/**
 * Table suite.
 */

public class TableSuite {
  public static Test suite() {
    GWTTestSuite suite = new GWTTestSuite(
        "Test for com.google.gwt.widgetideas.table.client");

    suite.addTestSuite(FlexTableBulkRendererTest.class);
    suite.addTestSuite(FixedWidthGridTest.class);
    suite.addTestSuite(PagingScrollTableTest.class);
    suite.addTestSuite(ListTableModelTest.class);
    suite.addTestSuite(GridBulkRendererTest.class);
    suite.addTestSuite(ListCellEditorTest.class);
    suite.addTestSuite(FixedWidthFlexTableTest.class);
    suite.addTestSuite(TextCellEditorTest.class);
    suite.addTestSuite(SelectionGridTest.class);
    suite.addTestSuite(ClientTableModelTest.class);
    suite.addTestSuite(TableModelTest.class);
    suite.addTestSuite(GridTest.class);
    suite.addTestSuite(SortableGridTest.class);
    suite.addTestSuite(ScrollTableTest.class);
    suite.addTestSuite(ReadOnlyTableModelTest.class);
    suite.addTestSuite(RadioCellEditorTest.class);
    suite.addTestSuite(InlineCellEditorTest.class);
    suite.addTestSuite(CachedTableModelTest.class);

    return suite;
  }

}
