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
package com.google.gwt.widgetideas.table.client;

import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.TextBoxBase;

/**
 * A text editor used to edit a single line of text.
 * 
 * @param <R> the type of the row value associated with the editor
 * @deprecated Replaced by
 *             {@link com.google.gwt.gen2.table.client.TextCellEditor}
 */
@Deprecated
public class TextCellEditor<R> extends InlineCellEditor<R> {
  /**
   * The text field used in this editor.
   */
  private TextBoxBase textBox;

  /**
   * Constructor.
   */
  public TextCellEditor() {
    this(new TextBox());
  }

  /**
   * Constructor.
   * 
   * @param textBox the text box to use
   */
  public TextCellEditor(TextBoxBase textBox) {
    super(textBox);
    this.textBox = textBox;
  }

  /**
   * Constructor.
   * 
   * @param textBox the text box to use
   * @param images the images to use for the accept/cancel buttons
   */
  public TextCellEditor(TextBoxBase textBox, InlineCellEditorImages images) {
    super(textBox, images);
    this.textBox = textBox;
  }

  /**
   * @see AbstractCellEditor#editCell(CellEditInfo, Callback)
   */
  @Override
  public void editCell(CellEditInfo<R> cellEditInfo, Callback<R> callback) {
    super.editCell(cellEditInfo, callback);
    textBox.setFocus(true);
  }

  /**
   * @return the text box used in the editor
   */
  protected TextBoxBase getTextBox() {
    return textBox;
  }

  @Override
  protected Object getValue() {
    return textBox.getText();
  }

  @Override
  protected void setValue(Object value) {
    if (value == null) {
      value = "";
    }
    textBox.setText(value.toString());
  }
}
