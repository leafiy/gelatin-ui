import Popover from "./popover.js";

const tooltip = function(el, binding) {
  let options =
    typeof binding.value == "string"
      ? { content: binding.value }
      : binding.value;
  options.tooltip = true;
  options.trigger = el;
  let instance;
  if (el.instance) {
    instance = el.instance;
  } else {
    instance = new Popover(options);
  }
  el.addEventListener("mouseover", () => {
    setTimeout(() => {
      instance.isShow = true;
    }, options.openDelay);
  });
  el.addEventListener("mouseleave", e => {
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
      throw new Error("at least add some content");
    }
    tooltip(el, binding);
  },
  update(el, binding, vnode) {
    if (!binding.value) {
      throw new Error("at least add some content");
    }
    tooltip(el, binding);
  }
};
