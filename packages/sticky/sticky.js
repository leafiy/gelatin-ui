import { throttle } from "lodash";
import Vue from "vue";
let listenAction;
let supportCSSSticky;

const getBindingConfig = binding => {
  const params = binding.value || {};
  let top = params.top || 0;
  let zIndex = binding.value.zIndex
    ? binding.value.zIndex
    : Vue.prototype.$zIndex.get();
  let disabled = params.disabled;
  return { top, zIndex, disabled };
};

const getInitialiConfig = el => {
  return {
    zIndex: el.style.zIndex
  };
};

const unwatch = () => {
  window.removeEventListener("scroll", listenAction);
};
const watch = () => {
  window.addEventListener("scroll", listenAction);
};

let bindingConfig = {};
let initialConfig = {};

export default {
  name: "ui-sticky",
  bind(el, binding) {
    bindingConfig = getBindingConfig(binding);
    initialConfig = getInitialiConfig(el);
    const { disabled, top, zIndex } = bindingConfig;

    if (disabled) return;

    const elStyle = el.style;
    elStyle.position = "-webkit-sticky";
    elStyle.position = "sticky";

    let childStyle = el.firstElementChild.style;
    supportCSSSticky = ~elStyle.position.indexOf("sticky");

    if (supportCSSSticky) {
      elStyle.top = `${top}px`;
      elStyle.zIndex = zIndex;
    } else {
      elStyle.position = "";
      childStyle.cssText = `left: 0; right: 0; top: ${top}px; z-index: ${zIndex}; ${
        childStyle.cssText
      }`;
    }

    let active = false;

    const sticky = () => {
      if (supportCSSSticky || active) return;
      if (!elStyle.height) {
        elStyle.height = `${el.offsetHeight}px`;
      }
      if (childStyle) {
        childStyle.position = "fixed";
      }
      active = true;
    };

    const reset = () => {
      if (supportCSSSticky || !active) return;
      childStyle.position = "static";
      active = false;
    };

    listenAction = throttle(() => {
      const offsetTop = el.getBoundingClientRect().top;
      if (offsetTop <= top) {
        return sticky();
      }
      reset();
    });

    watch();
  },

  unbind: unwatch,

  update(el, binding) {
    bindingConfig = getBindingConfig(binding);
    const { top, zIndex } = bindingConfig;

    let childStyle = el.firstElementChild.style;
    if (supportCSSSticky) {
      el.style.top = `${top}px`;
      el.style.zIndex = zIndex;
    } else {
      childStyle.top = `${top}px`;
      childStyle.zIndex = zIndex;
    }

    if (bindingConfig.disabled) {
      if (supportCSSSticky) {
        el.style.position = "";
      } else {
        childStyle.position = "";
        childStyle.top = "";
        childStyle.zIndex = initialConfig.zIndex;
        unwatch();
      }
      return;
    }

    if (supportCSSSticky) {
      el.style.position = "-webkit-sticky";
      el.style.position = "sticky";
    } else {
      watch();
    }
  }
};
