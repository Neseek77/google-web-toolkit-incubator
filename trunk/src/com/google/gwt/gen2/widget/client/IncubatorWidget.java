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

package com.google.gwt.gen2.widget.client;

import com.google.gwt.gen2.event.shared.AbstractEvent;
import com.google.gwt.gen2.event.shared.EventHandler;
import com.google.gwt.gen2.event.shared.HandlerManager;
import com.google.gwt.gen2.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.Widget;

/**
 * All top-level incubator widgets should extend {@link IncubatorWidget}.
 * {@link IncubatorWidget} will eventually include all the extra handler and
 * styling information.
 * 
 * @param <Css> css helper class.
 */
public abstract class IncubatorWidget<Css extends IncubatorWidget.AbstractCss>
    extends Widget {
  /**
   * All Css interfaces for incubator widgets must extends this one.
   */
  public static interface AbstractCss {
    String styleName();
  }

  /**
   * {@link CssAdaptor} is a temporary helper class so:
   * <ul>
   * <li> applications can use advanced CSSResource features, such as
   * obfuscation and dead-css stanza elimination. </li>
   * <li> unless the CSS-enabled interface is invoked explicitly, setStyleName
   * will continue to work. </li>
   * <li> with reasonable, if not optimal size/performance metrics, we can
   * heavily use dependent styles to support the
   * avoid-descendant-selectors-if-at-all-possible directive.</li>
   * </ul>
   */
  public abstract static class CssAdaptor implements AbstractCss {
    private String baseName;

    public CssAdaptor(String baseStyleName) {
      this.baseName = baseStyleName;
    }

    public abstract CssAdaptor copy(String name);

    /**
     * Gets the style name. Conforming to Constant/CssResource pattern of
     * omitting the "get".
     * 
     * @return the style name.
     */
    public String styleName() {
      return baseName;
    }

    /**
     * Wraps the given dependent style name.
     * 
     * @param dependent dependent style name
     * @return style name
     */
    public String wrap(String dependent) {
      return baseName + "-" + dependent;
    }
  }

  private Css css;

  private HandlerManager handlers;

  @Override
  public String getStylePrimaryName() {
    return css == null ? null : css.styleName();
  }

  @Override
  public void setStyleName(String name) {
    adaptCssFor(name);
  }

  @Override
  public void setStylePrimaryName(String style) {
    super.setStylePrimaryName(getStyleElement(), style);
    adaptCssFor(style);
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
   * @param key the event key
   * @param handler the handler
   */
  protected <T extends EventHandler> HandlerRegistration addHandler(
      AbstractEvent.Key<T> key, final T handler) {
    if (handlers == null) {
      handlers = new HandlerManager(this);
    }
    return handlers.addHandler(key, handler);
  }

  /**
   * Returns access to the css accessor methods.
   * 
   * @return access to css accessor methods.
   */
  protected final Css css() {
    return css;
  }

  /**
   * Fires an event.
   * 
   * @param event the event
   */
  protected void fireEvent(AbstractEvent event) {
    if (handlers != null) {
      handlers.fireEvent(event);
    }
  }

  /**
   * Is the event handled by one or more handlers?
   */
  protected final boolean isEventHandled(AbstractEvent.Key key) {
    return handlers == null ? false : handlers.isEventHandled(key);
  }

  /**
   * On css init.
   * 
   * @param css the new css.
   */

  protected void onSet(Css css, boolean initializing) {
    getElement().setClassName(css.styleName());
  }

  /**
   * Sets your css object.
   * 
   * @param css css
   */
  protected final void setCss(Css css) {
    boolean init = this.css == null;
    this.css = css;
    onSet(css, init);
  }

  private void adaptCssFor(String name) {
    if (!(css instanceof CssAdaptor)) {
      assert false : "If you plan to call setStyleName() on your widget, do not override the default css resources for that widget. Your are using "
          + css.getClass();
      throw new IllegalStateException();
    }
    CssAdaptor newCss = ((CssAdaptor) css).copy(name);
    setCss((Css) newCss);
  }
}
