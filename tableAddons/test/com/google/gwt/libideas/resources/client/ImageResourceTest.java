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
package com.google.gwt.libideas.resources.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.libideas.client.LibTestBase;
import com.google.gwt.libideas.resources.client.ImageResource.ImageOptions;
import com.google.gwt.libideas.resources.client.ImageResource.RepeatStyle;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.LoadListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Tests ImageResource generation.
 */
public class ImageResourceTest extends LibTestBase {

  static interface Resources extends ImmutableResourceBundle {
    @Resource("16x16.png")
    ImageResource i16x16();

    @Resource("32x32.png")
    ImageResource i32x32();

    @Resource("16x16.png")
    @ImageOptions(repeatStyle = RepeatStyle.Vertical)
    ImageResource i16x16Vertical();

    @Resource("32x32.png")
    @ImageOptions(repeatStyle = RepeatStyle.Vertical)
    ImageResource i32x32Vertical();

    @Resource("16x16.png")
    @ImageOptions(repeatStyle = RepeatStyle.Horizontal)
    ImageResource i16x16Horizontal();

    @Resource("32x32.png")
    @ImageOptions(repeatStyle = RepeatStyle.Horizontal)
    ImageResource i32x32Horizontal();

    @Resource("64x64.png")
    ImageResource i64x64();

    @Resource("64x64.png")
    ImageResource i64x64Dup();

    @Resource("64x64-dup.png")
    ImageResource i64x64Dup2();

    @Resource("largeLossless.png")
    ImageResource largeLossless();

    @Resource("largeLossy.jpg")
    ImageResource largeLossy();
  }

  public void testPacking() {
    Resources r = GWT.create(Resources.class);

    ImageResource i64 = r.i64x64();
    ImageResource lossy = r.largeLossy();
    ImageResource lossless = r.largeLossless();

    // The large, lossless image should be bundled
    if (!i64.getURL().startsWith("data:")) {
      assertEquals(i64.getURL(), lossless.getURL());
    }

    // Make sure that the large, lossy image isn't bundled with the rest
    assertTrue(!i64.getURL().equals(lossy.getURL()));
    
    assertEquals(16, r.i16x16Vertical().getWidth());
    assertEquals(16, r.i16x16Vertical().getHeight());
    
    assertEquals(16, r.i16x16Horizontal().getWidth());
    assertEquals(16, r.i16x16Horizontal().getHeight());
  }

  public void testDedup() {
    Resources r = GWT.create(Resources.class);

    ImageResource a = r.i64x64();
    ImageResource b = r.i64x64Dup();
    ImageResource c = r.i64x64Dup2();
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
        finishTest();
      }
    });

    RootPanel.get().add(i);
    delayTestFinish(500);
  }
}
