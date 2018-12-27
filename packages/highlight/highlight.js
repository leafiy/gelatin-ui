import "../assets/scss/hightlight.scss";
import highlight from "../../src/utils/highlight.js";

const h = function(el, binding) {
  let options = {};
  options.el = el;
  if (typeof binding.value == "string") {
    options.text = binding.value;
  } else {
    options.text = binding.value.text;
    options.className = binding.value && binding.value.className;
    options.color = binding.value && binding.value.color;
    options.tag = binding.value && binding.value.tag;
    options.loose = binding.value && binding.value.loose;
  }
  highlight(options);
};

//el约定，只接受在span中的文字
export default {
  name: "ui-highlight",
  inserted(el, binding, vnode) {
    if (binding.value) {
      h(el, binding);
    }
  },
  update(el, binding, vnode) {
    if (binding.value) {
      h(el, binding);
    }
  }
};
