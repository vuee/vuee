/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxActionsheet=t():e.vuxActionsheet=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={ready:function(){this.$tabbar=document.querySelector(".weui_tabbar")},props:{show:{type:Boolean,required:!0,twoWay:!0},showCancel:Boolean,cancelText:{type:String,"default":"cancel"},menus:{type:Object,"default":{}}},methods:{emitEvent:function(e,t){"on-click-menu"!==e||/.noop/.test(t)||(this.$emit(e,t),this.$emit(e+"-"+t),this.show=!1)},fixIos:function(e){this.$tabbar&&/iphone/i.test(navigator.userAgent)&&(this.$tabbar.style.zIndex=e)}},watch:{show:function(e){var t=this;e?this.fixIos(-1):setTimeout(function(){t.fixIos(100)},200)}},beforeDestroy:function(){this.fixIos(100)}}},function(e,t){},function(e,t){e.exports=' <div class=vux-actionsheet> <div class=weui_mask_transition :class="{\'weui_fade_toggle\': show}" :style="{display: show ? \'block\' : \'none\'}" @click="show=false"></div> <div class=weui_actionsheet :class="{\'weui_actionsheet_toggle\': show}"> <div class=weui_actionsheet_menu> <div class=weui_actionsheet_cell v-for="(key, text) in menus" @click="emitEvent(\'on-click-menu\', key)" v-html=text> </div> <div class=vux-actionsheet-gap v-if=showCancel></div> <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent(\'on-click-menu\', \'cancel\')" v-if=showCancel>{{cancelText}}</div> </div> </div> </div> '},function(e,t,o){var i,s;o(2),i=o(1),s=o(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});