import UiCaptcha from "./captcha.vue";
UiCaptcha.install = function(Vue) {
  Vue.component(UiCaptcha.name, UiCaptcha);
};

export default UiCaptcha;
