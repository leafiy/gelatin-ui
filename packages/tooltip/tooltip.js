import Pop from '../popover/pop.js'
import nanoid from 'nanoid'
import '../assets/scss/tooltip.scss'

const defaultOptions = {
  closeOnMouseleave: true,
  insertAfter: true,
  textCetner: true,
  openDelay: 0,
  closeDelay: 50,
  content: '',
  showCloseIcon: false
}

const Tooltip = function(options) {
  let el = options.trigger
  let instance = new Pop(options)

  setTimeout(() => {
    instance.show = true
  }, options.openDelay)
  // make tooltip el selectable
  import( /* webpackChunkName: "vendor" */ '../../src/utils/mousePosition.js').then(module => {
    el.addEventListener('mouseleave', (e) => {
      setTimeout(() => {
        let mousePosition = module.default
        let target = mousePosition().target
        if (!instance.$el.contains(target)) {
          setTimeout(() => {
            if (options.closeOnMouseleave) {
              instance.show = false
            }

          }, options.closeDelay)
        }
        instance.$el.addEventListener('mouseleave', () => {
          setTimeout(() => {
            if (options.closeOnMouseleave) {
              instance.show = false
            }

          }, options.closeDelay)
        })

      }, 200)
    })
  })
  return instance
}


const renderOptions = function(el, options) {
  if (typeof options == 'object') {
    options.tooltip = options.content
    delete options.content
  }
  if (typeof options == 'string') {
    options = {
      tooltip: options
    }
  }
  Object.keys(defaultOptions).forEach(key => {
    if (!options.hasOwnProperty(key)) {
      options[key] = defaultOptions[key]
    }
  })
  options.trigger = el
  return options
}

const makeInstance = function(binding, options) {
  if (!binding.instance) {
    binding.instance = new Tooltip(options)
    binding.instance.$on('close', () => {
      delete binding.instance
    })
  } else {
    binding.instance.show = true
  }
}

export default {
  name: "ui-tooltip",
  inserted(el, binding, vnode) {
    if (!binding.value) {
      throw new Error('at least add some content')
    }
    let options = renderOptions(el, binding.value)
    el.addEventListener('mouseover', (e) => {
      makeInstance(binding, options)
    })
  },
  update(el, binding, vnode) {
    let options = renderOptions(el, binding.value)
    el.addEventListener('mouseover', (e) => {
      makeInstance(binding, options)
    })
  }
};
