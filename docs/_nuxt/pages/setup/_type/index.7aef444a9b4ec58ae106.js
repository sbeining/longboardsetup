webpackJsonp([2],{"097e":function(t,e,s){"use strict";var i=s("m8MH"),a=s("b3u3"),n=!1;var r=function(t){n||s("9+BU")},o=s("VU/8")(i.a,a.a,!1,r,"data-v-1d6956ac",null);o.options.__file="components/setup/ItemAPI.vue",e.a=o.exports},"9+BU":function(t,e,s){var i=s("kb1q");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("829b335c",i,!1,{sourceMap:!1})},FCMj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("pXUU"),a=s("p9O/"),n=s("VU/8")(i.a,a.a,!1,null,null,null);n.options.__file="pages/setup/_type/index.vue",e.default=n.exports},b3u3:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alloy-items alloy-cards",attrs:{"data-type":t.item.type,"data-view":t.item.view}},[s("div",{staticClass:"inner",on:{click:t.itemEdit}},["simple"!=t.item.view?s("img",{attrs:{src:t.item.image,alt:t.item.slug}}):s("img",{attrs:{src:"http://alloy.work/codepen/QBOyJj/custom.jpg",alt:t.item.slug}}),s("div",{staticClass:"alloy-content"},[s("div",{staticClass:"alloy-meta"},[s("p",[s("strong",[t._v(t._s(t.item.type))])])]),s("h3",[t._v(t._s(t.item.slug))]),s("h1",[t._v("banaan")]),s("p",[t._v(t._s(t.item.image))]),s("a",{attrs:{href:"http://www.google.com/search?q="+t.item.slug.replace(/ /g,"+")}},[t._v("Search for this product")])])]),"simple"!=t.item.view?s("button",{on:{click:t.toggleInfo}},[t._v("info")]):t._e()])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},kb1q:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},m8MH:function(t,e,s){"use strict";e.a={props:["item"],name:"ItemAPI",data:function(){return{}},methods:{toggleInfo:function(t){t.target.parentNode.classList.toggle("showInfo")},itemEdit:function(){}}}},"p9O/":function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alloy-page alloy-page--type"},[e("div",{staticClass:"alloy-select-grid"},[e("div",{staticClass:"inner"},this._l(this.$store.state.items.decks,function(t){return e("ItemAPI",{key:t.id,attrs:{item:t}})}))]),e("h1",[this._v("raw data")]),e("pre",[this._v(this._s(this.$store.state.items.decks))])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},pXUU:function(t,e,s){"use strict";var i=s("097e");e.a={name:"type",components:{ItemAPI:i.a},middleware:"api",data:function(){return{}}}}});