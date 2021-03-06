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

package com.google.gwt.gen2.event.shared;

import com.google.gwt.gen2.event.dom.client.ClickEvent;
import com.google.gwt.gen2.event.dom.client.MouseDownEvent;
import com.google.gwt.gen2.event.dom.client.MouseDownHandler;

/**
 * Handler manager test.
 * 
 */
public class HandlerManagerTest extends HandlerTestBase {

  public void testAddHandlers() {

    HandlerManager manager = new HandlerManager("bogus source");
    addHandlers(manager);
  }

  private void addHandlers(HandlerManager manager) {
    manager.addHandler(MouseDownEvent.TYPE, mouse1);
    manager.addHandler(MouseDownEvent.TYPE, mouse2);
    manager.addHandler(MouseDownEvent.TYPE, adaptor1);
    manager.fireEvent(new MouseDownEvent(null));
    assertEquals(3, manager.getHandlerCount(MouseDownEvent.TYPE));
    assertFired(mouse1, mouse2, adaptor1);
    manager.addHandler(MouseDownEvent.TYPE, mouse3);
    assertEquals(4, manager.getHandlerCount(MouseDownEvent.TYPE));

    manager.addHandler(MouseDownEvent.TYPE, mouse1);
    manager.addHandler(MouseDownEvent.TYPE, mouse2);
    manager.addHandler(MouseDownEvent.TYPE, adaptor1);

    // You can indeed add handlers twice, they will only be removed one at a
    // time though.
    assertEquals(7, manager.getHandlerCount(MouseDownEvent.TYPE));
    manager.addHandler(ClickEvent.TYPE, adaptor1);
    manager.addHandler(ClickEvent.TYPE, click1);
    manager.addHandler(ClickEvent.TYPE, click2);

    assertEquals(7, manager.getHandlerCount(MouseDownEvent.TYPE));
    assertEquals(3, manager.getHandlerCount(ClickEvent.TYPE));

    reset();
    manager.fireEvent(new MouseDownEvent(null));
    assertFired(mouse1, mouse2, mouse3, adaptor1);
    assertNotFired(click1, click2);
  }

  public void testRemoveHandlers() {
    HandlerManager manager = new HandlerManager("bogus source");
    addHandlers(manager);
    // Gets rid of first instance.
    manager.removeHandler(MouseDownEvent.TYPE, adaptor1);
    manager.fireEvent(new MouseDownEvent(null));
    assertFired(mouse1, mouse2, mouse3, adaptor1);
    assertNotFired(click1, click2);

    // Gets rid of second instance.
    manager.removeHandler(MouseDownEvent.TYPE, adaptor1);
    reset();
    manager.fireEvent(new MouseDownEvent(null));
    assertFired(mouse1, mouse2, mouse3);
    assertNotFired(adaptor1, click1, click2);

    // Checks to see if click events are still working.
    reset();
    manager.fireEvent(new ClickEvent(null));
    assertNotFired(mouse1, mouse2, mouse3);
    assertFired(click1, click2, adaptor1);
  }

  public void testMultiFiring() {

    HandlerManager manager = new HandlerManager("source1");

    final HandlerManager manager2 = new HandlerManager("source2");

    manager.addHandler(MouseDownEvent.TYPE, mouse1);

    manager.addHandler(MouseDownEvent.TYPE, new MouseDownHandler() {

      public void onMouseDown(MouseDownEvent event) {
        manager2.fireEvent(event);
      }

    });
    manager.addHandler(MouseDownEvent.TYPE, mouse3);
    manager2.addHandler(MouseDownEvent.TYPE, adaptor1);
    manager2.addHandler(MouseDownEvent.TYPE, new MouseDownHandler() {

      public void onMouseDown(MouseDownEvent event) {
        assertEquals("source2", event.getSource());
      }

    });
    manager.addHandler(MouseDownEvent.TYPE, new MouseDownHandler() {

      public void onMouseDown(MouseDownEvent event) {
        assertEquals("source1", event.getSource());
      }

    });

    reset();
    manager.fireEvent(new MouseDownEvent(null));
    assertFired(mouse1, adaptor1, mouse3);
  }
}
