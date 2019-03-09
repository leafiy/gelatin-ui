import Vue from "vue";
import Popper from "../popover/popover.vue";
const PopperConstructor = Vue.extend(Popper);

const defaultOptions = {
  trigger: "hover",
  placement: "top"
};

const Tooltip = (el, binding, vnode) => {
  if (el.tooltip) {
    el.tooltip.destroyPopper();
  }
  if (!binding.value) {
    return;
  }
  let options = {};
  if (typeof binding.value == "string") {
    options.content = binding.value;
  }
  if (typeof binding.value === "object" && binding.value !== null) {
    if (!binding.value.content) {
      return;
    }
    options = binding.value;
  }
  options.reference = el;
  options = { ...defaultOptions, ...options };
  let tooltip = new PopperConstructor({
    propsData: options
  });
  tooltip.$mount();
  el.tooltip = tooltip;
};

export default {
  name: "ui-tooltip",
  bind(el, binding, vnode) {
    Tooltip(el, binding);
  },

  update(el, binding, vnode) {
    Tooltip(el, binding);
  },

  unbind(el, binding, vnode) {
    if (el.tooltip) {
      el.tooltip.doDestroy();
    }
  }
};
