(function(){
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var _, package_com_google_gwt_core_client_ = 'com.google.gwt.core.client.', package_com_google_gwt_demos_glasspanel_client_ = 'com.google.gwt.demos.glasspanel.client.', package_com_google_gwt_lang_ = 'com.google.gwt.lang.', package_com_google_gwt_user_client_ = 'com.google.gwt.user.client.', package_com_google_gwt_user_client_impl_ = 'com.google.gwt.user.client.impl.', package_com_google_gwt_user_client_ui_ = 'com.google.gwt.user.client.ui.', package_com_google_gwt_user_client_ui_impl_ = 'com.google.gwt.user.client.ui.impl.', package_com_google_gwt_widgetideas_client_ = 'com.google.gwt.widgetideas.client.', package_com_google_gwt_widgetideas_client_impl_ = 'com.google.gwt.widgetideas.client.impl.', package_java_io_ = 'java.io.', package_java_lang_ = 'java.lang.', package_java_util_ = 'java.util.';
function nullMethod(){
}

function equals_2(other){
  return this === other;
}

function hashCode_3(){
  return identityHashCode(this);
}

function toString_5(){
  return this.typeName$ + '@' + this.hashCode$();
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals_2;
_.hashCode$ = hashCode_3;
_.toString$ = toString_5;
_.toString = function(){
  return this.toString$();
}
;
_.typeName$ = package_java_lang_ + 'Object';
_.typeId$ = 1;
function getTypeName(o){
  return o == null?null:o.typeName$;
}

function setUncaughtExceptionHandler(handler){
  sUncaughtExceptionHandler = handler;
}

var sUncaughtExceptionHandler = null;
function getHashCode(o){
  return o == null?0:o.$H?o.$H:(o.$H = getNextHashId());
}

function getHashCode_0(o){
  return o == null?0:o.$H?o.$H:(o.$H = getNextHashId());
}

function getNextHashId(){
  return ++sNextHashId;
}

var sNextHashId = 0;
function $clinit_116(){
  $clinit_116 = nullMethod;
  NO_STACK_TRACE = initDims_0('[Ljava.lang.StackTraceElement;', [0], [0], [0], null);
}

function $$init_6(this$static){
  this$static.stackTrace = NO_STACK_TRACE;
}

function $Throwable(this$static){
  $clinit_116();
  $$init_6(this$static);
  return this$static;
}

function $Throwable_0(this$static, message){
  $clinit_116();
  $$init_6(this$static);
  this$static.message_0 = message;
  return this$static;
}

function $toString_1(this$static){
  var className, msg;
  className = getTypeName(this$static);
  msg = this$static.message_0;
  if (msg !== null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function toString_8(){
  return $toString_1(this);
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0();
_.toString$ = toString_8;
_.typeName$ = package_java_lang_ + 'Throwable';
_.typeId$ = 3;
_.cause = null;
_.message_0 = null;
var NO_STACK_TRACE;
function $clinit_102(){
  $clinit_102 = nullMethod;
  $clinit_116();
}

function $Exception(this$static){
  $clinit_102();
  $Throwable(this$static);
  return this$static;
}

function $Exception_0(this$static, message){
  $clinit_102();
  $Throwable_0(this$static, message);
  return this$static;
}

function Exception(){
}

_ = Exception.prototype = new Throwable();
_.typeName$ = package_java_lang_ + 'Exception';
_.typeId$ = 4;
function $clinit_112(){
  $clinit_112 = nullMethod;
  $clinit_102();
}

function $RuntimeException(this$static){
  $clinit_112();
  $Exception(this$static);
  return this$static;
}

function $RuntimeException_0(this$static, message){
  $clinit_112();
  $Exception_0(this$static, message);
  return this$static;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception();
_.typeName$ = package_java_lang_ + 'RuntimeException';
_.typeId$ = 5;
function $clinit_3(){
  $clinit_3 = nullMethod;
  $clinit_112();
}

function $JavaScriptException(this$static, name, description){
  $clinit_3();
  $RuntimeException_0(this$static, 'JavaScript ' + name + ' exception: ' + description);
  return this$static;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException();
_.typeName$ = package_com_google_gwt_core_client_ + 'JavaScriptException';
_.typeId$ = 6;
function $equals(this$static, other){
  if (!instanceOf(other, 2)) {
    return false;
  }
  return equalsImpl(this$static, dynamicCast(other, 2));
}

function $hashCode(this$static){
  return getHashCode(this$static);
}

function createArray(){
  return [];
}

function createObject(){
  return {};
}

function equals(other){
  return $equals(this, other);
}

function equalsImpl(o, other){
  return o === other;
}

function hashCode_0(){
  return $hashCode(this);
}

function toString_0(){
  return toStringImpl(this);
}

function toStringImpl(o){
  if (o.toString)
    return o.toString();
  return '[object]';
}

function JavaScriptObject(){
}

_ = JavaScriptObject.prototype = new Object_0();
_.equals$ = equals;
_.hashCode$ = hashCode_0;
_.toString$ = toString_0;
_.typeName$ = package_com_google_gwt_core_client_ + 'JavaScriptObject';
_.typeId$ = 7;
function $onModuleLoad(this$static){
  setUncaughtExceptionHandler(new GlassPanelDemo$1());
  addCommand($GlassPanelDemo$2(new GlassPanelDemo$2(), this$static));
}

function $onModuleLoad2(this$static){
  var buttonBodyDefault, buttonBodyLarge, buttonHTMLDefault, buttonHTMLLarge, buttonScrollingDisable, buttonScrollingEnable, buttonTable;
  $add(get(), $HTML_0(new HTML(), '<code>$doc.compatMode = <b>' + getCompatMode() + '<\/b><\/code>'));
  this$static.redAbsolutePanel = $AbsolutePanel(new AbsolutePanel());
  $setPixelSize(this$static.redAbsolutePanel, 130, 130);
  $add_0(get(), this$static.redAbsolutePanel, 500, 150);
  $add(this$static.redAbsolutePanel, $HTML_0(new HTML(), 'This red GlassPanel was created<br>with <code>autoHide<\/code> set to <code>false<\/code>.'));
  this$static.greenAbsolutePanel = get_0('cell2');
  $workaroundIssue1813(this$static, this$static.greenAbsolutePanel.element);
  $add(this$static.greenAbsolutePanel, $HTML_0(new HTML(), 'Click or press <code>ESC<\/code> once<br>to remove the gray GlassPanel.<br><br>Click or press <code>ESC<\/code> a second<br>time to remove this green GlassPanel.'));
  buttonBodyDefault = $Button_0(new Button(), 'BODY setSize("", "")');
  $addClickListener(buttonBodyDefault, $GlassPanelDemo$3(new GlassPanelDemo$3(), this$static));
  buttonBodyLarge = $Button_0(new Button(), 'BODY setSize("1000px", "1000px")');
  $addClickListener(buttonBodyLarge, $GlassPanelDemo$4(new GlassPanelDemo$4(), this$static));
  buttonHTMLDefault = $Button_0(new Button(), 'HTML setSize("", "")');
  $addClickListener(buttonHTMLDefault, $GlassPanelDemo$5(new GlassPanelDemo$5(), this$static));
  buttonHTMLLarge = $Button_0(new Button(), 'HTML setSize("2000px", "2000px")');
  $addClickListener(buttonHTMLLarge, $GlassPanelDemo$6(new GlassPanelDemo$6(), this$static));
  buttonScrollingEnable = $Button_0(new Button(), 'Window.enableScrolling(true)');
  $addClickListener(buttonScrollingEnable, $GlassPanelDemo$7(new GlassPanelDemo$7(), this$static));
  buttonScrollingDisable = $Button_0(new Button(), 'Window.enableScrolling(false)');
  $addClickListener(buttonScrollingDisable, $GlassPanelDemo$8(new GlassPanelDemo$8(), this$static));
  buttonTable = $FlexTable(new FlexTable());
  $addStyleName(buttonTable, 'buttons');
  $add_0(get(), buttonTable, 0, 0);
  $setWidget(buttonTable, 0, 0, buttonBodyDefault);
  $setWidget(buttonTable, 0, 1, buttonBodyLarge);
  $setWidget(buttonTable, 1, 0, buttonHTMLDefault);
  $setWidget(buttonTable, 1, 1, buttonHTMLLarge);
  $setWidget(buttonTable, 2, 0, buttonScrollingEnable);
  $setWidget(buttonTable, 2, 1, buttonScrollingDisable);
  $resetGlassPanels(this$static);
}

function $removeGlassPanel(this$static){
  if (this$static.redGlassPanel !== null) {
    $removeFromParent(this$static.redGlassPanel);
  }
  if (this$static.greenGlassPanel !== null) {
    $removeFromParent(this$static.greenGlassPanel);
  }
  if (this$static.glassPanel3 !== null) {
    $removeFromParent(this$static.glassPanel3);
  }
}

function $resetGlassPanels(this$static){
  $removeGlassPanel(this$static);
  this$static.redGlassPanel = $GlassPanel(new GlassPanel(), false);
  $addStyleName(this$static.redGlassPanel, 'red');
  $add_0(this$static.redAbsolutePanel, this$static.redGlassPanel, 0, 0);
  this$static.greenGlassPanel = $GlassPanel(new GlassPanel(), true);
  $addStyleName(this$static.greenGlassPanel, 'green');
  $add_0(this$static.greenAbsolutePanel, this$static.greenGlassPanel, 0, 0);
  this$static.glassPanel3 = $GlassPanel(new GlassPanel(), true);
  $add_0(get(), this$static.glassPanel3, 0, 0);
}

function $workaroundIssue1813(this$static, element){
  setStyleAttribute(element, 'position', 'relative');
  setStyleAttribute(element, 'overflow', 'hidden');
  setStyleAttribute(element, 'display', 'block');
}

function getCompatMode(){
  return $doc.compatMode;
}

function windowEnableScrolling(enable){
  $doc.body.style.overflow = $doc.documentElement.style.overflow = enable?'':'hidden';
}

function GlassPanelDemo(){
}

_ = GlassPanelDemo.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo';
_.typeId$ = 0;
_.glassPanel3 = null;
_.greenAbsolutePanel = null;
_.greenGlassPanel = null;
_.redAbsolutePanel = null;
_.redGlassPanel = null;
function $onUncaughtException(this$static, throwable){
  var dialogBox, i, stackTraceElements, text;
  text = 'Uncaught exception: ';
  while (throwable !== null) {
    stackTraceElements = throwable.stackTrace;
    text += $toString_1(throwable) + '\n';
    for (i = 0; i < stackTraceElements.length_0; i++) {
      text += '    at ' + stackTraceElements[i] + '\n';
    }
    throwable = throwable.cause;
    if (throwable !== null) {
      text += 'Caused by: ';
    }
  }
  dialogBox = $DialogBox(new DialogBox(), true);
  setStyleAttribute(dialogBox.element, 'backgroundColor', '#ABCDEF');
  $clinit_115() , err_0;
  text = $replaceAll(text, ' ', '&nbsp;');
  $setHTML_0(dialogBox, '<pre>' + text + '<\/pre>');
  $center(dialogBox);
}

function GlassPanelDemo$1(){
}

_ = GlassPanelDemo$1.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$1';
_.typeId$ = 0;
function $GlassPanelDemo$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute(){
  $onModuleLoad2(this.this$0);
}

function GlassPanelDemo$2(){
}

_ = GlassPanelDemo$2.prototype = new Object_0();
_.execute = execute;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$2';
_.typeId$ = 8;
function $GlassPanelDemo$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick(sender){
  $removeGlassPanel(this.this$0);
  $setSize(get(), '', '');
  $resetGlassPanels(this.this$0);
}

function GlassPanelDemo$3(){
}

_ = GlassPanelDemo$3.prototype = new Object_0();
_.onClick = onClick;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$3';
_.typeId$ = 9;
function $GlassPanelDemo$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick_0(sender){
  $removeGlassPanel(this.this$0);
  $setSize(get(), '1000px', '1000px');
  $resetGlassPanels(this.this$0);
}

function GlassPanelDemo$4(){
}

_ = GlassPanelDemo$4.prototype = new Object_0();
_.onClick = onClick_0;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$4';
_.typeId$ = 10;
function $GlassPanelDemo$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick_1(sender){
  var htmlElement;
  $removeGlassPanel(this.this$0);
  htmlElement = getParent(getBodyElement());
  setStyleAttribute(htmlElement, 'width', '');
  setStyleAttribute(htmlElement, 'height', '');
  $resetGlassPanels(this.this$0);
}

function GlassPanelDemo$5(){
}

_ = GlassPanelDemo$5.prototype = new Object_0();
_.onClick = onClick_1;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$5';
_.typeId$ = 11;
function $GlassPanelDemo$6(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick_2(sender){
  var htmlElement;
  $removeGlassPanel(this.this$0);
  htmlElement = getParent(getBodyElement());
  setStyleAttribute(htmlElement, 'width', '2000px');
  setStyleAttribute(htmlElement, 'height', '2000px');
  $resetGlassPanels(this.this$0);
}

function GlassPanelDemo$6(){
}

_ = GlassPanelDemo$6.prototype = new Object_0();
_.onClick = onClick_2;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$6';
_.typeId$ = 12;
function $GlassPanelDemo$7(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick_3(sender){
  $removeGlassPanel(this.this$0);
  windowEnableScrolling(true);
  $resetGlassPanels(this.this$0);
}

function GlassPanelDemo$7(){
}

_ = GlassPanelDemo$7.prototype = new Object_0();
_.onClick = onClick_3;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$7';
_.typeId$ = 13;
function $GlassPanelDemo$8(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick_4(sender){
  $removeGlassPanel(this.this$0);
  windowEnableScrolling(false);
  $resetGlassPanels(this.this$0);
}

function GlassPanelDemo$8(){
}

_ = GlassPanelDemo$8.prototype = new Object_0();
_.onClick = onClick_4;
_.typeName$ = package_com_google_gwt_demos_glasspanel_client_ + 'GlassPanelDemo$8';
_.typeId$ = 14;
function $Array(this$static, length, typeId, queryId, typeName){
  this$static.length_0 = length;
  this$static.queryId = queryId;
  this$static.typeName$ = typeName;
  this$static.typeId$ = typeId;
  return this$static;
}

function _set(array, index, value){
  return array[index] = value;
}

function getIntValue(values, index){
  return values[index];
}

function getValueCount(values){
  return values.length;
}

function initDims_0(typeName, typeIdExprs, queryIdExprs, dimExprs, defaultValue){
  return initDims(typeName, typeIdExprs, queryIdExprs, dimExprs, 0, getValueCount(dimExprs), defaultValue);
}

function initDims(typeName, typeIdExprs, queryIdExprs, dimExprs, index, count, defaultValue){
  var i, length, result;
  if ((length = getIntValue(dimExprs, index)) < 0) {
    throw $NegativeArraySizeException(new NegativeArraySizeException());
  }
  result = $Array(new Array_0(), length, getIntValue(typeIdExprs, index), getIntValue(queryIdExprs, index), typeName);
  ++index;
  if (index < count) {
    typeName = $substring(typeName, 1);
    for (i = 0; i < length; ++i) {
      _set(result, i, initDims(typeName, typeIdExprs, queryIdExprs, dimExprs, index, count, defaultValue));
    }
  }
   else {
    for (i = 0; i < length; ++i) {
      _set(result, i, defaultValue);
    }
  }
  return result;
}

function setCheck(array, index, value){
  if (value !== null && array.queryId != 0 && !instanceOf(value, array.queryId)) {
    throw $ArrayStoreException(new ArrayStoreException());
  }
  return _set(array, index, value);
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_lang_ + 'Array';
_.typeId$ = 0;
function canCast(srcId, dstId){
  return !(!(srcId && typeIdArray[srcId][dstId]));
}

function dynamicCast(src, dstId){
  if (src != null)
    canCast(src.typeId$, dstId) || throwClassCastException();
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function narrow_char(x){
  return x & 65535;
}

function round_int(x){
  if (x > ($clinit_106() , MAX_VALUE))
    return $clinit_106() , MAX_VALUE;
  if (x < ($clinit_106() , MIN_VALUE))
    return $clinit_106() , MIN_VALUE;
  return x >= 0?Math.floor(x):Math.ceil(x);
}

function throwClassCastException(){
  throw $ClassCastException(new ClassCastException());
}

function wrapJSO(jso, seed){
  _ = seed.prototype;
  if (jso && !(jso.typeId$ >= _.typeId$)) {
    var oldToString = jso.toString;
    for (var i in _) {
      jso[i] = _[i];
    }
    jso.toString = oldToString;
  }
  return jso;
}

var typeIdArray;
function caught(e){
  if (instanceOf(e, 3)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException(), javaScriptExceptionName(e), javaScriptExceptionDescription(e));
}

function javaScriptExceptionDescription(e){
  return e.message;
}

function javaScriptExceptionName(e){
  return e.name;
}

function $clinit_17(){
  $clinit_17 = nullMethod;
  $clinit_112();
}

function $CommandCanceledException(this$static, command){
  $clinit_17();
  $RuntimeException(this$static);
  return this$static;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException();
_.typeName$ = package_com_google_gwt_user_client_ + 'CommandCanceledException';
_.typeId$ = 15;
function $$init(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1(), this$static);
  this$static.commands = $ArrayList(new ArrayList());
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2(), this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator(), this$static);
}

function $CommandExecutor(this$static){
  $$init(this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd, ex, ueh;
  cmd = $getLast(this$static.iterator);
  $remove(this$static.iterator);
  ex = null;
  if (instanceOf(cmd, 4)) {
    ex = $CommandCanceledException(new CommandCanceledException(), dynamicCast(cmd, 4));
  }
   else {
  }
  if (ex !== null) {
    ueh = sUncaughtExceptionHandler;
    if (ueh !== null) {
      $onUncaughtException(ueh, ex);
    }
  }
  $setExecuting(this$static, false);
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, removeCommand, wasCanceled;
  wasCanceled = false;
  try {
    $setExecuting(this$static, true);
    $setEnd(this$static.iterator, this$static.commands.size);
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      removeCommand = true;
      try {
        if (element === null) {
          return;
        }
        if (instanceOf(element, 4)) {
          command = dynamicCast(element, 4);
          command.execute();
        }
         else {
        }
      }
       finally {
        wasCanceled = $wasRemoved(this$static.iterator);
        if (wasCanceled) {
          return;
        }
        if (removeCommand) {
          $remove(this$static.iterator);
        }
      }
      if (hasTimeSliceExpired(currentTimeMillis_0(), startTimeMillis)) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel(this$static.cancellationTimer);
      $setExecuting(this$static, false);
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (!$isEmpty(this$static.commands) && !this$static.executionTimerPending && !this$static.executing) {
    $setExecutionTimerPending(this$static, true);
    $schedule(this$static.executionTimer, 1);
  }
}

function $setExecuting(this$static, executing){
  this$static.executing = executing;
}

function $setExecutionTimerPending(this$static, pending){
  this$static.executionTimerPending = pending;
}

function $submit(this$static, command){
  $add_3(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function hasTimeSliceExpired(currentTimeMillis, startTimeMillis){
  return abs(currentTimeMillis - startTimeMillis) >= 100;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ + 'CommandExecutor';
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_30(){
  $clinit_30 = nullMethod;
  timers = $ArrayList(new ArrayList());
  {
    hookWindowClosing();
  }
}

function $Timer(this$static){
  $clinit_30();
  return this$static;
}

function $cancel(this$static){
  if (this$static.isRepeating) {
    clearInterval(this$static.timerId);
  }
   else {
    clearTimeout(this$static.timerId);
  }
  $remove_8(timers, this$static);
}

function $fireAndCatch(this$static, handler){
  var $e0, e;
  try {
    $fireImpl(this$static);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 3)) {
      e = $e0;
      $onUncaughtException(handler, e);
    }
     else 
      throw $e0;
  }
}

function $fireImpl(this$static){
  if (!this$static.isRepeating) {
    $remove_8(timers, this$static);
  }
  this$static.run();
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'must be positive');
  }
  $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_3(timers, this$static);
}

function clearInterval(id){
  $clinit_30();
  $wnd.clearInterval(id);
}

function clearTimeout(id){
  $clinit_30();
  $wnd.clearTimeout(id);
}

function createTimeout(timer, delay){
  $clinit_30();
  return $wnd.setTimeout(function(){
    timer.fire();
  }
  , delay);
}

function fire(){
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler !== null) {
    $fireAndCatch(this, handler);
  }
   else {
    $fireImpl(this);
  }
}

function hookWindowClosing(){
  $clinit_30();
  addWindowCloseListener(new Timer$1());
}

function Timer(){
}

_ = Timer.prototype = new Object_0();
_.fire = fire;
_.typeName$ = package_com_google_gwt_user_client_ + 'Timer';
_.typeId$ = 16;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_18(){
  $clinit_18 = nullMethod;
  $clinit_30();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_18();
  this$static.this$0 = this$0;
  $Timer(this$static);
  return this$static;
}

function run(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer();
_.run = run;
_.typeName$ = package_com_google_gwt_user_client_ + 'CommandExecutor$1';
_.typeId$ = 17;
function $clinit_19(){
  $clinit_19 = nullMethod;
  $clinit_30();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_19();
  this$static.this$0 = this$0;
  $Timer(this$static);
  return this$static;
}

function run_0(){
  $setExecutionTimerPending(this.this$0, false);
  $doExecuteCommands(this.this$0, currentTimeMillis_0());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer();
_.run = run_0;
_.typeName$ = package_com_google_gwt_user_client_ + 'CommandExecutor$2';
_.typeId$ = 18;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get(this$static.this$0.commands, this$static.next++);
  if (this$static.next >= this$static.end) {
    this$static.next = 0;
  }
  return command;
}

function $remove(this$static){
  $remove_7(this$static.this$0.commands, this$static.last);
  --this$static.end;
  if (this$static.last <= this$static.next) {
    if (--this$static.next < 0) {
      this$static.next = 0;
    }
  }
  this$static.last = (-1);
}

function $setEnd(this$static, end){
  this$static.end = end;
}

function $wasRemoved(this$static){
  return this$static.last == (-1);
}

function hasNext(){
  return $hasNext(this);
}

function next_0(){
  return $next(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0();
_.hasNext = hasNext;
_.next_0 = next_0;
_.typeName$ = package_com_google_gwt_user_client_ + 'CommandExecutor$CircularIterator';
_.typeId$ = 0;
_.end = 0;
_.last = (-1);
_.next = 0;
function $clinit_23(){
  $clinit_23 = nullMethod;
  sEventPreviewStack = $ArrayList(new ArrayList());
  {
    impl = new DOMImplIE6();
    $init(impl);
  }
}

function addEventPreview(preview){
  $clinit_23();
  $add_3(sEventPreviewStack, preview);
}

function appendChild(parent, child){
  $clinit_23();
  $appendChild(impl, parent, child);
}

function compare(elem1, elem2){
  $clinit_23();
  return $compare(impl, elem1, elem2);
}

function createButton(){
  $clinit_23();
  return $createElement(impl, 'button');
}

function createDiv(){
  $clinit_23();
  return $createElement(impl, 'div');
}

function createElement(tagName){
  $clinit_23();
  return $createElement(impl, tagName);
}

function createTBody(){
  $clinit_23();
  return $createElement(impl, 'tbody');
}

function createTR(){
  $clinit_23();
  return $createElement(impl, 'tr');
}

function createTable(){
  $clinit_23();
  return $createElement(impl, 'table');
}

function dispatchEvent(evt, elem, listener){
  $clinit_23();
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler !== null) {
    dispatchEventAndCatch(evt, elem, listener, handler);
  }
   else {
    dispatchEventImpl(evt, elem, listener);
  }
}

function dispatchEventAndCatch(evt, elem, listener, handler){
  $clinit_23();
  var $e0, e;
  try {
    dispatchEventImpl(evt, elem, listener);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 3)) {
      e = $e0;
      $onUncaughtException(handler, e);
    }
     else 
      throw $e0;
  }
}

function dispatchEventImpl(evt, elem, listener){
  $clinit_23();
  var prevCurrentEvent;
  if (elem === sCaptureElem) {
    if (eventGetType(evt) == 8192) {
      sCaptureElem = null;
    }
  }
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  try {
    listener.onBrowserEvent(evt);
  }
   finally {
    currentEvent = prevCurrentEvent;
  }
}

function eventCancelBubble(evt, cancel){
  $clinit_23();
  $eventCancelBubble(impl, evt, cancel);
}

function eventGetAltKey(evt){
  $clinit_23();
  return $eventGetAltKey(impl, evt);
}

function eventGetClientX(evt){
  $clinit_23();
  return $eventGetClientX(impl, evt);
}

function eventGetClientY(evt){
  $clinit_23();
  return $eventGetClientY(impl, evt);
}

function eventGetCtrlKey(evt){
  $clinit_23();
  return $eventGetCtrlKey(impl, evt);
}

function eventGetFromElement(evt){
  $clinit_23();
  return $eventGetFromElement(impl, evt);
}

function eventGetKeyCode(evt){
  $clinit_23();
  return $eventGetKeyCode(impl, evt);
}

function eventGetMetaKey(evt){
  $clinit_23();
  return $eventGetMetaKey(impl, evt);
}

function eventGetShiftKey(evt){
  $clinit_23();
  return $eventGetShiftKey(impl, evt);
}

function eventGetTarget(evt){
  $clinit_23();
  return $eventGetTarget(impl, evt);
}

function eventGetToElement(evt){
  $clinit_23();
  return $eventGetToElement(impl, evt);
}

function eventGetType(evt){
  $clinit_23();
  return $eventGetTypeInt(impl, evt);
}

function eventPreventDefault(evt){
  $clinit_23();
  $eventPreventDefault(impl, evt);
}

function eventToString(evt){
  $clinit_23();
  return $eventToString(impl, evt);
}

function getAbsoluteLeft(elem){
  $clinit_23();
  return $getAbsoluteLeft(impl, elem);
}

function getAbsoluteTop(elem){
  $clinit_23();
  return $getAbsoluteTop(impl, elem);
}

function getElementById(id){
  $clinit_23();
  return $getElementById(impl, id);
}

function getElementProperty(elem, prop){
  $clinit_23();
  return $getElementProperty(impl, elem, prop);
}

function getElementPropertyInt(elem, prop){
  $clinit_23();
  return $getElementPropertyInt(impl, elem, prop);
}

function getEventsSunk(elem){
  $clinit_23();
  return $getEventsSunk(impl, elem);
}

function getFirstChild(elem){
  $clinit_23();
  return $getFirstChild(impl, elem);
}

function getParent(elem){
  $clinit_23();
  return $getParent(impl, elem);
}

function insertChild(parent, child, index){
  $clinit_23();
  $insertChild(impl, parent, child, index);
}

function isOrHasChild(parent, child){
  $clinit_23();
  return $isOrHasChild(impl, parent, child);
}

function previewEvent(evt){
  $clinit_23();
  var preview, ret;
  ret = true;
  if (sEventPreviewStack.size > 0) {
    preview = dynamicCast($get(sEventPreviewStack, sEventPreviewStack.size - 1), 5);
    if (!(ret = preview.onEventPreview(evt))) {
      eventCancelBubble(evt, true);
      eventPreventDefault(evt);
    }
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_23();
  if (sCaptureElem !== null && compare(elem, sCaptureElem)) {
    sCaptureElem = null;
  }
  $releaseCapture(impl, elem);
}

function removeChild(parent, child){
  $clinit_23();
  $removeChild(impl, parent, child);
}

function removeEventPreview(preview){
  $clinit_23();
  $remove_8(sEventPreviewStack, preview);
}

function setCapture(elem){
  $clinit_23();
  sCaptureElem = elem;
  $setCapture(impl, elem);
}

function setElementProperty(elem, prop, value){
  $clinit_23();
  $setElementProperty(impl, elem, prop, value);
}

function setElementPropertyInt(elem, prop, value){
  $clinit_23();
  $setElementPropertyInt(impl, elem, prop, value);
}

function setEventListener(elem, listener){
  $clinit_23();
  $setEventListener(impl, elem, listener);
}

function setInnerHTML(elem, html){
  $clinit_23();
  $setInnerHTML(impl, elem, html);
}

function setStyleAttribute(elem, attr, value){
  $clinit_23();
  $setStyleAttribute(impl, elem, attr, value);
}

function sinkEvents(elem, eventBits){
  $clinit_23();
  $sinkEvents(impl, elem, eventBits);
}

function toString_1(elem){
  $clinit_23();
  return $toString(impl, elem);
}

function windowGetClientHeight(){
  $clinit_23();
  return $windowGetClientHeight(impl);
}

function windowGetClientWidth(){
  $clinit_23();
  return $windowGetClientWidth(impl);
}

var currentEvent = null, impl = null, sCaptureElem = null, sEventPreviewStack;
function $clinit_24(){
  $clinit_24 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor());
}

function addCommand(cmd){
  $clinit_24();
  if (cmd === null) {
    throw $NullPointerException(new NullPointerException(), 'cmd can not be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function equals_0(other){
  if (instanceOf(other, 6)) {
    return compare(this, dynamicCast(other, 6));
  }
  return $equals(wrapJSO(this, Element), other);
}

function hashCode_1(){
  return $hashCode(wrapJSO(this, Element));
}

function toString_2(){
  return toString_1(this);
}

function Element(){
}

_ = Element.prototype = new JavaScriptObject();
_.equals$ = equals_0;
_.hashCode$ = hashCode_1;
_.toString$ = toString_2;
_.typeName$ = package_com_google_gwt_user_client_ + 'Element';
_.typeId$ = 19;
function equals_1(other){
  return $equals(wrapJSO(this, Event), other);
}

function hashCode_2(){
  return $hashCode(wrapJSO(this, Event));
}

function toString_3(){
  return eventToString(this);
}

function Event(){
}

_ = Event.prototype = new JavaScriptObject();
_.equals$ = equals_1;
_.hashCode$ = hashCode_2;
_.toString$ = toString_3;
_.typeName$ = package_com_google_gwt_user_client_ + 'Event';
_.typeId$ = 20;
function onWindowClosed(){
  while (($clinit_30() , timers).size > 0) {
    $cancel(dynamicCast($get(($clinit_30() , timers), 0), 7));
  }
}

function onWindowClosing(){
  return null;
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0();
_.onWindowClosed = onWindowClosed;
_.onWindowClosing = onWindowClosing;
_.typeName$ = package_com_google_gwt_user_client_ + 'Timer$1';
_.typeId$ = 21;
function $clinit_33(){
  $clinit_33 = nullMethod;
  closingListeners = $ArrayList(new ArrayList());
  resizeListeners = $ArrayList(new ArrayList());
  {
    init();
  }
}

function addWindowCloseListener(listener){
  $clinit_33();
  $add_3(closingListeners, listener);
}

function addWindowResizeListener(listener){
  $clinit_33();
  $add_3(resizeListeners, listener);
}

function fireClosedAndCatch(handler){
  $clinit_33();
  var $e0, e;
  try {
    fireClosedImpl();
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 3)) {
      e = $e0;
      $onUncaughtException(handler, e);
    }
     else 
      throw $e0;
  }
}

function fireClosedImpl(){
  $clinit_33();
  var it, listener;
  for (it = $iterator_0(closingListeners); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 8);
    listener.onWindowClosed();
  }
}

function fireClosingAndCatch(handler){
  $clinit_33();
  var $e0, e;
  try {
    return fireClosingImpl();
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 3)) {
      e = $e0;
      $onUncaughtException(handler, e);
      return null;
    }
     else 
      throw $e0;
  }
}

function fireClosingImpl(){
  $clinit_33();
  var it, listener, msg, ret;
  ret = null;
  for (it = $iterator_0(closingListeners); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 8);
    msg = listener.onWindowClosing();
    {
      ret = msg;
    }
  }
  return ret;
}

function fireResizedAndCatch(handler){
  $clinit_33();
  var $e0, e;
  try {
    fireResizedImpl();
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 3)) {
      e = $e0;
      $onUncaughtException(handler, e);
    }
     else 
      throw $e0;
  }
}

function fireResizedImpl(){
  $clinit_33();
  var it, listener;
  for (it = $iterator_0(resizeListeners); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 9);
    listener.onWindowResized(getClientWidth(), getClientHeight());
  }
}

function getClientHeight(){
  $clinit_33();
  return windowGetClientHeight();
}

function getClientWidth(){
  $clinit_33();
  return windowGetClientWidth();
}

function getScrollLeft(){
  $clinit_33();
  return $doc.documentElement.scrollLeft || $doc.body.scrollLeft;
}

function getScrollTop(){
  $clinit_33();
  return $doc.documentElement.scrollTop || $doc.body.scrollTop;
}

function init(){
  $clinit_33();
  __gwt_initHandlers(function(){
    onResize();
  }
  , function(){
    return onClosing();
  }
  , function(){
    onClosed();
    $wnd.onresize = null;
    $wnd.onbeforeclose = null;
    $wnd.onclose = null;
  }
  );
}

function onClosed(){
  $clinit_33();
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler !== null) {
    fireClosedAndCatch(handler);
  }
   else {
    fireClosedImpl();
  }
}

function onClosing(){
  $clinit_33();
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler !== null) {
    return fireClosingAndCatch(handler);
  }
   else {
    return fireClosingImpl();
  }
}

function onResize(){
  $clinit_33();
  var handler;
  handler = sUncaughtExceptionHandler;
  if (handler !== null) {
    fireResizedAndCatch(handler);
  }
   else {
    fireResizedImpl();
  }
}

function removeWindowResizeListener(listener){
  $clinit_33();
  $remove_8(resizeListeners, listener);
}

var closingListeners, resizeListeners;
function $appendChild(this$static, parent, child){
  parent.appendChild(child);
}

function $createElement(this$static, tag){
  return $doc.createElement(tag);
}

function $eventCancelBubble(this$static, evt, cancel){
  evt.cancelBubble = cancel;
}

function $eventGetAltKey(this$static, evt){
  return !(!evt.altKey);
}

function $eventGetCtrlKey(this$static, evt){
  return !(!evt.ctrlKey);
}

function $eventGetKeyCode(this$static, evt){
  return evt.which || (evt.keyCode || -1);
}

function $eventGetMetaKey(this$static, evt){
  return !(!evt.metaKey);
}

function $eventGetShiftKey(this$static, evt){
  return !(!evt.shiftKey);
}

function $eventGetTypeInt(this$static, evt){
  switch (evt.type) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
  }
}

function $getElementById(this$static, id){
  var elem = $doc.getElementById(id);
  return elem || null;
}

function $getElementProperty(this$static, elem, prop){
  var ret = elem[prop];
  return ret == null?null:String(ret);
}

function $getElementPropertyInt(this$static, elem, prop){
  var i = parseInt(elem[prop]);
  if (!i) {
    return 0;
  }
  return i;
}

function $getEventsSunk(this$static, elem){
  return elem.__eventBits || 0;
}

function $removeChild(this$static, parent, child){
  parent.removeChild(child);
}

function $setElementProperty(this$static, elem, prop, value){
  elem[prop] = value;
}

function $setElementPropertyInt(this$static, elem, prop, value){
  elem[prop] = value;
}

function $setEventListener(this$static, elem, listener){
  elem.__listener = listener;
}

function $setInnerHTML(this$static, elem, html){
  if (!html) {
    html = '';
  }
  elem.innerHTML = html;
}

function $setStyleAttribute(this$static, elem, attr, value){
  elem.style[attr] = value;
}

function $toString(this$static, elem){
  return elem.outerHTML;
}

function $windowGetClientHeight(this$static){
  return $doc.body.clientHeight;
}

function $windowGetClientWidth(this$static){
  return $doc.body.clientWidth;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_impl_ + 'DOMImpl';
_.typeId$ = 0;
function $compare(this$static, elem1, elem2){
  if (!elem1 && !elem2)
    return true;
  else if (!elem1 || !elem2)
    return false;
  return elem1.uniqueID == elem2.uniqueID;
}

function $eventGetClientX(this$static, evt){
  return evt.clientX - getBodyClientLeft();
}

function $eventGetClientY(this$static, evt){
  return evt.clientY - getBodyClientTop();
}

function $eventGetFromElement(this$static, evt){
  return evt.fromElement?evt.fromElement:null;
}

function $eventGetTarget(this$static, evt){
  return evt.srcElement || null;
}

function $eventGetToElement(this$static, evt){
  return evt.toElement || null;
}

function $eventPreventDefault(this$static, evt){
  evt.returnValue = false;
}

function $eventToString(this$static, evt){
  if (evt.toString)
    return evt.toString();
  return '[object Event]';
}

function $getAbsoluteLeft(this$static, elem){
  var scrollLeft = $doc.documentElement.scrollLeft || $doc.body.scrollLeft;
  return elem.getBoundingClientRect().left + scrollLeft - getBodyClientLeft();
}

function $getAbsoluteTop(this$static, elem){
  var scrollTop = $doc.documentElement.scrollTop || $doc.body.scrollTop;
  return elem.getBoundingClientRect().top + scrollTop - getBodyClientTop();
}

function $getFirstChild(this$static, elem){
  var child = elem.firstChild;
  return child || null;
}

function $getParent(this$static, elem){
  var parent = elem.parentElement;
  return parent || null;
}

function $init(this$static){
  try {
    $doc.execCommand('BackgroundImageCache', false, true);
  }
   catch (e) {
  }
  $wnd.__dispatchEvent = function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEvent($wnd.event)) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener))
      curElem = curElem.parentElement;
    if (listener)
      dispatchEvent($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  ;
  $wnd.__dispatchDblClickEvent = function(){
    var newEvent = $doc.createEventObject();
    this.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2)
      $wnd.__dispatchEvent.call(this);
  }
  ;
  $doc.body.onclick = $doc.body.onmousedown = $doc.body.onmouseup = $doc.body.onmousemove = $doc.body.onmousewheel = $doc.body.onkeydown = $doc.body.onkeypress = $doc.body.onkeyup = $doc.body.onfocus = $doc.body.onblur = $doc.body.ondblclick = $wnd.__dispatchEvent;
}

function $insertChild(this$static, parent, child, index){
  if (index >= parent.children.length)
    parent.appendChild(child);
  else 
    parent.insertBefore(child, parent.children[index]);
}

function $isOrHasChild(this$static, parent, child){
  while (child) {
    if (parent.uniqueID == child.uniqueID)
      return true;
    child = child.parentElement;
  }
  return false;
}

function $releaseCapture(this$static, elem){
  elem.releaseCapture();
}

function $setCapture(this$static, elem){
  elem.setCapture();
}

function $sinkEvents(this$static, elem, bits){
  elem.__eventBits = bits;
  elem.onclick = bits & 1?$wnd.__dispatchEvent:null;
  elem.ondblclick = bits & (1 | 2)?$wnd.__dispatchDblClickEvent:null;
  elem.onmousedown = bits & 4?$wnd.__dispatchEvent:null;
  elem.onmouseup = bits & 8?$wnd.__dispatchEvent:null;
  elem.onmouseover = bits & 16?$wnd.__dispatchEvent:null;
  elem.onmouseout = bits & 32?$wnd.__dispatchEvent:null;
  elem.onmousemove = bits & 64?$wnd.__dispatchEvent:null;
  elem.onkeydown = bits & 128?$wnd.__dispatchEvent:null;
  elem.onkeypress = bits & 256?$wnd.__dispatchEvent:null;
  elem.onkeyup = bits & 512?$wnd.__dispatchEvent:null;
  elem.onchange = bits & 1024?$wnd.__dispatchEvent:null;
  elem.onfocus = bits & 2048?$wnd.__dispatchEvent:null;
  elem.onblur = bits & 4096?$wnd.__dispatchEvent:null;
  elem.onlosecapture = bits & 8192?$wnd.__dispatchEvent:null;
  elem.onscroll = bits & 16384?$wnd.__dispatchEvent:null;
  elem.onload = bits & 32768?$wnd.__dispatchEvent:null;
  elem.onerror = bits & 65536?$wnd.__dispatchEvent:null;
  elem.onmousewheel = bits & 131072?$wnd.__dispatchEvent:null;
}

function getBodyClientLeft(){
  return $doc.documentElement.clientLeft || $doc.body.clientLeft;
}

function getBodyClientTop(){
  return $doc.documentElement.clientTop || $doc.body.clientTop;
}

function DOMImplIE6(){
}

_ = DOMImplIE6.prototype = new DOMImpl();
_.typeName$ = package_com_google_gwt_user_client_impl_ + 'DOMImplIE6';
_.typeId$ = 0;
var currentEventTarget = null;
function $addStyleName(this$static, style){
  setStyleName_0(this$static.getStyleElement(), style, true);
}

function $getAbsoluteLeft_0(this$static){
  return getAbsoluteLeft(this$static.element);
}

function $getAbsoluteTop_0(this$static){
  return getAbsoluteTop(this$static.element);
}

function $getOffsetHeight_0(this$static){
  return getElementPropertyInt(this$static.element, 'offsetHeight');
}

function $getOffsetWidth_0(this$static){
  return getElementPropertyInt(this$static.element, 'offsetWidth');
}

function $replaceNode(this$static, node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement_0(this$static, elem){
  if (this$static.element !== null) {
    $replaceNode(this$static, this$static.element, elem);
  }
  this$static.element = elem;
}

function $setPixelSize(this$static, width, height){
  if (width >= 0) {
    this$static.setWidth(width + 'px');
  }
  if (height >= 0) {
    this$static.setHeight(height + 'px');
  }
}

function $setSize(this$static, width, height){
  this$static.setWidth(width);
  this$static.setHeight(height);
}

function $setStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style);
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  sinkEvents(this$static.element, eventBitsToAdd | getEventsSunk(this$static.element));
}

