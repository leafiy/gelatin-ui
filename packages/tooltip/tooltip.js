import pop from "../../src/mixins/pop/pop.js";
console.log(pop);
export default {
  name: "ui-tooltip",
  inserted(el, binding, vnode) {
    console.log(el);
    console.log(binding.expression);
  },
  update(el, binding, vnode) {
    console.log(el);
    if (el.tooltip) {
      vnode.context.$nextTick(() => {});
    }
  },
  unbind(el) {
    console.log(el);
  }
};
