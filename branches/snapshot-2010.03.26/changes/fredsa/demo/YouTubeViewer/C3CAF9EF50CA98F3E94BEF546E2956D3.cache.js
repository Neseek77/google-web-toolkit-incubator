(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,As='com.google.gwt.core.client.',Bs='com.google.gwt.demos.youtubeviewer.client.',Cs='com.google.gwt.lang.',Ds='com.google.gwt.user.client.',Es='com.google.gwt.user.client.impl.',Fs='com.google.gwt.user.client.ui.',at='com.google.gwt.user.client.ui.impl.',bt='com.google.gwt.widgetideas.client.',ct='java.lang.',dt='java.util.';function zs(){}
function nn(a){return this===a;}
function on(){return Cn(this);}
function ln(){}
_=ln.prototype={};_.eQ=nn;_.hC=on;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!ic(a,2)){return false;}return B(b,hc(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new ln();_.eQ=C;_.hC=D;_.tI=7;function xb(a){a.a=nm(new mm(),'mc336q361N0');}
function yb(a){xb(a);return a;}
function Ab(d){var a,b,c,e,f;d.a=nm(new mm(),'k56DbGDBsNk');tk(d.a,'YouTubeViewer');uk(d.a,'443px');sk(d.a,'369px');rf(zj(),d.a);rf(zj(),Ai(new ah(),'<BR><BR>'));a=xg(new vg(),5,3);e=mk(new ek());jk(e,'iuywmPePYKQ');ti(a,0,0,'<B>Video ID:<\/B>');vi(a,0,1,e);vi(a,0,2,Df(new vf(),'Set',ab(new F(),d,e)));f=mk(new ek());jk(f,'443px');ti(a,1,0,'<B>Width:<\/B>');vi(a,1,1,f);vi(a,1,2,Df(new vf(),'Set',eb(new db(),d,f)));b=mk(new ek());jk(b,'369px');ti(a,2,0,'<B>Height:<\/B>');vi(a,2,1,b);vi(a,2,2,Df(new vf(),'Set',ib(new hb(),d,b)));c=mk(new ek());jk(c,'http://www.google.com');ti(a,3,0,'<B>Plugins Page:<\/B>');vi(a,3,1,c);vi(a,3,2,Df(new vf(),'Set',mb(new lb(),d,c)));vi(a,4,0,Df(new vf(),'Enable AutoPlay',qb(new pb(),d)));vi(a,4,1,Df(new vf(),'Enable Related',ub(new tb(),d)));rf(zj(),a);}
function E(){}
_=E.prototype=new ln();_.tI=0;function ab(b,a,c){b.a=a;b.b=c;return b;}
function cb(a){sm(this.a.a,ik(this.b));}
function F(){}
_=F.prototype=new ln();_.C=cb;_.tI=8;function eb(b,a,c){b.a=a;b.b=c;return b;}
function gb(a){uk(this.a.a,ik(this.b));}
function db(){}
_=db.prototype=new ln();_.C=gb;_.tI=9;function ib(b,a,c){b.a=a;b.b=c;return b;}
function kb(a){sk(this.a.a,ik(this.b));}
function hb(){}
_=hb.prototype=new ln();_.C=kb;_.tI=10;function mb(b,a,c){b.a=a;b.b=c;return b;}
function ob(b){var a;a=this.a.a.d;em(a,ik(this.b));km(this.a.a,a);}
function lb(){}
_=lb.prototype=new ln();_.C=ob;_.tI=11;function qb(b,a){b.a=a;return b;}
function sb(a){if(this.a.a.a){rm(this.a.a,false);Af(hc(a,3),'Enable AutoPlay');}else{rm(this.a.a,true);Af(hc(a,3),'Disable AutoPlay');}}
function pb(){}
_=pb.prototype=new ln();_.C=sb;_.tI=12;function ub(b,a){b.a=a;return b;}
function wb(a){if(this.a.a.c){tm(this.a.a,false);Af(hc(a,3),'Enable Related');}else{tm(this.a.a,true);Af(hc(a,3),'Disable Related');}}
function tb(){}
_=tb.prototype=new ln();_.C=wb;_.tI=13;function Cb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function Eb(a,b,c){return a[b]=c;}
function Fb(b,a){return b[a];}
function ac(a){return a.length;}
function cc(e,d,c,b,a){return bc(e,d,c,b,0,ac(b),a);}
function bc(j,i,g,c,e,a,b){var d,f,h;if((f=Fb(c,e))<0){throw new jn();}h=Cb(new Bb(),f,Fb(i,e),Fb(g,e),j);++e;if(e<a){j=vn(j,1);for(d=0;d<f;++d){Eb(h,d,bc(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Eb(h,d,b);}}return h;}
function dc(a,b,c){if(c!==null&&a.b!=0&& !ic(c,a.b)){throw new vm();}return Eb(a,b,c);}
function Bb(){}
_=Bb.prototype=new ln();_.tI=0;function gc(b,a){return !(!(b&&lc[b][a]));}
function hc(b,a){if(b!=null)gc(b.tI,a)||kc();return b;}
function ic(b,a){return b!=null&&gc(b.tI,a);}
function kc(){throw new ym();}
function jc(a){if(a!==null){throw new ym();}return a;}
function mc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var lc;function qc(){qc=zs;jd=iq(new gq());{ed=new qe();ve(ed);}}
function rc(b,a){qc();af(ed,b,a);}
function sc(a,b){qc();return te(ed,a,b);}
function tc(){qc();return cf(ed,'button');}
function uc(){qc();return cf(ed,'div');}
function vc(a){qc();return cf(ed,a);}
function wc(){qc();return df(ed,'text');}
function xc(){qc();return cf(ed,'tbody');}
function yc(){qc();return cf(ed,'td');}
function zc(){qc();return cf(ed,'table');}
function Cc(b,a,d){qc();var c;c=o;{Bc(b,a,d);}}
function Bc(b,a,c){qc();var d;if(a===id){if(Ec(b)==8192){id=null;}}d=Ac;Ac=b;try{c.B(b);}finally{Ac=d;}}
function Dc(b,a){qc();ef(ed,b,a);}
function Ec(a){qc();return ff(ed,a);}
function Fc(a){qc();Ae(ed,a);}
function ad(a,b){qc();return gf(ed,a,b);}
function bd(a){qc();return hf(ed,a);}
function cd(a){qc();return Be(ed,a);}
function dd(a){qc();return Ce(ed,a);}
function fd(c,a,b){qc();Ee(ed,c,a,b);}
function gd(a){qc();var b,c;c=true;if(jd.b>0){b=jc(mq(jd,jd.b-1));if(!(c=null.hb())){Dc(a,true);Fc(a);}}return c;}
function hd(b,a){qc();jf(ed,b,a);}
function kd(a,b,c){qc();kf(ed,a,b,c);}
function ld(a,b){qc();lf(ed,a,b);}
function md(a,b){qc();mf(ed,a,b);}
function nd(a,b){qc();nf(ed,a,b);}
function od(b,a,c){qc();of(ed,b,a,c);}
function pd(a,b){qc();xe(ed,a,b);}
var Ac=null,ed=null,id=null,jd;function sd(a){if(ic(a,5)){return sc(this,hc(a,5));}return x(mc(this,qd),a);}
function td(){return y(mc(this,qd));}
function qd(){}
_=qd.prototype=new v();_.eQ=sd;_.hC=td;_.tI=14;function xd(a){return x(mc(this,ud),a);}
function yd(){return y(mc(this,ud));}
function ud(){}
_=ud.prototype=new v();_.eQ=xd;_.hC=yd;_.tI=15;function Ed(){Ed=zs;ae=iq(new gq());{Fd();}}
function Fd(){Ed();ee(new Ad());}
var ae;function Cd(){while((Ed(),ae).b>0){jc(mq((Ed(),ae),0)).hb();}}
function Dd(){return null;}
function Ad(){}
_=Ad.prototype=new ln();_.F=Cd;_.ab=Dd;_.tI=16;function de(){de=zs;fe=iq(new gq());ne=iq(new gq());{je();}}
function ee(a){de();jq(fe,a);}
function ge(){de();var a,b;for(a=uo(fe);no(a);){b=hc(oo(a),6);b.F();}}
function he(){de();var a,b,c,d;d=null;for(a=uo(fe);no(a);){b=hc(oo(a),6);c=b.ab();{d=c;}}return d;}
function ie(){de();var a,b;for(a=uo(ne);no(a);){b=jc(oo(a));null.hb();}}
function je(){de();__gwt_initHandlers(function(){me();},function(){return le();},function(){ke();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ke(){de();var a;a=o;{ge();}}
function le(){de();var a;a=o;{return he();}}
function me(){de();var a;a=o;{ie();}}
var fe,ne;function af(c,b,a){b.appendChild(a);}
function cf(b,a){return $doc.createElement(a);}
function df(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function ef(c,b,a){b.cancelBubble=a;}
function ff(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function gf(d,a,b){var c=a[b];return c==null?null:String(c);}
function hf(b,a){return a.__eventBits||0;}
function jf(c,b,a){b.removeChild(a);}
function kf(c,a,b,d){a[b]=d;}
function lf(c,a,b){a.__listener=b;}
function mf(c,a,b){if(!b){b='';}a.innerHTML=b;}
function nf(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function of(c,b,a,d){b.style[a]=d;}
function oe(){}
_=oe.prototype=new ln();_.tI=0;function Ae(b,a){a.preventDefault();}
function Be(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function Ce(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function De(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Cc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!gd(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Cc(b,a,c);};$wnd.__captureElem=null;}
function Ee(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function Fe(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ye(){}
_=ye.prototype=new oe();_.tI=0;function te(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function ve(a){De(a);ue(a);}
function ue(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function xe(c,b,a){Fe(c,b,a);we(c,b,a);}
function we(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function pe(){}
_=pe.prototype=new ye();_.tI=0;function qe(){}
_=qe.prototype=new pe();_.tI=0;function qk(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function rk(b,a){if(b.k!==null){qk(b,b.k,a);}b.k=a;}
function sk(b,a){od(b.k,'height',a);}
function tk(b,a){wk(b.k,a);}
function uk(a,b){od(a.k,'width',b);}
function vk(b,a){pd(b.k,a|bd(b.k));}
function wk(a,b){kd(a,'className',b);}
function ok(){}
_=ok.prototype=new ln();_.tI=0;_.k=null;function hl(a){if(a.i){throw dn(new cn(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;ld(a.k,a);a.q();a.D();}
function il(a){if(!a.i){throw dn(new cn(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.E();}finally{a.r();ld(a.k,null);a.i=false;}}
function jl(a){if(a.j!==null){a.j.cb(a);}else if(a.j!==null){throw dn(new cn(),"This widget's parent does not implement HasWidgets");}}
function kl(b,a){if(b.i){ld(b.k,null);}rk(b,a);if(b.i){ld(a,b);}}
function ll(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){il(c);}c.j=null;}else{if(a!==null){throw dn(new cn(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){hl(c);}}}
function ml(){}
function nl(){}
function ol(a){}
function pl(){}
function ql(){}
function rl(a){kl(this,a);}
function xk(){}
_=xk.prototype=new ok();_.q=ml;_.r=nl;_.B=ol;_.D=pl;_.E=ql;_.db=rl;_.tI=17;_.i=false;_.j=null;function kj(b,a){ll(a,b);}
function mj(b,a){ll(a,null);}
function nj(){var a,b;for(b=this.y();b.x();){a=hc(b.A(),8);hl(a);}}
function oj(){var a,b;for(b=this.y();b.x();){a=hc(b.A(),8);il(a);}}
function pj(){}
function qj(){}
function jj(){}
_=jj.prototype=new xk();_.q=nj;_.r=oj;_.D=pj;_.E=qj;_.tI=18;function gg(a){a.a=Ek(new yk(),a);}
function hg(a){gg(a);return a;}
function ig(c,a,b){jl(a);Fk(c.a,a);rc(b,a.k);kj(c,a);}
function kg(b,c){var a;if(c.j!==b){return false;}mj(b,c);a=c.k;hd(dd(a),a);fl(b.a,c);return true;}
function lg(){return dl(this.a);}
function mg(a){return kg(this,a);}
function fg(){}
_=fg.prototype=new jj();_.y=lg;_.cb=mg;_.tI=19;function qf(a){hg(a);a.db(uc());od(a.k,'position','relative');od(a.k,'overflow','hidden');return a;}
function rf(a,b){ig(a,b,a.k);}
function tf(a){od(a,'left','');od(a,'top','');od(a,'position','');}
function uf(b){var a;a=kg(this,b);if(a){tf(b.k);}return a;}
function pf(){}
_=pf.prototype=new fg();_.cb=uf;_.tI=20;function pg(){pg=zs;Bl(),Dl;}
function og(b,a){Bl(),Dl;rg(b,a);return b;}
function qg(b,a){switch(Ec(a)){case 1:if(b.b!==null){dg(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function rg(b,a){kl(b,a);vk(b,7041);}
function sg(a){if(this.b===null){this.b=bg(new ag());}jq(this.b,a);}
function tg(a){qg(this,a);}
function ug(a){rg(this,a);}
function ng(){}
_=ng.prototype=new xk();_.l=sg;_.B=tg;_.db=ug;_.tI=21;_.b=null;function yf(){yf=zs;Bl(),Dl;}
function xf(b,a){Bl(),Dl;og(b,a);return b;}
function zf(b,a){md(b.k,a);}
function Af(b,a){nd(b.k,a);}
function wf(){}
_=wf.prototype=new ng();_.tI=22;function Ef(){Ef=zs;Bl(),Dl;}
function Bf(a){Bl(),Dl;xf(a,tc());Ff(a.k);tk(a,'gwt-Button');return a;}
function Cf(b,a){Bl(),Dl;Bf(b);zf(b,a);return b;}
function Df(c,a,b){Bl(),Dl;Cf(c,a);c.l(b);return c;}
function Ff(b){Ef();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function vf(){}
_=vf.prototype=new wf();_.tI=23;function fo(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function ho(a){throw bo(new ao(),'add');}
function io(b){var a;a=fo(this,this.y(),b);return a!==null;}
function eo(){}
_=eo.prototype=new ln();_.n=ho;_.p=io;_.tI=0;function to(b,a){throw gn(new fn(),'Index: '+a+', Size: '+b.b);}
function uo(a){return lo(new ko(),a);}
function vo(b,a){throw bo(new ao(),'add');}
function wo(a){this.m(this.fb(),a);return true;}
function xo(e){var a,b,c,d,f;if(e===this){return true;}if(!ic(e,13)){return false;}f=hc(e,13);if(this.fb()!=f.fb()){return false;}c=uo(this);d=f.y();while(no(c)){a=oo(c);b=oo(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function yo(){var a,b,c,d;c=1;a=31;b=uo(this);while(no(b)){d=oo(b);c=31*c+(d===null?0:d.hC());}return c;}
function zo(){return uo(this);}
function Ao(a){throw bo(new ao(),'remove');}
function jo(){}
_=jo.prototype=new eo();_.m=vo;_.n=wo;_.eQ=xo;_.hC=yo;_.y=zo;_.bb=Ao;_.tI=24;function hq(a){{kq(a);}}
function iq(a){hq(a);return a;}
function jq(b,a){Aq(b.a,b.b++,a);return true;}
function kq(a){a.a=z();a.b=0;}
function mq(b,a){if(a<0||a>=b.b){to(b,a);}return wq(b.a,a);}
function nq(b,a){return oq(b,a,0);}
function oq(c,b,a){if(a<0){to(c,a);}for(;a<c.b;++a){if(vq(b,wq(c.a,a))){return a;}}return (-1);}
function pq(c,a){var b;b=mq(c,a);yq(c.a,a,1);--c.b;return b;}
function qq(d,a,b){var c;c=mq(d,a);Aq(d.a,a,b);return c;}
function sq(a,b){if(a<0||a>this.b){to(this,a);}rq(this.a,a,b);++this.b;}
function tq(a){return jq(this,a);}
function rq(a,b,c){a.splice(b,0,c);}
function uq(a){return nq(this,a)!=(-1);}
function vq(a,b){return a===b||a!==null&&a.eQ(b);}
function xq(a){return mq(this,a);}
function wq(a,b){return a[b];}
function zq(a){return pq(this,a);}
function yq(a,c,b){a.splice(c,b);}
function Aq(a,b,c){a[b]=c;}
function Bq(){return this.b;}
function gq(){}
_=gq.prototype=new jo();_.m=sq;_.n=tq;_.p=uq;_.v=xq;_.bb=zq;_.fb=Bq;_.tI=25;_.a=null;_.b=0;function bg(a){iq(a);return a;}
function dg(d,c){var a,b;for(a=uo(d);no(a);){b=hc(oo(a),7);b.C(c);}}
function ag(){}
_=ag.prototype=new gq();_.tI=26;function fi(a){a.h=Bh(new wh());}
function gi(a){fi(a);a.g=zc();a.c=xc();rc(a.g,a.c);a.db(a.g);vk(a,1);return a;}
function hi(d,c,b){var a;ii(d,c);if(b<0){throw gn(new fn(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw gn(new fn(),'Column index: '+b+', Column size: '+d.a);}}
function ii(c,a){var b;b=c.b;if(a>=b||a<0){throw gn(new fn(),'Row index: '+a+', Row size: '+b);}}
function ji(e,c,b,a){var d;d=oh(e.d,c,b);ni(e,d,a);return d;}
function li(a){return yc();}
function mi(d,b,a){var c,e;e=vh(d.f,d.c,b);c=zg(d);fd(e,c,a);}
function ni(d,c,a){var b,e;b=cd(c);e=null;if(b!==null){e=Dh(d.h,b);}if(e!==null){qi(d,e);return true;}else{if(a){md(c,'');}return false;}}
function qi(b,c){var a;if(c.j!==b){return false;}mj(b,c);a=c.k;hd(dd(a),a);ai(b.h,a);return true;}
function oi(d,b,a){var c,e;hi(d,b,a);c=ji(d,b,a,false);e=vh(d.f,d.c,b);hd(e,c);}
function pi(d,c){var a,b;b=d.a;for(a=0;a<b;++a){ji(d,c,a,false);}hd(d.c,vh(d.f,d.c,c));}
function ri(b,a){b.d=a;}
function si(b,a){b.e=a;sh(b.e);}
function ti(e,c,a,b){var d;Ag(e,c,a);d=ji(e,c,a,b===null);if(b!==null){md(d,b);}}
function ui(b,a){b.f=a;}
function vi(d,b,a,e){var c;Ag(d,b,a);if(e!==null){jl(e);c=ji(d,b,a,true);Eh(d.h,e);rc(c,e.k);kj(d,e);}}
function wi(){return bi(this.h);}
function xi(a){switch(Ec(a)){case 1:{break;}default:}}
function yi(a){return qi(this,a);}
function bh(){}
_=bh.prototype=new jj();_.y=wi;_.B=xi;_.cb=yi;_.tI=27;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function wg(a){gi(a);ri(a,lh(new kh(),a));ui(a,new th());si(a,qh(new ph(),a));return a;}
function xg(c,b,a){wg(c);Eg(c,b,a);return c;}
function zg(b){var a;a=li(b);md(a,'&nbsp;');return a;}
function Ag(c,b,a){Bg(c,b);if(a<0){throw gn(new fn(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw gn(new fn(),'Column index: '+a+', Column size: '+c.a);}}
function Bg(b,a){if(a<0){throw gn(new fn(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw gn(new fn(),'Row index: '+a+', Row size: '+b.b);}}
function Eg(c,b,a){Cg(c,a);Dg(c,b);}
function Cg(d,a){var b,c;if(d.a==a){return;}if(a<0){throw gn(new fn(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){oi(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){mi(d,b,c);}}}d.a=a;}
function Dg(b,a){if(b.b==a){return;}if(a<0){throw gn(new fn(),'Cannot set number of rows to '+a);}if(b.b<a){Fg(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){pi(b,--b.b);}}}
function Fg(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function vg(){}
_=vg.prototype=new bh();_.tI=28;_.a=0;_.b=0;function gj(a){a.db(uc());vk(a,131197);tk(a,'gwt-Label');return a;}
function ij(a){switch(Ec(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function fj(){}
_=fj.prototype=new xk();_.B=ij;_.tI=29;function zi(a){gj(a);a.db(uc());vk(a,125);tk(a,'gwt-HTML');return a;}
function Ai(b,a){zi(b);Ci(b,a);return b;}
function Ci(b,a){md(b.k,a);}
function ah(){}
_=ah.prototype=new fj();_.tI=30;function dh(a){{gh(a);}}
function eh(b,a){b.b=a;dh(b);return b;}
function gh(a){while(++a.a<a.b.b.b){if(mq(a.b.b,a.a)!==null){return;}}}
function hh(a){return a.a<a.b.b.b;}
function ih(){return hh(this);}
function jh(){var a;if(!hh(this)){throw new vs();}a=mq(this.b.b,this.a);gh(this);return a;}
function ch(){}
_=ch.prototype=new ln();_.x=ih;_.A=jh;_.tI=0;_.a=(-1);function lh(b,a){b.a=a;return b;}
function nh(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function oh(c,b,a){return nh(c,c.a.c,b,a);}
function kh(){}
_=kh.prototype=new ln();_.tI=0;function qh(b,a){b.b=a;return b;}
function sh(a){if(a.a===null){a.a=vc('colgroup');fd(a.b.g,a.a,0);rc(a.a,vc('col'));}}
function ph(){}
_=ph.prototype=new ln();_.tI=0;_.a=null;function vh(c,a,b){return a.rows[b];}
function th(){}
_=th.prototype=new ln();_.tI=0;function Ah(a){a.b=iq(new gq());}
function Bh(a){Ah(a);return a;}
function Dh(c,a){var b;b=di(a);if(b<0){return null;}return hc(mq(c.b,b),8);}
function Eh(b,c){var a;if(b.a===null){a=b.b.b;jq(b.b,c);}else{a=b.a.a;qq(b.b,a,c);b.a=b.a.b;}ei(c.k,a);}
function Fh(c,a,b){ci(a);qq(c.b,b,null);c.a=yh(new xh(),b,c.a);}
function ai(c,a){var b;b=di(a);Fh(c,a,b);}
function bi(a){return eh(new ch(),a);}
function ci(a){a['__widgetID']=null;}
function di(a){var b=a['__widgetID'];return b==null?-1:b;}
function ei(a,b){a['__widgetID']=b;}
function wh(){}
_=wh.prototype=new ln();_.tI=0;_.a=null;function yh(c,a,b){c.a=a;c.b=b;return c;}
function xh(){}
_=xh.prototype=new ln();_.tI=0;_.a=0;_.b=null;function xj(){xj=zs;Cj=yr(new Eq());}
function wj(b,a){xj();qf(b);if(a===null){a=yj();}b.db(a);hl(b);return b;}
function zj(){xj();return Aj(null);}
function Aj(c){xj();var a,b;b=hc(Er(Cj,c),9);if(b!==null){return b;}a=null;if(Cj.c==0){Bj();}Fr(Cj,c,b=wj(new rj(),a));return b;}
function yj(){xj();return $doc.body;}
function Bj(){xj();ee(new sj());}
function rj(){}
_=rj.prototype=new pf();_.tI=31;var Cj;function uj(){var a,b;for(b=np(Bp((xj(),Cj)));up(b);){a=hc(vp(b),9);if(a.i){il(a);}}}
function vj(){return null;}
function sj(){}
_=sj.prototype=new ln();_.F=uj;_.ab=vj;_.tI=32;function hk(){hk=zs;Bl(),Dl;}
function gk(b,a){Bl(),Dl;og(b,a);vk(b,1024);return b;}
function ik(a){return ad(a.k,'value');}
function jk(b,a){kd(b.k,'value',a!==null?a:'');}
function kk(a){if(this.a===null){this.a=bg(new ag());}jq(this.a,a);}
function lk(a){var b;qg(this,a);b=Ec(a);if(b==1){if(this.a!==null){dg(this.a,this);}}else{}}
function fk(){}
_=fk.prototype=new ng();_.l=kk;_.B=lk;_.tI=33;_.a=null;function nk(){nk=zs;Bl(),Dl;}
function mk(a){Bl(),Dl;gk(a,wc());tk(a,'gwt-TextBox');return a;}
function ek(){}
_=ek.prototype=new fk();_.tI=34;function Ek(b,a){b.a=cc('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[4],null);return b;}
function Fk(a,b){cl(a,b,a.b);}
function bl(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function cl(d,e,a){var b,c;if(a<0||a>d.b){throw new fn();}if(d.b==d.a.a){c=cc('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[d.a.a*2],null);for(b=0;b<d.a.a;++b){dc(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){dc(d.a,b,d.a[b-1]);}dc(d.a,a,e);}
function dl(a){return Ak(new zk(),a);}
function el(c,b){var a;if(b<0||b>=c.b){throw new fn();}--c.b;for(a=b;a<c.b;++a){dc(c.a,a,c.a[a+1]);}dc(c.a,c.b,null);}
function fl(b,c){var a;a=bl(b,c);if(a==(-1)){throw new vs();}el(b,a);}
function yk(){}
_=yk.prototype=new ln();_.tI=0;_.a=null;_.b=0;function Ak(b,a){b.b=a;return b;}
function Ck(){return this.a<this.b.b-1;}
function Dk(){if(this.a>=this.b.b){throw new vs();}return this.b.a[++this.a];}
function zk(){}
_=zk.prototype=new ln();_.x=Ck;_.A=Dk;_.tI=0;_.a=(-1);function Bl(){Bl=zs;Cl=vl(new tl());Dl=Cl!==null?Al(new sl()):Cl;}
function Al(a){Bl();return a;}
function sl(){}
_=sl.prototype=new ln();_.tI=0;var Cl,Dl;function wl(){wl=zs;Bl();}
function ul(a){xl(a);yl(a);zl(a);}
function vl(a){wl();Al(a);ul(a);return a;}
function xl(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function yl(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function zl(a){return function(){this.firstChild.focus();};}
function tl(){}
_=tl.prototype=new sl();_.tI=0;function hm(a){a.db(uc());return a;}
function jm(e){var a,b,c,d,f;if(e.d===null){return;}b='<object width="100%" height="100%"';b+='>';c=tr(Dr(e.d.d));while(mr(c)){a=nr(c);d=hc(a.t(),1);f=hc(a.u(),1);b+='<param name="'+d+'" value="'+f+'"/>';}b+='<embed height="100%" width="100%" type="'+e.d.c+'"'+'src="'+e.d.b+'"';if(e.d.a!==null){b+=' pluginspage="'+e.d.a+'"';}b+='><\/embed>';b+='<\/object>';md(e.k,b);}
function km(b,a){lm(b,a,true);}
function lm(c,a,b){c.d=a;if(b){jm(c);}}
function El(){}
_=El.prototype=new xk();_.tI=35;_.d=null;function am(a){a.d=yr(new Eq());}
function bm(c,d,a,b){am(c);c.b=a;gm(c,d);return c;}
function dm(b,a,c){Fr(b.d,a,c);}
function em(b,a){b.a=a;}
function fm(b,a){b.b=a;}
function gm(a,b){switch(b){case 0:a.c='application/x-shockwave-flash';break;default:throw an(new Fm(),'type invalid: Unrecognized type');}}
function Fl(){}
_=Fl.prototype=new ln();_.tI=0;_.a=null;_.b=null;_.c=null;function nm(b,a){om(b,a,false);return b;}
function om(c,b,a){hm(c);c.a=a;lm(c,bm(new Fl(),0,null,c),false);sm(c,b);return c;}
function qm(a){var b;b='http://www.youtube.com/v/'+a.b;if(a.a){b+='&autoplay=1';}if(a.c){b+='&rel=1';}else{b+='&rel=0';}return b;}
function rm(b,a){b.a=a;}
function sm(c,b){var a,d;c.b=b;d=qm(c);a=c.d;fm(a,d);dm(a,'movie',d);jm(c);}
function tm(b,a){b.c=a;}
function mm(){}
_=mm.prototype=new El();_.tI=36;_.a=false;_.b=null;_.c=false;function En(b,a){a;return b;}
function Dn(){}
_=Dn.prototype=new ln();_.tI=3;function Dm(b,a){En(b,a);return b;}
function Cm(){}
_=Cm.prototype=new Dn();_.tI=4;function qn(b,a){Dm(b,a);return b;}
function pn(){}
_=pn.prototype=new Cm();_.tI=5;function vm(){}
_=vm.prototype=new pn();_.tI=37;function ym(){}
_=ym.prototype=new pn();_.tI=38;function an(b,a){qn(b,a);return b;}
function Fm(){}
_=Fm.prototype=new pn();_.tI=39;function dn(b,a){qn(b,a);return b;}
function cn(){}
_=cn.prototype=new pn();_.tI=40;function gn(b,a){qn(b,a);return b;}
function fn(){}
_=fn.prototype=new pn();_.tI=41;function jn(){}
_=jn.prototype=new pn();_.tI=42;function un(g){var a=yn;if(!a){a=yn={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function vn(b,a){return b.substr(a,b.length-a);}
function wn(a,b){return String(a)==b;}
function xn(a){if(!ic(a,1))return false;return wn(this,a);}
function zn(){return un(this);}
_=String.prototype;_.eQ=xn;_.hC=zn;_.tI=2;var yn=null;function Cn(a){return s(a);}
function bo(b,a){qn(b,a);return b;}
function ao(){}
_=ao.prototype=new pn();_.tI=43;function lo(b,a){b.c=a;return b;}
function no(a){return a.a<a.c.fb();}
function oo(a){if(!no(a)){throw new vs();}return a.c.v(a.b=a.a++);}
function po(a){if(a.b<0){throw new cn();}a.c.bb(a.b);a.a=a.b;a.b=(-1);}
function qo(){return no(this);}
function ro(){return oo(this);}
function ko(){}
_=ko.prototype=new ln();_.x=qo;_.A=ro;_.tI=0;_.a=0;_.b=(-1);function zp(f,d,e){var a,b,c;for(b=tr(f.s());mr(b);){a=nr(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){or(b);}return a;}}return null;}
function Ap(b){var a;a=b.s();return Do(new Co(),b,a);}
function Bp(b){var a;a=Dr(b);return lp(new kp(),b,a);}
function Cp(a){return zp(this,a,false)!==null;}
function Dp(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ic(d,14)){return false;}f=hc(d,14);c=Ap(this);e=f.z();if(!dq(c,e)){return false;}for(a=Fo(c);gp(a);){b=hp(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Ep(b){var a;a=zp(this,b,false);return a===null?null:a.u();}
function Fp(){var a,b,c;b=0;for(c=tr(this.s());mr(c);){a=nr(c);b+=a.hC();}return b;}
function aq(){return Ap(this);}
function Bo(){}
_=Bo.prototype=new ln();_.o=Cp;_.eQ=Dp;_.w=Ep;_.hC=Fp;_.z=aq;_.tI=44;function dq(e,b){var a,c,d;if(b===e){return true;}if(!ic(b,15)){return false;}c=hc(b,15);if(c.fb()!=e.fb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function eq(a){return dq(this,a);}
function fq(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function bq(){}
_=bq.prototype=new eo();_.eQ=eq;_.hC=fq;_.tI=45;function Do(b,a,c){b.a=a;b.b=c;return b;}
function Fo(b){var a;a=tr(b.b);return ep(new dp(),b,a);}
function ap(a){return this.a.o(a);}
function bp(){return Fo(this);}
function cp(){return this.b.a.c;}
function Co(){}
_=Co.prototype=new bq();_.p=ap;_.y=bp;_.fb=cp;_.tI=46;function ep(b,a,c){b.a=c;return b;}
function gp(a){return a.a.x();}
function hp(b){var a;a=b.a.A();return a.t();}
function ip(){return gp(this);}
function jp(){return hp(this);}
function dp(){}
_=dp.prototype=new ln();_.x=ip;_.A=jp;_.tI=0;function lp(b,a,c){b.a=a;b.b=c;return b;}
function np(b){var a;a=tr(b.b);return sp(new rp(),b,a);}
function op(a){return Cr(this.a,a);}
function pp(){return np(this);}
function qp(){return this.b.a.c;}
function kp(){}
_=kp.prototype=new eo();_.p=op;_.y=pp;_.fb=qp;_.tI=0;function sp(b,a,c){b.a=c;return b;}
function up(a){return a.a.x();}
function vp(a){var b;b=a.a.A().u();return b;}
function wp(){return up(this);}
function xp(){return vp(this);}
function rp(){}
_=rp.prototype=new ln();_.x=wp;_.A=xp;_.tI=0;function Ar(){Ar=zs;bs=hs();}
function xr(a){{zr(a);}}
function yr(a){Ar();xr(a);return a;}
function zr(a){a.a=z();a.d=A();a.b=mc(bs,v);a.c=0;}
function Br(b,a){if(ic(a,1)){return ls(b.d,hc(a,1))!==bs;}else if(a===null){return b.b!==bs;}else{return ks(b.a,a,a.hC())!==bs;}}
function Cr(a,b){if(a.b!==bs&&js(a.b,b)){return true;}else if(gs(a.d,b)){return true;}else if(es(a.a,b)){return true;}return false;}
function Dr(a){return rr(new ir(),a);}
function Er(c,a){var b;if(ic(a,1)){b=ls(c.d,hc(a,1));}else if(a===null){b=c.b;}else{b=ks(c.a,a,a.hC());}return b===bs?null:b;}
function Fr(c,a,d){var b;if(a!==null){b=os(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=ns(c.a,a,d,un(a));}if(b===bs){++c.c;return null;}else{return b;}}
function as(c,a){var b;if(ic(a,1)){b=qs(c.d,hc(a,1));}else if(a===null){b=c.b;c.b=mc(bs,v);}else{b=ps(c.a,a,a.hC());}if(b===bs){return null;}else{--c.c;return b;}}
function cs(e,c){Ar();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function ds(d,a){Ar();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=cr(c.substring(1),e);a.n(b);}}}
function es(f,h){Ar();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(js(h,d)){return true;}}}}return false;}
function fs(a){return Br(this,a);}
function gs(c,d){Ar();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(js(d,a)){return true;}}}return false;}
function hs(){Ar();}
function is(){return Dr(this);}
function js(a,b){Ar();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function ms(a){return Er(this,a);}
function ks(f,h,e){Ar();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(js(h,d)){return c.u();}}}}
function ls(b,a){Ar();return b[':'+a];}
function ns(f,h,j,e){Ar();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(js(h,d)){var i=c.u();c.eb(j);return i;}}}else{a=f[e]=[];}var c=cr(h,j);a.push(c);}
function os(c,a,d){Ar();a=':'+a;var b=c[a];c[a]=d;return b;}
function ps(f,h,e){Ar();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(js(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function qs(c,a){Ar();a=':'+a;var b=c[a];delete c[a];return b;}
function Eq(){}
_=Eq.prototype=new Bo();_.o=fs;_.s=is;_.w=ms;_.tI=47;_.a=null;_.b=null;_.c=0;_.d=null;var bs;function ar(b,a,c){b.a=a;b.b=c;return b;}
function cr(a,b){return ar(new Fq(),a,b);}
function dr(b){var a;if(ic(b,16)){a=hc(b,16);if(js(this.a,a.t())&&js(this.b,a.u())){return true;}}return false;}
function er(){return this.a;}
function fr(){return this.b;}
function gr(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function hr(a){var b;b=this.b;this.b=a;return b;}
function Fq(){}
_=Fq.prototype=new ln();_.eQ=dr;_.t=er;_.u=fr;_.hC=gr;_.eb=hr;_.tI=48;_.a=null;_.b=null;function rr(b,a){b.a=a;return b;}
function tr(a){return kr(new jr(),a.a);}
function ur(c){var a,b,d;if(ic(c,16)){a=hc(c,16);b=a.t();if(Br(this.a,b)){d=Er(this.a,b);return js(a.u(),d);}}return false;}
function vr(){return tr(this);}
function wr(){return this.a.c;}
function ir(){}
_=ir.prototype=new bq();_.p=ur;_.y=vr;_.fb=wr;_.tI=49;function kr(c,b){var a;c.c=b;a=iq(new gq());if(c.c.b!==(Ar(),bs)){jq(a,ar(new Fq(),null,c.c.b));}ds(c.c.d,a);cs(c.c.a,a);c.a=uo(a);return c;}
function mr(a){return no(a.a);}
function nr(a){return a.b=hc(oo(a.a),16);}
function or(a){if(a.b===null){throw dn(new cn(),'Must call next() before remove().');}else{po(a.a);as(a.c,a.b.t());a.b=null;}}
function pr(){return mr(this);}
function qr(){return nr(this);}
function jr(){}
_=jr.prototype=new ln();_.x=pr;_.A=qr;_.tI=0;_.a=null;_.b=null;function vs(){}
_=vs.prototype=new pn();_.tI=50;function um(){Ab(yb(new E()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{um();}catch(a){b(d);}else{um();}}
var lc=[{},{},{1:1},{4:1},{4:1},{4:1},{4:1},{2:1},{7:1},{7:1},{7:1},{7:1},{7:1},{7:1},{2:1,5:1},{2:1},{6:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{3:1,8:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,9:1,10:1,11:1,12:1},{6:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{4:1},{4:1},{4:1},{4:1},{4:1},{4:1},{4:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{4:1}];if (com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo) {  var __gwt_initHandlers = com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo.__gwt_initHandlers;  com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo.onScriptLoad(gwtOnLoad);}})();