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
package com.google.gwt.libideas.resources.ext;

import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JMethod;

/**
 * Encapsulates per-type resource generation logic. This type is used only by
 * developers who wish to add additional resource types to the resource
 * generation system. Implementations are paired with one or more interfaces
 * derived from ResourcePrototype that have been annotated with an
 * {@link ResourceGeneratorType} annotation. Instances of ResourceGenerator must
 * support default-instantiation (i.e. via {@link Class#newInstance()}).
 * <p>
 * The methods on an instance of ResourceGenerator will be called in the
 * following order by the resource generation system:
 * <ol>
 * <li>{@link #init(TreeLogger, ResourceContext)}</li>
 * <li>{@link #prepare(TreeLogger, JMethod)} once for each method</li>
 * <li>{@link #createFields(TreeLogger, FieldAccumulator)}</li>
 * <li>{@link #createAssignment(TreeLogger, JMethod)} once for each method</li>
 * <li>{@link #finish(TreeLogger)}</li>
 * </ol>
 * <p>
 * The methods {@link #prepare(TreeLogger, JMethod)} and
 * {@link #createAssignment(TreeLogger, JMethod)} will be called only with those
 * methods whose ResourcePrototype-derived type specifies the particular type of
 * ResourceGenerator as the implementor. The relative order in which
 * ResourceGenerators are invoked and the specific order in which the bundle's
 * methods are presented is undefined.
 * <p>
 * Direct access to the contents of the generated bundle implementation is
 * intentionally limited to prevent unrelated ResourceGenerators from
 * potentially creating namespace conflicts or generating invalid Java source.
 * 
 * @see ResourceGeneratorUtil
 */
public interface ResourceGenerator {

  /**
   * Produce the right-hand-side of a Java assignment expression to provide the
   * singleton instance object for a particular resource.
   * <p>
   * Example:
   * 
   * <pre>
   * new MySampleResource() { public Foo getFoo() { ... } }
   * </pre>
   */
  String createAssignment(TreeLogger logger, JMethod method)
      throws UnableToCompleteException;

  /**
   * The ResourceGenerator can create fields within the implementation of the
   * bundle type. The instance of FieldAccumulator passed into this method is
   * used to declare, and possibly initialize, Java fields within the final
   * implementation of the resource bundle type.
   * <p>
   * The FieldAccumulator should not be retained beyond the lifetime of this
   * method as operation on the FieldAccumulator are not defined after the
   * implementation of this method returns.
   */
  void createFields(TreeLogger logger, FieldAccumulator fields)
      throws UnableToCompleteException;

  /**
   * Called at the end of the resource generation phase and can be used to
   * perform cleanup.
   */
  void finish(TreeLogger logger) throws UnableToCompleteException;

  /**
   * Initialize the ResourceGenerator with the generation context that will
   * remain valid for the duration of the resource-generation phase. The logger
   * instance should not be retained; use the per-method loggers instead.
   */
  void init(TreeLogger logger, ResourceContext context)
      throws UnableToCompleteException;

  /**
   * Called once for each method the ResourceGenerator is expected to handle.
   * This allows cross-resource state to be accumulated, such as for data
   * aggregation.
   */
  void prepare(TreeLogger logger, JMethod method)
      throws UnableToCompleteException;
}