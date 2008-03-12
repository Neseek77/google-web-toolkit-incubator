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

package com.google.gwt.demos.pinnedpanel.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.WindowResizeListener;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.gwt.user.client.ui.ToggleButton;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.widgetideas.client.CollapsiblePanel;
import com.google.gwt.widgetideas.client.FastTree;
import com.google.gwt.widgetideas.client.FastTreeItem;

import java.util.ArrayList;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class PinnedPanelDemo implements EntryPoint {

  /**
   * A special purpose widget to allow scrollable stack panels.
   */
  public class MyStackPanel extends StackPanel {
    private ArrayList scrollers = new ArrayList();

    public void insert(Widget w, int before) {
      ScrollPanel p = new ScrollPanel(w);
      p.setWidth("100%");
      scrollers.add(before, p);
      super.insert(p, before);
    }

    public void onLoad() {
      setWidth("100%");
      showStack(getSelectedIndex());
    }

    /**
     * Shows the widget at the specified child index.
     * 
     * @param index the index of the child to be shown
     */
    public void showStack(int index) {
      super.showStack(index);

      if (this.isAttached()) {
        ScrollPanel me = (ScrollPanel) scrollers.get(index);
        me.setHeight("1px");
        Element tr = DOM.getChild(DOM.getFirstChild(getElement()),
            index * 2 + 1);
        int trHeight = DOM.getElementPropertyInt(tr, "offsetHeight");
        me.setHeight(trHeight + "px");
      }
    }
  }

  ToggleButton controlButton;

  /**
   * This is the entry point method.
   */
  public void onModuleLoad() {

    // Some random contents to make the tree interesting.
    Panel contents = createSchoolNavBar();
    FastTree.addDefaultCSS();

    // The actual pinned panel.
    final CollapsiblePanel pinned = new CollapsiblePanel();
    RootPanel.get("pinned-panel").add(pinned);
    pinned.initContents(contents);
    pinned.hookupControlToggle(controlButton);
    pinned.addChangeListener(new ChangeListener() {

      public void onChange(Widget sender) {
        RootPanel.get().add(
            new Label("Pinned panel collapsed:" + pinned.isCollapsed()));
      }

    });
    sizePinnedPanel(pinned, Window.getClientHeight());
    Window.addWindowResizeListener(new WindowResizeListener() {
      public void onWindowResized(int width, int height) {
        sizePinnedPanel(pinned, height);
      }
    });
  }

  private Panel createSchoolNavBar() {
    controlButton = createToggleButton();
    MyStackPanel wrapper = new MyStackPanel();
    FlowPanel navBar = new FlowPanel();
    navBar.setSize("200px", "100%");
    final HTML title = new HTML("School Directory");

    HorizontalPanel panel = new HorizontalPanel();
    panel.setWidth("100%");
    panel.add(controlButton);
    panel.setCellHorizontalAlignment(controlButton,
        HasHorizontalAlignment.ALIGN_LEFT);
    panel.setCellWidth(controlButton, "1px");
    panel.add(title);
    panel.setCellHorizontalAlignment(title, HorizontalPanel.ALIGN_CENTER);

    navBar.add(panel);

    panel.setStyleName("nav-Tree-title");
    wrapper = new MyStackPanel();
    wrapper.setHeight("250px");

    final FastTree contents = new FastTree();
    wrapper.add(contents, "<b>People</b>", true);

    wrapper.add(new Label("None"), "<b>Academics</b>", true);
    navBar.add(wrapper);

    FastTreeItem students = contents.addItem("Students");
    students.addItem("Jill");
    students.addItem("Jack");
    students.addItem("Molly");
    students.addItem("Ms. Muffat");

    FastTreeItem teachers = contents.addItem("Teachers");
    teachers.addItem("Mrs Black");
    teachers.addItem("Mr White");

    FastTreeItem admin = contents.addItem("Administrators");
    admin.addItem("The Soup Nazi");
    admin.addItem("The Grand High Supreme Master Pubba");
    title.addClickListener(new ClickListener() {

      public void onClick(Widget sender) {
        Window.alert("this:" + contents.getAbsoluteLeft());
      }

    });
    return navBar;
  }

  private ToggleButton createToggleButton() {
    Image show = new Image("show.gif");
    Image hide = new Image("hide.gif");
    ToggleButton toggler = new ToggleButton(hide, show);
    return toggler;
  }

  private void sizePinnedPanel(final CollapsiblePanel pinned, int height) {
    pinned.setHeight(height - 10 + "px");
  }
}
