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


/**
 * This synthetic event that is called before a widget shows its contents.
 */
public class BeforeShowEvent extends AbstractEvent<BeforeShowHandler> {
  /**
   * Convenience interface used to supply default add handler method.
   */
  public static interface Source<ValueType> {
    /**
     * Adds a new before drop down handler
     * 
     * @param handler handler
     * @return the handler registration
     */
    HandlerRegistration addBeforeShowHandler(BeforeShowHandler handler);
  }

  /**
   * The event key.
   */
  public static Key<BeforeShowHandler> KEY = new Key<BeforeShowHandler>();

  /**
   * Constructor.
   */
  public BeforeShowEvent() {
  }

  @Override
  protected void fireEvent(BeforeShowHandler handler) {
    handler.beforeShow(this);
  }

  @Override
  protected Key getKey() {
    return KEY;
  }
}
