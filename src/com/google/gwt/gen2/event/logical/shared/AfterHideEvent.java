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
package com.google.gwt.gen2.event.logical.shared;

import com.google.gwt.gen2.event.shared.AbstractEvent;

/**
 * Represents a logical after hide event.
 */
public class AfterHideEvent extends AbstractEvent {

  /**
   * Event Key for AfterHide.
   */
  public static final Key<AfterHideEvent, AfterHideHandler> KEY = new Key<AfterHideEvent, AfterHideHandler>() {
    @Override
    protected void fire(AfterHideHandler handler, AfterHideEvent event) {
      handler.onAfterHide(event);
    }
  };

  /**
   * Constructs a AfterHideEvent event.
   */
  public AfterHideEvent() {
  }

  @Override
  protected Key getKey() {
    return KEY;
  }
}
