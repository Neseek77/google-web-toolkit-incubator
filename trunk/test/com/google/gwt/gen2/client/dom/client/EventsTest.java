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
package com.google.gwt.gen2.event.dom.client;

import com.google.gwt.gen2.event.shared.AbstractEvent;
import com.google.gwt.gen2.event.shared.HandlerManager;
import com.google.gwt.gen2.event.shared.HandlerRegistration;

import junit.framework.TestCase;

/**
 * TODO
 */
public class EventsTest extends TestCase {

  private HandlerManager manager;

  public void setUp() {
    manager = new HandlerManager(this);
  }

  static class Flag {

    public boolean flag = false;
  }

  public void testKeyEvents() {

    final Flag flag = new Flag();
    HandlerRegistration downRegistration = manager.addHandler(
        KeyDownEvent.KEY, new KeyDownHandler() {
          public void onKeyDown(KeyDownEvent event) {
            flag.flag = true;
          }
        });
    HandlerRegistration upRegistration = manager.addHandler(
        KeyUpEvent.KEY, new KeyUpHandler() {
          public void onKeyUp(KeyUpEvent event) {
            flag.flag = true;
          }
        });

    HandlerRegistration pressRegistration = manager.addHandler(
        KeyPressedEvent.KEY, new KeyPressedHandler() {
          public void onKeyPressed(KeyPressedEvent event) {
            flag.flag = true;
          }
        });

    checkFire(new KeyDownEvent(null), downRegistration, flag, "onKeyDown");
    checkFire(new KeyUpEvent(null), upRegistration, flag, "onKeyUp");
    checkFire(new KeyPressedEvent(null), pressRegistration, flag,
        "onKeyPressed");
  }

  public void testMouseEvents() {

    final Flag flag = new Flag();
    HandlerRegistration downRegistration = manager.addHandler(
        MouseDownEvent.KEY, new MouseDownHandler() {
          public void onMouseDown(MouseDownEvent event) {
            flag.flag = true;
          }
        });
    HandlerRegistration upRegistration = manager.addHandler(
        MouseUpEvent.KEY, new MouseUpHandler() {
          public void onMouseUp(MouseUpEvent event) {
            flag.flag = true;
          }
        });

    HandlerRegistration clickRegistration = manager.addHandler(
        ClickEvent.KEY, new ClickHandler() {
          public void onClick(ClickEvent event) {
            flag.flag = true;
          }
        });

    HandlerRegistration dblclickRegistration = manager.addHandler(
        DoubleClickEvent.KEY, new DoubleClickHandler() {
          public void onDoubleClick(DoubleClickEvent event) {
            flag.flag = true;
          }
        });

    HandlerRegistration outRegistration = manager.addHandler(
        MouseOutEvent.KEY, new MouseOutHandler() {
          public void onMouseOut(MouseOutEvent event) {
            flag.flag = true;
          }
        });
    HandlerRegistration overRegistration = manager.addHandler(
        MouseOverEvent.KEY, new MouseOverHandler() {
          public void onMouseOver(MouseOverEvent event) {
            flag.flag = true;
          }
        });

    HandlerRegistration moveRegistration = manager.addHandler(
        MouseMoveEvent.KEY, new MouseMoveHandler() {
          public void onMouseMove(MouseMoveEvent event) {
            flag.flag = true;
          }
        });

    HandlerRegistration wheelRegistration = manager.addHandler(
        MouseWheelEvent.KEY, new MouseWheelHandler() {
          public void onMouseWheel(MouseWheelEvent event) {
            flag.flag = true;
          }
        });

    checkFire(new MouseDownEvent(null), downRegistration, flag, "onMouseDown");
    checkFire(new MouseUpEvent(null), upRegistration, flag, "onMouseUp");
    checkFire(new MouseOutEvent(null), outRegistration, flag, "onMouseOut");
    checkFire(new MouseOverEvent(null), overRegistration, flag, "onMouseOver");
    checkFire(new MouseMoveEvent(null), moveRegistration, flag, "onMouseMove");
    checkFire(new MouseWheelEvent(null), wheelRegistration, flag,
        "onMouseWheel");
    checkFire(new ClickEvent(null), clickRegistration, flag, "onClick");
    checkFire(new DoubleClickEvent(null), dblclickRegistration, flag,
        "onDoubleClick");
  }

  private void checkFire(AbstractEvent event, HandlerRegistration registration,
      Flag flag, String eventName) {

    flag.flag = false;
    manager.fireEvent(event);
    assertTrue(eventName + " didn't fire.", flag.flag);

    flag.flag = false;
    registration.removeHandler();
    manager.fireEvent(event);
    assertTrue(eventName + " fired when it shouldn't have.", !flag.flag);
  }
}
