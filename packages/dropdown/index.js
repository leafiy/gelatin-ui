import Vue from "vue";
import popover from "../popover/popover.vue";
const PopoverConstructor = Vue.extend(popover);
import nanoid from "nanoid";
const defaultOptions = {
  closeOnClick: true
};
const $UiDropdown = (options = {}) => {
  let reference = options.reference;
  if (!reference) {
    throw new Error("cannot find reference element");
  }
  let referenceElm =
    typeof reference == "string"
      ? document.querySelector(reference)
      : reference;
  if (referenceElm.popper) {
    return;
  }
  options = { ...options, ...defaultOptions };
  options = {
    propsData: options
  };
  let popper = new PopoverConstructor(options);
  popper.$mount();
  popper.showPopper = true;
  referenceElm.popper = popper;
};

export default $UiDropdown;
