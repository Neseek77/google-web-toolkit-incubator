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

import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Event;

/**
 * An interface for tables. All of these methods are implemented in the
 * HTMLTable class.
 */
public interface HasTableCells {
  /**
   * Gets the number of cells in a given row.
   * 
   * @param row the row whose cells are to be counted
   * @return the number of cells present in the row
   */
  int getCellCount(int row);

  /**
   * Gets the amount of padding that is added around all cells.
   * 
   * @return the cell padding, in pixels
   */
  int getCellPadding();

  /**
   * Gets the amount of spacing that is added around all cells.
   * 
   * @return the cell spacing, in pixels
   */
  int getCellSpacing();

  /**
   * Determines the TD associated with the specified event.
   * 
   * @param event the event to be queried
   * @return the TD associated with the event, or <code>null</code> if none is
   *         found.
   */
  Element getEventTargetCell(Event event);

  /**
   * Sets the amount of padding to be added around all cells.
   * 
   * @param padding the cell padding, in pixels
   */
  void setCellPadding(int padding);

  /**
   * Sets the amount of spacing to be added around all cells.
   * 
   * @param spacing the cell spacing, in pixels
   */
  void setCellSpacing(int spacing);
}