function getOffsetHeight_0(){
  return $getOffsetHeight_0(this);
}

function getOffsetWidth_0(){
  return $getOffsetWidth_0(this);
}

function getStyleElement_0(){
  return this.element;
}

function getStyleName(elem){
  return getElementProperty(elem, 'className');
}

function setHeight_0(height){
  setStyleAttribute(this.element, 'height', height);
}

function setStyleName(elem, styleName){
  setElementProperty(elem, 'className', styleName);
}

function setStyleName_0(elem, style, add){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  if (elem === null) {
    throw $RuntimeException_0(new RuntimeException(), 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if ($length(style) == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'Style names cannot be empty');
  }
  oldStyle = getStyleName(elem);
  idx = $indexOf_0(oldStyle, style);
  while (idx != (-1)) {
    if (idx == 0 || $charAt(oldStyle, idx - 1) == 32) {
      last = idx + $length(style);
      lastPos = $length(oldStyle);
      if (last == lastPos || last < lastPos && $charAt(oldStyle, last) == 32) {
        break;
      }
    }
    idx = $indexOf_1(oldStyle, style, idx + 1);
  }
  if (add) {
    if (idx == (-1)) {
      if ($length(oldStyle) > 0) {
        oldStyle += ' ';
      }
      setElementProperty(elem, 'className', oldStyle + style);
    }
  }
   else {
    if (idx != (-1)) {
      begin = $trim($substring_0(oldStyle, 0, idx));
      end = $trim($substring(oldStyle, idx + $length(style)));
      if ($length(begin) == 0) {
        newClassName = end;
      }
       else if ($length(end) == 0) {
        newClassName = begin;
      }
       else {
        newClassName = begin + ' ' + end;
      }
      setElementProperty(elem, 'className', newClassName);
    }
  }
}

function setWidth_1(width){
  setStyleAttribute(this.element, 'width', width);
}

function toString_4(){
  if (this.element === null) {
    return '(null handle)';
  }
  return toString_1(this.element);
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0();
_.getOffsetHeight = getOffsetHeight_0;
_.getOffsetWidth = getOffsetWidth_0;
_.getStyleElement = getStyleElement_0;
_.setHeight = setHeight_0;
_.setWidth = setWidth_1;
_.toString$ = toString_4;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'UIObject';
_.typeId$ = 0;
_.element = null;
function $onAttach(this$static){
  if (this$static.attached) {
    throw $IllegalStateException_0(new IllegalStateException(), "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw $IllegalStateException_0(new IllegalStateException(), "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    this$static.doDetachChildren();
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (this$static.parent !== null) {
    this$static.parent.remove_0(this$static);
  }
   else if (this$static.parent !== null) {
    throw $IllegalStateException_0(new IllegalStateException(), "This widget's parent does not implement HasWidgets");
  }
}

function $setElement_1(this$static, elem){
  if (this$static.attached) {
    setEventListener(this$static.element, null);
  }
  $setElement_0(this$static, elem);
  if (this$static.attached) {
    setEventListener(elem, this$static);
  }
}

function $setParent(this$static, parent){
  var oldParent;
  oldParent = this$static.parent;
  if (parent === null) {
    if (oldParent !== null && oldParent.attached) {
      this$static.onDetach();
    }
    this$static.parent = null;
  }
   else {
    if (oldParent !== null) {
      throw $IllegalStateException_0(new IllegalStateException(), 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent = parent;
    if (parent.attached) {
      this$static.onAttach();
    }
  }
}

function doAttachChildren_0(){
}

function doDetachChildren_0(){
}

function onAttach(){
  $onAttach(this);
}

function onBrowserEvent_3(event_0){
}

function onDetach_0(){
  $onDetach(this);
}

function onLoad_0(){
}

function onUnload_0(){
}

function setElement_0(elem){
  $setElement_1(this, elem);
}

function Widget(){
}

_ = Widget.prototype = new UIObject();
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.onAttach = onAttach;
_.onBrowserEvent = onBrowserEvent_3;
_.onDetach = onDetach_0;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.setElement = setElement_0;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'Widget';
_.typeId$ = 22;
_.attached = false;
_.parent = null;
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $orphan(this$static, child){
  $setParent(child, null);
}

function doAttachChildren(){
  var child, it;
  for (it = this.iterator_0(); it.hasNext();) {
    child = dynamicCast(it.next_0(), 11);
    child.onAttach();
  }
}

function doDetachChildren(){
  var child, it;
  for (it = this.iterator_0(); it.hasNext();) {
    child = dynamicCast(it.next_0(), 11);
    child.onDetach();
  }
}

function onLoad(){
}

function onUnload(){
}

function Panel(){
}

_ = Panel.prototype = new Widget();
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'Panel';
_.typeId$ = 23;
function $$init_0(this$static){
  this$static.children_0 = $WidgetCollection(new WidgetCollection(), this$static);
}

function $ComplexPanel(this$static){
  $$init_0(this$static);
  return this$static;
}

function $add_1(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children_0, child);
  appendChild(container, child.element);
  $adopt(this$static, child);
}

function $remove_1(this$static, w){
  var elem;
  if (w.parent !== this$static) {
    return false;
  }
  $orphan(this$static, w);
  elem = w.element;
  removeChild(getParent(elem), elem);
  $remove_5(this$static.children_0, w);
  return true;
}

function iterator(){
  return $iterator(this.children_0);
}

function remove_1(w){
  return $remove_1(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel();
_.iterator_0 = iterator;
_.remove_0 = remove_1;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'ComplexPanel';
_.typeId$ = 24;
function $AbsolutePanel(this$static){
  $ComplexPanel(this$static);
  this$static.setElement(createDiv());
  setStyleAttribute(this$static.element, 'position', 'relative');
  setStyleAttribute(this$static.element, 'overflow', 'hidden');
  return this$static;
}

function $add(this$static, w){
  $add_1(this$static, w, this$static.element);
}

function $add_0(this$static, w, left, top){
  $removeFromParent(w);
  $setWidgetPositionImpl(this$static, w, left, top);
  $add(this$static, w);
}

function $remove_0(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  if (removed) {
    changeToStaticPositioning(w.element);
  }
  return removed;
}

function $setWidgetPositionImpl(this$static, w, left, top){
  var h;
  h = w.element;
  if (left == (-1) && top == (-1)) {
    changeToStaticPositioning(h);
  }
   else {
    setStyleAttribute(h, 'position', 'absolute');
    setStyleAttribute(h, 'left', left + 'px');
    setStyleAttribute(h, 'top', top + 'px');
  }
}

function changeToStaticPositioning(elem){
  setStyleAttribute(elem, 'left', '');
  setStyleAttribute(elem, 'top', '');
  setStyleAttribute(elem, 'position', '');
}

function remove_0(w){
  return $remove_0(this, w);
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel();
_.remove_0 = remove_0;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'AbsolutePanel';
_.typeId$ = 25;
function $clinit_46(){
  $clinit_46 = nullMethod;
  $clinit_86() , implWidget;
}

function $FocusWidget(this$static, elem){
  $clinit_86() , implWidget;
  $setElement(this$static, elem);
  return this$static;
}

function $addClickListener(this$static, listener){
  if (this$static.clickListeners === null) {
    this$static.clickListeners = $ClickListenerCollection(new ClickListenerCollection());
  }
  $add_3(this$static.clickListeners, listener);
}

function $setElement(this$static, elem){
  $setElement_1(this$static, elem);
  $sinkEvents_0(this$static, 7041);
}

function onBrowserEvent_0(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      if (this.clickListeners !== null) {
        $fireClick(this.clickListeners, this);
      }

      break;
    case 4096:
    case 2048:
      break;
    case 128:
    case 512:
    case 256:
      break;
  }
}

function setElement(elem){
  $setElement(this, elem);
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget();
_.onBrowserEvent = onBrowserEvent_0;
_.setElement = setElement;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'FocusWidget';
_.typeId$ = 26;
_.clickListeners = null;
function $clinit_37(){
  $clinit_37 = nullMethod;
  $clinit_86() , implWidget;
}

function $ButtonBase(this$static, elem){
  $clinit_86() , implWidget;
  $FocusWidget(this$static, elem);
  return this$static;
}

function $setHTML(this$static, html){
  setInnerHTML(this$static.element, html);
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'ButtonBase';
_.typeId$ = 27;
function $clinit_38(){
  $clinit_38 = nullMethod;
  $clinit_86() , implWidget;
}

function $Button(this$static){
  $clinit_86() , implWidget;
  $ButtonBase(this$static, createButton());
  adjustType(this$static.element);
  $setStyleName(this$static, 'gwt-Button');
  return this$static;
}

function $Button_0(this$static, html){
  $clinit_86() , implWidget;
  $Button(this$static);
  $setHTML(this$static, html);
  return this$static;
}

function adjustType(button){
  $clinit_38();
  if (button.type == 'submit') {
    try {
      button.setAttribute('type', 'button');
    }
     catch (e) {
    }
  }
}

function Button(){
}

_ = Button.prototype = new ButtonBase();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'Button';
_.typeId$ = 28;
function $advanceToFind(this$static, iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o === null?t === null:o.equals$(t)) {
      return iter;
    }
  }
  return null;
}

function add_0(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'add');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this, this.iterator_0(), o);
  return iter !== null;
}

function toString_9(){
  var comma, iter, sb;
  sb = $StringBuffer(new StringBuffer());
  comma = null;
  $append(sb, '[');
  iter = this.iterator_0();
  while (iter.hasNext()) {
    if (comma !== null) {
      $append(sb, comma);
    }
     else {
      comma = ', ';
    }
    $append(sb, valueOf(iter.next_0()));
  }
  $append(sb, ']');
  return $toString_0(sb);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0();
_.add_0 = add_0;
_.contains = contains;
_.toString$ = toString_9;
_.typeName$ = package_java_util_ + 'AbstractCollection';
_.typeId$ = 0;
function $indexOutOfBounds(this$static, i){
  throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException(), 'Index: ' + i + ', Size: ' + this$static.size);
}

function $iterator_0(this$static){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static);
}

function add_1(index, element){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'add');
}

function add_2(obj){
  this.add(this.size_0(), obj);
  return true;
}

function equals_4(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 19)) {
    return false;
  }
  other = dynamicCast(o, 19);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = $iterator_0(this);
  iterOther = other.iterator_0();
  while ($hasNext_1(iter)) {
    elem = $next_0(iter);
    elemOther = $next_0(iterOther);
    if (!(elem === null?elemOther === null:elem.equals$(elemOther))) {
      return false;
    }
  }
  return true;
}

function hashCode_5(){
  var coeff, iter, k, obj;
  k = 1;
  coeff = 31;
  iter = $iterator_0(this);
  while ($hasNext_1(iter)) {
    obj = $next_0(iter);
    k = 31 * k + (obj === null?0:obj.hashCode$());
  }
  return k;
}

function iterator_2(){
  return $iterator_0(this);
}

function remove_5(index){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'remove');
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection();
_.add = add_1;
_.add_0 = add_2;
_.equals$ = equals_4;
_.hashCode$ = hashCode_5;
_.iterator_0 = iterator_2;
_.remove = remove_5;
_.typeName$ = package_java_util_ + 'AbstractList';
_.typeId$ = 29;
function $$init_7(this$static){
  {
    $clearImpl(this$static);
  }
}

function $ArrayList(this$static){
  $$init_7(this$static);
  return this$static;
}

function $add_3(this$static, o){
  setImpl(this$static.array, this$static.size++, o);
  return true;
}

function $clearImpl(this$static){
  this$static.array = createArray();
  this$static.size = 0;
}

function $get(this$static, index){
  if (index < 0 || index >= this$static.size) {
    $indexOutOfBounds(this$static, index);
  }
  return getImpl(this$static.array, index);
}

function $indexOf_2(this$static, o){
  return $indexOf_3(this$static, o, 0);
}

function $indexOf_3(this$static, o, index){
  if (index < 0) {
    $indexOutOfBounds(this$static, index);
  }
  for (; index < this$static.size; ++index) {
    if (equals_7(o, getImpl(this$static.array, index))) {
      return index;
    }
  }
  return (-1);
}

function $isEmpty(this$static){
  return this$static.size == 0;
}

function $remove_7(this$static, index){
  var previous;
  previous = $get(this$static, index);
  removeRangeImpl(this$static.array, index, 1);
  --this$static.size;
  return previous;
}

function $remove_8(this$static, o){
  var i;
  i = $indexOf_2(this$static, o);
  if (i == (-1)) {
    return false;
  }
  $remove_7(this$static, i);
  return true;
}

function $set(this$static, index, o){
  var previous;
  previous = $get(this$static, index);
  setImpl(this$static.array, index, o);
  return previous;
}

function add_3(index, o){
  if (index < 0 || index > this.size) {
    $indexOutOfBounds(this, index);
  }
  addImpl(this.array, index, o);
  ++this.size;
}

function add_4(o){
  return $add_3(this, o);
}

function addImpl(array, index, o){
  array.splice(index, 0, o);
}

function contains_2(o){
  return $indexOf_2(this, o) != (-1);
}

function equals_7(a, b){
  return a === b || a !== null && a.equals$(b);
}

function get_2(index){
  return $get(this, index);
}

function getImpl(array, index){
  return array[index];
}

function remove_6(index){
  return $remove_7(this, index);
}

function removeRangeImpl(array, index, count){
  array.splice(index, count);
}

function setImpl(array, index, o){
  array[index] = o;
}

function size_2(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList();
_.add = add_3;
_.add_0 = add_4;
_.contains = contains_2;
_.get = get_2;
_.remove = remove_6;
_.size_0 = size_2;
_.typeName$ = package_java_util_ + 'ArrayList';
_.typeId$ = 30;
_.array = null;
_.size = 0;
function $ClickListenerCollection(this$static){
  $ArrayList(this$static);
  return this$static;
}

function $fireClick(this$static, sender){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 10);
    listener.onClick(sender);
  }
}

