(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{328:function(s,i,t){},378:function(s,i,t){"use strict";var n=t(328);t.n(n).a},421:function(s,i,t){"use strict";t.r(i);var n={name:"directive",data:function(){return{t:!0,options1:{show:!0},options2:{show:!1},text:'<div class="box" v-ui-mask></div>',text2:'<div class="box" v-ui-mask="{show:true}"></div>',text3:'<div class="box" v-ui-mask="{show:false}"></div>',text4:"",options3:{},options4:{content:"文字遮罩",show:!0}}},methods:{show:function(){this.options3={show:!0}},close:function(){this.options3.show=!1}}},e=(t(378),t(0)),o=Object(e.a)(n,function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"container"},[t("ui-hr",[s._v("默认指令")]),s._v(" "),t("div",{directives:[{name:"ui-mask",rawName:"v-ui-mask"}],staticClass:"box"},[s._v("\n    "+s._s(s.text)+"\n  ")]),s._v(" "),t("ui-hr",[s._v("参数指令")]),s._v(" "),t("div",{directives:[{name:"ui-mask",rawName:"v-ui-mask",value:s.options1,expression:"options1"}],staticClass:"box"},[s._v("\n    "+s._s(s.text2)+"\n  ")]),s._v(" "),t("div",{directives:[{name:"ui-mask",rawName:"v-ui-mask",value:s.options2,expression:"options2"}],staticClass:"box"},[s._v("\n    "+s._s(s.text3)+"\n  ")]),s._v(" "),t("div",{directives:[{name:"ui-mask",rawName:"v-ui-mask",value:s.options4,expression:"options4"}],staticClass:"box"},[s._v("\n     {\n      content: '文字遮罩',\n      show: true\n    }\n  ")]),s._v(" "),t("div",{directives:[{name:"ui-mask",rawName:"v-ui-mask",value:s.t,expression:"t"}],staticClass:"box"},[s._v('\n    v-ui-mask="true"\n  ')]),s._v(" "),t("ui-hr",[s._v("动态指令")]),s._v(" "),t("ui-button-group",{attrs:{size:"sm"}},[t("ui-button",{nativeOn:{click:function(i){return s.show(i)}}},[s._v("覆盖元素")]),s._v(" "),t("ui-button",{nativeOn:{click:function(i){return s.close(i)}}},[s._v("关闭遮罩")])],1),s._v(" "),t("div",{directives:[{name:"ui-mask",rawName:"v-ui-mask",value:s.options3,expression:"options3"}],staticClass:"box"})],1)},[],!1,null,"6d36e02e",null);i.default=o.exports}}]);