(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,ks='com.google.gwt.core.client.',ls='com.google.gwt.demos.titledpanel.client.',ms='com.google.gwt.lang.',ns='com.google.gwt.user.client.',os='com.google.gwt.user.client.impl.',ps='com.google.gwt.user.client.ui.',qs='com.google.gwt.user.client.ui.impl.',rs='com.google.gwt.widgetideas.client.',ss='java.lang.',ts='java.util.';function js(){}
function ym(a){return this===a;}
function zm(){return gn(this);}
function wm(){}
_=wm.prototype={};_.eQ=ym;_.hC=zm;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!Db(a,2)){return false;}return B(b,Cb(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new wm();_.eQ=C;_.hC=D;_.tI=7;function mb(b){var a,c;b.a=Fl(new Bl(),'Hello World');rk(b.a,'500px');nb(b,li(new pg(),'This is a widget in the TitledPanel'));af(kj(),b.a);a=gg(new eg(),3,3);ai(a,1);ci(a,3);af(kj(),li(new pg(),'<BR><BR>'));af(kj(),a);c=kk(new ck());hk(c,b.a.b);gi(a,0,0,mf(new ef(),'Set Title',ab(new F(),b,c)));gi(a,0,1,c);ei(a,0,2,'Change the title dynamically');gi(a,1,0,mf(new ef(),'Clear Title',eb(new db(),b)));ei(a,1,1,'<BR>');ei(a,1,2,'Clear out the title of the box.  Note that this is different from setting the title to an empty string.  When you set the title to an empty string, you will see a small gap where the text would normally go.  Clearing the title effectively creates a bordered widget.');ei(a,2,1,'<BR>');ei(a,2,2,'The TitledPanel is a type of SimplePanel, so you can add any widget to it.');gi(a,2,0,mf(new ef(),'Set Widget',ib(new hb(),b)));}
function nb(b,a){yj(b.a,a);qk(a,'titledPanelDemoContents');}
function E(){}
_=E.prototype=new wm();_.tI=0;_.a=null;function ab(b,a,c){b.a=a;b.b=c;return b;}
function cb(a){bm(this.a.a,gk(this.b));}
function F(){}
_=F.prototype=new wm();_.C=cb;_.tI=8;function eb(b,a){b.a=a;return b;}
function gb(a){bm(this.a.a,null);}
function db(){}
_=db.prototype=new wm();_.C=gb;_.tI=9;function ib(b,a){b.a=a;return b;}
function kb(c){var a,b;a=jq(new iq());b=li(new pg(),'This is a new widget created on:<BR> '+nq(a));nb(this.a,b);}
function hb(){}
_=hb.prototype=new wm();_.C=kb;_.tI=10;function pb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function rb(a,b,c){return a[b]=c;}
function sb(b,a){return b[a];}
function ub(b,a){return b[a];}
function tb(a){return a.length;}
function wb(e,d,c,b,a){return vb(e,d,c,b,0,tb(b),a);}
function vb(j,i,g,c,e,a,b){var d,f,h;if((f=sb(c,e))<0){throw new um();}h=pb(new ob(),f,sb(i,e),sb(g,e),j);++e;if(e<a){j=Fm(j,1);for(d=0;d<f;++d){rb(h,d,vb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){rb(h,d,b);}}return h;}
function xb(f,e,c,g){var a,b,d;b=tb(g);d=pb(new ob(),b,e,c,f);for(a=0;a<b;++a){rb(d,a,ub(g,a));}return d;}
function yb(a,b,c){if(c!==null&&a.b!=0&& !Db(c,a.b)){throw new em();}return rb(a,b,c);}
function ob(){}
_=ob.prototype=new wm();_.tI=0;function Bb(b,a){return !(!(b&&bc[b][a]));}
function Cb(b,a){if(b!=null)Bb(b.tI,a)||ac();return b;}
function Db(b,a){return b!=null&&Bb(b.tI,a);}
function Eb(a){return ~(~a);}
function ac(){throw new hm();}
function Fb(a){if(a!==null){throw new hm();}return a;}
function cc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var bc;function gc(){gc=js;Fc=tp(new rp());{Ac=new fe();ne(Ac);}}
function hc(b,a){gc();qe(Ac,b,a);}
function ic(a,b){gc();return je(Ac,a,b);}
function jc(){gc();return se(Ac,'button');}
function kc(){gc();return se(Ac,'div');}
function lc(a){gc();return se(Ac,a);}
function mc(){gc();return te(Ac,'text');}
function nc(){gc();return se(Ac,'tbody');}
function oc(){gc();return se(Ac,'td');}
function pc(){gc();return se(Ac,'table');}
function sc(b,a,d){gc();var c;c=o;{rc(b,a,d);}}
function rc(b,a,c){gc();var d;if(a===Ec){if(uc(b)==8192){Ec=null;}}d=qc;qc=b;try{c.B(b);}finally{qc=d;}}
function tc(b,a){gc();ue(Ac,b,a);}
function uc(a){gc();return ve(Ac,a);}
function vc(a){gc();ke(Ac,a);}
function wc(a,b){gc();return we(Ac,a,b);}
function xc(a){gc();return xe(Ac,a);}
function yc(a){gc();return le(Ac,a);}
function zc(a){gc();return me(Ac,a);}
function Bc(c,a,b){gc();oe(Ac,c,a,b);}
function Cc(a){gc();var b,c;c=true;if(Fc.b>0){b=Fb(xp(Fc,Fc.b-1));if(!(c=null.gb())){tc(a,true);vc(a);}}return c;}
function Dc(b,a){gc();ye(Ac,b,a);}
function bd(a,b,c){gc();Ae(Ac,a,b,c);}
function ad(a,b,c){gc();ze(Ac,a,b,c);}
function cd(a,b){gc();Be(Ac,a,b);}
function dd(a,b){gc();Ce(Ac,a,b);}
function ed(b,a,c){gc();De(Ac,b,a,c);}
function fd(a,b){gc();pe(Ac,a,b);}
var qc=null,Ac=null,Ec=null,Fc;function id(a){if(Db(a,4)){return ic(this,Cb(a,4));}return x(cc(this,gd),a);}
function jd(){return y(cc(this,gd));}
function gd(){}
_=gd.prototype=new v();_.eQ=id;_.hC=jd;_.tI=11;function nd(a){return x(cc(this,kd),a);}
function od(){return y(cc(this,kd));}
function kd(){}
_=kd.prototype=new v();_.eQ=nd;_.hC=od;_.tI=12;function ud(){ud=js;wd=tp(new rp());{vd();}}
function vd(){ud();Ad(new qd());}
var wd;function sd(){while((ud(),wd).b>0){Fb(xp((ud(),wd),0)).gb();}}
function td(){return null;}
function qd(){}
_=qd.prototype=new wm();_.F=sd;_.ab=td;_.tI=13;function zd(){zd=js;Bd=tp(new rp());de=tp(new rp());{Fd();}}
function Ad(a){zd();up(Bd,a);}
function Cd(){zd();var a,b;for(a=En(Bd);xn(a);){b=Cb(yn(a),5);b.F();}}
function Dd(){zd();var a,b,c,d;d=null;for(a=En(Bd);xn(a);){b=Cb(yn(a),5);c=b.ab();{d=c;}}return d;}
function Ed(){zd();var a,b;for(a=En(de);xn(a);){b=Fb(yn(a));null.gb();}}
function Fd(){zd();__gwt_initHandlers(function(){ce();},function(){return be();},function(){ae();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ae(){zd();var a;a=o;{Cd();}}
function be(){zd();var a;a=o;{return Dd();}}
function ce(){zd();var a;a=o;{Ed();}}
var Bd,de;function qe(c,b,a){b.appendChild(a);}
function se(b,a){return $doc.createElement(a);}
function te(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function ue(c,b,a){b.cancelBubble=a;}
function ve(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function we(d,a,b){var c=a[b];return c==null?null:String(c);}
function xe(b,a){return a.__eventBits||0;}
function ye(c,b,a){b.removeChild(a);}
function Ae(c,a,b,d){a[b]=d;}
function ze(c,a,b,d){a[b]=d;}
function Be(c,a,b){a.__listener=b;}
function Ce(c,a,b){if(!b){b='';}a.innerHTML=b;}
function De(c,b,a,d){b.style[a]=d;}
function ee(){}
_=ee.prototype=new wm();_.tI=0;function je(c,a,b){return a==b;}
function ke(b,a){a.preventDefault();}
function le(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function me(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function ne(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){sc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Cc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)sc(b,a,c);};$wnd.__captureElem=null;}
function oe(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function pe(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function he(){}
_=he.prototype=new ee();_.tI=0;function fe(){}
_=fe.prototype=new he();_.tI=0;function ok(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pk(b,a){if(b.k!==null){ok(b,b.k,a);}b.k=a;}
function qk(b,a){tk(b.k,a);}
function rk(a,b){ed(a.k,'width',b);}
function sk(b,a){fd(b.k,a|xc(b.k));}
function tk(a,b){bd(a,'className',b);}
function mk(){}
_=mk.prototype=new wm();_.tI=0;_.k=null;function el(a){if(a.i){throw pm(new om(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;cd(a.k,a);a.q();a.D();}
function fl(a){if(!a.i){throw pm(new om(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.E();}finally{a.r();cd(a.k,null);a.i=false;}}
function gl(a){if(a.j!==null){a.j.cb(a);}else if(a.j!==null){throw pm(new om(),"This widget's parent does not implement HasWidgets");}}
function hl(b,a){if(b.i){cd(b.k,null);}pk(b,a);if(b.i){cd(a,b);}}
function il(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){fl(c);}c.j=null;}else{if(a!==null){throw pm(new om(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){el(c);}}}
function jl(){}
function kl(){}
function ll(a){}
function ml(){}
function nl(){}
function ol(a){hl(this,a);}
function uk(){}
_=uk.prototype=new mk();_.q=jl;_.r=kl;_.B=ll;_.D=ml;_.E=nl;_.db=ol;_.tI=14;_.i=false;_.j=null;function Bi(b,a){il(a,b);}
function Di(b,a){il(a,null);}
function Ei(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);el(a);}}
function Fi(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);fl(a);}}
function aj(){}
function bj(){}
function Ai(){}
_=Ai.prototype=new uk();_.q=Ei;_.r=Fi;_.D=aj;_.E=bj;_.tI=15;function vf(a){a.a=Bk(new vk(),a);}
function wf(a){vf(a);return a;}
function xf(c,a,b){gl(a);Ck(c.a,a);hc(b,a.k);Bi(c,a);}
function zf(b,c){var a;if(c.j!==b){return false;}Di(b,c);a=c.k;Dc(zc(a),a);cl(b.a,c);return true;}
function Af(){return al(this.a);}
function Bf(a){return zf(this,a);}
function uf(){}
_=uf.prototype=new Ai();_.y=Af;_.cb=Bf;_.tI=16;function Fe(a){wf(a);a.db(kc());ed(a.k,'position','relative');ed(a.k,'overflow','hidden');return a;}
function af(a,b){xf(a,b,a.k);}
function cf(a){ed(a,'left','');ed(a,'top','');ed(a,'position','');}
function df(b){var a;a=zf(this,b);if(a){cf(b.k);}return a;}
function Ee(){}
_=Ee.prototype=new uf();_.cb=df;_.tI=17;function Ef(){Ef=js;yl(),Al;}
function Df(b,a){yl(),Al;ag(b,a);return b;}
function Ff(b,a){switch(uc(a)){case 1:if(b.b!==null){sf(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function ag(b,a){hl(b,a);sk(b,7041);}
function bg(a){if(this.b===null){this.b=qf(new pf());}up(this.b,a);}
function cg(a){Ff(this,a);}
function dg(a){ag(this,a);}
function Cf(){}
_=Cf.prototype=new uk();_.l=bg;_.B=cg;_.db=dg;_.tI=18;_.b=null;function hf(){hf=js;yl(),Al;}
function gf(b,a){yl(),Al;Df(b,a);return b;}
function jf(b,a){dd(b.k,a);}
function ff(){}
_=ff.prototype=new Cf();_.tI=19;function nf(){nf=js;yl(),Al;}
function kf(a){yl(),Al;gf(a,jc());of(a.k);qk(a,'gwt-Button');return a;}
function lf(b,a){yl(),Al;kf(b);jf(b,a);return b;}
function mf(c,a,b){yl(),Al;lf(c,a);c.l(b);return c;}
function of(b){nf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ef(){}
_=ef.prototype=new ff();_.tI=20;function pn(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function rn(a){throw mn(new ln(),'add');}
function sn(b){var a;a=pn(this,this.y(),b);return a!==null;}
function on(){}
_=on.prototype=new wm();_.n=rn;_.p=sn;_.tI=0;function Dn(b,a){throw sm(new rm(),'Index: '+a+', Size: '+b.b);}
function En(a){return vn(new un(),a);}
function Fn(b,a){throw mn(new ln(),'add');}
function ao(a){this.m(this.eb(),a);return true;}
function bo(e){var a,b,c,d,f;if(e===this){return true;}if(!Db(e,12)){return false;}f=Cb(e,12);if(this.eb()!=f.eb()){return false;}c=En(this);d=f.y();while(xn(c)){a=yn(c);b=yn(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function co(){var a,b,c,d;c=1;a=31;b=En(this);while(xn(b)){d=yn(b);c=31*c+(d===null?0:d.hC());}return c;}
function eo(){return En(this);}
function fo(a){throw mn(new ln(),'remove');}
function tn(){}
_=tn.prototype=new on();_.m=Fn;_.n=ao;_.eQ=bo;_.hC=co;_.y=eo;_.bb=fo;_.tI=21;function sp(a){{vp(a);}}
function tp(a){sp(a);return a;}
function up(b,a){fq(b.a,b.b++,a);return true;}
function vp(a){a.a=z();a.b=0;}
function xp(b,a){if(a<0||a>=b.b){Dn(b,a);}return bq(b.a,a);}
function yp(b,a){return zp(b,a,0);}
function zp(c,b,a){if(a<0){Dn(c,a);}for(;a<c.b;++a){if(aq(b,bq(c.a,a))){return a;}}return (-1);}
function Ap(c,a){var b;b=xp(c,a);dq(c.a,a,1);--c.b;return b;}
function Bp(d,a,b){var c;c=xp(d,a);fq(d.a,a,b);return c;}
function Dp(a,b){if(a<0||a>this.b){Dn(this,a);}Cp(this.a,a,b);++this.b;}
function Ep(a){return up(this,a);}
function Cp(a,b,c){a.splice(b,0,c);}
function Fp(a){return yp(this,a)!=(-1);}
function aq(a,b){return a===b||a!==null&&a.eQ(b);}
function cq(a){return xp(this,a);}
function bq(a,b){return a[b];}
function eq(a){return Ap(this,a);}
function dq(a,c,b){a.splice(c,b);}
function fq(a,b,c){a[b]=c;}
function gq(){return this.b;}
function rp(){}
_=rp.prototype=new tn();_.m=Dp;_.n=Ep;_.p=Fp;_.v=cq;_.bb=eq;_.eb=gq;_.tI=22;_.a=null;_.b=0;function qf(a){tp(a);return a;}
function sf(d,c){var a,b;for(a=En(d);xn(a);){b=Cb(yn(a),6);b.C(c);}}
function pf(){}
_=pf.prototype=new rp();_.tI=23;function uh(a){a.h=kh(new fh());}
function vh(a){uh(a);a.g=pc();a.c=nc();hc(a.g,a.c);a.db(a.g);sk(a,1);return a;}
function wh(d,c,b){var a;xh(d,c);if(b<0){throw sm(new rm(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw sm(new rm(),'Column index: '+b+', Column size: '+d.a);}}
function xh(c,a){var b;b=c.b;if(a>=b||a<0){throw sm(new rm(),'Row index: '+a+', Row size: '+b);}}
function yh(e,c,b,a){var d;d=Dg(e.d,c,b);Ch(e,d,a);return d;}
function Ah(a){return oc();}
function Bh(d,b,a){var c,e;e=eh(d.f,d.c,b);c=ig(d);Bc(e,c,a);}
function Ch(d,c,a){var b,e;b=yc(c);e=null;if(b!==null){e=mh(d.h,b);}if(e!==null){Fh(d,e);return true;}else{if(a){dd(c,'');}return false;}}
function Fh(b,c){var a;if(c.j!==b){return false;}Di(b,c);a=c.k;Dc(zc(a),a);ph(b.h,a);return true;}
function Dh(d,b,a){var c,e;wh(d,b,a);c=yh(d,b,a,false);e=eh(d.f,d.c,b);Dc(e,c);}
function Eh(d,c){var a,b;b=d.a;for(a=0;a<b;++a){yh(d,c,a,false);}Dc(d.c,eh(d.f,d.c,c));}
function ai(a,b){bd(a.g,'border',''+b);}
function bi(b,a){b.d=a;}
function ci(b,a){ad(b.g,'cellPadding',a);}
function di(b,a){b.e=a;bh(b.e);}
function ei(e,c,a,b){var d;jg(e,c,a);d=yh(e,c,a,b===null);if(b!==null){dd(d,b);}}
function fi(b,a){b.f=a;}
function gi(d,b,a,e){var c;jg(d,b,a);if(e!==null){gl(e);c=yh(d,b,a,true);nh(d.h,e);hc(c,e.k);Bi(d,e);}}
function hi(){return qh(this.h);}
function ii(a){switch(uc(a)){case 1:{break;}default:}}
function ji(a){return Fh(this,a);}
function qg(){}
_=qg.prototype=new Ai();_.y=hi;_.B=ii;_.cb=ji;_.tI=24;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function fg(a){vh(a);bi(a,Ag(new zg(),a));fi(a,new ch());di(a,Fg(new Eg(),a));return a;}
function gg(c,b,a){fg(c);ng(c,b,a);return c;}
function ig(b){var a;a=Ah(b);dd(a,'&nbsp;');return a;}
function jg(c,b,a){kg(c,b);if(a<0){throw sm(new rm(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw sm(new rm(),'Column index: '+a+', Column size: '+c.a);}}
function kg(b,a){if(a<0){throw sm(new rm(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw sm(new rm(),'Row index: '+a+', Row size: '+b.b);}}
function ng(c,b,a){lg(c,a);mg(c,b);}
function lg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw sm(new rm(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){Dh(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){Bh(d,b,c);}}}d.a=a;}
function mg(b,a){if(b.b==a){return;}if(a<0){throw sm(new rm(),'Cannot set number of rows to '+a);}if(b.b<a){og(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){Eh(b,--b.b);}}}
function og(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function eg(){}
_=eg.prototype=new qg();_.tI=25;_.a=0;_.b=0;function xi(a){a.db(kc());sk(a,131197);qk(a,'gwt-Label');return a;}
function zi(a){switch(uc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function wi(){}
_=wi.prototype=new uk();_.B=zi;_.tI=26;function ki(a){xi(a);a.db(kc());sk(a,125);qk(a,'gwt-HTML');return a;}
function li(b,a){ki(b);ni(b,a);return b;}
function ni(b,a){dd(b.k,a);}
function pg(){}
_=pg.prototype=new wi();_.tI=27;function sg(a){{vg(a);}}
function tg(b,a){b.b=a;sg(b);return b;}
function vg(a){while(++a.a<a.b.b.b){if(xp(a.b.b,a.a)!==null){return;}}}
function wg(a){return a.a<a.b.b.b;}
function xg(){return wg(this);}
function yg(){var a;if(!wg(this)){throw new fs();}a=xp(this.b.b,this.a);vg(this);return a;}
function rg(){}
_=rg.prototype=new wm();_.x=xg;_.A=yg;_.tI=0;_.a=(-1);function Ag(b,a){b.a=a;return b;}
function Cg(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function Dg(c,b,a){return Cg(c,c.a.c,b,a);}
function zg(){}
_=zg.prototype=new wm();_.tI=0;function Fg(b,a){b.b=a;return b;}
function bh(a){if(a.a===null){a.a=lc('colgroup');Bc(a.b.g,a.a,0);hc(a.a,lc('col'));}}
function Eg(){}
_=Eg.prototype=new wm();_.tI=0;_.a=null;function eh(c,a,b){return a.rows[b];}
function ch(){}
_=ch.prototype=new wm();_.tI=0;function jh(a){a.b=tp(new rp());}
function kh(a){jh(a);return a;}
function mh(c,a){var b;b=sh(a);if(b<0){return null;}return Cb(xp(c.b,b),7);}
function nh(b,c){var a;if(b.a===null){a=b.b.b;up(b.b,c);}else{a=b.a.a;Bp(b.b,a,c);b.a=b.a.b;}th(c.k,a);}
function oh(c,a,b){rh(a);Bp(c.b,b,null);c.a=hh(new gh(),b,c.a);}
function ph(c,a){var b;b=sh(a);oh(c,a,b);}
function qh(a){return tg(new rg(),a);}
function rh(a){a['__widgetID']=null;}
function sh(a){var b=a['__widgetID'];return b==null?-1:b;}
function th(a,b){a['__widgetID']=b;}
function fh(){}
_=fh.prototype=new wm();_.tI=0;_.a=null;function hh(c,a,b){c.a=a;c.b=b;return c;}
function gh(){}
_=gh.prototype=new wm();_.tI=0;_.a=0;_.b=null;function ij(){ij=js;nj=kr(new rq());}
function hj(b,a){ij();Fe(b);if(a===null){a=jj();}b.db(a);el(b);return b;}
function kj(){ij();return lj(null);}
function lj(c){ij();var a,b;b=Cb(qr(nj,c),8);if(b!==null){return b;}a=null;if(nj.c==0){mj();}rr(nj,c,b=hj(new cj(),a));return b;}
function jj(){ij();return $doc.body;}
function mj(){ij();Ad(new dj());}
function cj(){}
_=cj.prototype=new Ee();_.tI=28;var nj;function fj(){var a,b;for(b=yo(gp((ij(),nj)));Fo(b);){a=Cb(ap(b),8);if(a.i){fl(a);}}}
function gj(){return null;}
function dj(){}
_=dj.prototype=new wm();_.F=fj;_.ab=gj;_.tI=29;function vj(b,a){b.db(a);return b;}
function xj(a,b){if(a.c!==b){return false;}Di(a,b);Dc(a.k,b.k);a.c=null;return true;}
function yj(a,b){if(b===a.c){return;}if(b!==null){gl(b);}if(a.c!==null){xj(a,a.c);}a.c=b;if(b!==null){hc(a.k,a.c.k);Bi(a,b);}}
function zj(){return rj(new pj(),this);}
function Aj(a){return xj(this,a);}
function oj(){}
_=oj.prototype=new Ai();_.y=zj;_.cb=Aj;_.tI=30;_.c=null;function qj(a){a.a=a.b.c!==null;}
function rj(b,a){b.b=a;qj(b);return b;}
function tj(){return this.a;}
function uj(){if(!this.a||this.b.c===null){throw new fs();}this.a=false;return this.b.c;}
function pj(){}
_=pj.prototype=new wm();_.x=tj;_.A=uj;_.tI=0;function fk(){fk=js;yl(),Al;}
function ek(b,a){yl(),Al;Df(b,a);sk(b,1024);return b;}
function gk(a){return wc(a.k,'value');}
function hk(b,a){bd(b.k,'value',a!==null?a:'');}
function ik(a){if(this.a===null){this.a=qf(new pf());}up(this.a,a);}
function jk(a){var b;Ff(this,a);b=uc(a);if(b==1){if(this.a!==null){sf(this.a,this);}}else{}}
function dk(){}
_=dk.prototype=new Cf();_.l=ik;_.B=jk;_.tI=31;_.a=null;function lk(){lk=js;yl(),Al;}
function kk(a){yl(),Al;ek(a,mc());qk(a,'gwt-TextBox');return a;}
function ck(){}
_=ck.prototype=new dk();_.tI=32;function Bk(b,a){b.a=wb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[4],null);return b;}
function Ck(a,b){Fk(a,b,a.b);}
function Ek(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Fk(d,e,a){var b,c;if(a<0||a>d.b){throw new rm();}if(d.b==d.a.a){c=wb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[d.a.a*2],null);for(b=0;b<d.a.a;++b){yb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){yb(d.a,b,d.a[b-1]);}yb(d.a,a,e);}
function al(a){return xk(new wk(),a);}
function bl(c,b){var a;if(b<0||b>=c.b){throw new rm();}--c.b;for(a=b;a<c.b;++a){yb(c.a,a,c.a[a+1]);}yb(c.a,c.b,null);}
function cl(b,c){var a;a=Ek(b,c);if(a==(-1)){throw new fs();}bl(b,a);}
function vk(){}
_=vk.prototype=new wm();_.tI=0;_.a=null;_.b=0;function xk(b,a){b.b=a;return b;}
function zk(){return this.a<this.b.b-1;}
function Ak(){if(this.a>=this.b.b){throw new fs();}return this.b.a[++this.a];}
function wk(){}
_=wk.prototype=new wm();_.x=zk;_.A=Ak;_.tI=0;_.a=(-1);function yl(){yl=js;zl=sl(new ql());Al=zl!==null?xl(new pl()):zl;}
function xl(a){yl();return a;}
function pl(){}
_=pl.prototype=new wm();_.tI=0;var zl,Al;function tl(){tl=js;yl();}
function rl(a){ul(a);vl(a);wl(a);}
function sl(a){tl();xl(a);rl(a);return a;}
function ul(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function vl(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function wl(a){return function(){this.firstChild.focus();};}
function ql(){}
_=ql.prototype=new pl();_.tI=0;function am(){am=js;cm=new Cl();}
function Fl(a,b){am();vj(a,lc('fieldset'));a.a=lc('legend');hc(a.k,a.a);bm(a,b);return a;}
function bm(a,b){a.b=b;El(cm,a.k,a.a,b);}
function Bl(){}
_=Bl.prototype=new oj();_.tI=33;_.a=null;_.b=null;var cm;function El(c,a,b,d){if(d!==''&&d!==null){dd(b,d);Bc(a,b,0);}else if(zc(b)!==null){Dc(a,b);}}
function Cl(){}
_=Cl.prototype=new wm();_.tI=0;function jn(b,a){a;return b;}
function hn(){}
_=hn.prototype=new wm();_.tI=3;function mm(b,a){jn(b,a);return b;}
function lm(){}
_=lm.prototype=new hn();_.tI=4;function Bm(b,a){mm(b,a);return b;}
function Am(){}
_=Am.prototype=new lm();_.tI=5;function em(){}
_=em.prototype=new Am();_.tI=34;function hm(){}
_=hm.prototype=new Am();_.tI=35;function pm(b,a){Bm(b,a);return b;}
function om(){}
_=om.prototype=new Am();_.tI=36;function sm(b,a){Bm(b,a);return b;}
function rm(){}
_=rm.prototype=new Am();_.tI=37;function um(){}
_=um.prototype=new Am();_.tI=38;function Fm(b,a){return b.substr(a,b.length-a);}
function an(a,b){return String(a)==b;}
function bn(a){if(!Db(a,1))return false;return an(this,a);}
function dn(){var a=cn;if(!a){a=cn={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=bn;_.hC=dn;_.tI=2;var cn=null;function gn(a){return s(a);}
function mn(b,a){Bm(b,a);return b;}
function ln(){}
_=ln.prototype=new Am();_.tI=39;function vn(b,a){b.c=a;return b;}
function xn(a){return a.a<a.c.eb();}
function yn(a){if(!xn(a)){throw new fs();}return a.c.v(a.b=a.a++);}
function zn(a){if(a.b<0){throw new om();}a.c.bb(a.b);a.a=a.b;a.b=(-1);}
function An(){return xn(this);}
function Bn(){return yn(this);}
function un(){}
_=un.prototype=new wm();_.x=An;_.A=Bn;_.tI=0;_.a=0;_.b=(-1);function ep(f,d,e){var a,b,c;for(b=fr(f.s());Eq(b);){a=Fq(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){ar(b);}return a;}}return null;}
function fp(b){var a;a=b.s();return io(new ho(),b,a);}
function gp(b){var a;a=pr(b);return wo(new vo(),b,a);}
function hp(a){return ep(this,a,false)!==null;}
function ip(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!Db(d,13)){return false;}f=Cb(d,13);c=fp(this);e=f.z();if(!op(c,e)){return false;}for(a=ko(c);ro(a);){b=so(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function jp(b){var a;a=ep(this,b,false);return a===null?null:a.u();}
function kp(){var a,b,c;b=0;for(c=fr(this.s());Eq(c);){a=Fq(c);b+=a.hC();}return b;}
function lp(){return fp(this);}
function go(){}
_=go.prototype=new wm();_.o=hp;_.eQ=ip;_.w=jp;_.hC=kp;_.z=lp;_.tI=40;function op(e,b){var a,c,d;if(b===e){return true;}if(!Db(b,14)){return false;}c=Cb(b,14);if(c.eb()!=e.eb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function pp(a){return op(this,a);}
function qp(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function mp(){}
_=mp.prototype=new on();_.eQ=pp;_.hC=qp;_.tI=41;function io(b,a,c){b.a=a;b.b=c;return b;}
function ko(b){var a;a=fr(b.b);return po(new oo(),b,a);}
function lo(a){return this.a.o(a);}
function mo(){return ko(this);}
function no(){return this.b.a.c;}
function ho(){}
_=ho.prototype=new mp();_.p=lo;_.y=mo;_.eb=no;_.tI=42;function po(b,a,c){b.a=c;return b;}
function ro(a){return a.a.x();}
function so(b){var a;a=b.a.A();return a.t();}
function to(){return ro(this);}
function uo(){return so(this);}
function oo(){}
_=oo.prototype=new wm();_.x=to;_.A=uo;_.tI=0;function wo(b,a,c){b.a=a;b.b=c;return b;}
function yo(b){var a;a=fr(b.b);return Do(new Co(),b,a);}
function zo(a){return or(this.a,a);}
function Ao(){return yo(this);}
function Bo(){return this.b.a.c;}
function vo(){}
_=vo.prototype=new on();_.p=zo;_.y=Ao;_.eb=Bo;_.tI=0;function Do(b,a,c){b.a=c;return b;}
function Fo(a){return a.a.x();}
function ap(a){var b;b=a.a.A().u();return b;}
function bp(){return Fo(this);}
function cp(){return ap(this);}
function Co(){}
_=Co.prototype=new wm();_.x=bp;_.A=cp;_.tI=0;function kq(){kq=js;xb('[Ljava.lang.String;',0,1,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);xb('[Ljava.lang.String;',0,1,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);}
function jq(a){kq();mq(a);return a;}
function lq(a){return a.jsdate.getTime();}
function mq(a){a.jsdate=new Date();}
function nq(a){return a.jsdate.toLocaleString();}
function oq(a){return Db(a,15)&&lq(this)==lq(Cb(a,15));}
function pq(){return Eb(lq(this)^lq(this)>>>32);}
function iq(){}
_=iq.prototype=new wm();_.eQ=oq;_.hC=pq;_.tI=43;function mr(){mr=js;tr=zr();}
function jr(a){{lr(a);}}
function kr(a){mr();jr(a);return a;}
function lr(a){a.a=z();a.d=A();a.b=cc(tr,v);a.c=0;}
function nr(b,a){if(Db(a,1)){return Dr(b.d,Cb(a,1))!==tr;}else if(a===null){return b.b!==tr;}else{return Cr(b.a,a,a.hC())!==tr;}}
function or(a,b){if(a.b!==tr&&Br(a.b,b)){return true;}else if(yr(a.d,b)){return true;}else if(wr(a.a,b)){return true;}return false;}
function pr(a){return dr(new Aq(),a);}
function qr(c,a){var b;if(Db(a,1)){b=Dr(c.d,Cb(a,1));}else if(a===null){b=c.b;}else{b=Cr(c.a,a,a.hC());}return b===tr?null:b;}
function rr(c,a,d){var b;{b=c.b;c.b=d;}if(b===tr){++c.c;return null;}else{return b;}}
function sr(c,a){var b;if(Db(a,1)){b=as(c.d,Cb(a,1));}else if(a===null){b=c.b;c.b=cc(tr,v);}else{b=Fr(c.a,a,a.hC());}if(b===tr){return null;}else{--c.c;return b;}}
function ur(e,c){mr();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function vr(d,a){mr();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=vq(c.substring(1),e);a.n(b);}}}
function wr(f,h){mr();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(Br(h,d)){return true;}}}}return false;}
function xr(a){return nr(this,a);}
function yr(c,d){mr();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(Br(d,a)){return true;}}}return false;}
function zr(){mr();}
function Ar(){return pr(this);}
function Br(a,b){mr();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function Er(a){return qr(this,a);}
function Cr(f,h,e){mr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(Br(h,d)){return c.u();}}}}
function Dr(b,a){mr();return b[':'+a];}
function Fr(f,h,e){mr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(Br(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function as(c,a){mr();a=':'+a;var b=c[a];delete c[a];return b;}
function rq(){}
_=rq.prototype=new go();_.o=xr;_.s=Ar;_.w=Er;_.tI=44;_.a=null;_.b=null;_.c=0;_.d=null;var tr;function tq(b,a,c){b.a=a;b.b=c;return b;}
function vq(a,b){return tq(new sq(),a,b);}
function wq(b){var a;if(Db(b,16)){a=Cb(b,16);if(Br(this.a,a.t())&&Br(this.b,a.u())){return true;}}return false;}
function xq(){return this.a;}
function yq(){return this.b;}
function zq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function sq(){}
_=sq.prototype=new wm();_.eQ=wq;_.t=xq;_.u=yq;_.hC=zq;_.tI=45;_.a=null;_.b=null;function dr(b,a){b.a=a;return b;}
function fr(a){return Cq(new Bq(),a.a);}
function gr(c){var a,b,d;if(Db(c,16)){a=Cb(c,16);b=a.t();if(nr(this.a,b)){d=qr(this.a,b);return Br(a.u(),d);}}return false;}
function hr(){return fr(this);}
function ir(){return this.a.c;}
function Aq(){}
_=Aq.prototype=new mp();_.p=gr;_.y=hr;_.eb=ir;_.tI=46;function Cq(c,b){var a;c.c=b;a=tp(new rp());if(c.c.b!==(mr(),tr)){up(a,tq(new sq(),null,c.c.b));}vr(c.c.d,a);ur(c.c.a,a);c.a=En(a);return c;}
function Eq(a){return xn(a.a);}
function Fq(a){return a.b=Cb(yn(a.a),16);}
function ar(a){if(a.b===null){throw pm(new om(),'Must call next() before remove().');}else{zn(a.a);sr(a.c,a.b.t());a.b=null;}}
function br(){return Eq(this);}
function cr(){return Fq(this);}
function Bq(){}
_=Bq.prototype=new wm();_.x=br;_.A=cr;_.tI=0;_.a=null;_.b=null;function fs(){}
_=fs.prototype=new Am();_.tI=47;function dm(){mb(new E());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{dm();}catch(a){b(d);}else{dm();}}
var bc=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{6:1},{6:1},{6:1},{2:1,4:1},{2:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{13:1},{14:1},{14:1},{15:1},{13:1},{16:1},{14:1},{3:1}];if (com_google_gwt_demos_titledpanel_TitledPanelDemo) {  var __gwt_initHandlers = com_google_gwt_demos_titledpanel_TitledPanelDemo.__gwt_initHandlers;  com_google_gwt_demos_titledpanel_TitledPanelDemo.onScriptLoad(gwtOnLoad);}})();