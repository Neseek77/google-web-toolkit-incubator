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

package com.google.gwt.gen2.widgetbase.client;

import com.google.gwt.gen2.event.dom.client.DomEvent;
import com.google.gwt.gen2.event.logical.shared.HasHandlerManager;
import com.google.gwt.gen2.event.shared.AbstractEvent;
import com.google.gwt.gen2.event.shared.EventHandler;
import com.google.gwt.gen2.event.shared.HandlerManager;
import com.google.gwt.gen2.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Widget;

/**
 * All top-level incubator widgets should extend {@link Gen2Widget}.
 * {@link Gen2Widget} will include all the extra handler and styling support
 * needed by gen2 widgets.
 */
public abstract class Gen2Widget extends Widget implements HasHandlerManager {

  private HandlerManager handlerManager;

  /**
   * Returns this widget's {@link HandlerManager} used for event management.
   * 
   * @return the handler manager
   */
  public final HandlerManager getHandlerManager() {
    if (handlerManager == null) {
      handlerManager = createHandlerManager();
    }
    return handlerManager;
  }

  @Override
  public void onBrowserEvent(Event nativeEvent) {
    if (handlerManager != null) {
      DomEvent.fireNativeEvent(nativeEvent, handlerManager);
    }
  }

  @Override
  public void setStyleName(String name) {
    setStylePrimaryName(name);
  }

  // This code can probably not be compiled out, but this toString is
  // sufficiently more useful the cost seems worth it.
  @Override
  public String toString() {
    String accum = this.getStylePrimaryName() + " widget";
    String id = this.getElement().getId();
    if (id != null && id.trim().length() > 0) {
      accum += "id " + id;
    }
    return accum;
  }

  /**
   * Adds this handler to the widget.
   * 
   * @param <HandlerType> the type of handler to add
   * @param key the event key
   * @param handler the handler
   * @return {@link HandlerRegistration} used to remove the handler
   */
  protected <HandlerType extends EventHandler> HandlerRegistration addHandler(
      AbstractEvent.Key<?, HandlerType> key, final HandlerType handler) {
    return getHandlerManager().addHandler(key, handler);
  }

  /**
   * Adds a native event handler to the widget and sinks the corresponding
   * native event.
   * 
   * @param <HandlerType> the type of handler to add
   * @param key the event key
   * @param handler the handler
   * @return {@link HandlerRegistration} used to remove the handler
   */
  protected <HandlerType extends EventHandler> HandlerRegistration addHandlerAndSink(
      DomEvent.Key<?, HandlerType> key, final HandlerType handler) {
    sinkEvents(key.getNativeEventType());
    return addHandler(key, handler);
  }

  /**
   * Creates the {@link HandlerManager} used by this widget for event
   * management.
   * 
   * @return the handler manager
   * 
   */
  protected HandlerManager createHandlerManager() {
    return new HandlerManager(this);
  }

  /**
   * Fires an event.
   * 
   * @param event the event
   */
  protected void fireEvent(AbstractEvent event) {
    if (handlerManager != null) {
      handlerManager.fireEvent(event);
    }
  }

  /**
   * Is the event handled by one or more handlers?
   * 
   * @param key event type key
   * @return does this event type have a current handler
   */
  protected final boolean isEventHandled(AbstractEvent.Key key) {
    return handlerManager == null ? false : handlerManager.isEventHandled(key);
  }

  /**
   * Removes the given handler from the specified event key. Normally,
   * applications should call {@link HandlerRegistration#removeHandler()}
   * instead. This method is provided primary to support the deprecated
   * listeners api.
   * 
   * @param <HandlerType> handler type
   * 
   * @param key the event key
   * @param handler the handler
   */
  protected <HandlerType extends EventHandler> void removeHandler(
      AbstractEvent.Key<?, HandlerType> key, final HandlerType handler) {
    if (handlerManager == null) {
      handlerManager = new HandlerManager(this);
    }
    handlerManager.removeHandler(key, handler);
  }

}
