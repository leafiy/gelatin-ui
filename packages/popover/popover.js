import popoverTemplate from "./popover.vue";
import Vue from "vue";
const PopoverConstructor = Vue.extend(popoverTemplate);

import nanoid from "nanoid";

const instances = [];
const Popover = function(options) {
  let { trigger } = options;
  if (!trigger) {
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
      propsData: options
    });
    instance.$mount();
    instance.show = true;
    let el = instance.$el;
    document.body.appendChild(el);
    instances.push(trigger.dataset.popoverId);
  }
};

export default Popover;
