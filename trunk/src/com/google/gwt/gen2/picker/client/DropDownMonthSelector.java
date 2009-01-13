/*
 * Copyright 2008 Isaac Truett.
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

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.gen2.event.logical.shared.SelectionEvent;
import com.google.gwt.gen2.event.logical.shared.SelectionHandler;
import com.google.gwt.gen2.selection.client.DropDownListBox;
import com.google.gwt.gen2.table.override.client.Grid;
import com.google.gwt.gen2.table.override.client.HTMLTable.CellFormatter;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.ui.PushButton;
import com.google.gwt.user.datepicker.client.MonthSelector;

import java.util.Date;

/**
 * A {@link MonthSelector} that uses {@link DropDownListBox} for selecting month
 * and year.
 */
public class DropDownMonthSelector extends MonthSelector {
  private static final DateTimeFormat MONTH_NAME_FORMAT = DateTimeFormat.getFormat("MMMM");
  private static final DateTimeFormat MONTH_ABBREVIATION_FORMAT = DateTimeFormat.getFormat("MMM");

  /* java.util.date subtracts 1900 from years */
  private static final int MAGIC_YEAR_CONSTANT = 1900;

  private int startYear;
  private int yearsToDisplay;

  private PushButton backwards;
  private PushButton forwards;
  private DropDownListBox<Integer> monthList;
  private DropDownListBox<Integer> yearList;

  private Grid grid;
  private String[] monthAbbreviations;

  /**
   * Creates a new <code>DropDownMonthSelector</code>.
   * 
   * @param startYear
   * @param yearsToDisplay
   */
  public DropDownMonthSelector(int startYear, int yearsToDisplay) {
    assert yearsToDisplay > 0 : "Cannot display fewer than one year";
    this.startYear = startYear;
    this.yearsToDisplay = yearsToDisplay;
  }

  /**
   * @see com.google.gwt.user.datepicker.client.DatePickerComponent#refresh()
   */
  @SuppressWarnings/* uses deprecated Date methods */( {"deprecation", "boxing"})
  @Override
  protected void refresh() {
    final int selectedMonth = getModel().getCurrentMonth().getMonth();

    if (monthList.getValue() == null
        || !monthList.getValue().equals(selectedMonth)) {
      monthList.setValue(selectedMonth);
      monthList.getButton().setHTML(monthAbbreviations[selectedMonth]);
    }

    final int adjustedSelectedYear = getModel().getCurrentMonth().getYear()
        + MAGIC_YEAR_CONSTANT;

    if (yearList.getValue() == null
        || !yearList.getValue().equals(adjustedSelectedYear)) {
      yearList.setValue(adjustedSelectedYear);
      yearList.getButton().setHTML(String.valueOf(adjustedSelectedYear));
    }
  }

  /**
   * @see com.google.gwt.user.datepicker.client.DatePickerComponent#setup()
   */
  @SuppressWarnings/* uses deprecated Date methods */( {"deprecation", "boxing"})
  @Override
  protected void setup() {
    monthList = new DropDownListBox<Integer>(
        MONTH_ABBREVIATION_FORMAT.format(getModel().getCurrentMonth()));

    monthList.addStyleName("gwt-DropDownMonthSelector-month");
    
    monthAbbreviations = new String[12];

    for (int a = 0; a < 12; a++) {
      Date month = new Date(1, a, 1);
      monthAbbreviations[a] = MONTH_ABBREVIATION_FORMAT.format(month);
      monthList.addItem(monthAbbreviations[a], a,
          MONTH_NAME_FORMAT.format(month));
    }

    monthList.addSelectionHandler(new SelectionHandler<Integer>() {
      public void onSelection(SelectionEvent<Integer> event) {
        if (monthList.getValue() == null
            || !monthList.getValue().equals(
                getModel().getCurrentMonth().getMonth())) {
          addMonths(event.getNewValue()
              - getModel().getCurrentMonth().getMonth());
          monthList.getButton().setHTML(monthAbbreviations[event.getNewValue()]);
        }
      }
    });

    setupYearList();

    // Set up backwards.
    backwards = new PushButton();
    backwards.addClickHandler(new ClickHandler() {
      public void onClick(final ClickEvent event) {
        addMonths(-1);
      }
    });

    backwards.getUpFace().setHTML("&laquo;");
    backwards.setStyleName("gwt-DatePickerBackwardButton");

    forwards = new PushButton();
    forwards.getUpFace().setHTML("&raquo;");
    forwards.setStyleName("gwt-DatePickerForwardButton");
    forwards.addClickHandler(new ClickHandler() {
      public void onClick(final ClickEvent event) {
        addMonths(+1);
      }
    });

    // Set up grid.
    grid = new Grid(1, 5);
    grid.setWidget(0, 0, backwards);
    grid.setWidget(0, 1, monthList);
    grid.setWidget(0, 3, yearList);
    grid.setWidget(0, 4, forwards);

    CellFormatter formatter = grid.getCellFormatter();
    formatter.setStyleName(0, 1, "gwt-DatePickerMonth");
    formatter.setStyleName(0, 3, "gwt-DatePickerMonth");
    grid.setStyleName("gwt-DatePickerDays");
    initWidget(grid);
  }

  private void setupYearList() {
    if (yearList == null) {
      createYearList();
    } else {
      // TODO add removeItem() and clear() to DropDownListBox and remove this
      // ugliness
      createYearList();
      grid.setWidget(0, 3, yearList);
    }

    for (int a = startYear; a < startYear + yearsToDisplay; a++) {
      yearList.addItem(String.valueOf(a), a);
    }
  }

  private void createYearList() {
    yearList = new DropDownListBox<Integer>(
        String.valueOf(getModel().getCurrentMonth().getYear()
            + MAGIC_YEAR_CONSTANT));
    
    yearList.addStyleName("gwt-DropDownMonthSelector-year");

    yearList.addSelectionHandler(new SelectionHandler<Integer>() {
      public void onSelection(SelectionEvent<Integer> event) {
        if (yearList.getValue() == null
            || !yearList.getValue().equals(
                getModel().getCurrentMonth().getYear() + MAGIC_YEAR_CONSTANT)) {
          addMonths((event.getNewValue() - MAGIC_YEAR_CONSTANT - getModel().getCurrentMonth().getYear()) * 12);
          yearList.getButton().setHTML(String.valueOf(event.getNewValue()));
        }
      }
    });
  }

  /**
   * @see com.google.gwt.user.datepicker.client.DatePickerComponent#addMonths(int)
   */
  @Override
  protected void addMonths(int numMonths) {
    getModel().shiftCurrentMonth(numMonths);
    refreshAll();
  }

  /**
   * Sets the first year to display in the year drop down.
   * 
   * @param startYear
   */
  public void setStartYear(final int startYear) {
    this.startYear = startYear;
    setupYearList();
  }

  /**
   * Sets the number of years to display in the year drop down.
   * 
   * @param yearsToDisplay
   */
  public void setYearsToDisplay(final int yearsToDisplay) {
    this.yearsToDisplay = yearsToDisplay;
    setupYearList();
  }
}
