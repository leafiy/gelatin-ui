import Vue from "vue";
import Backdrop from "./backdrop.vue";
const BackdropConstructor = Vue.extend(Backdrop);
const maskDirective = {}

maskDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;
  Vue.directive('ui-mask', Mask)
}




const UiMask = {
  name: "ui-mask",
  bind(el, binding, vnode) {
    console.log('bind')
  },
  inserted(el, binding, vnode) {
    console.log('instered')
    if (binding.value) {

    }
  },
  update(el, binding, vnode) {
    console.log('update')
    if (!binding.value && el.mask) {

    }
    if (binding.value) {

    }
  },
  unbind(el) {
    console.log('unbind')
  }
}

export default UiMask