function ClickListenerCollection(){
}

_ = ClickListenerCollection.prototype = new ArrayList();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'ClickListenerCollection';
_.typeId$ = 31;
function $SimplePanel(this$static, elem){
  this$static.setElement(elem);
  return this$static;
}

function $setWidget_1(this$static, w){
  if (w === this$static.widget) {
    return;
  }
  if (w !== null) {
    $removeFromParent(w);
  }
  if (this$static.widget !== null) {
    $remove_2(this$static, this$static.widget);
  }
  this$static.widget = w;
  if (w !== null) {
    appendChild(this$static.element, this$static.widget.element);
    $adopt(this$static, w);
  }
}

function getContainerElement_0(){
  return this.element;
}

function iterator_1(){
  return $SimplePanel$1(new SimplePanel$1(), this);
}

function remove_4(w){
  if (this.widget !== w) {
    return false;
  }
  $orphan(this, w);
  removeChild(this.getContainerElement(), w.element);
  this.widget = null;
  return true;
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel();
_.getContainerElement = getContainerElement_0;
_.iterator_0 = iterator_1;
_.remove_0 = remove_4;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'SimplePanel';
_.typeId$ = 32;
_.widget = null;
function $clinit_69(){
  $clinit_69 = nullMethod;
  impl_1 = new PopupImplIE6();
}

function $PopupPanel(this$static){
  $clinit_69();
  $SimplePanel(this$static, $createElement_0(impl_1));
  $setPopupPosition(this$static, 0, 0);
  return this$static;
}

function $PopupPanel_0(this$static, autoHide){
  $clinit_69();
  $PopupPanel(this$static);
  this$static.autoHide = autoHide;
  return this$static;
}

function $PopupPanel_1(this$static, autoHide, modal){
  $clinit_69();
  $PopupPanel_0(this$static, autoHide);
  this$static.modal = modal;
  return this$static;
}

function $blur(this$static, elt){
  if (elt.blur) {
    elt.blur();
  }
}

function $center(this$static){
  var initiallyShowing, left, top;
  initiallyShowing = this$static.showing;
  if (!initiallyShowing) {
    $setVisible(this$static, false);
    $show(this$static);
  }
  left = round_int((getClientWidth() - $getOffsetWidth(this$static)) / 2);
  top = round_int((getClientHeight() - $getOffsetHeight(this$static)) / 2);
  $setPopupPosition(this$static, getScrollLeft() + left, getScrollTop() + top);
  if (!initiallyShowing) {
    $setVisible(this$static, true);
  }
}

function $getOffsetHeight(this$static){
  return $getOffsetHeight_0(this$static);
}

function $getOffsetWidth(this$static){
  return $getOffsetWidth_0(this$static);
}

function $hide(this$static, autoClosed){
  if (!this$static.showing) {
    return;
  }
  this$static.showing = false;
  $remove_0(get(), this$static);
  $onHide(impl_1, this$static.element);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w !== null) {
    if (this$static.desiredHeight !== null) {
      w.setHeight(this$static.desiredHeight);
    }
    if (this$static.desiredWidth !== null) {
      w.setWidth(this$static.desiredWidth);
    }
  }
}

