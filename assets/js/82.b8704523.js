(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{490:function(t,e,i){"use strict";i.r(e);var a={name:"v-submit",data:function(){return{rules:{email:[{trigger:"submit",type:"email",message:"不是email"},{trigger:"blur",type:"required",message:"必须填写"}]}}},methods:{validate:function(){var t=this;this.$refs.form.validate().then(function(e){t.$UiToast("没错！")}).catch(function(e){t.$UiToast.error("有错")})}}},r=i(0),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("ui-v",{ref:"form",attrs:{rules:t.rules}},[i("ui-input",{attrs:{name:"email"}})],1),t._v(" "),i("ui-button",{attrs:{size:"sm"},nativeOn:{click:function(e){return t.validate(e)}}},[t._v("点我验证")])],1)},[],!1,null,"060e2ef1",null);e.default=n.exports}}]);