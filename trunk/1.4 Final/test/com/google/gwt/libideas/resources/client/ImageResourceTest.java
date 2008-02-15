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
package com.google.gwt.libideas.resources.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.junit.client.GWTTestCase;
import com.google.gwt.libideas.resources.client.impl.ImageResourcePrototype;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.LoadListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Tests ImageResource generation.
 */
public class ImageResourceTest extends GWTTestCase {

  static interface Resources extends ImmutableResourceBundle {
    /**
     * @gwt.resource 16x16.png
     */
    ImageResource i16x16();

    /**
     * @gwt.resource 32x32.png
     */
    ImageResource i32x32();

    /**
     * @gwt.resource 64x64.png
     */
    ImageResource i64x64();

    /**
     * @gwt.resource 64x64.png
     */
    ImageResource i64x64Dup();

    /**
     * @gwt.resource 64x64-dup.png
     */
    ImageResource i64x64Dup2();

    /**
     * @gwt.resource largeLossless.png
     */
    ImageResource largeLossless();

    /**
     * @gwt.resource largeLossy.jpg
     */
    ImageResource largeLossy();
  }

  public String getModuleName() {
    return "com.google.gwt.libideas.ImmutableResources";
  }

  public void testPacking() {
    Resources r = (Resources) GWT.create(Resources.class);

    // Cast to impl type for testing
    ImageResourcePrototype i64 = (ImageResourcePrototype) r.i64x64();
    ImageResourcePrototype lossy = (ImageResourcePrototype) r.largeLossy();
    ImageResourcePrototype lossless =
        (ImageResourcePrototype) r.largeLossless();

    // The large, lossless image should be bundled
    assertEquals(i64.getURL(), lossless.getURL());

    // Make sure that the large, lossy image isn't bundled with the rest
    assertTrue(!i64.getURL().equals(lossy.getURL()));
  }

  public void testDedup() {
    Resources r = (Resources) GWT.create(Resources.class);

    // Cast to impl type for testing
    ImageResourcePrototype a = (ImageResourcePrototype) r.i64x64();
    ImageResourcePrototype b = (ImageResourcePrototype) r.i64x64Dup();
    ImageResourcePrototype c = (ImageResourcePrototype) r.i64x64Dup2();
    assertEquals(64, a.getHeight());
    assertEquals(64, a.getWidth());

    assertEquals(a.getLeft(), b.getLeft());
    assertEquals(a.getLeft(), c.getLeft());

    assertEquals(a.getLeft(), b.getTop());
    assertEquals(a.getLeft(), c.getTop());

    // See if the size of the image strip is what we expect
    Image i = new Image(a.getURL());
    i.addLoadListener(new LoadListener() {
      public void onError(Widget sender) {
        fail("error loading image");
      }

      public void onLoad(Widget sender) {
        assertEquals(16 + 32 + 64 + 400, sender.getOffsetWidth());
        finishTest();
      }
    });

    RootPanel.get().add(i);
    delayTestFinish(500);
  }
}
