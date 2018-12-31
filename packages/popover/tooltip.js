import Popover from "./popover.js";

const tooltipOptins = function(el, options) {
  if (typeof options == "string") {
    options = { content: options };
  }
  const defaultOptions = {
    insertAfter: false,
    closeDelay: 50,
    interactive: true,
    tooltip: true
  };
  options.trigger = el;
  options = Object.assign(defaultOptions, options);
  return options;
};

const tooltip = function(el, binding) {
  let options = tooltipOptins(el, binding.value);
  let instance;
  if (el.instance) {
    instance = el.instance;
  } else {
    instance = new Popover(options);
  }
  el.addEventListener("mouseover", e => {
    setTimeout(() => {
      instance.isShow = true;
    }, options.openDelay);
  });
  el.addEventListener("mouseleave", e => {
    let target = e.target;
    if (!el.contains(target)) {
      return;
    }
    if (options.interactive) {
      import(/* webpackChunkName: "vendor" */ "../../src/utils/mousePosition.js").then(
        module => {
          setTimeout(() => {
            let mousePosition = module.default;
            let target = mousePosition().target;
            if (!instance.$el.contains(target)) {
              setTimeout(() => {
                instance.isShow = false;
              }, options.closeDelay);
            }
            target.addEventListener("mouseleave", () => {
              setTimeout(() => {
                instance.isShow = false;
              }, options.closeDelay);
            });
          }, 200);
        }
      );
    } else {
      setTimeout(() => {
        instance.isShow = false;
        delete el.instance;
      }, options.closeDelay);
    }
  });
  return instance;
};

export default {
  name: "ui-tooltip",
  inserted(el, binding, vnode) {
    if (!binding.value) {
      return;
    }
    tooltip(el, binding);
  },
  update(el, binding, vnode) {
    if (!binding.value) {
      return;
    }
    tooltip(el, binding);
  }
};
