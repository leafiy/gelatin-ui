import Vue from "vue";
import Backdrop from "./backdrop.vue";

const BackdropConstructor = Vue.extend(Backdrop);
const maskDirective = {}

maskDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;
  Vue.directive('ui-mask', Mask)
}


const defaultOptions = {
  autoRadius: true,
  show: false
}


const makeMask = (el, options = {}) => {
  options = Object.assign({}, defaultOptions, options)
  options.parentEl = [el]
  let instance = el.instance ? el.instance : new BackdropConstructor({
    propsData: options,
  })
  if (!el.instance) {
    instance.$mount()
  }
  instance.show = options.hasOwnProperty('show') ? options.show : false
  el.appendChild(instance.$el)
  el.instance = instance
  return instance
}


const UiMask = {
  name: "ui-mask",
  inserted(el, binding, vnode) {
    if (binding && !binding.value && !binding.hasOwnProperty('value')) {
      makeMask(el, { show: true })
    }
    if (binding.value && binding.hasOwnProperty('value')) {
      makeMask(el, binding.value)
    }
    if (binding.value && typeof binding.value == 'boolean') {
      makeMask(el, { show: true })
    }
  },
  update(el, binding, vnode) {
    if (binding.oldValue !== binding.value) {
      makeMask(el, binding.value)

    }
  }
}

export default UiMask