function $onEventPreview(this$static, event_0){
  var allow, eventTargetsPopup, target, type;
  target = eventGetTarget(event_0);
  eventTargetsPopup = isOrHasChild(this$static.element, target);
  type = eventGetType(event_0);
  switch (type) {
    case 128:
      {
        allow = (narrow_char(eventGetKeyCode(event_0)) , getKeyboardModifiers(event_0) , true);
        return allow && (eventTargetsPopup || !this$static.modal);
      }

    case 512:
      {
        allow = (narrow_char(eventGetKeyCode(event_0)) , getKeyboardModifiers(event_0) , true);
        return allow && (eventTargetsPopup || !this$static.modal);
      }

    case 256:
      {
        allow = (narrow_char(eventGetKeyCode(event_0)) , getKeyboardModifiers(event_0) , true);
        return allow && (eventTargetsPopup || !this$static.modal);
      }

    case 4:
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (($clinit_23() , sCaptureElem) !== null) {
          return true;
        }
        if (!eventTargetsPopup && this$static.autoHide && type == 4) {
          $hide(this$static, true);
          return true;
        }
        break;
      }

    case 2048:
      {
        if (this$static.modal && !eventTargetsPopup && target !== null) {
          $blur(this$static, target);
          return false;
        }
      }

  }
  return !this$static.modal || eventTargetsPopup;
}

