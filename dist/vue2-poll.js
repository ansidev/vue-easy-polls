!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue2-poll",[],t):"object"==typeof exports?exports["vue2-poll"]=t():e["vue2-poll"]=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PollCreator=t.PollView=t.Poll=void 0;var r=o(1),u=n(r),l=o(5),a=n(l),s={PollView:u["default"],PollCreator:a["default"]};t["default"]=s,t.Poll=s,t.PollView=u["default"],t.PollCreator=a["default"]},function(e,t,o){var n=o(2)(o(3),o(4),null,null);e.exports=n.exports},function(e,t){e.exports=function(e,t,o,n){var r,u=e=e||{},l=typeof e["default"];"object"!==l&&"function"!==l||(r=e,u=e["default"]);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o),n){var s=Object.create(a.computed||null);Object.keys(n).forEach(function(e){var t=n[e];s[e]=function(){return t}}),a.computed=s}return{esModule:r,exports:u,options:a}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"poll-view",data:function(){return{message:"Poll made by Gabi Stanciu"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("strong",[e._v(" "+e._s(e.message))])])},staticRenderFns:[]}},function(e,t,o){var n=o(2)(o(6),o(7),null,null);e.exports=n.exports},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"poll-creator",data:function(){return{message:"PollCreator.vue made by Gabi Stanciu"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("strong",[e._v(" "+e._s(e.message))])])},staticRenderFns:[]}}])});