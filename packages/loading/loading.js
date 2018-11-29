import Vue from 'vue'
import Backdrop from '../backdrop/backdrop.vue'
const BackdropConstructor = Vue.extend(Backdrop);
const renderBackdrop = function(options = {}) {
  options.showSpinner = true
  let cover = new BackdropConstructor({
    el: document.createElement('div'),
    propsData: options
  })
  cover.$mount()
  return cover.$el
}

export default {
  name: "ui-loading",
  inserted(el, binding, vnode) {
    el.style.position = el.style.position == 'absolute' ? 'absolute' : 'relative'
    let style = window.getComputedStyle(el)
    let options = binding.value || {}
    if (style.borderRadius) {
      options.radius = style.borderRadius
    }
    let cover = renderBackdrop(options)
    el.appendChild(cover)
  },
  update(el, binding, vnode) {


  },
  unbind(el) {}
};
