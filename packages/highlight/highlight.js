import '../assets/scss/hightlight.scss'
import highlight from '../../src/utils/highlight.js'

//el约定，只接受在span中的文字
export default {
  name: "ui-highlight",
  inserted(el, binding, vnode) {
    highlight({ text: binding.value.text, el: el, className: binding.value && binding.value.className, type: binding.value && binding.value.type })
  },
  update(el, binding, vnode) {
    highlight({ text: binding.value.text, el: el, className: binding.value && binding.value.className, type: binding.value && binding.value.type })
  }
};
