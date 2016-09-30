/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxPanel=e():t.vuxPanel=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(73)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(50),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(30),i=n(24),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(35),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,o=n(2),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(22)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(14),i=n(18),u=n(26),c=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(14),i=n(47),u=n(5),c="prototype",f=function(t,e,n){var s,a,l,p=t&f.F,d=t&f.G,v=t&f.S,y=t&f.P,h=t&f.B,m=t&f.W,_=d?o:o[e]||(o[e]={}),b=_[c],x=d?r:v?r[e]:(r[e]||{})[c];d&&(n=e);for(s in n)a=!p&&x&&void 0!==x[s],a&&s in _||(l=a?x[s]:n[s],_[s]=d&&"function"!=typeof x[s]?n[s]:h&&a?i(l,r):m&&x[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((_.virtual||(_.virtual={}))[s]=l,t&f.R&&b&&!b[s]&&u(b,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),o=n(29),i=n(36),u=n(5),c=n(2),f=n(17),s=n(52),a=n(20),l=n(59),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",y="keys",h="values",m=function(){return this};t.exports=function(t,e,n,_,b,x,g){s(n,e,_);var w,O,S,j=function(t){if(!d&&t in M)return M[t];switch(t){case y:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",P=b==h,E=!1,M=t.prototype,C=M[p]||M[v]||b&&M[b],F=C||j(b),I=b?P?j("entries"):F:void 0,A="Array"==e?M.entries||C:C;if(A&&(S=l(A.call(new t)),S!==Object.prototype&&(a(S,k,!0),r||c(S,p)||u(S,p,m))),P&&C&&C.name!==h&&(E=!0,F=function(){return C.call(this)}),r&&!g||!d&&!E&&M[p]||u(M,p,F),f[e]=F,f[k]=m,b)if(w={values:P?F:j(h),keys:x?F:j(y),entries:I},g)for(O in w)O in M||i(M,O,w[O]);else o(o.P+o.F*(d||E),e,w);return w}},function(t,e,n){var r=n(8),o=n(56),i=n(16),u=n(21)("IE_PROTO"),c=function(){},f="prototype",s=function(){var t,e=n(28)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),s=t.F;r--;)delete s[f][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[f]=r(t),n=new c,c[f]=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(35),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=n(3),i=n(46)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38);e["default"]={props:{header:String,footer:Object,list:Array,type:{type:String,"default":"1"}},methods:{getUrl:function(t){return(0,r.getUrl)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),(0,r.go)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),(0,r.go)(t.url,this.$router)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,c["default"])(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,c["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(41),c=r(u);e.go=o,e.getUrl=i},function(t,e,n){t.exports={"default":n(42),__esModule:!0}},function(t,e,n){t.exports={"default":n(43),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(40),i=r(o),u=n(39),c=r(u),f="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};e["default"]="function"==typeof c["default"]&&"symbol"===f(i["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,e,n){n(67),n(65),n(68),n(69),t.exports=n(14).Symbol},function(t,e,n){n(66),n(70),t.exports=n(26).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(3),o=n(62),i=n(61);t.exports=function(t){return function(e,n,u){var c,f=r(e),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(44);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(34),i=n(19);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(32),o=n(12),i=n(20),u={};n(5)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11),o=n(3);t.exports=function(t,e){for(var n,i=o(t),u=r(i),c=u.length,f=0;c>f;)if(i[n=u[f++]]===e)return n}},function(t,e,n){var r=n(13)("meta"),o=n(10),i=n(2),u=n(6).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";a(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&f(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(6),o=n(8),i=n(11);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){var r=n(19),o=n(12),i=n(3),u=n(24),c=n(2),f=n(30),s=Object.getOwnPropertyDescriptor;e.f=n(4)?s:function(t,e){if(t=i(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(3),o=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(2),o=n(63),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(23),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(45),o=n(53),i=n(17),u=n(3);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(4),u=n(29),c=n(36),f=n(55).KEY,s=n(9),a=n(22),l=n(20),p=n(13),d=n(7),v=n(26),y=n(25),h=n(54),m=n(48),_=n(51),b=n(8),x=n(3),g=n(24),w=n(12),O=n(32),S=n(58),j=n(57),k=n(6),P=n(11),E=j.f,M=k.f,C=S.f,F=r.Symbol,I=r.JSON,A=I&&I.stringify,T="prototype",N=d("_hidden"),U=d("toPrimitive"),L={}.propertyIsEnumerable,R=a("symbol-registry"),W=a("symbols"),$=a("op-symbols"),D=Object[T],J="function"==typeof F,G=r.QObject,K=!G||!G[T]||!G[T].findChild,z=i&&s(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(D,e);r&&delete D[e],M(t,e,n),r&&t!==D&&M(D,e,r)}:M,B=function(t){var e=W[t]=O(F[T]);return e._k=t,e},H=J&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,e,n){return t===D&&Y($,e,n),b(t),e=g(e,!0),b(n),o(W,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,N)||M(t,N,w(1,{})),t[N][e]=!0),z(t,e,n)):M(t,e,n)},Q=function(t,e){b(t);for(var n,r=m(e=x(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?O(t):Q(O(t),e)},V=function(t){var e=L.call(this,t=g(t,!0));return!(this===D&&o(W,t)&&!o($,t))&&(!(e||!o(this,t)||!o(W,t)||o(this,N)&&this[N][t])||e)},X=function(t,e){if(t=x(t),e=g(e,!0),t!==D||!o(W,e)||o($,e)){var n=E(t,e);return!n||!o(W,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=C(x(t)),r=[],i=0;n.length>i;)o(W,e=n[i++])||e==N||e==f||r.push(e);return r},tt=function(t){for(var e,n=t===D,r=C(n?$:x(t)),i=[],u=0;r.length>u;)!o(W,e=r[u++])||n&&!o(D,e)||i.push(W[e]);return i};J||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call($,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),z(this,t,w(1,n))};return i&&K&&z(D,t,{configurable:!0,set:e}),B(t)},c(F[T],"toString",function(){return this._k}),j.f=X,k.f=Y,n(33).f=S.f=Z,n(19).f=V,n(34).f=tt,i&&!n(18)&&c(D,"propertyIsEnumerable",V,!0),v.f=function(t){return B(d(t))}),u(u.G+u.W+u.F*!J,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=P(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=F(t)},keyFor:function(t){if(H(t))return h(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!J,"Object",{create:q,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),I&&u(u.S+u.F*(!J||s(function(){var t=F();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,A.apply(I,r)}}}),F[T][U]||n(5)(F[T],U,F[T].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){n(64);for(var r=n(1),o=n(5),i=n(17),u=n(7)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;f<5;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e){},function(t,e){t.exports=' <div class="weui_panel weui_panel_access"> <div class=weui_panel_hd v-if=header @click=onClickHeader v-html=header></div> <div class=weui_panel_bd> <a :href=getUrl(item.url) v-for="item in list" @click.prevent=onItemClick(item) class="weui_media_box weui_media_appmsg" v-if="type === \'1\'"> <div class=weui_media_hd v-if=item.src> <img class=weui_media_appmsg_thumb :src=item.src alt=""> </div> <div class=weui_media_bd> <h4 class=weui_media_title>{{item.title}}</h4> <p class=weui_media_desc>{{item.desc}}</p> </div> </a> <div class="weui_media_box weui_media_text" v-for="item in list" @click.prevent=onItemClick(item) v-if="type === \'2\'"> <h4 class=weui_media_title>{{item.title}}</h4> <p class=weui_media_desc>{{item.desc}}</p> </div> <div class="weui_media_box weui_media_small_appmsg"> <div class="weui_cells weui_cells_access"> <a class=weui_cell :href=getUrl(item.url) v-for="item in list" @click.prevent=onItemClick(item) v-if="type === \'3\'"> <div class=weui_cell_hd> <img :src=item.src alt="" style=width:20px;margin-right:5px;display:block> </div> <div class="weui_cell_bd weui_cell_primary"> <p>{{item.title}}</p> </div> <span class=weui_cell_ft></span> </a> </div> </div> </div> <a class=weui_panel_ft :href=getUrl(footer.url) v-if="footer && type !== \'3\'" @click.prevent=onClickFooter v-html=footer.title></a> </div> '},function(t,e,n){var r,o;n(71),r=n(37),o=n(72),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});