import '../assets/scss/hightlight.scss'
import highlight from '../../src/utils/highlight.js'


export default {
  name: "ui-highlight",
  inserted(el, binding, vnode) {
    highlight({ text: binding.value.text, el: el, className: binding.value && binding.value.className, type: binding.value && binding.value.type })
  },
  update(el, binding, vnode) {
    highlight({ text: binding.value.text, el: el, className: binding.value && binding.value.className, type: binding.value && binding.value.type })
  }
};
