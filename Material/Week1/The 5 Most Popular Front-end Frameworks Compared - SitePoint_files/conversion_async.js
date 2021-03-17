(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this),da="function"===typeof Symbol&&"symbol"===typeof Symbol("x"),p={},w={};function x(a,b){var c=w[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]} 
function A(a,b,c){if(b)a:{var d=a.split(".");a=1===d.length;var e=d[0],f;!a&&e in p?f=p:f=ca;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=da&&"es6"===c?f[d]:null;b=b(c);null!=b&&(a?l(p,d,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===w[d]&&(w[d]=da?ca.Symbol(d):"$jscp$"+d),l(f,w[d],{configurable:!0,writable:!0,value:b})))}} 
A("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}},"es6"); 
A("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.g=e;l(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b},"es6"); 
A("Symbol.iterator",function(a){if(a)return a;a=(0,p.Symbol)("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&l(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a},"es6");function ea(a){a={next:a};a[x(p.Symbol,"iterator")]=function(){return this};return a} 
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[x(p.Symbol,"iterator")]=function(){return e};return e}A("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}},"es8");A("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}},"es8"); 
A("Array.prototype.keys",function(a){return a?a:function(){return fa(this,function(b){return b})}},"es6");var D=this||self,ha=/^[\w+/_-]+[=]{0,2}$/,ia=null;function ja(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ha.test(a)?a:""}function ka(a){a.m=void 0;a.i=function(){return a.m?a.m:a.m=new a}}function la(a){return a};function E(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};function pa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var qa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};var G;a:{var ra=D.navigator;if(ra){var sa=ra.userAgent;if(sa){G=sa;break a}}G=""};var H;function I(a,b){this.g=b===ta?a:""}I.prototype.toString=function(){return this.g+""};var ta={};function ua(a){if(void 0===H){var b=null;var c=D.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:la,createScript:la,createScriptURL:la})}catch(d){D.console&&D.console.error(d.message)}H=b}else H=b}a=(b=H)?b.createScriptURL(a):a;return new I(a,ta)};function va(a,b){a.src=b instanceof I&&b.constructor===I?b.g:"type_error:TrustedResourceUrl";(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=D?b=ja(b.document):(null===ia&&(ia=ja(D.document)),b=ia);b&&a.setAttribute("nonce",b)};function wa(a){wa[" "](a);return a}wa[" "]=function(){};function xa(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};var ya=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function za(a){var b=a.match(ya);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function Aa(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var Ba=/#|$/; 
function Ca(a,b){var c=a.search(Ba),d=Aa(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var Da=/[?&]($|#)/; 
function J(a,b,c){for(var d=a.search(Ba),e=0,f,g=[];0<=(f=Aa(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(Da,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function Ea(){if(!D.crypto)return Math.random();try{var a=new Uint32Array(1);D.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function Fa(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Ha=pa(function(){return qa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Ga)||1E-4>Math.random()}),Ia=pa(function(){return-1!=G.indexOf("MSIE")});function Ga(a){return-1!=G.indexOf(a)} 
function K(a){return/^true$/.test(a)};var Ja=E("0.20"),Ka=E("0.002"),La=E("0.00"),Ma=E("0.00"),Na=K("true"),Oa=K("true"),Pa=K("true"),Qa=K("true"),Ra=K("false");var Sa=null;function Ta(){if(null===Sa){Sa="";try{var a="";try{a=D.top.location.hash}catch(c){a=D.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);Sa=b?b[1]:""}}catch(c){}}return Sa} 
function Ua(a,b,c){var d=L;if(c?d.g.hasOwnProperty(c)&&""==d.g[c]:1){var e;e=(e=Ta())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!Ia()&&!Ha()&&(e=Math.random(),e<b)){e=Ea();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.g.hasOwnProperty(c)&&(d.g[c]=a):d.l[a]=!0)}}function Va(a){var b=L;return b.g.hasOwnProperty(a)?b.g[a]:""}function Wa(){var a=L,b=[];Fa(a.l,function(c,d){b.push(d)});Fa(a.g,function(c){""!=c&&b.push(c)});return b};var Xa={F:2,L:13,K:14,H:16,G:17},L=null;function Ya(){return!!L&&"592230571"==Va(16)};var Za={};function M(a){Za.TAGGING=Za.TAGGING||[];Za.TAGGING[a]=!0};function $a(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&M(4):M(5);return b}function ab(a,b){if(a&&$a(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]}function bb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};var N=window,O=document;Object.freeze({async:1,nonce:1,onerror:1,onload:1,src:1,type:1});function cb(){var a={};this.g=function(b){return null!=a[1933]?a[1933]:b};this.l=function(b){a[1933]=b}}ka(cb);function db(){var a=void 0===a?!1:a;return cb.i().g(a)};var P=[];function Q(){var a={};var b=N.google_tag_data;N.google_tag_data=void 0===b?a:b;a=N.google_tag_data;a.ics||(a.ics={entries:{},set:eb,update:fb,addListener:gb,notifyListeners:hb,active:!1,usedDefault:!1});return a.ics} 
function eb(a,b,c,d,e,f){var g=Q();g.active=!0;g.usedDefault=!0;if(void 0!=b){var k=g.entries;g=k[a]||{};var h=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||c===e||(c===d?h!==e:!c&&!h)){e=!!(f&&0<f&&void 0===g.update);var m={region:c,initial:"granted"===b,update:g.update,quiet:e};if(""!==d||!1!==g.initial)k[a]=m;e&&N.setTimeout(function(){k[a]===m&&m.quiet&&(m.quiet=!1,ib(a),hb(),M(2))},f)}}} 
function fb(a,b){var c=Q();c.active=!0;if(void 0!=b){var d=R(a);c=c.entries;c=c[a]=c[a]||{};c.update="granted"===b;b=R(a);c.quiet?(c.quiet=!1,ib(a)):b!==d&&ib(a)}}function gb(a,b){P.push({u:a,A:b})}function ib(a){for(var b=0;b<P.length;++b){var c=P[b];$a(c.u)&&-1!==c.u.indexOf(a)&&(c.v=!0)}}function hb(a){for(var b=0;b<P.length;++b){var c=P[b];if(c.v){c.v=!1;try{c.A({M:a})}catch(d){}}}}function R(a){a=Q().entries[a]||{};return void 0!==a.update?a.update:void 0!==a.initial?a.initial:void 0} 
function jb(a){return!(Q().entries[a]||{}).quiet}function kb(a,b){Q().addListener(a,b)}function lb(a){function b(){for(var e=0;e<c.length;e++)if(!jb(c[e]))return!0;return!1}var c=["ad_storage"];if(b()){var d=!1;kb(c,function(e){d||b()||(d=!0,a(e))})}else a({})}function mb(a){if(!1===R("ad_storage")){var b=!1;kb(["ad_storage"],function(c){!b&&R("ad_storage")&&(a(c),b=!0)})}};var nb=/:[0-9]+$/;function ob(a,b){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(decodeURIComponent(d[0]).replace(/\+/g," ")===b)return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g," ")}} 
function pb(a,b){var c="query";if("protocol"===c||"port"===c)a.protocol=qb(a.protocol)||qb(N.location.protocol);"port"===c?a.port=String(Number(a.hostname?a.port:N.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===c&&(a.hostname=(a.hostname||N.location.hostname).replace(nb,"").toLowerCase());var d=qb(a.protocol);c&&(c=String(c).toLowerCase());switch(c){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,b));a=b;break;case "protocol":a= 
d;break;case "host":a=a.hostname.replace(nb,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==d?80:"https"==d?443:""));break;case "path":a.pathname||a.hostname||M(1);a="/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname;a=a.split("/");a:if(b=a[a.length-1],c=[],Array.prototype.indexOf)b=c.indexOf(b),b="number"==typeof b?b:-1;else{for(d=0;d<c.length;d++)if(c[d]===b){b=d;break a}b=-1}0<=b&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");b&&(a=ob(a,b)); 
break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a}function qb(a){return a?a.replace(":","").toLowerCase():""};function rb(a,b,c,d){if(sb(d)){d=[];b=String(b||document.cookie).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].replace(/^\s*|\s*$/g,"");g&&g==a&&((f=f.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&c&&(f=decodeURIComponent(f)),d.push(f))}a=d}else a=[];return a}function tb(a,b,c,d){var e=document.cookie;document.cookie=a;a=document.cookie;return e!=a||void 0!=c&&0<=rb(b,a,!1,d).indexOf(c)} 
function ub(a,b,c){function d(t,q,y){if(null==y)return delete g[q],t;g[q]=y;return t+"; "+q+"="+y}function e(t,q){if(null==q)return delete g[q],t;g[q]=!0;return t+"; "+q}if(sb(c.o)){if(void 0==b)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=vb(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var k=c.expires.toUTCString();else null!=c.expires&&(k=c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.O);f=d(f,"samesite",c.P);c.R&& 
(f=e(f,"secure"));k=c.domain;if("auto"===k){k=wb();for(var h=0;h<k.length;++h){var m="none"!==k[h]?k[h]:void 0,n=d(f,"domain",m);n=e(n,c.flags);if(!xb(m,c.path)&&tb(n,a,b,c.o))break}}else k&&"none"!==k&&(f=d(f,"domain",k)),f=e(f,c.flags),xb(k,c.path)||tb(f,a,b,c.o)}}function vb(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}var yb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,zb=/(^|\.)doubleclick\.net$/i;function xb(a,b){return zb.test(document.location.hostname)||"/"===b&&yb.test(a)} 
function wb(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=document.location.hostname;zb.test(b)||yb.test(b)||a.push("none");return a}function sb(a){if(!(db()&&a&&db()&&Q().active))return!0;if(!jb(a))return!1;a=R(a);return null==a?!0:!!a};function Ab(a,b){var c,d=a.N;null==d&&(d=7776E3);0!==d&&(c=new Date((b||(new Date).getTime())+1E3*d));return{path:a.path,domain:a.domain,flags:a.flags,encode:!0,expires:c}};var Bb={};var Db=/^\w+$/,Eb=/^[\w-]+$/,Fb=/^~?[\w-]+$/,Gb={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};function Hb(){if(!db()||!db()||!Q().active)return!0;var a=R("ad_storage");return null==a?!0:!!a}function Ib(a,b){jb("ad_storage")?Hb()?a():mb(a):b?M(3):lb(function(){Ib(a,!0)})}function Jb(a){return Kb(a).map(function(b){return b.h})} 
function Kb(a){var b=[];if(!O.cookie)return b;a=rb(a,O.cookie,void 0,"ad_storage");if(!a||0==a.length)return b;for(var c={},d=0;d<a.length;c={j:c.j},d++){c.j=Lb(a[d]);var e=Mb(a[d]);if(c.j&&e){var f=ab(b,function(g){return function(k){return k.h===g.j}}(c));f&&f.timestamp<e?f.timestamp=e:f||b.push({h:c.j,timestamp:e})}}b.sort(function(g,k){return k.timestamp-g.timestamp});return Nb(b)}function Ob(a){return a&&"string"==typeof a&&a.match(Db)?a:"_gcl"} 
function Pb(){var a=N.location.href,b=O.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||M(1),c="/"+c);a=b.hostname.replace(nb,"");var d={href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port};b=pb(d,"gclid");c=pb(d,"gclsrc");a=pb(d,"gbraid");var e=pb(d,"dclid");b&&c&&a||(d=d.hash.replace("#",""),b=b||ob(d,"gclid"),c=c||ob(d,"gclsrc"),a=a||ob(d,"gbraid"));return Qb(b,c,e,a)} 
function Qb(a,b,c,d){function e(g,k){f[k]||(f[k]=[]);f[k].push(g)}var f={};f.gclid=a;f.gclsrc=b;f.dclid=c;void 0!==d&&Eb.test(d)&&(f.gbraid=d,e(d,"gb"));if(void 0!==a&&a.match(Eb))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return f}function Rb(){var a={},b=Pb();Ib(function(){Sb(b,a)})} 
function Sb(a,b,c,d){function e(n){n=["GCL",m,n];0<d.length&&n.push(d.join("."));return n.join(".")}function f(n,t){n=Gb[n];n=void 0!==n?g+n:void 0;n&&(null==k.path&&(k.path="/"),k.domain||(k.domain="auto"),ub(n,t,k),h=!0)}b=b||{};d=d||[];var g=Ob(b.prefix);c=c||(new Date).getTime();var k=Ab(b,c);k.o="ad_storage";var h=!1,m=Math.round(c/1E3);a.aw&&(!0===b.S?f("aw",e("~"+a.aw[0])):f("aw",e(a.aw[0])));a.dc&&f("dc",e(a.dc[0]));a.gf&&f("gf",e(a.gf[0]));a.ha&&f("ha",e(a.ha[0]));a.gp&&f("gp",e(a.gp[0])); 
(void 0==Bb.enable_gbraid_cookie_write?0:Bb.enable_gbraid_cookie_write)&&!h&&a.gb&&f("gb",e(a.gb[0]))}function Mb(a){return Tb(a)?1E3*(Number(a.split(".")[1])||0):0}function Lb(a){if(Tb(a))return a.split(".")[2]}function Tb(a){a=a.split(".");return 3>a.length||"GCL"!==a[0]||!/^\d+$/.test(a[1])||!Fb.test(a[2])?!1:!0}function Nb(a){return a.filter(function(b){return Fb.test(b.h)})} 
function Ub(){for(var a=["aw"],b={},c=Ob(b.prefix),d={},e=0;e<a.length;e++)Gb[a[e]]&&(d[a[e]]=Gb[a[e]]);Ib(function(){bb(d,function(f,g){g=rb(c+g,O.cookie,void 0,"ad_storage");if(g.length){g=g[0];var k=Mb(g),h=Tb(g)?g.split(".").slice(3):[],m={};m[f]=[Lb(g)];Sb(m,b,k,h)}})})};var Vb=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,Wb=/^~?[\w-]+(?:\.~?[\w-]+)*$/,Xb=/^\d+\.fls\.doubleclick\.net$/,Yb=/;gac=([^;?]+)/,Zb=/;gclaw=([^;?]+)/,$b=/;gclgb=([^;?]+)/;function ac(a,b,c,d){if(Xb.test(a.location.host)){if((a=a.location.href.match(d))&&2==a.length&&a[1].match(Wb))return[{h:a[1]}]}else return Kb((b||"_gcl")+c);return[]}function bc(a,b){return ac(a,b,"_aw",Zb).map(function(c){return c.h}).join(".")} 
function cc(a,b){return ac(a,b,"_gb",$b).map(function(c){return c.h}).join(".")}function dc(a){a=Kb(a);for(var b=0,c=0;c<a.length;c++)b=Math.max(b,a[c].timestamp);return b}function ec(a){0!==Jb("_gcl_aw").length||a&&0!==Jb(a+"_aw").length||(Rb(),Ub())};function fc(a){var b=D.performance;return b&&b.timing&&b.timing[a]||0};var gc={I:0,B:1,J:2,D:3,C:4};function T(){this.g={}}function hc(a,b,c){"number"===typeof c&&0<c&&(a.g[b]=Math.round(c))}function ic(a){var b=T.i();var c=void 0===c?D:c;c=c.performance;hc(b,a,c&&c.now?c.now():null)}function jc(){function a(){return hc(b,0,fc("loadEventStart")-fc("navigationStart"))}var b=T.i();0!=fc("loadEventStart")?a():window.addEventListener("load",a)}function kc(a,b){b.google_tag_manager&&b.google_tag_manager._li&&(b=b.google_tag_manager._li,hc(a,4,b.cbt),hc(a,3,b.cst))} 
function lc(){var a=T.i();return x(Object,"values").call(Object,gc).map(function(b){return[b,a.g[b]||0]})}ka(T);function mc(a,b,c){a=nc(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function nc(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var oc={},pc=null; 
function qc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;void 0===a&&(a=0);if(!pc)for(pc={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));oc[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===pc[k]&&(pc[k]=g)}}a=oc[a];c=[];for(d=0;d<b.length;d+=3){var h=b[d],m=(e=d+1<b.length)?b[d+1]:0;k=(f=d+2<b.length)?b[d+2]:0;g=h>>2;h=(h&3)<<4|m>> 
4;m=(m&15)<<2|k>>6;k&=63;f||(k=64,e||(m=64));c.push(a[g],a[h],a[m]||"",a[k]||"")}return c.join("")};function rc(a,b,c,d){var e=Ca(c,"fmt");if(d){var f=Ca(c,"random"),g=Ca(c,"label")||"";if(!f)return!1;f=qc(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")));if(!mc(a,f,d))return!1}e&&4!=e&&(c=J(c,"rfmt",e));e=J(c,"fmt",4);c=xa("SCRIPT");e=ua(e);va(c,e);c.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(c);return!0};var sc=K("false");function tc(){if("function"==typeof N.__uspapi){var a="";try{N.__uspapi("getUSPData",1,function(b,c){c&&b&&(b=b.uspString)&&/^[\da-zA-Z-]{1,20}$/.test(b)&&(a=b)})}catch(b){}return a}};var uc={id:!0,origin:!0,destination:!0,start_date:!0,end_date:!0,location_id:!0},vc="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "); 
function wc(a,b){var c=a;return function(){--c;0>=c&&b()}}function U(a){return null!=a?encodeURIComponent(String(a)):""}function xc(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""}function V(a,b){b=U(b);return""!=b&&(a=U(a),""!=a)?"&".concat(a,"=",b):""}function yc(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function zc(a){if(!a||"object"!=typeof a||"function"==typeof a.join)return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&"function"==typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=yc(d[f]);null!=g&&e.push(g)}d=0==e.length?null:e.join(",")}else d=yc(d);(e=yc(c))&&null!=d&&b.push(e+"="+d)}return b.join(";")}function W(a){return"number"!=typeof a&&"string"!=typeof a?"":U(a.toString())} 
function Ac(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="",d="";b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix)&&"_gcl"!=b.google_gcl_cookie_prefix&&(d=b.google_gcl_cookie_prefix);b=d;if(Ra)if(Xb.test(a.location.host))b=!(Zb.test(a.location.href)||Yb.test(a.location.href));else{var e=dc((b||"_gcl")+"_aw");b=dc((b||"_gcl")+"_gb")> 
e}else b=!1;if(b){if(d)return c=cc(a,d),V("gclgb",c);var f=cc(a);f&&(c=V("gclgb",f));return c}if(d)return c=bc(a,d),V("gclaw",c);(d=bc(a))&&(c=V("gclaw",d));if(Xb.test(a.location.host))f=(f=a.location.href.match(Yb))&&2==f.length&&f[1].match(Vb)?decodeURIComponent(f[1]):"";else{if(Hb()){a=[];d=O.cookie.split(";");b=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/;for(e=0;e<d.length;e++){var g=d[e].match(b);g&&a.push({s:g[1],value:g[2]})}d={};if(a&&a.length)for(b=0;b<a.length;b++)e=a[b].value.split("."),"1"== 
e[0]&&3==e.length&&e[1]&&(d[a[b].s]||(d[a[b].s]=[]),d[a[b].s].push({timestamp:e[1],h:e[2]}));a=d}else a={};d=[];for(f in a){b=[];e=a[f];for(g=0;g<e.length;g++)b.push(e[g].h);d.push(f+":"+b.join(","))}f=0<d.length?d.join(";"):""}return c+(f?V("gac",f):"")}function Bc(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(void 0==a||""==a)return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function Cc(a,b,c,d,e,f){f=void 0===f?null:f;var g="https://",k="landing"===d.google_conversion_type?"/extclk":"/";switch(e){default:return"";case 2:case 3:var h="googleads.g.doubleclick.net/";var m="pagead/viewthroughconversion/";break;case 1:h="www.google.com/";m="pagead/1p-conversion/";break;case 0:h=d.google_conversion_domain||"www.googleadservices.com/";m="pagead/conversion/";break;case 4:h="www.google.com/",m="pagead/privacysandbox/conversion/"}Na&&d.google_transport_url&&(h=d.google_transport_url); 
"/"!==h[h.length-1]&&(h+="/");if(0===h.indexOf("http://")||0===h.indexOf("https://"))g="";g=[g,h,m,U(d.google_conversion_id),k,"?random=",U(d.google_conversion_time)].join("");var n=f;n=void 0===n?null:n;f=V("cv",d.google_conversion_js_version);h=V("fst",d.google_conversion_first_time);m=V("num",d.google_conversion_snippets);k=V("fmt",d.google_conversion_format);var t=d.google_remarketing_only?V("userId",d.google_user_id):"";var q=d.google_tag_for_child_directed_treatment;q=null==q||0!=q&&1!=q?"": 
V("tfcd",q);var y=d.google_tag_for_under_age_of_consent;y=null==y||0!=y&&1!=y?"":V("tfua",y);var ma=d.google_allow_ad_personalization_signals;ma=!1===ma?V("npa",1):!0===ma?V("npa",0):"";var na=d.google_restricted_data_processing;na=Pa?!0===na?V("rdp",1):!1===na?V("rdp",0):"":"";var Jc=V("value",d.google_conversion_value),Kc=V("currency_code",d.google_conversion_currency),Lc=V("label",d.google_conversion_label),Mc=V("oid",d.google_conversion_order_id),Nc=V("bg",d.google_conversion_color);a:{var u= 
d.google_conversion_language;if(null!=u){u=u.toString();if(2==u.length){u=V("hl",u);break a}if(5==u.length){u=V("hl",u.substring(0,2))+V("gl",u.substring(3,5));break a}}u=""}var Oc=V("guid","ON"),Pc=!d.google_conversion_domain&&"GooglemKTybQhCsO"in D&&"function"==typeof D.GooglemKTybQhCsO?V("resp","GooglemKTybQhCsO"):"",Qc=V("disvt",d.google_disable_viewthrough),Rc=V("eid",Wa().join());var S=d.google_conversion_date;var r=[];if(a){var C=a.screen;C&&(r.push(V("u_h",C.height)),r.push(V("u_w",C.width)), 
r.push(V("u_ah",C.availHeight)),r.push(V("u_aw",C.availWidth)),r.push(V("u_cd",C.colorDepth)));a.history&&r.push(V("u_his",a.history.length))}S&&"function"==typeof S.getTimezoneOffset&&r.push(V("u_tz",-S.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&r.push(V("u_java",b.javaEnabled())),b.plugins&&r.push(V("u_nplug",b.plugins.length)),b.mimeTypes&&r.push(V("u_nmime",b.mimeTypes.length)));S=r.join("");r=V("gtm",d.google_gtm);b=b&&b.sendBeacon?V("sendb","1"):"";C=Dc();var Tc=V("ig",/googleadservices\.com/.test("www.google.com")? 
1:0),B=n;B=void 0===B?null:B;n=zc(d.google_custom_params);B=zc(B);n=n.concat(0<n.length&&0<B.length?";":"",B);n=""==n?"":"&".concat("data=",encodeURIComponent(n));B=Ac(c,d);var Cb=d.google_conversion_page_url,Uc=d.google_conversion_referrer_url,oa="";if(c){if(a.top==a)var v=0;else{var F=a.location.ancestorOrigins;if(F)v=F[F.length-1]==a.location.origin?1:2;else{F=a.top;try{var z;if(z=!!F&&null!=F.location.href)c:{try{wa(F.foo);z=!0;break c}catch(Vc){}z=!1}v=z}catch(Vc){v=!1}v=v?1:2}}z=Cb?Cb:1==v? 
a.top.location.href:a.location.href;oa+=V("frm",v);oa+=V("url",xc(z));oa+=V("ref",xc(Uc||c.referrer))}a=[f,h,m,k,t,q,y,ma,na,Jc,Kc,Lc,Mc,Nc,u,Oc,Pc,Qc,Rc,S,r,b,C,Tc,n,B,oa,Bc(c),Ec(d.google_additional_params),Ec(d.google_remarketing_only?{}:d.google_additional_conversion_params),"&hn="+U("www.google.com"),Fc(a)].join("");c=Ta();a+=0<c.length?"&debug_experiment_id="+c:"";if(d.google_remarketing_only||d.google_conversion_domain)d=a;else{c=[V("mid",d.google_conversion_merchant_id),V("fcntr",d.google_basket_feed_country), 
V("flng",d.google_basket_feed_language),V("dscnt",d.google_basket_discount),V("bttype",d.google_basket_transaction_type)].join("");if(d)if(d=d.google_conversion_items){v=[];z=0;for(f=d.length;z<f;z++)h=d[z],m=[],h&&(m.push(W(h.value)),m.push(W(h.quantity)),m.push(W(h.item_id)),m.push(W(h.start_date)),m.push(W(h.end_date)),v.push("("+m.join("*")+")"));d=0<v.length?"&item="+v.join(""):""}else d="";else d="";d=[a,c,d].join("");d=4E3<d.length?[a,V("item","elngth")].join(""):d}g+=d;1===e?g+=[V("gcp",1), 
V("sscte",1),V("ct_cookie_present",1)].join(""):3==e&&(g+=V("gcp",1),g+=V("ct_cookie_present",1));Oa&&(e=tc(),void 0!==e&&(g+=V("us_privacy",e||"error")));return g}function Gc(a){if(!sc){var b=xa("IFRAME");b.style.display="none";b.src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";a.body.appendChild(b)}}function Hc(){return new Image} 
function Ic(a,b,c,d,e,f){var g=c.onload_callback,k;e&&g&&g.call?k=g:k=function(){};d+=V("async","1");e=c.google_gtm_url_processor;"function"==typeof e&&(d=e(d));g=(e=c.opt_image_generator)&&e.call;if(!(f=g||!f)){if(c.google_conversion_domain)var h=!1;else try{h=rc(a,b,d,k)}catch(m){h=!1}f=!h}f&&(a=Hc,g&&(a=e),a=a(),a.src=d,a.onload=k)} 
function Sc(a,b){L&&"376635471"==Va(2)&&("complete"===b.readyState?Gc(b):a.addEventListener?a.addEventListener("load",function(){Gc(b)}):a.attachEvent("onload",function(){Gc(b)}))} 
function Wc(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);return!0}function Xc(a,b){function c(f){d[f]=b&&null!=b[f]?b[f]:a[f]}for(var d={},e=0;e<vc.length;e++)c(vc[e]);c("onload_callback");return d} 
function Yc(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=void 0;d.hasOwnProperty("google_business_vertical")?(e=d.google_business_vertical,b[e]=b[e]||{google_business_vertical:e}):(e="",Object.prototype.hasOwnProperty.call(b,e)||(b[e]={}));e=b[e];for(var f=x(Object,"keys").call(Object,d).filter(function(h){return uc.hasOwnProperty(h)}),g=0;g<f.length;g++){var k=f[g];k in e||(e[k]=[]);e[k].push(d[k])}}return x(Object,"values").call(Object,b)} 
function Dc(){var a="";Ya()&&(a=lc().map(function(b){return b.join("-")}).join("_"));return V("li",a)}function Fc(a){if(!Qa||!a.__gsaExp||!a.__gsaExp.id)return"";a=a.__gsaExp.id;if("function"!=typeof a)return"";try{var b=Number(a());return isNaN(b)?"":V("gsaexp",b)}catch(c){return""}}function Ec(a){if(!a)return"";var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=V(c,a[c]));return b};var Zc=!1;function $c(a,b){a.onload_callback&&"function"==typeof a.onload_callback.call?a.onload_callback=wc(b,a.onload_callback):a.onload_callback=function(){}} 
function ad(a,b,c,d){if(!d)return!1;Ya()&&(ic(2),d.google_gtm&&kc(T.i(),a));var e=!1;if(3!=d.google_conversion_format)return!1;try{if(Wc(d)){d.google_remarketing_only&&d.google_enable_display_cookie_match&&!sc&&L&&Ua(["376635470","376635471"],Ja,2);d.google_remarketing_only&&!d.google_conversion_domain&&L&&Ua(["759238990","759238991"],Ma,13);!d.google_remarketing_only||d.google_conversion_domain||L&&("759248991"==Va(14)||"759248990"==Va(14))||L&&Ua(["759248990","759248991"],La,14);!1===d.google_conversion_linker|| 
d.google_gtm||ec(d.google_gcl_cookie_prefix);if(1==d.google_remarketing_only&&null!=d.google_gtag_event_data&&null!=d.google_gtag_event_data.items&&d.google_gtag_event_data.items.constructor===Array&&0<d.google_gtag_event_data.items.length)bd(a,b,c,d);else{var f=!1;x("www.google.com","endsWith").call("www.google.com","google.com")&&(f=!0);var g=d.google_additional_params;g&&g.dg&&(f="e"===g.dg);g=function(){var h=d.google_gtm_experiments;if(h&&h.capi&&!d.google_transport_url){if(h=!Zc){h=c;var m= 
x("www.google.com","endsWith").call("www.google.com","google.com")?"":"A7iusd6XVbb7SOF83vXQdziVdvBy4R7Bh2tuVErLbKXxemIjQH20g7jWaz48nG08Cd6zfylzuF+H+1s9S3JodAEAAACOeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d";h=void 0===h?window.document:h;if(m&&h.head){var n=document.createElement("meta");n.httpEquiv="origin-trial";n.content=m;h.head.appendChild(n);h=n}else h=null;h=!h}h?h=!1:(Zc=!0,h=(h=c.featurePolicy)&&"function"===typeof h.features?0<=h.features().indexOf("conversion-measurement"):!1)}else h=!1;h&&(h=d.google_additional_conversion_params||{},h.capi="1",d.google_additional_conversion_params= 
h,Ic(a,c,d,Cc(a,b,c,d,4),!1,!1))};var k=function(h){Ic(a,c,d,Cc(a,b,c,d,h),!0,!0)};d.google_remarketing_only?k(2):f?($c(d,2),g(),k(1),k(3)):(g(),k(0))}d.google_remarketing_only&&d.google_enable_display_cookie_match&&Sc(a,c);e=!0}}catch(h){}return e}function bd(a,b,c,d){var e=Yc(d.google_gtag_event_data.items);$c(d,e.length);for(var f=0;f<e.length;f++)Ic(a,c,d,Cc(a,b,c,d,2,e[f]),!0,!0),d.google_conversion_time=d.google_conversion_time+1};L=new function(){var a=[],b=0,c;for(c in Xa)a[b++]=Xa[c];this.l={};this.g={};a=a||[];b=0;for(c=a.length;b<c;++b)this.g[a[b]]=""};Ua(["592230570","592230571"],Ka,16);Ya()&&(ic(1),jc()); 
function cd(a,b,c){function d(m,n){var t=new Image;t.onload=m;t.src=n}function e(){--f;if(0>=f){var m=nc(a,!1),n=m[b];n&&(delete m[b],(m=n[0])&&m.call&&m())}}var f=c.length+1;if(2==c.length){var g=c[0],k=c[1];0<=Aa(g,0,"rmt_tld",g.search(Ba))&&0<=Aa(g,0,"ipr",g.search(Ba))&&!k.match(ya)[6]&&(k+=za(g),c[1]=J(k,"rmt_tld","1"))}for(g=0;g<c.length;g++){k=c[g];var h=Ca(k,"fmt");switch(parseInt(h,10)){case 1:case 2:(h=a.document.getElementById("goog_conv_iframe"))&&!h.src?(h.onload=e,h.src=k):d(e,k);break; 
case 4:rc(a,a.document,k,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){e();break}else k=J(k,"sendb",2);k=J(k,"fmt",3);default:d(e,k)}}e()}var X=["GooglemKTybQhCsO"],Y=D;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===cd?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=cd; 
window.google_trackConversion=function(a){var b=window,c=navigator,d=document;a=Xc(b,a);a.google_conversion_format=3;var e=!!a.google_gtm;cb.i().l(e);return ad(b,c,d,a)};}).call(this);