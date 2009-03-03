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

/**
 * A row/column pairing used for confirming values.
 */
class CellPair {
  /**
   * The row index.
   */
  private int row;

  /**
   * The column index.
   */
  private int column;

  /**
   * Constructor.
   * 
   * @param row the row index
   * @param column the column index
   */
  public CellPair(int row, int column) {
    this.row = row;
    this.column = column;
  }

  /**
   * Confirm that this pair equals the specified pair.
   * 
   * @param row the row index
   * @param column the column index
   */
  public void assertPair(int row, int column) {
    ClientTableModelTest.assertEquals(this.row, row);
    ClientTableModelTest.assertEquals(this.column, column);
  }
}