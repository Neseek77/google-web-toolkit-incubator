(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,fs='com.google.gwt.core.client.',gs='com.google.gwt.demos.titledpanel.client.',hs='com.google.gwt.lang.',is='com.google.gwt.user.client.',js='com.google.gwt.user.client.impl.',ks='com.google.gwt.user.client.ui.',ls='com.google.gwt.user.client.ui.impl.',ms='com.google.gwt.widgetideas.client.',ns='java.lang.',os='java.util.';function es(){}
function tm(a){return this===a;}
function um(){return bn(this);}
function rm(){}
_=rm.prototype={};_.eQ=tm;_.hC=um;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
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
_=v.prototype=new rm();_.eQ=C;_.hC=D;_.tI=7;function mb(b){var a,c;b.a=Al(new wl(),'Hello World');qk(b.a,'500px');nb(b,ki(new og(),'This is a widget in the TitledPanel'));Fe(jj(),b.a);a=fg(new dg(),3,3);Fh(a,1);bi(a,3);Fe(jj(),ki(new og(),'<BR><BR>'));Fe(jj(),a);c=jk(new bk());gk(c,b.a.b);fi(a,0,0,lf(new df(),'Set Title',ab(new F(),b,c)));fi(a,0,1,c);di(a,0,2,'Change the title dynamically');fi(a,1,0,lf(new df(),'Clear Title',eb(new db(),b)));di(a,1,1,'<BR>');di(a,1,2,'Clear out the title of the box.  Note that this is different from setting the title to an empty string.  When you set the title to an empty string, you will see a small gap where the text would normally go.  Clearing the title effectively creates a bordered widget.');di(a,2,1,'<BR>');di(a,2,2,'The TitledPanel is a type of SimplePanel, so you can add any widget to it.');fi(a,2,0,lf(new df(),'Set Widget',ib(new hb(),b)));}
function nb(b,a){xj(b.a,a);pk(a,'titledPanelDemoContents');}
function E(){}
_=E.prototype=new rm();_.tI=0;_.a=null;function ab(b,a,c){b.a=a;b.b=c;return b;}
function cb(a){Cl(this.a.a,fk(this.b));}
function F(){}
_=F.prototype=new rm();_.C=cb;_.tI=8;function eb(b,a){b.a=a;return b;}
function gb(a){Cl(this.a.a,null);}
function db(){}
_=db.prototype=new rm();_.C=gb;_.tI=9;function ib(b,a){b.a=a;return b;}
function kb(c){var a,b;a=eq(new dq());b=ki(new og(),'This is a new widget created on:<BR> '+iq(a));nb(this.a,b);}
function hb(){}
_=hb.prototype=new rm();_.C=kb;_.tI=10;function pb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function rb(a,b,c){return a[b]=c;}
function sb(b,a){return b[a];}
function ub(b,a){return b[a];}
function tb(a){return a.length;}
function wb(e,d,c,b,a){return vb(e,d,c,b,0,tb(b),a);}
function vb(j,i,g,c,e,a,b){var d,f,h;if((f=sb(c,e))<0){throw new pm();}h=pb(new ob(),f,sb(i,e),sb(g,e),j);++e;if(e<a){j=Am(j,1);for(d=0;d<f;++d){rb(h,d,vb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){rb(h,d,b);}}return h;}
function xb(f,e,c,g){var a,b,d;b=tb(g);d=pb(new ob(),b,e,c,f);for(a=0;a<b;++a){rb(d,a,ub(g,a));}return d;}
function yb(a,b,c){if(c!==null&&a.b!=0&& !Db(c,a.b)){throw new Fl();}return rb(a,b,c);}
function ob(){}
_=ob.prototype=new rm();_.tI=0;function Bb(b,a){return !(!(b&&bc[b][a]));}
function Cb(b,a){if(b!=null)Bb(b.tI,a)||ac();return b;}
function Db(b,a){return b!=null&&Bb(b.tI,a);}
function Eb(a){return ~(~a);}
function ac(){throw new cm();}
function Fb(a){if(a!==null){throw new cm();}return a;}
function cc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var bc;function gc(){gc=es;Fc=op(new mp());{Ac=new fe();le(Ac);}}
function hc(b,a){gc();pe(Ac,b,a);}
function ic(a,b){gc();return he(Ac,a,b);}
function jc(){gc();return re(Ac,'button');}
function kc(){gc();return re(Ac,'div');}
function lc(a){gc();return re(Ac,a);}
function mc(){gc();return se(Ac,'text');}
function nc(){gc();return re(Ac,'tbody');}
function oc(){gc();return re(Ac,'td');}
function pc(){gc();return re(Ac,'table');}
function sc(b,a,d){gc();var c;c=o;{rc(b,a,d);}}
function rc(b,a,c){gc();var d;if(a===Ec){if(uc(b)==8192){Ec=null;}}d=qc;qc=b;try{c.B(b);}finally{qc=d;}}
function tc(b,a){gc();te(Ac,b,a);}
function uc(a){gc();return ue(Ac,a);}
function vc(a){gc();ie(Ac,a);}
function wc(a,b){gc();return ve(Ac,a,b);}
function xc(a){gc();return we(Ac,a);}
function yc(a){gc();return je(Ac,a);}
function zc(a){gc();return ke(Ac,a);}
function Bc(c,a,b){gc();me(Ac,c,a,b);}
function Cc(a){gc();var b,c;c=true;if(Fc.b>0){b=Fb(sp(Fc,Fc.b-1));if(!(c=null.gb())){tc(a,true);vc(a);}}return c;}
function Dc(b,a){gc();xe(Ac,b,a);}
function bd(a,b,c){gc();ze(Ac,a,b,c);}
function ad(a,b,c){gc();ye(Ac,a,b,c);}
function cd(a,b){gc();Ae(Ac,a,b);}
function dd(a,b){gc();Be(Ac,a,b);}
function ed(b,a,c){gc();Ce(Ac,b,a,c);}
function fd(a,b){gc();ne(Ac,a,b);}
var qc=null,Ac=null,Ec=null,Fc;function id(a){if(Db(a,4)){return ic(this,Cb(a,4));}return x(cc(this,gd),a);}
function jd(){return y(cc(this,gd));}
function gd(){}
_=gd.prototype=new v();_.eQ=id;_.hC=jd;_.tI=11;function nd(a){return x(cc(this,kd),a);}
function od(){return y(cc(this,kd));}
function kd(){}
_=kd.prototype=new v();_.eQ=nd;_.hC=od;_.tI=12;function ud(){ud=es;wd=op(new mp());{vd();}}
function vd(){ud();Ad(new qd());}
var wd;function sd(){while((ud(),wd).b>0){Fb(sp((ud(),wd),0)).gb();}}
function td(){return null;}
function qd(){}
_=qd.prototype=new rm();_.F=sd;_.ab=td;_.tI=13;function zd(){zd=es;Bd=op(new mp());de=op(new mp());{Fd();}}
function Ad(a){zd();pp(Bd,a);}
function Cd(){zd();var a,b;for(a=zn(Bd);sn(a);){b=Cb(tn(a),5);b.F();}}
function Dd(){zd();var a,b,c,d;d=null;for(a=zn(Bd);sn(a);){b=Cb(tn(a),5);c=b.ab();{d=c;}}return d;}
function Ed(){zd();var a,b;for(a=zn(de);sn(a);){b=Fb(tn(a));null.gb();}}
function Fd(){zd();__gwt_initHandlers(function(){ce();},function(){return be();},function(){ae();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ae(){zd();var a;a=o;{Cd();}}
function be(){zd();var a;a=o;{return Dd();}}
function ce(){zd();var a;a=o;{Ed();}}
var Bd,de;function pe(c,b,a){b.appendChild(a);}
function re(b,a){return $doc.createElement(a);}
function se(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function te(c,b,a){b.cancelBubble=a;}
function ue(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ve(d,a,b){var c=a[b];return c==null?null:String(c);}
function we(b,a){return a.__eventBits||0;}
function xe(c,b,a){b.removeChild(a);}
function ze(c,a,b,d){a[b]=d;}
function ye(c,a,b,d){a[b]=d;}
function Ae(c,a,b){a.__listener=b;}
function Be(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Ce(c,b,a,d){b.style[a]=d;}
function ee(){}
_=ee.prototype=new rm();_.tI=0;function he(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function ie(b,a){a.returnValue=false;}
function je(c,b){var a=b.firstChild;return a||null;}
function ke(c,a){var b=a.parentElement;return b||null;}
function le(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=oe;oe=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Cc($wnd.event)){oe=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)sc($wnd.event,a,b);oe=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function me(d,c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b]);}
function ne(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function fe(){}
_=fe.prototype=new ee();_.tI=0;var oe=null;function nk(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function ok(b,a){if(b.k!==null){nk(b,b.k,a);}b.k=a;}
function pk(b,a){sk(b.k,a);}
function qk(a,b){ed(a.k,'width',b);}
function rk(b,a){fd(b.k,a|xc(b.k));}
function sk(a,b){bd(a,'className',b);}
function lk(){}
_=lk.prototype=new rm();_.tI=0;_.k=null;function dl(a){if(a.i){throw km(new jm(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;cd(a.k,a);a.q();a.D();}
function el(a){if(!a.i){throw km(new jm(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.E();}finally{a.r();cd(a.k,null);a.i=false;}}
function fl(a){if(a.j!==null){a.j.cb(a);}else if(a.j!==null){throw km(new jm(),"This widget's parent does not implement HasWidgets");}}
function gl(b,a){if(b.i){cd(b.k,null);}ok(b,a);if(b.i){cd(a,b);}}
function hl(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){el(c);}c.j=null;}else{if(a!==null){throw km(new jm(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){dl(c);}}}
function il(){}
function jl(){}
function kl(a){}
function ll(){}
function ml(){}
function nl(a){gl(this,a);}
function tk(){}
_=tk.prototype=new lk();_.q=il;_.r=jl;_.B=kl;_.D=ll;_.E=ml;_.db=nl;_.tI=14;_.i=false;_.j=null;function Ai(b,a){hl(a,b);}
function Ci(b,a){hl(a,null);}
function Di(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);dl(a);}}
function Ei(){var a,b;for(b=this.y();b.x();){a=Cb(b.A(),7);el(a);}}
function Fi(){}
function aj(){}
function zi(){}
_=zi.prototype=new tk();_.q=Di;_.r=Ei;_.D=Fi;_.E=aj;_.tI=15;function uf(a){a.a=Ak(new uk(),a);}
function vf(a){uf(a);return a;}
function wf(c,a,b){fl(a);Bk(c.a,a);hc(b,a.k);Ai(c,a);}
function yf(b,c){var a;if(c.j!==b){return false;}Ci(b,c);a=c.k;Dc(zc(a),a);bl(b.a,c);return true;}
function zf(){return Fk(this.a);}
function Af(a){return yf(this,a);}
function tf(){}
_=tf.prototype=new zi();_.y=zf;_.cb=Af;_.tI=16;function Ee(a){vf(a);a.db(kc());ed(a.k,'position','relative');ed(a.k,'overflow','hidden');return a;}
function Fe(a,b){wf(a,b,a.k);}
function bf(a){ed(a,'left','');ed(a,'top','');ed(a,'position','');}
function cf(b){var a;a=yf(this,b);if(a){bf(b.k);}return a;}
function De(){}
_=De.prototype=new tf();_.cb=cf;_.tI=17;function Df(){Df=es;tl(),vl;}
function Cf(b,a){tl(),vl;Ff(b,a);return b;}
function Ef(b,a){switch(uc(a)){case 1:if(b.b!==null){rf(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function Ff(b,a){gl(b,a);rk(b,7041);}
function ag(a){if(this.b===null){this.b=pf(new of());}pp(this.b,a);}
function bg(a){Ef(this,a);}
function cg(a){Ff(this,a);}
function Bf(){}
_=Bf.prototype=new tk();_.l=ag;_.B=bg;_.db=cg;_.tI=18;_.b=null;function gf(){gf=es;tl(),vl;}
function ff(b,a){tl(),vl;Cf(b,a);return b;}
function hf(b,a){dd(b.k,a);}
function ef(){}
_=ef.prototype=new Bf();_.tI=19;function mf(){mf=es;tl(),vl;}
function jf(a){tl(),vl;ff(a,jc());nf(a.k);pk(a,'gwt-Button');return a;}
function kf(b,a){tl(),vl;jf(b);hf(b,a);return b;}
function lf(c,a,b){tl(),vl;kf(c,a);c.l(b);return c;}
function nf(b){mf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function df(){}
_=df.prototype=new ef();_.tI=20;function kn(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function mn(a){throw gn(new fn(),'add');}
function nn(b){var a;a=kn(this,this.y(),b);return a!==null;}
function jn(){}
_=jn.prototype=new rm();_.n=mn;_.p=nn;_.tI=0;function yn(b,a){throw nm(new mm(),'Index: '+a+', Size: '+b.b);}
function zn(a){return qn(new pn(),a);}
function An(b,a){throw gn(new fn(),'add');}
function Bn(a){this.m(this.eb(),a);return true;}
function Cn(e){var a,b,c,d,f;if(e===this){return true;}if(!Db(e,12)){return false;}f=Cb(e,12);if(this.eb()!=f.eb()){return false;}c=zn(this);d=f.y();while(sn(c)){a=tn(c);b=tn(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function Dn(){var a,b,c,d;c=1;a=31;b=zn(this);while(sn(b)){d=tn(b);c=31*c+(d===null?0:d.hC());}return c;}
function En(){return zn(this);}
function Fn(a){throw gn(new fn(),'remove');}
function on(){}
_=on.prototype=new jn();_.m=An;_.n=Bn;_.eQ=Cn;_.hC=Dn;_.y=En;_.bb=Fn;_.tI=21;function np(a){{qp(a);}}
function op(a){np(a);return a;}
function pp(b,a){aq(b.a,b.b++,a);return true;}
function qp(a){a.a=z();a.b=0;}
function sp(b,a){if(a<0||a>=b.b){yn(b,a);}return Cp(b.a,a);}
function tp(b,a){return up(b,a,0);}
function up(c,b,a){if(a<0){yn(c,a);}for(;a<c.b;++a){if(Bp(b,Cp(c.a,a))){return a;}}return (-1);}
function vp(c,a){var b;b=sp(c,a);Ep(c.a,a,1);--c.b;return b;}
function wp(d,a,b){var c;c=sp(d,a);aq(d.a,a,b);return c;}
function yp(a,b){if(a<0||a>this.b){yn(this,a);}xp(this.a,a,b);++this.b;}
function zp(a){return pp(this,a);}
function xp(a,b,c){a.splice(b,0,c);}
function Ap(a){return tp(this,a)!=(-1);}
function Bp(a,b){return a===b||a!==null&&a.eQ(b);}
function Dp(a){return sp(this,a);}
function Cp(a,b){return a[b];}
function Fp(a){return vp(this,a);}
function Ep(a,c,b){a.splice(c,b);}
function aq(a,b,c){a[b]=c;}
function bq(){return this.b;}
function mp(){}
_=mp.prototype=new on();_.m=yp;_.n=zp;_.p=Ap;_.v=Dp;_.bb=Fp;_.eb=bq;_.tI=22;_.a=null;_.b=0;function pf(a){op(a);return a;}
function rf(d,c){var a,b;for(a=zn(d);sn(a);){b=Cb(tn(a),6);b.C(c);}}
function of(){}
_=of.prototype=new mp();_.tI=23;function th(a){a.h=jh(new eh());}
function uh(a){th(a);a.g=pc();a.c=nc();hc(a.g,a.c);a.db(a.g);rk(a,1);return a;}
function vh(d,c,b){var a;wh(d,c);if(b<0){throw nm(new mm(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw nm(new mm(),'Column index: '+b+', Column size: '+d.a);}}
function wh(c,a){var b;b=c.b;if(a>=b||a<0){throw nm(new mm(),'Row index: '+a+', Row size: '+b);}}
function xh(e,c,b,a){var d;d=Cg(e.d,c,b);Bh(e,d,a);return d;}
function zh(a){return oc();}
function Ah(d,b,a){var c,e;e=dh(d.f,d.c,b);c=hg(d);Bc(e,c,a);}
function Bh(d,c,a){var b,e;b=yc(c);e=null;if(b!==null){e=lh(d.h,b);}if(e!==null){Eh(d,e);return true;}else{if(a){dd(c,'');}return false;}}
function Eh(b,c){var a;if(c.j!==b){return false;}Ci(b,c);a=c.k;Dc(zc(a),a);oh(b.h,a);return true;}
function Ch(d,b,a){var c,e;vh(d,b,a);c=xh(d,b,a,false);e=dh(d.f,d.c,b);Dc(e,c);}
function Dh(d,c){var a,b;b=d.a;for(a=0;a<b;++a){xh(d,c,a,false);}Dc(d.c,dh(d.f,d.c,c));}
function Fh(a,b){bd(a.g,'border',''+b);}
function ai(b,a){b.d=a;}
function bi(b,a){ad(b.g,'cellPadding',a);}
function ci(b,a){b.e=a;ah(b.e);}
function di(e,c,a,b){var d;ig(e,c,a);d=xh(e,c,a,b===null);if(b!==null){dd(d,b);}}
function ei(b,a){b.f=a;}
function fi(d,b,a,e){var c;ig(d,b,a);if(e!==null){fl(e);c=xh(d,b,a,true);mh(d.h,e);hc(c,e.k);Ai(d,e);}}
function gi(){return ph(this.h);}
function hi(a){switch(uc(a)){case 1:{break;}default:}}
function ii(a){return Eh(this,a);}
function pg(){}
_=pg.prototype=new zi();_.y=gi;_.B=hi;_.cb=ii;_.tI=24;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function eg(a){uh(a);ai(a,zg(new yg(),a));ei(a,new bh());ci(a,Eg(new Dg(),a));return a;}
function fg(c,b,a){eg(c);mg(c,b,a);return c;}
function hg(b){var a;a=zh(b);dd(a,'&nbsp;');return a;}
function ig(c,b,a){jg(c,b);if(a<0){throw nm(new mm(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw nm(new mm(),'Column index: '+a+', Column size: '+c.a);}}
function jg(b,a){if(a<0){throw nm(new mm(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw nm(new mm(),'Row index: '+a+', Row size: '+b.b);}}
function mg(c,b,a){kg(c,a);lg(c,b);}
function kg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw nm(new mm(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){Ch(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){Ah(d,b,c);}}}d.a=a;}
function lg(b,a){if(b.b==a){return;}if(a<0){throw nm(new mm(),'Cannot set number of rows to '+a);}if(b.b<a){ng(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){Dh(b,--b.b);}}}
function ng(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function dg(){}
_=dg.prototype=new pg();_.tI=25;_.a=0;_.b=0;function wi(a){a.db(kc());rk(a,131197);pk(a,'gwt-Label');return a;}
function yi(a){switch(uc(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function vi(){}
_=vi.prototype=new tk();_.B=yi;_.tI=26;function ji(a){wi(a);a.db(kc());rk(a,125);pk(a,'gwt-HTML');return a;}
function ki(b,a){ji(b);mi(b,a);return b;}
function mi(b,a){dd(b.k,a);}
function og(){}
_=og.prototype=new vi();_.tI=27;function rg(a){{ug(a);}}
function sg(b,a){b.b=a;rg(b);return b;}
function ug(a){while(++a.a<a.b.b.b){if(sp(a.b.b,a.a)!==null){return;}}}
function vg(a){return a.a<a.b.b.b;}
function wg(){return vg(this);}
function xg(){var a;if(!vg(this)){throw new as();}a=sp(this.b.b,this.a);ug(this);return a;}
function qg(){}
_=qg.prototype=new rm();_.x=wg;_.A=xg;_.tI=0;_.a=(-1);function zg(b,a){b.a=a;return b;}
function Bg(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function Cg(c,b,a){return Bg(c,c.a.c,b,a);}
function yg(){}
_=yg.prototype=new rm();_.tI=0;function Eg(b,a){b.b=a;return b;}
function ah(a){if(a.a===null){a.a=lc('colgroup');Bc(a.b.g,a.a,0);hc(a.a,lc('col'));}}
function Dg(){}
_=Dg.prototype=new rm();_.tI=0;_.a=null;function dh(c,a,b){return a.rows[b];}
function bh(){}
_=bh.prototype=new rm();_.tI=0;function ih(a){a.b=op(new mp());}
function jh(a){ih(a);return a;}
function lh(c,a){var b;b=rh(a);if(b<0){return null;}return Cb(sp(c.b,b),7);}
function mh(b,c){var a;if(b.a===null){a=b.b.b;pp(b.b,c);}else{a=b.a.a;wp(b.b,a,c);b.a=b.a.b;}sh(c.k,a);}
function nh(c,a,b){qh(a);wp(c.b,b,null);c.a=gh(new fh(),b,c.a);}
function oh(c,a){var b;b=rh(a);nh(c,a,b);}
function ph(a){return sg(new qg(),a);}
function qh(a){a['__widgetID']=null;}
function rh(a){var b=a['__widgetID'];return b==null?-1:b;}
function sh(a,b){a['__widgetID']=b;}
function eh(){}
_=eh.prototype=new rm();_.tI=0;_.a=null;function gh(c,a,b){c.a=a;c.b=b;return c;}
function fh(){}
_=fh.prototype=new rm();_.tI=0;_.a=0;_.b=null;function hj(){hj=es;mj=fr(new mq());}
function gj(b,a){hj();Ee(b);if(a===null){a=ij();}b.db(a);dl(b);return b;}
function jj(){hj();return kj(null);}
function kj(c){hj();var a,b;b=Cb(lr(mj,c),8);if(b!==null){return b;}a=null;if(mj.c==0){lj();}mr(mj,c,b=gj(new bj(),a));return b;}
function ij(){hj();return $doc.body;}
function lj(){hj();Ad(new cj());}
function bj(){}
_=bj.prototype=new De();_.tI=28;var mj;function ej(){var a,b;for(b=to(bp((hj(),mj)));Ao(b);){a=Cb(Bo(b),8);if(a.i){el(a);}}}
function fj(){return null;}
function cj(){}
_=cj.prototype=new rm();_.F=ej;_.ab=fj;_.tI=29;function uj(b,a){b.db(a);return b;}
function wj(a,b){if(a.c!==b){return false;}Ci(a,b);Dc(a.k,b.k);a.c=null;return true;}
function xj(a,b){if(b===a.c){return;}if(b!==null){fl(b);}if(a.c!==null){wj(a,a.c);}a.c=b;if(b!==null){hc(a.k,a.c.k);Ai(a,b);}}
function yj(){return qj(new oj(),this);}
function zj(a){return wj(this,a);}
function nj(){}
_=nj.prototype=new zi();_.y=yj;_.cb=zj;_.tI=30;_.c=null;function pj(a){a.a=a.b.c!==null;}
function qj(b,a){b.b=a;pj(b);return b;}
function sj(){return this.a;}
function tj(){if(!this.a||this.b.c===null){throw new as();}this.a=false;return this.b.c;}
function oj(){}
_=oj.prototype=new rm();_.x=sj;_.A=tj;_.tI=0;function ek(){ek=es;tl(),vl;}
function dk(b,a){tl(),vl;Cf(b,a);rk(b,1024);return b;}
function fk(a){return wc(a.k,'value');}
function gk(b,a){bd(b.k,'value',a!==null?a:'');}
function hk(a){if(this.a===null){this.a=pf(new of());}pp(this.a,a);}
function ik(a){var b;Ef(this,a);b=uc(a);if(b==1){if(this.a!==null){rf(this.a,this);}}else{}}
function ck(){}
_=ck.prototype=new Bf();_.l=hk;_.B=ik;_.tI=31;_.a=null;function kk(){kk=es;tl(),vl;}
function jk(a){tl(),vl;dk(a,mc());pk(a,'gwt-TextBox');return a;}
function bk(){}
_=bk.prototype=new ck();_.tI=32;function Ak(b,a){b.a=wb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[4],null);return b;}
function Bk(a,b){Ek(a,b,a.b);}
function Dk(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Ek(d,e,a){var b,c;if(a<0||a>d.b){throw new mm();}if(d.b==d.a.a){c=wb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[7],[d.a.a*2],null);for(b=0;b<d.a.a;++b){yb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){yb(d.a,b,d.a[b-1]);}yb(d.a,a,e);}
function Fk(a){return wk(new vk(),a);}
function al(c,b){var a;if(b<0||b>=c.b){throw new mm();}--c.b;for(a=b;a<c.b;++a){yb(c.a,a,c.a[a+1]);}yb(c.a,c.b,null);}
function bl(b,c){var a;a=Dk(b,c);if(a==(-1)){throw new as();}al(b,a);}
function uk(){}
_=uk.prototype=new rm();_.tI=0;_.a=null;_.b=0;function wk(b,a){b.b=a;return b;}
function yk(){return this.a<this.b.b-1;}
function zk(){if(this.a>=this.b.b){throw new as();}return this.b.a[++this.a];}
function vk(){}
_=vk.prototype=new rm();_.x=yk;_.A=zk;_.tI=0;_.a=(-1);function tl(){tl=es;ul=ql(new pl());vl=ul;}
function sl(a){tl();return a;}
function ol(){}
_=ol.prototype=new rm();_.tI=0;var ul,vl;function rl(){rl=es;tl();}
function ql(a){rl();sl(a);return a;}
function pl(){}
_=pl.prototype=new ol();_.tI=0;function Bl(){Bl=es;Dl=new xl();}
function Al(a,b){Bl();uj(a,lc('fieldset'));a.a=lc('legend');hc(a.k,a.a);Cl(a,b);return a;}
function Cl(a,b){a.b=b;zl(Dl,a.k,a.a,b);}
function wl(){}
_=wl.prototype=new nj();_.tI=33;_.a=null;_.b=null;var Dl;function zl(c,a,b,d){if(d!==''&&d!==null){dd(b,d);Bc(a,b,0);}else if(zc(b)!==null){Dc(a,b);}}
function xl(){}
_=xl.prototype=new rm();_.tI=0;function dn(b,a){a;return b;}
function cn(){}
_=cn.prototype=new rm();_.tI=3;function hm(b,a){dn(b,a);return b;}
function gm(){}
_=gm.prototype=new cn();_.tI=4;function wm(b,a){hm(b,a);return b;}
function vm(){}
_=vm.prototype=new gm();_.tI=5;function Fl(){}
_=Fl.prototype=new vm();_.tI=34;function cm(){}
_=cm.prototype=new vm();_.tI=35;function km(b,a){wm(b,a);return b;}
function jm(){}
_=jm.prototype=new vm();_.tI=36;function nm(b,a){wm(b,a);return b;}
function mm(){}
_=mm.prototype=new vm();_.tI=37;function pm(){}
_=pm.prototype=new vm();_.tI=38;function Am(b,a){return b.substr(a,b.length-a);}
function Bm(a,b){return String(a)==b;}
function Cm(a){if(!Db(a,1))return false;return Bm(this,a);}
function Em(){var a=Dm;if(!a){a=Dm={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=Cm;_.hC=Em;_.tI=2;var Dm=null;function bn(a){return s(a);}
function gn(b,a){wm(b,a);return b;}
function fn(){}
_=fn.prototype=new vm();_.tI=39;function qn(b,a){b.c=a;return b;}
function sn(a){return a.a<a.c.eb();}
function tn(a){if(!sn(a)){throw new as();}return a.c.v(a.b=a.a++);}
function un(a){if(a.b<0){throw new jm();}a.c.bb(a.b);a.a=a.b;a.b=(-1);}
function vn(){return sn(this);}
function wn(){return tn(this);}
function pn(){}
_=pn.prototype=new rm();_.x=vn;_.A=wn;_.tI=0;_.a=0;_.b=(-1);function Fo(f,d,e){var a,b,c;for(b=ar(f.s());zq(b);){a=Aq(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){Bq(b);}return a;}}return null;}
function ap(b){var a;a=b.s();return co(new bo(),b,a);}
function bp(b){var a;a=kr(b);return ro(new qo(),b,a);}
function cp(a){return Fo(this,a,false)!==null;}
function dp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!Db(d,13)){return false;}f=Cb(d,13);c=ap(this);e=f.z();if(!jp(c,e)){return false;}for(a=fo(c);mo(a);){b=no(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function ep(b){var a;a=Fo(this,b,false);return a===null?null:a.u();}
function fp(){var a,b,c;b=0;for(c=ar(this.s());zq(c);){a=Aq(c);b+=a.hC();}return b;}
function gp(){return ap(this);}
function ao(){}
_=ao.prototype=new rm();_.o=cp;_.eQ=dp;_.w=ep;_.hC=fp;_.z=gp;_.tI=40;function jp(e,b){var a,c,d;if(b===e){return true;}if(!Db(b,14)){return false;}c=Cb(b,14);if(c.eb()!=e.eb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function kp(a){return jp(this,a);}
function lp(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function hp(){}
_=hp.prototype=new jn();_.eQ=kp;_.hC=lp;_.tI=41;function co(b,a,c){b.a=a;b.b=c;return b;}
function fo(b){var a;a=ar(b.b);return ko(new jo(),b,a);}
function go(a){return this.a.o(a);}
function ho(){return fo(this);}
function io(){return this.b.a.c;}
function bo(){}
_=bo.prototype=new hp();_.p=go;_.y=ho;_.eb=io;_.tI=42;function ko(b,a,c){b.a=c;return b;}
function mo(a){return a.a.x();}
function no(b){var a;a=b.a.A();return a.t();}
function oo(){return mo(this);}
function po(){return no(this);}
function jo(){}
_=jo.prototype=new rm();_.x=oo;_.A=po;_.tI=0;function ro(b,a,c){b.a=a;b.b=c;return b;}
function to(b){var a;a=ar(b.b);return yo(new xo(),b,a);}
function uo(a){return jr(this.a,a);}
function vo(){return to(this);}
function wo(){return this.b.a.c;}
function qo(){}
_=qo.prototype=new jn();_.p=uo;_.y=vo;_.eb=wo;_.tI=0;function yo(b,a,c){b.a=c;return b;}
function Ao(a){return a.a.x();}
function Bo(a){var b;b=a.a.A().u();return b;}
function Co(){return Ao(this);}
function Do(){return Bo(this);}
function xo(){}
_=xo.prototype=new rm();_.x=Co;_.A=Do;_.tI=0;function fq(){fq=es;xb('[Ljava.lang.String;',0,1,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);xb('[Ljava.lang.String;',0,1,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);}
function eq(a){fq();hq(a);return a;}
function gq(a){return a.jsdate.getTime();}
function hq(a){a.jsdate=new Date();}
function iq(a){return a.jsdate.toLocaleString();}
function jq(a){return Db(a,15)&&gq(this)==gq(Cb(a,15));}
function kq(){return Eb(gq(this)^gq(this)>>>32);}
function dq(){}
_=dq.prototype=new rm();_.eQ=jq;_.hC=kq;_.tI=43;function hr(){hr=es;or=ur();}
function er(a){{gr(a);}}
function fr(a){hr();er(a);return a;}
function gr(a){a.a=z();a.d=A();a.b=cc(or,v);a.c=0;}
function ir(b,a){if(Db(a,1)){return yr(b.d,Cb(a,1))!==or;}else if(a===null){return b.b!==or;}else{return xr(b.a,a,a.hC())!==or;}}
function jr(a,b){if(a.b!==or&&wr(a.b,b)){return true;}else if(tr(a.d,b)){return true;}else if(rr(a.a,b)){return true;}return false;}
function kr(a){return Eq(new vq(),a);}
function lr(c,a){var b;if(Db(a,1)){b=yr(c.d,Cb(a,1));}else if(a===null){b=c.b;}else{b=xr(c.a,a,a.hC());}return b===or?null:b;}
function mr(c,a,d){var b;{b=c.b;c.b=d;}if(b===or){++c.c;return null;}else{return b;}}
function nr(c,a){var b;if(Db(a,1)){b=Br(c.d,Cb(a,1));}else if(a===null){b=c.b;c.b=cc(or,v);}else{b=Ar(c.a,a,a.hC());}if(b===or){return null;}else{--c.c;return b;}}
function pr(e,c){hr();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function qr(d,a){hr();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=qq(c.substring(1),e);a.n(b);}}}
function rr(f,h){hr();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(wr(h,d)){return true;}}}}return false;}
function sr(a){return ir(this,a);}
function tr(c,d){hr();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(wr(d,a)){return true;}}}return false;}
function ur(){hr();}
function vr(){return kr(this);}
function wr(a,b){hr();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function zr(a){return lr(this,a);}
function xr(f,h,e){hr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(wr(h,d)){return c.u();}}}}
function yr(b,a){hr();return b[':'+a];}
function Ar(f,h,e){hr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(wr(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function Br(c,a){hr();a=':'+a;var b=c[a];delete c[a];return b;}
function mq(){}
_=mq.prototype=new ao();_.o=sr;_.s=vr;_.w=zr;_.tI=44;_.a=null;_.b=null;_.c=0;_.d=null;var or;function oq(b,a,c){b.a=a;b.b=c;return b;}
function qq(a,b){return oq(new nq(),a,b);}
function rq(b){var a;if(Db(b,16)){a=Cb(b,16);if(wr(this.a,a.t())&&wr(this.b,a.u())){return true;}}return false;}
function sq(){return this.a;}
function tq(){return this.b;}
function uq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function nq(){}
_=nq.prototype=new rm();_.eQ=rq;_.t=sq;_.u=tq;_.hC=uq;_.tI=45;_.a=null;_.b=null;function Eq(b,a){b.a=a;return b;}
function ar(a){return xq(new wq(),a.a);}
function br(c){var a,b,d;if(Db(c,16)){a=Cb(c,16);b=a.t();if(ir(this.a,b)){d=lr(this.a,b);return wr(a.u(),d);}}return false;}
function cr(){return ar(this);}
function dr(){return this.a.c;}
function vq(){}
_=vq.prototype=new hp();_.p=br;_.y=cr;_.eb=dr;_.tI=46;function xq(c,b){var a;c.c=b;a=op(new mp());if(c.c.b!==(hr(),or)){pp(a,oq(new nq(),null,c.c.b));}qr(c.c.d,a);pr(c.c.a,a);c.a=zn(a);return c;}
function zq(a){return sn(a.a);}
function Aq(a){return a.b=Cb(tn(a.a),16);}
function Bq(a){if(a.b===null){throw km(new jm(),'Must call next() before remove().');}else{un(a.a);nr(a.c,a.b.t());a.b=null;}}
function Cq(){return zq(this);}
function Dq(){return Aq(this);}
function wq(){}
_=wq.prototype=new rm();_.x=Cq;_.A=Dq;_.tI=0;_.a=null;_.b=null;function as(){}
_=as.prototype=new vm();_.tI=47;function El(){mb(new E());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{El();}catch(a){b(d);}else{El();}}
var bc=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{6:1},{6:1},{6:1},{2:1,4:1},{2:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{7:1,9:1,10:1,11:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{13:1},{14:1},{14:1},{15:1},{13:1},{16:1},{14:1},{3:1}];if (com_google_gwt_demos_titledpanel_TitledPanelDemo) {  var __gwt_initHandlers = com_google_gwt_demos_titledpanel_TitledPanelDemo.__gwt_initHandlers;  com_google_gwt_demos_titledpanel_TitledPanelDemo.onScriptLoad(gwtOnLoad);}})();