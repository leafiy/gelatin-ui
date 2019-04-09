import Vue from "vue";
import Backdrop from "./backdrop.vue";
const BackdropConstructor = Vue.extend(Backdrop);
const maskDirective = {}

maskDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;
  Vue.directive('ui-mask', Mask)
}

const makeMask = (el, options = { autoRadius: true }) => {
  options.parentEl = [el]
  let instance = el.instance ? el.instance : new BackdropConstructor({
    propsData: options
  })
  instance.show = true
  instance.$mount()
  el.appendChild(instance.$el)
  el.instance = instance
}


const UiMask = {
  name: "ui-mask",
  inserted(el, binding, vnode) {
    if (binding && !binding.value) {
      makeMask(el)
    }
    if (binding.value) {
      makeMask(el, binding.value)
    }
  },
  update(el, binding, vnode) {
    if (!binding.value && el.mask) {

    }
    if (binding.value) {

    }
  },
  unbind(el) {
    console.log('unbind', binding.value)
  }
}

export default UiMask