function $setPopupPosition(this$static, left, top){
  var elem;
  if (left < 0) {
    left = 0;
  }
  if (top < 0) {
    top = 0;
  }
  this$static.leftPosition = left;
  this$static.topPosition = top;
  elem = this$static.element;
  setStyleAttribute(elem, 'left', left + 'px');
  setStyleAttribute(elem, 'top', top + 'px');
}

function $setVisible(this$static, visible){
  setStyleAttribute(this$static.element, 'visibility', visible?'visible':'hidden');
  $setVisible_0(impl_1, this$static.element, visible);
}

function $setWidget_0(this$static, w){
  $setWidget_1(this$static, w);
  $maybeUpdateSize(this$static);
}

function $setWidth_0(this$static, width){
  this$static.desiredWidth = width;
  $maybeUpdateSize(this$static);
  if ($length(width) == 0) {
    this$static.desiredWidth = null;
  }
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
  this$static.showing = true;
  addEventPreview(this$static);
  setStyleAttribute(this$static.element, 'position', 'absolute');
  if (this$static.topPosition != (-1)) {
    $setPopupPosition(this$static, this$static.leftPosition, this$static.topPosition);
  }
  $add(get(), this$static);
  $onShow(impl_1, this$static.element);
}

function getContainerElement(){
  return this.element;
}

function getOffsetHeight(){
  return $getOffsetHeight(this);
}

function getOffsetWidth(){
  return $getOffsetWidth(this);
}

function getStyleElement(){
  return this.element;
}

function onDetach(){
  removeEventPreview(this);
  $onDetach(this);
}

function onEventPreview_0(event_0){
  return $onEventPreview(this, event_0);
}

function setHeight(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  if ($length(height) == 0) {
    this.desiredHeight = null;
  }
}

function setWidth_0(width){
  $setWidth_0(this, width);
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel();
_.getContainerElement = getContainerElement;
_.getOffsetHeight = getOffsetHeight;
_.getOffsetWidth = getOffsetWidth;
_.getStyleElement = getStyleElement;
_.onDetach = onDetach;
_.onEventPreview = onEventPreview_0;
_.setHeight = setHeight;
_.setWidth = setWidth_0;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'PopupPanel';
_.typeId$ = 33;
_.autoHide = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.leftPosition = (-1);
_.modal = false;
_.showing = false;
_.topPosition = (-1);
var impl_1;
function $clinit_42(){
  $clinit_42 = nullMethod;
  $clinit_69();
}

function $$init_1(this$static){
  this$static.caption = $HTML(new HTML());
  this$static.panel = $FlexTable(new FlexTable());
}

function $DialogBox(this$static, autoHide){
  $clinit_42();
  $DialogBox_0(this$static, autoHide, true);
  return this$static;
}

function $DialogBox_0(this$static, autoHide, modal){
  $clinit_42();
  $PopupPanel_1(this$static, autoHide, modal);
  $$init_1(this$static);
  $setWidget(this$static.panel, 0, 0, this$static.caption);
  this$static.panel.setHeight('100%');
  $setBorderWidth(this$static.panel, 0);
  $setCellPadding(this$static.panel, 0);
  $setCellSpacing(this$static.panel, 0);
  $setHeight(this$static.panel.cellFormatter, 1, 0, '100%');
  $setWidth(this$static.panel.cellFormatter, 1, 0, '100%');
  $setAlignment(this$static.panel.cellFormatter, 1, 0, ($clinit_57() , ALIGN_CENTER), ($clinit_60() , ALIGN_MIDDLE));
  $setWidget_0(this$static, this$static.panel);
  $setStyleName(this$static, 'gwt-DialogBox');
  $setStyleName(this$static.caption, 'Caption');
  $addMouseListener(this$static.caption, this$static);
  return this$static;
}

function $remove_2(this$static, w){
  if (this$static.child !== w) {
    return false;
  }
  $remove_3(this$static.panel, w);
  return true;
}

function $setHTML_0(this$static, html){
  $setHTML_1(this$static.caption, html);
}

function onEventPreview(event_0){
  if (eventGetType(event_0) == 4) {
    if (isOrHasChild(this.caption.element, eventGetTarget(event_0))) {
      eventPreventDefault(event_0);
    }
  }
  return $onEventPreview(this, event_0);
}

function onMouseDown(sender, x, y){
  this.dragging = true;
  setCapture(this.caption.element);
  this.dragStartX = x;
  this.dragStartY = y;
}

function onMouseEnter(sender){
}

function onMouseLeave(sender){
}

function onMouseMove(sender, x, y){
  var absX, absY;
  if (this.dragging) {
    absX = x + $getAbsoluteLeft_0(this);
    absY = y + $getAbsoluteTop_0(this);
    $setPopupPosition(this, absX - this.dragStartX, absY - this.dragStartY);
  }
}

function onMouseUp(sender, x, y){
  this.dragging = false;
  releaseCapture(this.caption.element);
}

function remove_2(w){
  return $remove_2(this, w);
}

function setWidth(width){
  $setWidth_0(this, width);
  this.panel.setWidth('100%');
}

function DialogBox(){
}

_ = DialogBox.prototype = new PopupPanel();
_.onEventPreview = onEventPreview;
_.onMouseDown = onMouseDown;
_.onMouseEnter = onMouseEnter;
_.onMouseLeave = onMouseLeave;
_.onMouseMove = onMouseMove;
_.onMouseUp = onMouseUp;
_.remove_0 = remove_2;
_.setWidth = setWidth;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'DialogBox';
_.typeId$ = 34;
_.child = null;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
function $$init_4(this$static){
  this$static.widgetMap = $HTMLTable$WidgetMapper(new HTMLTable$WidgetMapper());
}

function $HTMLTable(this$static){
  $$init_4(this$static);
  this$static.tableElem = createTable();
  this$static.bodyElem = createTBody();
  appendChild(this$static.tableElem, this$static.bodyElem);
  this$static.setElement(this$static.tableElem);
  $sinkEvents_0(this$static, 1);
  return this$static;
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = $getRowCount(this$static);
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException(), 'Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, td, clearInnerHTML);
  return td;
}

function $getDOMCellCount(this$static, tableBody, row){
  return tableBody.rows[row].cells.length;
}

function $getDOMRowCount(this$static){
  return $getDOMRowCount_0(this$static, this$static.bodyElem);
}

function $getDOMRowCount_0(this$static, elem){
  return elem.rows.length;
}

function $insertRow_0(this$static, beforeRow){
  var tr;
  if (beforeRow != $getRowCount(this$static)) {
    $checkRowBounds(this$static, beforeRow);
  }
  tr = createTR();
  insertChild(this$static.bodyElem, tr, beforeRow);
  return beforeRow;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = getFirstChild(td);
  widget = null;
  if (maybeChild !== null) {
    widget = $getWidget(this$static.widgetMap, maybeChild);
  }
  if (widget !== null) {
    $remove_3(this$static, widget);
    return true;
  }
   else {
    if (clearInnerHTML) {
      setInnerHTML(td, '');
    }
    return false;
  }
}

function $remove_3(this$static, widget){
  var elem;
  if (widget.parent !== this$static) {
    return false;
  }
  $orphan(this$static, widget);
  elem = widget.element;
  removeChild(getParent(elem), elem);
  $removeWidgetByElement(this$static.widgetMap, elem);
  return true;
}

function $setBorderWidth(this$static, width){
  setElementProperty(this$static.tableElem, 'border', '' + width);
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setCellPadding(this$static, padding){
  setElementPropertyInt(this$static.tableElem, 'cellPadding', padding);
}

function $setCellSpacing(this$static, spacing){
  setElementPropertyInt(this$static.tableElem, 'cellSpacing', spacing);
}

function $setColumnFormatter(this$static, formatter){
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setWidget(this$static, row, column, widget){
  var td;
  $prepareCell(this$static, row, column);
  if (widget !== null) {
    $removeFromParent(widget);
    td = $cleanCell(this$static, row, column, true);
    $putWidget(this$static.widgetMap, widget);
    appendChild(td, widget.element);
    $adopt(this$static, widget);
  }
}

function iterator_0(){
  return $widgetIterator(this.widgetMap);
}

function onBrowserEvent_1(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      {
        break;
      }

    default:}
}

function remove_3(widget){
  return $remove_3(this, widget);
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel();
_.iterator_0 = iterator_0;
_.onBrowserEvent = onBrowserEvent_1;
_.remove_0 = remove_3;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTMLTable';
_.typeId$ = 35;
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.tableElem = null;
function $FlexTable(this$static){
  $HTMLTable(this$static);
  $setCellFormatter(this$static, $FlexTable$FlexCellFormatter(new FlexTable$FlexCellFormatter(), this$static));
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter(), this$static));
  return this$static;
}

function $getCellCount(this$static, row){
  $checkRowBounds(this$static, row);
  return $getDOMCellCount(this$static, this$static.bodyElem, row);
}

function $getRowCount(this$static){
  return $getDOMRowCount(this$static);
}

function $insertRow(this$static, beforeRow){
  return $insertRow_0(this$static, beforeRow);
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException(), 'Cannot create a column with a negative index: ' + column);
  }
  cellCount = $getCellCount(this$static, row);
  required = column + 1 - cellCount;
  if (required > 0) {
    addCells(this$static.bodyElem, row, required);
  }
}

function $prepareRow(this$static, row){
  var i, rowCount;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException(), 'Cannot create a row with a negative index: ' + row);
  }
  rowCount = $getRowCount(this$static);
  for (i = rowCount; i <= row; i++) {
    $insertRow(this$static, i);
  }
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

function FlexTable(){
}

_ = FlexTable.prototype = new HTMLTable();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'FlexTable';
_.typeId$ = 36;
function $HTMLTable$CellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getCellElement(this$static, table, row, col){
  var out = table.rows[row].cells[col];
  return out == null?null:out;
}

function $getRawElement(this$static, row, column){
  return $getCellElement(this$static, this$static.this$0.bodyElem, row, column);
}

function $setAlignment(this$static, row, column, hAlign, vAlign){
  $setHorizontalAlignment(this$static, row, column, hAlign);
  $setVerticalAlignment(this$static, row, column, vAlign);
}

function $setHeight(this$static, row, column, height){
  var elem;
  $prepareCell(this$static.this$0, row, column);
  elem = $getCellElement(this$static, this$static.this$0.bodyElem, row, column);
  setElementProperty(elem, 'height', height);
}

function $setHorizontalAlignment(this$static, row, column, align){
  var elem;
  $prepareCell(this$static.this$0, row, column);
  elem = $getCellElement(this$static, this$static.this$0.bodyElem, row, column);
  setElementProperty(elem, 'align', align.textAlignString);
}

function $setVerticalAlignment(this$static, row, column, align){
  $prepareCell(this$static.this$0, row, column);
  setStyleAttribute($getCellElement(this$static, this$static.this$0.bodyElem, row, column), 'verticalAlign', align.verticalAlignString);
}

