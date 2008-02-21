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
package com.google.gwt.demos.scrolltable.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Random;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.google.gwt.widgetideas.table.client.ClientTableModel;

/**
 * An iterator that serves as the data source for TableOracle requests.
 */
public class DataSourceTableModel extends ClientTableModel {
  /**
   * The source of the data.
   */
  private DataSourceData data = new DataSourceData() {
    @Override
    public int getRandomInt(int max) {
      return Random.nextInt(max);
    }
  };

  /**
   * The RPC service used to generate data, if RPC mode is enabled.
   */
  private DataSourceServiceAsync dataService = null;

  /**
   * A boolean indicating that we should throw an error.
   */
  private boolean errorMode = false;

  /**
   * A boolean indicating that we should use an rpc request instead of
   * generating data locally.
   */
  private boolean rpcMode = false;

  /**
   * @see ClientTableModel#getCell(int, int)
   */
  @Override
  public Object getCell(int rowNum, int colNum) {
    return data.getCell(rowNum, colNum);
  }

  /**
   * Check if error mode is enabled.
   * 
   * @return true if enabled
   */
  public boolean isErrorModeEnabled() {
    return errorMode;
  }

  /**
   * Check if RPC mode is enabled.
   * 
   * @return true if enabled
   */
  public boolean isRPCModeEnabled() {
    return rpcMode;
  }

  /**
   * Allow, but do nothing.
   */
  @Override
  public void onRowInserted(int beforeRow) {
  }

  /**
   * Allow, but do nothing.
   */
  @Override
  public void onRowRemoved(int row) {
  }

  /**
   * Allow, but do nothing.
   */
  @Override
  public void onSetData(int row, int cell, Object data) {
  }

  /**
   * Override that can optionally throw an error.
   */
  @Override
  public void requestRows(final Request request, final Callback callback) {
    if (errorMode) {
      // Return an error
      callback.onFailure(new Exception("An error has occured."));
    } else if (rpcMode) {
      // Create the service if needed
      if (dataService == null) {
        dataService = (DataSourceServiceAsync) GWT.create(DataSourceService.class);
        ServiceDefTarget endpoint = (ServiceDefTarget) dataService;
        String moduleRelativeURL = GWT.getModuleBaseURL() + "datasource";
        endpoint.setServiceEntryPoint(moduleRelativeURL);
      }

      // Send RPC request for data
      dataService.requestRows(request, new AsyncCallback() {
        public void onFailure(Throwable caught) {
          callback.onFailure(new Exception("RPC Failure"));
        }

        public void onSuccess(Object result) {
          callback.onRowsReady(request, (Response) result);
        }
      });
    } else {
      // Request rows from the local client
      super.requestRows(request, callback);
    }
  }

  /**
   * Enable or disable error mode.
   * 
   * @param enabled true to enable
   */
  public void setErrorModeEnabled(boolean enabled) {
    this.errorMode = enabled;
  }

  /**
   * Enable or disable rpc mode.
   * 
   * @param enabled true to enable
   */
  public void setRPCModeEnabled(boolean enabled) {
    this.rpcMode = enabled;
  }
}
