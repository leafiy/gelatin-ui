import Vue from "vue";
import Backdrop from "../backdrop/backdrop.vue";
const BackdropConstructor = Vue.extend(Backdrop);
import RenderBackdrop from "../backdrop/render.js";

const render = function({ el, options }) {
  el.mask = new RenderBackdrop({ el, options });
};

const makeOptions = function(val) {
  if (typeof val == "string") {
    return { text: val };
  }
  if (typeof val == "object") {
    return val;
  }
  if (typeof val == "boolean") {
    return val ? {} : null;
  }
};

export default {
  name: "ui-mask",
  inserted(el, binding, vnode) {
    if (binding.value) {
      render({ el, options: makeOptions(binding.value) });
    }
  },
  update(el, binding, vnode) {
    if (!binding.value && el.mask) {
      el.mask.backdrop.close();
      delete el.mask;
    }
    if (binding.value) {
      render({ el, options: makeOptions(binding.value) });
    }
  },
  unbind(el) {}
};
