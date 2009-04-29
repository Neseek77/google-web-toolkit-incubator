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
package com.google.gwt.gen2.picker.client;

import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.datepicker.client.DatePicker;

import java.util.Date;

/**
 * The {@link DateTimePicker} combines a {@link DatePicker} and a
 * {@link TimePicker}
 * 
 */

public class DateTimePicker extends Composite {
  private DatePicker datePicker;
  private TimePicker timePicker;

  private ValueChangeHandler<Date> datePickerChangeHandler = new ValueChangeHandler<Date>() {
    public void onValueChange(ValueChangeEvent<Date> event) {
      timePicker.setDate(event.getValue());
    }
  };
  private ValueChangeHandler<Date> timePickerChangeHandler = new ValueChangeHandler<Date>() {

    public void onValueChange(ValueChangeEvent<Date> event) {
      datePicker.setValue(event.getValue());
    }
  };

  /**
   * Creates a {@link TimePicker} instance using the current date as initial
   * value
   * 
   * @param use24Hours
   */
  public DateTimePicker(boolean use24Hours) {
    this(new DatePicker(), new TimePicker(use24Hours));
  }

  /**
   * @param datePicker the {@link DatePicker} to be used
   * @param timePicker the {@link TimePicker} to be used
   */
  public DateTimePicker(DatePicker datePicker, TimePicker timePicker) {
    this.datePicker = datePicker;
    this.timePicker = timePicker;
    VerticalPanel verticalPanel = new VerticalPanel();
    verticalPanel.setHorizontalAlignment(VerticalPanel.ALIGN_CENTER);
    verticalPanel.add(datePicker);
    datePicker.setWidth("100%");
    verticalPanel.add(timePicker);
    timePicker.addValueChangeHandler(timePickerChangeHandler);
    datePicker.addValueChangeHandler(datePickerChangeHandler);
    initWidget(verticalPanel);
  }

  /**
   * @return the entered date
   */
  public Date getDate() {
    return timePicker.getDateTime();
  }

  /**
   * @return the {@link DatePicker}
   */
  public DatePicker getDatePicker() {
    return datePicker;
  }

  /**
   * @return the {@link TimePicker}
   */
  public TimePicker getTimePicker() {
    return timePicker;
  }

  /**
   * @return Gets whether this widget is enabled
   */
  public boolean isEnabled() {
    return timePicker.isEnabled();
  }

  /**
   * Sets whether this widget is enabled.
   * 
   * @param enabled true to enable the widget, false to disable it
   */
  public void setEnabled(boolean enabled) {
    timePicker.setEnabled(enabled);
  }
}