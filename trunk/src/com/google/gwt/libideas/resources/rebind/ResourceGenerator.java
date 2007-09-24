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
package com.google.gwt.libideas.resources.rebind;

import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JMethod;

/**
 * Encapsulates per-type resource generation logic.
 */
public abstract class ResourceGenerator {
  
  /**
   * Default no-op implementation.
   * @throws UnableToCompleteException
   */
  public void finish() throws UnableToCompleteException {
  }

  public abstract void init(ResourceContext context) throws UnableToCompleteException;
  
  /**
   * Default no-op implementation.
   * @throws UnableToCompleteException
   */
  public void prepare(JMethod method) throws UnableToCompleteException {
  }
  
  public abstract void writeAssignment(JMethod method)
      throws UnableToCompleteException;
  
  /**
   * Default no-op implementation.
   * @throws UnableToCompleteException
   */
  public void writeFields() throws UnableToCompleteException {
  }
}
