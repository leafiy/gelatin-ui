import Vue from 'vue'
import Backdrop from '../backdrop/backdrop.vue'
const BackdropConstructor = Vue.extend(Backdrop);
import RenderBackdrop from '../backdrop/render.js'

const render = function({ el, options }) {
  el.loading = new RenderBackdrop({ el, options })
}

export default {
  name: "ui-mask",
  inserted(el, binding, vnode) {
    if (typeof binding.value == 'object' || binding.value) {
      let options = typeof binding.value == 'object' ? binding.value : {}
      render({ el, options })
    }

  },
  update(el, binding, vnode) {
    if (!binding.value && el.loading) {
      el.loading.backdrop.close()
      delete el.loading
    }
    if (binding.value && !el.loading) {
      let options = typeof binding.value == 'object' ? binding.value : {}
      render({ el, options })
    }
  },
  unbind(el) {}
};
