// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 1
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var m=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ca=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,da=function(a){if(null==a)return String(a);var b=ca.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},fa=function(a){if(!a||"object"!=da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ea(a,"constructor")&&!ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return void 0===
c||ea(a,c)},ha=function(a,b){var c=b||("array"==da(a)?[]:{}),d;for(d in a)if(ea(a,d)){var e=a[d];"array"==da(e)?("array"!=da(c[d])&&(c[d]=[]),c[d]=ha(e,c[d])):fa(e)?(fa(c[d])||(c[d]={}),c[d]=ha(e,c[d])):c[d]=e}return c};var ia=function(){},w=function(a){return"function"==typeof a},z=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ja=function(a){return"number"==da(a)&&!isNaN(a)},ka=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},la=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},C=function(a){return Math.round(Number(a))||0},ma=function(a){var b=[];if(z(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));
return b},na=function(){this.prefix="gtm.";this.na={}};na.prototype.set=function(a,b){this.na[this.prefix+a]=b};na.prototype.get=function(a){return this.na[this.prefix+a]};na.prototype.contains=function(a){return void 0!==this.get(a)};
var oa=function(a,b,c){try{return a["1"](a,b||ia,c||ia)}catch(d){}return!1},pa=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=la(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},ra=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},sa=function(a){for(var b=0;b<a.length;b++)a[b]()},ta=(new Date).getTime(),ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c};var F=window,G=document,va=navigator,H=function(a,b){var c=F[a],d="var "+a+";";if(m.execScript)m.execScript(d,"JavaScript");else if(m.eval)if(null==ba&&(m.eval("var _et_ = 1;"),"undefined"!=typeof m._et_?(delete m._et_,ba=!0):ba=!1),ba)m.eval(d);else{var e=m.document,f=e.createElement("script");f.type="text/javascript";f.defer=!1;f.appendChild(e.createTextNode(d));e.body.appendChild(f);e.body.removeChild(f)}else throw Error("goog.globalEval not available");F[a]=void 0===c?b:c;return F[a]},I=function(a,
b,c,d){return(d||"http:"!=F.location.protocol?a:b)+c},wa=function(a){var b=G.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},xa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},L=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;xa(d,b);c&&(d.onerror=c);wa(d)},ya=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display=
"none";c.style.visibility="hidden";wa(c);xa(c,b);void 0!==a&&(c.src=a);return c},k=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},N=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},O=function(a){F.setTimeout(a,0)},za=!1,Aa=[],Ca=function(a){if(!za){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||
c||!b&&d){za=!0;for(var e=0;e<Aa.length;e++)Aa[e]()}}},Da=0,Ea=function(){if(!za&&140>Da){Da++;try{G.documentElement.doScroll("left"),Ca()}catch(a){F.setTimeout(Ea,50)}}},Ia=function(a){var b=G.getElementById(a);if(b&&Ha(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ha(document.all[a][c],"id")==a)return document.all[a][c];return b},Ha=function(a,b){return a&&b&&a.attributes[b]?a.attributes[b].value:null},Ja=function(a){return a.target||a.srcElement||{}},Ka=function(a,b){for(var c={},d=0;d<
b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},La=!1,Ma=[],Na=function(){if(!La){La=!0;for(var a=0;a<Ma.length;a++)Ma[a]()}},Oa=function(a){a=a||F;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)};var Pa=null;var Qa=new na,Ra={},Sa=ia,Ta=[],Ua=!1,Wa={set:function(a,b){ha(Va(a,b),Ra)},get:function(a){return R(a,2)}},Ya=function(a){var b=!1;return function(){!b&&w(a)&&O(a);b=!0}},db=function(){for(var a=!1;!Ua&&0<Ta.length;){Ua=!0;var b=Ta.shift();if(w(b))try{b.call(Wa)}catch(c){}else if(z(b))e:{var d=b;if("string"==da(d[0])){for(var e=d[0].split("."),f=e.pop(),g=d.slice(1),h=Ra,p=0;p<e.length;p++){if(void 0===h[e[p]])break e;h=h[e[p]]}try{h[f].apply(h,g)}catch(q){}}}else{var l=b,r=void 0;for(r in l)if(l.hasOwnProperty(r)){var n=
r,t=l[r];Qa.set(n,t);ha(Va(n,t),Ra)}var A=!1,D=l.event;if(D){Pa=D;var v=Ya(l.eventCallback),P=l.eventTimeout;P&&F.setTimeout(v,Number(P));A=Sa(D,v)}Pa=null;a=A||a}var M=b,s=Ra;cb();Ua=!1}return!a},R=function(a,b){if(2==b){for(var c=
Ra,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Qa.get(a)},Va=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var eb={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},fb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},gb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Za=function(){var a=R("gtm.whitelist"),b=a&&gb(ma(a),eb),c=R("gtm.blacklist")||R("tagTypeBlacklist"),d=c&&gb(ma(c),fb),e={};return function(f){var g=f&&f["1"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)e:{if(0>ka(b,g.a))if(g.b&&0<g.b.length)for(var p=0;p<g.b.length;p++){if(0>
ka(b,g.b[p])){h=!1;break e}}else{h=!1;break e}h=!0}var q=!1;if(c){var l;if(!(l=0<=ka(d,g.a)))e:{for(var r=g.b||[],n=new na,t=0;t<d.length;t++)n.set(d[t],!0);for(t=0;t<r.length;t++)if(n.get(r[t])){l=!0;break e}l=!1}q=l}return e[g.a]=!h||q}};var _et=function(a){var b=R("gtm.element"),c;if(b){var d=b.innerText||b.textContent||"";d&&" "!=d&&(d=d.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));d&&(d=d.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));c=d}else c="";var e=c;return e?e:a[""]};_et.a="et";_et.b=["google"];var hb=function(a,b,c,d,e){var f=a.hash?a.href.replace(a.hash,""):a.href,g=(a.protocol.replace(":","")||F.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||F.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:F.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":var f="/"==a.pathname.substr(0,1)?a.pathname:"/"+
a.pathname,p=f.split("/");0<=ka(d||[],p[p.length-1])&&(p[p.length-1]="");f=p.join("/");break;case "query":f=a.search.replace("?","");if(e)e:{for(var q=f.split("&"),l=0;l<q.length;l++){var r=q[l].split("=");if(decodeURIComponent(r[0]).replace("+"," ")==e){f=decodeURIComponent(r.slice(1).join("=")).replace("+"," ");break e}}f=void 0}break;case "fragment":f=a.hash.replace("#","")}return f},ib=function(a){var b=G.createElement("a");b.href=a;return b};var _eu=function(a){var b=String(R("gtm.elementUrl")||a[""]||""),c=ib(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Pa};_e.a="e";_e.b=["google"];var _v=function(a){var b=R(a["3"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(R("gtm.referrer")||G.referrer),c=ib(b);return b};_f.a="f";_f.b=["google"];var jb=function(a){var b=F.location,c=b.hash?b.href.replace(b.hash,""):b.href,d;if(d=a[""]?a[""]:R("gtm.url"))c=String(d),b=ib(c);var e,f,g;
a["0"]&&(c=hb(b,a["0"],e,f,g));return c},_u=jb;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a[""])==String(a[""])};_eq.a="eq";_eq.b=["google"];var ob=function(a,b){return a<b?-1:a>b?1:0};var pb;e:{var qb=m.navigator;if(qb){var rb=qb.userAgent;if(rb){pb=rb;break e}}pb=""}var sb=function(a){return-1!=pb.indexOf(a)};var tb=sb("Opera")||sb("OPR"),U=sb("Trident")||sb("MSIE"),ub=sb("Gecko")&&-1==pb.toLowerCase().indexOf("webkit")&&!(sb("Trident")||sb("MSIE")),vb=-1!=pb.toLowerCase().indexOf("webkit"),wb=function(){var a=m.document;return a?a.documentMode:void 0},Ab=function(){var a="",b;if(tb&&m.opera){var c=m.opera.version;return"function"==aa(c)?c():c}ub?b=/rv\:([^\);]+)(\)|;)/:U?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:vb&&(b=/WebKit\/(\S+)/);if(b)var d=b.exec(pb),a=d?d[1]:"";if(U){var e=wb();if(e>parseFloat(a))return String(e)}return a}(),
Bb={},V=function(a){var b;if(!(b=Bb[a])){for(var c=0,d=String(Ab).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",p=e[g]||"",q=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var r=q.exec(h)||["","",""],n=l.exec(p)||["","",""];if(0==r[0].length&&0==n[0].length)break;c=ob(0==r[1].length?0:parseInt(r[1],10),0==n[1].length?0:parseInt(n[1],10))||ob(0==r[2].length,0==n[2].length)||
ob(r[2],n[2])}while(0==c)}b=Bb[a]=0<=c}return b},Cb=m.document,Db=Cb&&U?wb()||("CSS1Compat"==Cb.compatMode?parseInt(Ab,10):5):void 0;if(ub||U){var Eb;if(Eb=U)Eb=U&&9<=Db;Eb||ub&&V("1.9.1")}U&&V("9");var Lb=function(a,b){var c="";U&&!Fb(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Gb)a.srcdoc=d;else if(Hb){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Ib(a,d)},Gb=vb&&"srcdoc"in document.createElement("iframe"),Hb=ub||vb||U&&V(11),Ib=function(a,b){U&&V(7)&&!V(10)&&6>Mb()&&Nb(b)&&(b=Ob(b));var c=function(){a.contentWindow.goog_content=
b;a.src="javascript:window.goog_content"};U&&!Fb(a)?Pb(a,c):c()},Mb=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Fb=function(a){try{var b;var c=a.contentWindow;try{b=!!c&&null!=c.location.href}catch(d){b=!1}return b}catch(e){return!1}},Qb=0,Pb=function(a,b){var c="goog_rendering_callback"+Qb++;window[c]=b;U&&V(6)&&!V(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+document.domain+
'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Nb=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Ob=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=
String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Xb=/(Firefox\D28\D)/g.test(va.userAgent),Zb=function(a,b,c,d){return function(e){e=e||F.event;var f=Ja(e),g=!1;if(3!==e.which||"CLICK"!=a&&"LINK_CLICK"!=a)if(2!==e.which&&(null!=e.which||4!=e.button)||"LINK_CLICK"!=a)if("LINK_CLICK"==a&&(f=Ka(f,["a"]),g=!f||!f.href||e.ctrlKey||e.shiftKey||e.altKey||!0===e.metaKey),e.defaultPrevented||!1===e.returnValue||e.P&&e.P()){if(!c&&f){var h={simulateDefault:!1};W(a,f,h,d)}}else{if(f){var h={},p=W(a,f,h,d),g=g||p||"LINK_CLICK"==a&&Xb;h.simulateDefault=!p&&
b&&!g;h.simulateDefault&&(g=Yb(f,h)||g,!g&&e.preventDefault&&e.preventDefault());e.returnValue=p||!b||g;return e.returnValue}return!0}}},W=function(a,b,c,d){var e=d||2E3,f={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||Ha(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":f.event="gtm.linkClick";f["gtm.elementUrl"]=b.href;f.eventTimeout=e;f.eventCallback=$b(b,c);break;case "FORM_SUBMIT":f.event="gtm.formSubmit";var g=b.action;g&&g.tagName&&
(g=b.cloneNode(!1).action);f["gtm.elementUrl"]=g;f.eventTimeout=e;f.eventCallback=ac(b,c);break;case "CLICK":f.event="gtm.click";f["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return F["dataLayer"].push(f)},bc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "form":b="_self"}return b},Yb=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(va.userAgent),e=bc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;
f=(e||"_self").substring(1);b.targetWindow=F.frames&&F.frames[f]||F[f];break;case "_blank":d?(b.simulateDefault=!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+(new Date).getTime(),b.targetWindow=F.open("",b.targetWindowName));break;default:d&&!F.frames[e]?(b.simulateDefault=!1,c=!0):(F.frames[e]||(b.targetWindowName=e),b.targetWindow=F.frames[e]||F.open("",e))}return c},$b=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||(new Date).getTime(),
500>(new Date).getTime()-c&&F.setTimeout($b(a,b,c),25)))}},ac=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);G.gtmSubmitFormNow=!0;cc(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||(new Date).getTime(),500>(new Date).getTime()-c&&F.setTimeout(ac(a,b,c),25)}},dc=function(a,b,c,d){var e,f;switch(a){case "CLICK":if(G.gtmHasClickListenerTag)return;G.gtmHasClickListenerTag=!0;e="click";f=function(a){var b=
Ja(a);b&&W("CLICK",b,{},d);return!0};break;case "LINK_CLICK":if(G.gtmHasLinkClickListenerTag)return;G.gtmHasLinkClickListenerTag=!0;e="click";f=Zb(a,b||!1,c||!1,d);break;case "FORM_SUBMIT":if(G.gtmHasFormSubmitListenerTag)return;G.gtmHasFormSubmitListenerTag=!0;e="submit";f=Zb(a,b||!1,c||!1,d);break;default:return}N(G,e,f,!1)},cc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;G.gtmFormElementSubmitter||
(G.gtmFormElementSubmitter=G.createElement("form"));return G.gtmFormElementSubmitter.submit.call?G.gtmFormElementSubmitter.submit:a.submit};var gc,hc;
var rc=function(a){return function(){}},sc=function(a){return function(){}};var Ac=function(a){var b=F||m,c=b.onerror,d=!1;vb&&!V("535.3")&&(d=!d);b.onerror=function(b,f,g,h,p){c&&c(b,f,g,h,p);a({message:b,fileName:f,Sa:g,kb:h,error:p});return d}};var bd=function(){this.f=[]};bd.prototype.set=function(a,b){this.f.push([a,b]);return this};bd.prototype.resolve=function(a,b){for(var c={},d=0;d<this.f.length;d++){var e=cd(this.f[d][0],a,b),f=cd(this.f[d][1],a,b);c[e]=f}return c};var dd=function(a){this.index=a};dd.prototype.resolve=function(a,b){var c=$a[this.index];if(c&&!b(c)){var d=c["2"];if(a){if(a.get(d))return;a.set(d,!0)}c=cd(c,a,b);a&&a.set(d,!1);return oa(c)}};
for(var _M=function(a){return new dd(a)},fd=function(a){this.resolve=function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(cd(ed[a[e]],b,c));return d.join("")}},_T=function(a){return new fd(arguments)},gd=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=function(c,d){if(a[0]instanceof dd&&b(8)&&b(16))return'google_tag_manager["GTM-NPNFVB"].macro('+a[0].index+")";for(var e=String(cd(a[0],c,d)),f=1;f<a.length;f++)e=Y[a[f]](e);return e}},_E=function(a,b){return new gd(arguments)},bb=function(a,b){return cd(a,new na,b)},cd=function(a,b,c){var d=a;if(a instanceof dd||a instanceof bd||a instanceof fd||
a instanceof gd)return a.resolve(b,c);if(z(a))for(var d=[],e=0;e<a.length;e++)d[e]=cd(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=cd(a[f],b,c))}return d},hd=function(a,b){var c=b[a],d=c;if(c instanceof dd||c instanceof gd||c instanceof fd)d=c;else if(z(c))for(var d=[],e=0;e<c.length;e++)d[e]=hd(c[e],b);else if("object"==typeof c){var d=new bd,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],hd(c[f],b))}return d},kd=function(a,b){for(var c=b?b.split(","):[],
d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=ed[e[1]]);if(1==a)for(var f=id(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=jd[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=id(e[g])}return c},id=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<ld;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},
ld=33,md=[_v,'history new state','gtm.newHistoryState','history old state','gtm.oldHistoryState','history change source','gtm.historyChangeSource','element url','gtm.elementUrl',_et,'element text','history old url fragment','gtm.oldUrlFragment','history new url fragment','gtm.newUrlFragment','element classes','gtm.elementClasses','element','gtm.element','element target','gtm.elementTarget','element id','gtm.elementId',_u,'url path','path','url hostname','host',_e,'event',_f,'referrer','url'],nd=[],od=0;od<md.length;od++)nd[od]=hd(od,md);var ed=nd,jd=kd(0,"1:0,2:1,3:2,2:3,3:4,2:5,3:6,2:7,3:8,1:9,2:10,2:11,3:12,2:13,3:14,2:15,3:16,2:17,3:18,2:19,3:20,2:21,3:22,1:23,2:24,0:25,2:26,0:27,1:28,2:29,1:30,2:31,2:32"),$a=kd(1,"H,Z,hB,BG,AY,BgB,BAG,BAY,BAgB,BAAG,BAAY,AAAgD,AAAgM,AAAAw,AAAAAD,AAAgAE"),pd=kd(1,""),Z=kd(1,""),qd=kd(2,"");
var cb=function(){};var Ed=function(){var a=this;this.t=!1;this.w=[];this.K=[];this.la=function(){a.t||sa(a.w);a.t=!0};this.ka=function(){a.t||sa(a.K);a.t=!0};this.L=ia},Fd=function(){this.j=[];this.Z={};this.M=[];this.o=0};Fd.prototype.addListener=function(a){this.M.push(a)};var Gd=function(a,b,c,d){if(!c.t){a.j[b]=c;void 0!==d&&(a.Z[b]=d);a.o++;var e=function(){0<a.o&&a.o--;0<a.o||sa(a.M)};c.w.push(e);c.K.push(e)}};var Hd=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=pd[b]&&bb(pd[b],c);a[b]=[d&&oa(d),d]}return a[b]}},Id=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.d(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.d(e[d],a.c)[0])return!1;return!0},Jd=function(a,b){return function(){a["4"]=b.la;a["5"]=b.ka;oa(a,b.la,b.ka)}},Sa=function(a,b){R("tagTypeBlacklist");for(var c={name:a,Ea:b||ia,p:id(),r:id(),d:Hd(),c:Za()},d=0;d<qd.length;d++)if(Id(c,
qd[d])){for(var e=c,f=qd[d],g=f[1],h=0;h<g.length;h++)e.p[g[h]]=!0;for(var p=f[3],h=0;h<p.length;h++)e.r[p[h]]=!0}var q=[];for(var l=0;l<ld;l++)if(c.p[l]&&!c.r[l])if(c.c(Z[l])){}else{q[l]=bb(Z[l],c.c);}c.A=q;for(var r=
new Fd,n=0;n<ld;n++)if(c.p[n]&&!c.r[n]&&!c.c(Z[n])){var t=c.A[n],A=new Ed;A.w.push(rc(t));A.K.push(sc(t));A.L=Jd(t,A);Gd(r,n,A,t[""])}r.addListener(c.Ea);for(var D=[],v=0;v<r.j.length;v++){var P=r.j[v];if(P){var E=r.Z[v];void 0!==E?E!=v&&r.j[E]&&r.j[E].w.push(P.L):D.push(v)}}for(v=0;v<D.length;v++)r.j[D[v]].L();0<r.o||sa(r.M);return 0<c.A.length};var Kd={macro:function(a){return $a[a]&&bb(_M(a),Za())}};Kd.dataLayer=Wa;Kd.Ta=function(){var a=F.google_tag_manager;a||(a=F.google_tag_manager={});a["GTM-NPNFVB"]||(a["GTM-NPNFVB"]=Kd)};Kd.Ta();
(function(){var a=H("dataLayer",[]),b=H("google_tag_manager",{}),b=b["dataLayer"]=b["dataLayer"]||{};Aa.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ma.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Ta.push.apply(Ta,b);300<this.length;)this.shift();return db()};Ta.push.apply(Ta,a.slice(0));O(db)})();
if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)Ca();else{N(G,"DOMContentLoaded",Ca);N(G,"readystatechange",Ca);if(G.createEventObject&&G.documentElement.doScroll){var Ld=!0;try{Ld=!F.frameElement}catch(Nd){}Ld&&Ea()}N(F,"load",Ca)}"complete"===G.readyState?Na():N(F,"load",Na);var _vs="res_ts:1396986000686000,srv_cl:65575037,ds:live,cv:1";
})()