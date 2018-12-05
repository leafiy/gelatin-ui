import Confirm from "./confirm.vue";
import $Confirm from './confirm.js'

Confirm.install = function(Vue) {
  Vue.component(Confirm.name, Confirm);
};

export { Confirm, $Confirm };
