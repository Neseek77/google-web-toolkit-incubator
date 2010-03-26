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

import com.google.gwt.widgetideas.table.client.TableModel.ColumnSortList;

import java.util.ArrayList;
import java.util.Iterator;

/**
 * A helper class for implementers of the {@link SourceTableDataRequestEvents}
 * interface. This subclass of {@link ArrayList} assumes that all objects added
 * to it will be of type {@link TableDataRequestListener}.
 */
public class TableDataRequestListenerCollection extends ArrayList {
  /**
   * Fired when the source requests data.
   * 
   * @param firstRow the start row of the request
   * @param rowCount the number of rows of data to request
   * @param sortList detailed information of column sorting
   */
  public void fireRequestData(int firstRow, int rowCount,
      ColumnSortList sortList) {
    for (Iterator it = iterator(); it.hasNext();) {
      TableDataRequestListener listener = (TableDataRequestListener) it.next();
      listener.onRequestData(firstRow, rowCount, sortList);
    }
  }
}
