/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxTimeline=t():e.vuxTimeline=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{color:String},methods:{setChildProps:function(){if(this.$children){var e=this.$children.length;this.$children.forEach(function(t,o){t.isLast=o===e-1,t.isFirst=0===o})}}}}},function(e,t){},function(e,t){e.exports=" <div class=vux-timeline> <ul> <slot></slot> </ul> </div> "},function(e,t,o){var n,i;o(2),n=o(1),i=o(3),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});