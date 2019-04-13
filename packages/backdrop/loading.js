import { makeMask as makeLoading } from "./mask.js";

const makeOptions = (el, binding) => {
  let options = {
    loading: "dot"
  };
  if (binding && !binding.value && !binding.hasOwnProperty("value")) {
    options = Object.assign({}, options, { show: true });
  }
  if (
    binding.value &&
    binding.hasOwnProperty("value") &&
    typeof binding.value == "object"
  ) {
    options = Object.assign({}, options, binding.value, { show: true });
  }
  if (binding.value && typeof binding.value == "boolean") {
    options = Object.assign({}, options, { show: true });
  }
  if (binding.value && typeof binding.value == "string") {
    options = Object.assign({}, options, {
      show: true,
      loading: binding.value
    });
  }

  makeLoading(el, options);
};
const UiLoading = {
  name: "ui-loading",
  inserted(el, binding) {
    makeOptions(el, binding);
  },
  update(el, binding) {
    makeOptions(el, binding);
  }
};

export default UiLoading;
