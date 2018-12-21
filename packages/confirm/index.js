import UiConfirm from "./confirm.vue";
import $UiConfirm from './confirm.js'

UiConfirm.install = function(Vue) {
  Vue.component(UiConfirm.name, UiConfirm);
};

export { UiConfirm, $UiConfirm };