function $setWidth(this$static, row, column, width){
  $prepareCell(this$static.this$0, row, column);
  setElementProperty($getCellElement(this$static, this$static.this$0.bodyElem, row, column), 'width', width);
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTMLTable$CellFormatter';
_.typeId$ = 0;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  $HTMLTable$CellFormatter(this$static, this$0);
  return this$static;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'FlexTable$FlexCellFormatter';
_.typeId$ = 0;
function $clinit_45(){
  $clinit_45 = nullMethod;
  impl_0 = ($clinit_86() , implPanel);
}

function $FocusPanel(this$static){
  $clinit_45();
  $SimplePanel(this$static, $createFocusable(impl_0));
  $sinkEvents_0(this$static, 138237);
  return this$static;
}

function $setFocus(this$static, focused){
  if (focused) {
    $focus(impl_0, this$static.element);
  }
   else {
    $blur_0(impl_0, this$static.element);
  }
}

function onBrowserEvent(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      break;
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      break;
    case 131072:
      break;
    case 4096:
    case 2048:
      break;
    case 128:
    case 512:
    case 256:
      break;
  }
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel();
_.onBrowserEvent = onBrowserEvent;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'FocusPanel';
_.typeId$ = 37;
var impl_0;
function $Label(this$static){
  this$static.setElement(createDiv());
  $sinkEvents_0(this$static, 131197);
  $setStyleName(this$static, 'gwt-Label');
  return this$static;
}

function $addMouseListener(this$static, listener){
  if (this$static.mouseListeners === null) {
    this$static.mouseListeners = $MouseListenerCollection(new MouseListenerCollection());
  }
  $add_3(this$static.mouseListeners, listener);
}

function onBrowserEvent_2(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      break;
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (this.mouseListeners !== null) {
        $fireMouseEvent(this.mouseListeners, this, event_0);
      }

      break;
    case 131072:
      break;
  }
}

function Label(){
}

_ = Label.prototype = new Widget();
_.onBrowserEvent = onBrowserEvent_2;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'Label';
_.typeId$ = 38;
_.mouseListeners = null;
function $HTML(this$static){
  $Label(this$static);
  this$static.setElement(createDiv());
  $sinkEvents_0(this$static, 125);
  $setStyleName(this$static, 'gwt-HTML');
  return this$static;
}

function $HTML_0(this$static, html){
  $HTML(this$static);
  $setHTML_1(this$static, html);
  return this$static;
}

function $setHTML_1(this$static, html){
  setInnerHTML(this$static.element, html);
}

function HTML(){
}

_ = HTML.prototype = new Label();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTML';
_.typeId$ = 39;
function $$init_2(this$static){
  {
    $findNext(this$static);
  }
}

function $HTMLTable$1(this$static, this$1){
  this$static.this$1 = this$1;
  $$init_2(this$static);
  return this$static;
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.this$1.widgetList.size) {
    if ($get(this$static.this$1.widgetList, this$static.nextIndex) !== null) {
      return;
    }
  }
}

function $hasNext_0(this$static){
  return this$static.nextIndex < this$static.this$1.widgetList.size;
}

function hasNext_0(){
  return $hasNext_0(this);
}

function next_1(){
  var result;
  if (!$hasNext_0(this)) {
    throw $NoSuchElementException(new NoSuchElementException());
  }
  result = $get(this.this$1.widgetList, this.nextIndex);
  $findNext(this);
  return result;
}

function HTMLTable$1(){
}

_ = HTMLTable$1.prototype = new Object_0();
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTMLTable$1';
_.typeId$ = 0;
_.nextIndex = (-1);
function $HTMLTable$ColumnFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $prepareColumnGroup(this$static){
  if (this$static.columnGroup === null) {
    this$static.columnGroup = createElement('colgroup');
    insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    appendChild(this$static.columnGroup, createElement('col'));
  }
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTMLTable$ColumnFormatter';
_.typeId$ = 0;
_.columnGroup = null;
function $$init_3(this$static){
  this$static.widgetList = $ArrayList(new ArrayList());
}

function $HTMLTable$WidgetMapper(this$static){
  $$init_3(this$static);
  return this$static;
}

function $getWidget(this$static, elem){
  var index;
  index = getWidgetIndex(elem);
  if (index < 0) {
    return null;
  }
  return dynamicCast($get(this$static.widgetList, index), 11);
}

function $putWidget(this$static, widget){
  var index;
  if (this$static.freeList === null) {
    index = this$static.widgetList.size;
    $add_3(this$static.widgetList, widget);
  }
   else {
    index = this$static.freeList.index;
    $set(this$static.widgetList, index, widget);
    this$static.freeList = this$static.freeList.next;
  }
  setWidgetIndex(widget.element, index);
}

function $removeImpl(this$static, elem, index){
  clearWidgetIndex(elem);
  $set(this$static.widgetList, index, null);
  this$static.freeList = $HTMLTable$WidgetMapper$FreeNode(new HTMLTable$WidgetMapper$FreeNode(), index, this$static.freeList);
}

function $removeWidgetByElement(this$static, elem){
  var index;
  index = getWidgetIndex(elem);
  $removeImpl(this$static, elem, index);
}

function $widgetIterator(this$static){
  return $HTMLTable$1(new HTMLTable$1(), this$static);
}

function clearWidgetIndex(elem){
  elem['__widgetID'] = null;
}

function getWidgetIndex(elem){
  var index = elem['__widgetID'];
  return index == null?-1:index;
}

function setWidgetIndex(elem, index){
  elem['__widgetID'] = index;
}

function HTMLTable$WidgetMapper(){
}

_ = HTMLTable$WidgetMapper.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTMLTable$WidgetMapper';
_.typeId$ = 0;
_.freeList = null;
function $HTMLTable$WidgetMapper$FreeNode(this$static, index, next){
  this$static.index = index;
  this$static.next = next;
  return this$static;
}

function HTMLTable$WidgetMapper$FreeNode(){
}

_ = HTMLTable$WidgetMapper$FreeNode.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HTMLTable$WidgetMapper$FreeNode';
_.typeId$ = 0;
_.index = 0;
_.next = null;
function $clinit_57(){
  $clinit_57 = nullMethod;
  ALIGN_CENTER = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'center');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'right');
}

var ALIGN_CENTER;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HasHorizontalAlignment$HorizontalAlignmentConstant';
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_60(){
  $clinit_60 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'bottom');
  ALIGN_MIDDLE = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'middle');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'top');
}

var ALIGN_MIDDLE;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'HasVerticalAlignment$VerticalAlignmentConstant';
_.typeId$ = 0;
_.verticalAlignString = null;
function getKeyboardModifiers(event_0){
  return (eventGetShiftKey(event_0)?1:0) | (eventGetMetaKey(event_0)?8:0) | (eventGetCtrlKey(event_0)?2:0) | (eventGetAltKey(event_0)?4:0);
}

function $MouseListenerCollection(this$static){
  $ArrayList(this$static);
  return this$static;
}

function $fireMouseDown(this$static, sender, x, y){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 12);
    listener.onMouseDown(sender, x, y);
  }
}

function $fireMouseEnter(this$static, sender){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 12);
    listener.onMouseEnter(sender);
  }
}

function $fireMouseEvent(this$static, sender, event_0){
  var from, senderElem, to, x, y;
  senderElem = sender.element;
  x = eventGetClientX(event_0) - getAbsoluteLeft(senderElem) + getElementPropertyInt(senderElem, 'scrollLeft') + getScrollLeft();
  y = eventGetClientY(event_0) - getAbsoluteTop(senderElem) + getElementPropertyInt(senderElem, 'scrollTop') + getScrollTop();
  switch (eventGetType(event_0)) {
    case 4:
      $fireMouseDown(this$static, sender, x, y);
      break;
    case 8:
      $fireMouseUp(this$static, sender, x, y);
      break;
    case 64:
      $fireMouseMove(this$static, sender, x, y);
      break;
    case 16:
      from = eventGetFromElement(event_0);
      if (!isOrHasChild(senderElem, from)) {
        $fireMouseEnter(this$static, sender);
      }

      break;
    case 32:
      to = eventGetToElement(event_0);
      if (!isOrHasChild(senderElem, to)) {
        $fireMouseLeave(this$static, sender);
      }

      break;
  }
}

function $fireMouseLeave(this$static, sender){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 12);
    listener.onMouseLeave(sender);
  }
}

function $fireMouseMove(this$static, sender, x, y){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 12);
    listener.onMouseMove(sender, x, y);
  }
}

function $fireMouseUp(this$static, sender, x, y){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext_1(it);) {
    listener = dynamicCast($next_0(it), 12);
    listener.onMouseUp(sender, x, y);
  }
}

function MouseListenerCollection(){
}

_ = MouseListenerCollection.prototype = new ArrayList();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'MouseListenerCollection';
_.typeId$ = 40;
function $clinit_71(){
  $clinit_71 = nullMethod;
  rootPanels = $HashMap(new HashMap());
}

function $RootPanel(this$static, elem){
  $clinit_71();
  $AbsolutePanel(this$static);
  if (elem === null) {
    elem = getBodyElement();
  }
  this$static.setElement(elem);
  this$static.onAttach();
  return this$static;
}

function get(){
  $clinit_71();
  return get_0(null);
}

function get_0(id){
  $clinit_71();
  var elem, gwt;
  gwt = dynamicCast($get_0(rootPanels, id), 13);
  if (gwt !== null) {
    return gwt;
  }
  elem = null;
  if (id !== null) {
    if (null === (elem = getElementById(id))) {
      return null;
    }
  }
  if (rootPanels.size == 0) {
    hookWindowClosing_0();
  }
  $put(rootPanels, id, gwt = $RootPanel(new RootPanel(), elem));
  return gwt;
}

function getBodyElement(){
  $clinit_71();
  return $doc.body;
}

