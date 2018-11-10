export default {
  name: "ui-tooltip",
  inserted(el, binding, vnode) {
    console.log(el);
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
