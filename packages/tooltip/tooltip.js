import Pop from '../popover/popover.js'
import nanoid from 'nanoid'
import '../assets/scss/tooltip.scss'

const options = {
  closeOnMouseleave: true,
  insertAfter: true,
  key: nanoid(),
  textCetner: false,
  openDelay: 0,
  closeDelay: 50
}
const Tooltip = (el, value) => {
  if (typeof value == 'object') {
    Object.keys(value).forEach(v => {
      options[v] = value[v]
    })
    options.tooltip = options.content
  }

  if (typeof value == 'string') {
    options.tooltip = value
  }
  options.trigger = el
  el.tooltip = null
  el.addEventListener('mouseover', (e) => {
    if (!el.tooltip) {
      setTimeout(() => {
        el.tooltip = new Pop(options)
      }, options.openDelay)
    } else {
      setTimeout(() => {
        el.tooltip.show = true
      }, options.openDelay)

    }
  })
  import(/* webpackChunkName: "vendor" */'../../src/utils/mousePosition.js').then(module => {
    el.addEventListener('mouseleave', (e) => {
      setTimeout(() => {
        let mousePosition = module.default
        let target = mousePosition().target
        if (!el.tooltip.$el.contains(target)) {
          setTimeout(() => {
            el.tooltip.show = false
          }, options.closeDelay)
        }
        el.tooltip.$el.addEventListener('mouseleave', () => {
          setTimeout(() => {
            el.tooltip.show = false
          }, options.closeDelay)
        })

      }, 200)
    })
  })


}





export default {
  name: "ui-tooltip",
  inserted(el, binding, vnode) {
    let value = binding.value

    new Tooltip(el, value)
  },
  update(el, binding, vnode) {
    if (!binding.value) {
      throw new Error('at least add some text')
    }
    let value = binding.value

    new Tooltip(el, value)
  },
  unbind(el) {
    delete el.tooltip
  }
};
