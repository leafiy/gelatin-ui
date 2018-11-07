import popoverTemplate from "./popover.vue";
import Vue from "vue";
const PopoverConstructor = Vue.extend(popoverTemplate);
import isElement from "iselement";
import nanoid from "nanoid";

const instances = [];
const Popover = function(options) {
  // Object.assign(defaultOptions, options);
  let { zIndex, trigger, slot } = options;
  if (!trigger || !isElement(trigger)) {
    return;
  }

  if (!trigger.dataset.popoverId) {
    trigger.dataset.popoverId = nanoid();
  }

  if (instances.includes(trigger.dataset.popoverId)) {
    return;
  } else {
    const instance = new PopoverConstructor({
      el: document.createElement("div"),
      data: options
    });
    instance.$mount();
    instance.show = true;
    let el = instance.$el;
    document.body.appendChild(el);
    instances.push(trigger.dataset.popoverId);
  }
};

export default Popover;
