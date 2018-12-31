import Popover from "./popover.js";
import mousePosition from "../../src/utils/mousePosition.js";
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

    setTimeout(() => {
      let target = mousePosition().target;
      if (
        options.interactive &&
        instance.$refs.menu &&
        instance.$refs.menu.contains(target)
      ) {
      } else {
        setTimeout(() => {
          instance.isShow = false;
          delete el.instance;
        }, options.closeDelay);
      }
    }, 300);
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