function hookWindowClosing_0(){
  $clinit_71();
  addWindowCloseListener(new RootPanel$1());
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'RootPanel';
_.typeId$ = 41;
var rootPanels;
function onWindowClosed_0(){
  var gwt, it;
  for (it = $iterator_2($values(($clinit_71() , rootPanels))); $hasNext_3(it);) {
    gwt = dynamicCast($next_2(it), 13);
    if (gwt.attached) {
      gwt.onDetach();
    }
  }
}

function onWindowClosing_0(){
  return null;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0();
_.onWindowClosed = onWindowClosed_0;
_.onWindowClosing = onWindowClosing_0;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'RootPanel$1';
_.typeId$ = 42;
function $$init_5(this$static){
  this$static.hasElement = this$static.this$0.widget !== null;
}

function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  $$init_5(this$static);
  return this$static;
}

function hasNext_1(){
  return this.hasElement;
}

function next_2(){
  if (!this.hasElement || this.this$0.widget === null) {
    throw $NoSuchElementException(new NoSuchElementException());
  }
  this.hasElement = false;
  return this.this$0.widget;
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0();
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'SimplePanel$1';
_.typeId$ = 0;
function $WidgetCollection(this$static, parent){
  this$static.array = initDims_0('[Lcom.google.gwt.user.client.ui.Widget;', [0], [11], [4], null);
  return this$static;
}

function $add_2(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] === w) {
      return i;
    }
  }
  return (-1);
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException());
  }
  if (this$static.size == this$static.array.length_0) {
    newArray = initDims_0('[Lcom.google.gwt.user.client.ui.Widget;', [0], [11], [this$static.array.length_0 * 2], null);
    for (i = 0; i < this$static.array.length_0; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $iterator(this$static){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this$static);
}

function $remove_4(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException());
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_5(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == (-1)) {
    throw $NoSuchElementException(new NoSuchElementException());
  }
  $remove_4(this$static, index);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'WidgetCollection';
_.typeId$ = 0;
_.array = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function hasNext_2(){
  return this.index < this.this$0.size - 1;
}

function next_3(){
  if (this.index >= this.this$0.size) {
    throw $NoSuchElementException(new NoSuchElementException());
  }
  return this.this$0.array[++this.index];
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0();
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.typeName$ = package_com_google_gwt_user_client_ui_ + 'WidgetCollection$WidgetIterator';
_.typeId$ = 0;
_.index = (-1);
function $clinit_86(){
  $clinit_86 = nullMethod;
  implPanel = $FocusImplIE6(new FocusImplIE6());
  implWidget = implPanel;
}

function $FocusImpl(this$static){
  $clinit_86();
  return this$static;
}

function $blur_0(this$static, elem){
  elem.blur();
}

function $createFocusable(this$static){
  var e = $doc.createElement('DIV');
  e.tabIndex = 0;
  return e;
}

function FocusImpl(){
}

_ = FocusImpl.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_impl_ + 'FocusImpl';
_.typeId$ = 0;
var implPanel, implWidget;
function $clinit_85(){
  $clinit_85 = nullMethod;
  $clinit_86();
}

function $FocusImplIE6(this$static){
  $clinit_85();
  $FocusImpl(this$static);
  return this$static;
}

function $focus(this$static, elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function FocusImplIE6(){
}

_ = FocusImplIE6.prototype = new FocusImpl();
_.typeName$ = package_com_google_gwt_user_client_ui_impl_ + 'FocusImplIE6';
_.typeId$ = 0;
function $createElement_0(this$static){
  return createDiv();
}

function PopupImpl(){
}

_ = PopupImpl.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_user_client_ui_impl_ + 'PopupImpl';
_.typeId$ = 0;
function $onHide(this$static, popup){
  var frame = popup.__frame;
  frame.parentElement.removeChild(frame);
  popup.__frame = null;
  frame.__popup = null;
}

function $onShow(this$static, popup){
  var frame = $doc.createElement('iframe');
  frame.src = "javascript:''";
  frame.scrolling = 'no';
  frame.frameBorder = 0;
  popup.__frame = frame;
  frame.__popup = popup;
  var style = frame.style;
  style.position = 'absolute';
  style.filter = 'alpha(opacity=0)';
  style.visibility = popup.style.visibility;
  style.left = popup.offsetLeft;
  style.top = popup.offsetTop;
  style.width = popup.offsetWidth;
  style.height = popup.offsetHeight;
  style.setExpression('left', 'this.__popup.offsetLeft');
  style.setExpression('top', 'this.__popup.offsetTop');
  style.setExpression('width', 'this.__popup.offsetWidth');
  style.setExpression('height', 'this.__popup.offsetHeight');
  popup.parentElement.insertBefore(frame, popup);
}

function $setVisible_0(this$static, popup, visible){
  if (popup.__frame) {
    popup.__frame.style.visibility = visible?'visible':'hidden';
  }
}

function PopupImplIE6(){
}

_ = PopupImplIE6.prototype = new PopupImpl();
_.typeName$ = package_com_google_gwt_user_client_ui_impl_ + 'PopupImplIE6';
_.typeId$ = 0;
function $clinit_91(){
  $clinit_91 = nullMethod;
  $clinit_45();
  impl_2 = new GlassPanelImplIE6();
}

function $GlassPanel(this$static, autoHide){
  var elem;
  $clinit_91();
  $FocusPanel(this$static);
  this$static.autoHide = autoHide;
  elem = this$static.element;
  setStyleAttribute(elem, 'backgroundColor', '#000000');
  setStyleAttribute(elem, 'filter', 'alpha(opacity=50)');
  setStyleAttribute(elem, 'opacity', '0.5');
  $setStyleName(this$static, 'gwt-GlassPanel');
  return this$static;
}

function onAttach_0(){
  var $e0, parent;
  $onAttach(this);
  try {
    parent = dynamicCast(this.parent, 17);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 18)) {
      $e0;
      throw $IllegalStateException_0(new IllegalStateException(), 'Parent widget must be an instance of AbsolutePanel');
    }
     else 
      throw $e0;
  }
  if (parent === get()) {
    $matchDocumentSize(impl_2, this);
    this.resizeListener = $GlassPanel$1(new GlassPanel$1(), this);
    addWindowResizeListener(this.resizeListener);
  }
   else {
    $matchParentSize(impl_2, this, parent);
  }
  if (this.autoHide) {
    addEventPreview(this);
  }
  addCommand($GlassPanel$2(new GlassPanel$2(), this));
}

function onDetach_1(){
  $onDetach(this);
  if (this.resizeListener !== null) {
    removeWindowResizeListener(this.resizeListener);
    this.resizeListener = null;
  }
  if (this.autoHide) {
    removeEventPreview(this);
  }
}

function onEventPreview_1(event_0){
  var type;
  type = eventGetType(event_0);
  switch (type) {
    case 256:
      {
        if (eventGetKeyCode(event_0) == 27) {
          $removeFromParent(this);
          return false;
        }
      }

    case 1:
      {
        if (isOrHasChild(this.element, eventGetTarget(event_0))) {
          $removeFromParent(this);
          return false;
        }
      }

  }
  return true;
}

function GlassPanel(){
}

_ = GlassPanel.prototype = new FocusPanel();
_.onAttach = onAttach_0;
_.onDetach = onDetach_1;
_.onEventPreview = onEventPreview_1;
_.typeName$ = package_com_google_gwt_widgetideas_client_ + 'GlassPanel';
_.typeId$ = 43;
_.autoHide = false;
_.resizeListener = null;
var impl_2;
function $GlassPanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onWindowResized(width, height){
  $matchDocumentSize(($clinit_91() , impl_2), this.this$0);
}

function GlassPanel$1(){
}

_ = GlassPanel$1.prototype = new Object_0();
_.onWindowResized = onWindowResized;
_.typeName$ = package_com_google_gwt_widgetideas_client_ + 'GlassPanel$1';
_.typeId$ = 44;
function $GlassPanel$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_0(){
  $setFocus(this.this$0, true);
}

function GlassPanel$2(){
}

_ = GlassPanel$2.prototype = new Object_0();
_.execute = execute_0;
_.typeName$ = package_com_google_gwt_widgetideas_client_ + 'GlassPanel$2';
_.typeId$ = 45;
function $matchParentSize(this$static, glassPanel, parent){
  setStyleAttribute(glassPanel.element, 'bottom', '0px');
  setStyleAttribute(glassPanel.element, 'right', '0px');
}

function getWindowScrollHeight(){
  return $doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollHeight:$doc.body.scrollHeight;
}

function getWindowScrollWidth(){
  return $doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollWidth:$doc.body.scrollWidth;
}

function GlassPanelImpl(){
}

_ = GlassPanelImpl.prototype = new Object_0();
_.typeName$ = package_com_google_gwt_widgetideas_client_impl_ + 'GlassPanelImpl';
_.typeId$ = 0;
function $matchDocumentSize(this$static, glassPanel){
  var clientHeight, clientWidth, height, offsetHeight, offsetWidth, scrollHeight, scrollWidth, width;
  clientWidth = $windowGetClientWidth_0(this$static);
  clientHeight = $windowGetClientHeight_0(this$static);
  if (clientWidth != this$static.lastDocumentClientWidth || clientHeight != this$static.lastDocumentClientHeight) {
    offsetWidth = get().getOffsetWidth();
    offsetHeight = get().getOffsetHeight();
    scrollWidth = getWindowScrollWidth();
    scrollHeight = getWindowScrollHeight();
    width = max(clientWidth, max(offsetWidth, scrollWidth));
    height = max(clientHeight, max(offsetHeight, scrollHeight));
    $setPixelSize(glassPanel, width, height);
    this$static.lastDocumentClientWidth = clientWidth;
    this$static.lastDocumentClientHeight = clientHeight;
  }
}

function $windowGetClientHeight_0(this$static){
  return $doc.documentElement.clientHeight || $doc.body.clientHeight;
}

function $windowGetClientWidth_0(this$static){
  return $doc.documentElement.clientWidth || $doc.body.clientWidth;
}

function GlassPanelImplIE6(){
}

_ = GlassPanelImplIE6.prototype = new GlassPanelImpl();
_.typeName$ = package_com_google_gwt_widgetideas_client_impl_ + 'GlassPanelImplIE6';
_.typeId$ = 0;
_.lastDocumentClientHeight = (-1);
_.lastDocumentClientWidth = (-1);
function OutputStream(){
}

_ = OutputStream.prototype = new Object_0();
_.typeName$ = package_java_io_ + 'OutputStream';
_.typeId$ = 0;
function FilterOutputStream(){
}

_ = FilterOutputStream.prototype = new OutputStream();
_.typeName$ = package_java_io_ + 'FilterOutputStream';
_.typeId$ = 0;
function PrintStream(){
}

_ = PrintStream.prototype = new FilterOutputStream();
_.typeName$ = package_java_io_ + 'PrintStream';
_.typeId$ = 0;
function $clinit_97(){
  $clinit_97 = nullMethod;
  $clinit_112();
}

function $ArrayStoreException(this$static){
  $clinit_97();
  $RuntimeException(this$static);
  return this$static;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'ArrayStoreException';
_.typeId$ = 46;
function $clinit_99(){
  $clinit_99 = nullMethod;
  $clinit_112();
}

function $ClassCastException(this$static){
  $clinit_99();
  $RuntimeException(this$static);
  return this$static;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'ClassCastException';
_.typeId$ = 47;
function $clinit_103(){
  $clinit_103 = nullMethod;
  $clinit_112();
}

function $IllegalArgumentException(this$static, message){
  $clinit_103();
  $RuntimeException_0(this$static, message);
  return this$static;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'IllegalArgumentException';
_.typeId$ = 48;
function $clinit_104(){
  $clinit_104 = nullMethod;
  $clinit_112();
}

function $IllegalStateException(this$static){
  $clinit_104();
  $RuntimeException(this$static);
  return this$static;
}

function $IllegalStateException_0(this$static, s){
  $clinit_104();
  $RuntimeException_0(this$static, s);
  return this$static;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'IllegalStateException';
_.typeId$ = 49;
function $clinit_105(){
  $clinit_105 = nullMethod;
  $clinit_112();
}

function $IndexOutOfBoundsException(this$static){
  $clinit_105();
  $RuntimeException(this$static);
  return this$static;
}

function $IndexOutOfBoundsException_0(this$static, message){
  $clinit_105();
  $RuntimeException_0(this$static, message);
  return this$static;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'IndexOutOfBoundsException';
_.typeId$ = 50;
function $clinit_110(){
  $clinit_110 = nullMethod;
  {
    initNative();
  }
}

function initNative(){
  $clinit_110();
  floatRegex = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;
}

var floatRegex = null;
function $clinit_106(){
  $clinit_106 = nullMethod;
  $clinit_110();
}

var MAX_VALUE = 2147483647, MIN_VALUE = (-2147483648);
function abs(x){
  return x < 0?-x:x;
}

function max(x, y){
  return x > y?x:y;
}

function $clinit_108(){
  $clinit_108 = nullMethod;
  $clinit_112();
}

function $NegativeArraySizeException(this$static){
  $clinit_108();
  $RuntimeException(this$static);
  return this$static;
}

function NegativeArraySizeException(){
}

_ = NegativeArraySizeException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'NegativeArraySizeException';
_.typeId$ = 51;
function $clinit_109(){
  $clinit_109 = nullMethod;
  $clinit_112();
}

function $NullPointerException(this$static, message){
  $clinit_109();
  $RuntimeException_0(this$static, message);
  return this$static;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'NullPointerException';
_.typeId$ = 52;
function $charAt(this$static, index){
  return this$static.charCodeAt(index);
}

function $hashCode_0(this$static){
  var hashCache = hashCache_0;
  if (!hashCache) {
    hashCache = hashCache_0 = {};
  }
  var key = ':' + this$static;
  var hashCode = hashCache[key];
  if (hashCode == null) {
    hashCode = 0;
    var n = this$static.length;
    var inc = n < 64?1:n / 32 | 0;
    for (var i = 0; i < n; i += inc) {
      hashCode <<= 1;
      hashCode += this$static.charCodeAt(i);
    }
    hashCode |= 0;
    hashCache[key] = hashCode;
  }
  return hashCode;
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $length(this$static){
  return this$static.length;
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __equals(me, other){
  return String(me) == other;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = $indexOf_1(replaceStr, '\\', pos))) {
    if ($charAt(replaceStr, pos + 1) == 36) {
      replaceStr = $substring_0(replaceStr, 0, pos) + '$' + $substring(replaceStr, ++pos);
    }
     else {
      replaceStr = $substring_0(replaceStr, 0, pos) + $substring(replaceStr, ++pos);
    }
  }
  return replaceStr;
}

function equals_3(other){
  if (!instanceOf(other, 1))
    return false;
  return __equals(this, other);
}

function hashCode_4(){
  return $hashCode_0(this);
}

function toString_7(){
  return this;
}

function valueOf(x){
  return x !== null?x.toString$():'null';
}

_ = String.prototype;
_.equals$ = equals_3;
_.hashCode$ = hashCode_4;
_.toString$ = toString_7;
_.typeName$ = package_java_lang_ + 'String';
_.typeId$ = 2;
var hashCache_0 = null;
function $StringBuffer(this$static){
  $assign(this$static);
  return this$static;
}

function $append(this$static, toAppend){
  if (toAppend === null) {
    toAppend = 'null';
  }
  var last = this$static.js.length - 1;
  var lastLength = this$static.js[last].length;
  if (this$static.length > lastLength * lastLength) {
    this$static.js[last] = this$static.js[last] + toAppend;
  }
   else {
    this$static.js.push(toAppend);
  }
  this$static.length += toAppend.length;
  return this$static;
}

function $assign(this$static){
  $assign_0(this$static, '');
}

function $assign_0(this$static, s){
  this$static.js = [s];
  this$static.length = s.length;
}

function $toString_0(this$static){
  this$static.normalize();
  return this$static.js[0];
}

function normalize(){
  if (this.js.length > 1) {
    this.js = [this.js.join('')];
    this.length = this.js[0].length;
  }
}

function toString_6(){
  return $toString_0(this);
}

function StringBuffer(){
}

_ = StringBuffer.prototype = new Object_0();
_.normalize = normalize;
_.toString$ = toString_6;
_.typeName$ = package_java_lang_ + 'StringBuffer';
_.typeId$ = 0;
function $clinit_115(){
  $clinit_115 = nullMethod;
  err_0 = new PrintStream();
}

function currentTimeMillis_0(){
  $clinit_115();
  return new Date().getTime();
}

function identityHashCode(o){
  $clinit_115();
  return getHashCode_0(o);
}

var err_0;
function $clinit_117(){
  $clinit_117 = nullMethod;
  $clinit_112();
}

function $UnsupportedOperationException(this$static, message){
  $clinit_117();
  $RuntimeException_0(this$static, message);
  return this$static;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException();
_.typeName$ = package_java_lang_ + 'UnsupportedOperationException';
_.typeId$ = 53;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_1(this$static){
  return this$static.i < this$static.this$0.size_0();
}

function $next_0(this$static){
  if (!$hasNext_1(this$static)) {
    throw $NoSuchElementException(new NoSuchElementException());
  }
  return this$static.this$0.get(this$static.last = this$static.i++);
}

function $remove_6(this$static){
  if (this$static.last < 0) {
    throw $IllegalStateException(new IllegalStateException());
  }
  this$static.this$0.remove(this$static.last);
  this$static.i = this$static.last;
  this$static.last = (-1);
}

function hasNext_3(){
  return $hasNext_1(this);
}

function next_4(){
  return $next_0(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0();
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.typeName$ = package_java_util_ + 'AbstractList$IteratorImpl';
_.typeId$ = 0;
_.i = 0;
_.last = (-1);
function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = $iterator_3(this$static.entrySet()); $hasNext_4(iter);) {
    entry = $next_3(iter);
    k = entry.getKey();
    if (key === null?k === null:key.equals$(k)) {
      if (remove) {
        $remove_9(iter);
      }
      return entry;
    }
  }
  return null;
}

function $keySet(this$static){
  var entrySet;
  entrySet = this$static.entrySet();
  return $AbstractMap$1(new AbstractMap$1(), this$static, entrySet);
}

function $values(this$static){
  var entrySet;
  entrySet = $entrySet(this$static);
  return $AbstractMap$3(new AbstractMap$3(), this$static, entrySet);
}

function containsKey(key){
  return $implFindEntry(this, key, false) !== null;
}

function equals_5(obj){
  var iter, key, keys, otherKeys, otherMap, otherValue, value;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 20)) {
    return false;
  }
  otherMap = dynamicCast(obj, 20);
  keys = $keySet(this);
  otherKeys = otherMap.keySet();
  if (!$equals_0(keys, otherKeys)) {
    return false;
  }
  for (iter = $iterator_1(keys); $hasNext_2(iter);) {
    key = $next_1(iter);
    value = this.get_0(key);
    otherValue = otherMap.get_0(key);
    if (value === null?otherValue !== null:!value.equals$(otherValue)) {
      return false;
    }
  }
  return true;
}

function get_1(key){
  var entry;
  entry = $implFindEntry(this, key, false);
  return entry === null?null:entry.getValue();
}

function hashCode_6(){
  var entry, hashCode, iter;
  hashCode = 0;
  for (iter = $iterator_3(this.entrySet()); $hasNext_4(iter);) {
    entry = $next_3(iter);
    hashCode += entry.hashCode$();
  }
  return hashCode;
}

function keySet(){
  return $keySet(this);
}

function toString_10(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $iterator_3(this.entrySet()); $hasNext_4(iter);) {
    entry = $next_3(iter);
    if (comma) {
      s += ', ';
    }
     else {
      comma = true;
    }
    s += valueOf(entry.getKey());
    s += '=';
    s += valueOf(entry.getValue());
  }
  return s + '}';
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0();
_.containsKey = containsKey;
_.equals$ = equals_5;
_.get_0 = get_1;
_.hashCode$ = hashCode_6;
_.keySet = keySet;
_.toString$ = toString_10;
_.typeName$ = package_java_util_ + 'AbstractMap';
_.typeId$ = 54;
function $equals_0(this$static, o){
  var iter, other, otherItem;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 21)) {
    return false;
  }
  other = dynamicCast(o, 21);
  if (other.size_0() != this$static.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this$static.contains(otherItem)) {
      return false;
    }
  }
  return true;
}

function equals_6(o){
  return $equals_0(this, o);
}

function hashCode_7(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next !== null) {
      hashCode += next.hashCode$();
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection();
_.equals$ = equals_6;
_.hashCode$ = hashCode_7;
_.typeName$ = package_java_util_ + 'AbstractSet';
_.typeId$ = 55;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function $iterator_1(this$static){
  var outerIter;
  outerIter = $iterator_3(this$static.val$entrySet);
  return $AbstractMap$2(new AbstractMap$2(), this$static, outerIter);
}

function contains_0(key){
  return this.this$0.containsKey(key);
}

function iterator_3(){
  return $iterator_1(this);
}

function size_0(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet();
_.contains = contains_0;
_.iterator_0 = iterator_3;
_.size_0 = size_0;
_.typeName$ = package_java_util_ + 'AbstractMap$1';
_.typeId$ = 56;
function $AbstractMap$2(this$static, this$1, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function $hasNext_2(this$static){
  return this$static.val$outerIter.hasNext();
}

function $next_1(this$static){
  var entry;
  entry = this$static.val$outerIter.next_0();
  return entry.getKey();
}

function hasNext_4(){
  return $hasNext_2(this);
}

function next_5(){
  return $next_1(this);
}

function AbstractMap$2(){
}

_ = AbstractMap$2.prototype = new Object_0();
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.typeName$ = package_java_util_ + 'AbstractMap$2';
_.typeId$ = 0;
function $AbstractMap$3(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function $iterator_2(this$static){
  var outerIter;
  outerIter = $iterator_3(this$static.val$entrySet);
  return $AbstractMap$4(new AbstractMap$4(), this$static, outerIter);
}

function contains_1(value){
  return $containsValue(this.this$0, value);
}

function iterator_4(){
  return $iterator_2(this);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$3(){
}

_ = AbstractMap$3.prototype = new AbstractCollection();
_.contains = contains_1;
_.iterator_0 = iterator_4;
_.size_0 = size_1;
_.typeName$ = package_java_util_ + 'AbstractMap$3';
_.typeId$ = 0;
function $AbstractMap$4(this$static, this$1, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function $hasNext_3(this$static){
  return this$static.val$outerIter.hasNext();
}

function $next_2(this$static){
  var value;
  value = this$static.val$outerIter.next_0().getValue();
  return value;
}

function hasNext_5(){
  return $hasNext_3(this);
}

function next_6(){
  return $next_2(this);
}

function AbstractMap$4(){
}

_ = AbstractMap$4.prototype = new Object_0();
_.hasNext = hasNext_5;
_.next_0 = next_6;
_.typeName$ = package_java_util_ + 'AbstractMap$4';
_.typeId$ = 0;
function $clinit_133(){
  $clinit_133 = nullMethod;
  UNDEFINED = createUndefinedValue();
}

function $$init_8(this$static){
  {
    $clearImpl_0(this$static);
  }
}

function $HashMap(this$static){
  $clinit_133();
  $$init_8(this$static);
  return this$static;
}

function $clearImpl_0(this$static){
  this$static.hashCodeMap = createArray();
  this$static.stringMap = createObject();
  this$static.nullSlot = wrapJSO(UNDEFINED, JavaScriptObject);
  this$static.size = 0;
}

function $containsKey(this$static, key){
  if (instanceOf(key, 1)) {
    return getStringValue(this$static.stringMap, dynamicCast(key, 1)) !== UNDEFINED;
  }
   else if (key === null) {
    return this$static.nullSlot !== UNDEFINED;
  }
   else {
    return getHashValue(this$static.hashCodeMap, key, key.hashCode$()) !== UNDEFINED;
  }
}

function $containsValue(this$static, value){
  if (this$static.nullSlot !== UNDEFINED && equalsWithNullCheck(this$static.nullSlot, value)) {
    return true;
  }
   else if (containsStringValue(this$static.stringMap, value)) {
    return true;
  }
   else if (containsHashValue(this$static.hashCodeMap, value)) {
    return true;
  }
  return false;
}

function $entrySet(this$static){
  return $HashMap$EntrySet(new HashMap$EntrySet(), this$static);
}

function $get_0(this$static, key){
  var result;
  if (instanceOf(key, 1)) {
    result = getStringValue(this$static.stringMap, dynamicCast(key, 1));
  }
   else if (key === null) {
    result = this$static.nullSlot;
  }
   else {
    result = getHashValue(this$static.hashCodeMap, key, key.hashCode$());
  }
  return result === UNDEFINED?null:result;
}

function $put(this$static, key, value){
  var previous;
  if (key !== null) {
    previous = putStringValue(this$static.stringMap, key, value);
  }
   else if (key === null) {
    previous = this$static.nullSlot;
    this$static.nullSlot = value;
  }
   else {
    previous = putHashValue(this$static.hashCodeMap, key, value, $hashCode_0(key));
  }
  if (previous === UNDEFINED) {
    ++this$static.size;
    return null;
  }
   else {
    return previous;
  }
}

function $remove_10(this$static, key){
  var previous;
  if (instanceOf(key, 1)) {
    previous = removeStringValue(this$static.stringMap, dynamicCast(key, 1));
  }
   else if (key === null) {
    previous = this$static.nullSlot;
    this$static.nullSlot = wrapJSO(UNDEFINED, JavaScriptObject);
  }
   else {
    previous = removeHashValue(this$static.hashCodeMap, key, key.hashCode$());
  }
  if (previous === UNDEFINED) {
    return null;
  }
   else {
    --this$static.size;
    return previous;
  }
}

function addAllHashEntries(hashCodeMap, dest){
  $clinit_133();
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_0(array[i]);
      }
    }
  }
}

function addAllStringEntries(stringMap, dest){
  $clinit_133();
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var value = stringMap[key];
      var entry = create(key.substring(1), value);
      dest.add_0(entry);
    }
  }
}

function containsHashValue(hashCodeMap, value){
  $clinit_133();
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (equalsWithNullCheck(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function containsKey_0(key){
  return $containsKey(this, key);
}

function containsStringValue(stringMap, value){
  $clinit_133();
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (equalsWithNullCheck(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

function createUndefinedValue(){
  $clinit_133();
}

function entrySet_0(){
  return $entrySet(this);
}

function equalsWithNullCheck(a, b){
  $clinit_133();
  if (a === b) {
    return true;
  }
   else if (a === null) {
    return false;
  }
   else {
    return a.equals$(b);
  }
}

function get_3(key){
  return $get_0(this, key);
}

function getHashValue(hashCodeMap, key, hashCode){
  $clinit_133();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (equalsWithNullCheck(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
}

function getStringValue(stringMap, key){
  $clinit_133();
  return stringMap[':' + key];
}

function putHashValue(hashCodeMap, key, value, hashCode){
  $clinit_133();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (equalsWithNullCheck(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = hashCodeMap[hashCode] = [];
  }
  var entry = create(key, value);
  array.push(entry);
}

function putStringValue(stringMap, key, value){
  $clinit_133();
  key = ':' + key;
  var result = stringMap[key];
  stringMap[key] = value;
  return result;
}

function removeHashValue(hashCodeMap, key, hashCode){
  $clinit_133();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (equalsWithNullCheck(key, entryKey)) {
        if (array.length == 1) {
          delete hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        return entry.getValue();
      }
    }
  }
}

function removeStringValue(stringMap, key){
  $clinit_133();
  key = ':' + key;
  var result = stringMap[key];
  delete stringMap[key];
  return result;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractMap();
_.containsKey = containsKey_0;
_.entrySet = entrySet_0;
_.get_0 = get_3;
_.typeName$ = package_java_util_ + 'HashMap';
_.typeId$ = 57;
_.hashCodeMap = null;
_.nullSlot = null;
_.size = 0;
_.stringMap = null;
var UNDEFINED;
function $HashMap$EntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value = value;
  return this$static;
}

function create(key, value){
  return $HashMap$EntryImpl(new HashMap$EntryImpl(), key, value);
}

function equals_8(other){
  var entry;
  if (instanceOf(other, 22)) {
    entry = dynamicCast(other, 22);
    if (equalsWithNullCheck(this.key, entry.getKey()) && equalsWithNullCheck(this.value, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getKey(){
  return this.key;
}

function getValue(){
  return this.value;
}

function hashCode_8(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.key !== null) {
    keyHash = this.key.hashCode$();
  }
  if (this.value !== null) {
    valueHash = this.value.hashCode$();
  }
  return keyHash ^ valueHash;
}

function setValue(object){
  var old;
  old = this.value;
  this.value = object;
  return old;
}

function toString_11(){
  return this.key + '=' + this.value;
}

function HashMap$EntryImpl(){
}

_ = HashMap$EntryImpl.prototype = new Object_0();
_.equals$ = equals_8;
_.getKey = getKey;
_.getValue = getValue;
_.hashCode$ = hashCode_8;
_.setValue = setValue;
_.toString$ = toString_11;
_.typeName$ = package_java_util_ + 'HashMap$EntryImpl';
_.typeId$ = 58;
_.key = null;
_.value = null;
function $HashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $iterator_3(this$static){
  return $HashMap$EntrySetIterator(new HashMap$EntrySetIterator(), this$static.this$0);
}

function contains_3(o){
  var entry, key, value;
  if (instanceOf(o, 22)) {
    entry = dynamicCast(o, 22);
    key = entry.getKey();
    if ($containsKey(this.this$0, key)) {
      value = $get_0(this.this$0, key);
      return equalsWithNullCheck(entry.getValue(), value);
    }
  }
  return false;
}

function iterator_5(){
  return $iterator_3(this);
}

function size_3(){
  return this.this$0.size;
}

function HashMap$EntrySet(){
}

_ = HashMap$EntrySet.prototype = new AbstractSet();
_.contains = contains_3;
_.iterator_0 = iterator_5;
_.size_0 = size_3;
_.typeName$ = package_java_util_ + 'HashMap$EntrySet';
_.typeId$ = 59;
function $HashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList());
  if (this$static.this$0.nullSlot !== ($clinit_133() , UNDEFINED)) {
    $add_3(list, $HashMap$EntryImpl(new HashMap$EntryImpl(), null, this$static.this$0.nullSlot));
  }
  addAllStringEntries(this$static.this$0.stringMap, list);
  addAllHashEntries(this$static.this$0.hashCodeMap, list);
  this$static.iter = $iterator_0(list);
  return this$static;
}

function $hasNext_4(this$static){
  return $hasNext_1(this$static.iter);
}

function $next_3(this$static){
  return this$static.last = dynamicCast($next_0(this$static.iter), 22);
}

function $remove_9(this$static){
  if (this$static.last === null) {
    throw $IllegalStateException_0(new IllegalStateException(), 'Must call next() before remove().');
  }
   else {
    $remove_6(this$static.iter);
    $remove_10(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function hasNext_6(){
  return $hasNext_4(this);
}

function next_7(){
  return $next_3(this);
}

function HashMap$EntrySetIterator(){
}

_ = HashMap$EntrySetIterator.prototype = new Object_0();
_.hasNext = hasNext_6;
_.next_0 = next_7;
_.typeName$ = package_java_util_ + 'HashMap$EntrySetIterator';
_.typeId$ = 0;
_.iter = null;
_.last = null;
function $clinit_138(){
  $clinit_138 = nullMethod;
  $clinit_112();
}

function $NoSuchElementException(this$static){
  $clinit_138();
  $RuntimeException(this$static);
  return this$static;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException();
_.typeName$ = package_java_util_ + 'NoSuchElementException';
_.typeId$ = 60;
function init_0(){
  $onModuleLoad(new GlassPanelDemo());
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init_0();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init_0();
  }
}

var typeIdArray = [{}, {}, {1:1}, {3:1}, {3:1}, {3:1, 18:1}, {3:1, 18:1}, {2:1}, {4:1}, {10:1}, {10:1}, {10:1}, {10:1}, {10:1}, {10:1}, {3:1, 18:1}, {7:1}, {7:1}, {7:1}, {2:1, 6:1}, {2:1}, {8:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1, 17:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {19:1}, {19:1}, {19:1}, {11:1, 14:1, 15:1, 16:1}, {5:1, 11:1, 14:1, 15:1, 16:1}, {5:1, 11:1, 12:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {11:1, 14:1, 15:1, 16:1}, {19:1}, {11:1, 13:1, 14:1, 15:1, 16:1, 17:1}, {8:1}, {5:1, 11:1, 14:1, 15:1, 16:1}, {9:1}, {4:1}, {3:1, 18:1}, {3:1, 18:1}, {3:1, 18:1}, {3:1, 18:1}, {3:1, 18:1}, {3:1, 18:1}, {3:1, 18:1}, {3:1, 18:1}, {20:1}, {21:1}, {21:1}, {20:1}, {22:1}, {21:1}, {3:1, 18:1}];

if (com_google_gwt_demos_glasspanel_GlassPanelDemo) {
  var __gwt_initHandlers = com_google_gwt_demos_glasspanel_GlassPanelDemo.__gwt_initHandlers;  com_google_gwt_demos_glasspanel_GlassPanelDemo.onScriptLoad(gwtOnLoad);
}
})();
