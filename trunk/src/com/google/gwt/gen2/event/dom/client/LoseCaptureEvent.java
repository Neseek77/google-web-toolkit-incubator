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

import com.google.gwt.user.client.Event;

/**
 * Represents a native lose capture event.
 */
public class LoseCaptureEvent extends DomEvent {

  /**
   * Event Key for LoseCapture.
   */
  public static final Key<LoseCaptureEvent, LoseCaptureHandler> KEY = new Key<LoseCaptureEvent, LoseCaptureHandler>(
      Event.ONLOSECAPTURE) {
    @Override
    protected void fire(LoseCaptureHandler handler, LoseCaptureEvent event) {
      handler.onLoseCapture(event);
    }

    @Override
    public LoseCaptureEvent wrap(Event nativeEvent) {
      return new LoseCaptureEvent(nativeEvent);
    }
  };

  /**
   * Constructs a LoseCaptureEvent event.
   * 
   * @param nativeEvent the native event object wrapped by this event
   */
  public LoseCaptureEvent(Event e) {
    super(e);
  }

  @Override
  protected Key getKey() {
    return KEY;
  }
}
