import popoverTemplate from "./popover.vue";
import Vue from "vue";
const PopoverConstructor = Vue.extend(popoverTemplate);

import nanoid from "nanoid";
const instances = [];
const Popover = function(options) {
  let { trigger } = options;
  if (!trigger || trigger.dataset.popover) {
    return;
  }
  let instance

  if (instances.map(instance => instance.key).includes(options.key)) {
    instance = instances.filter(instance => instance.key == options.key)[0];
    instance.show = true
  } else {

    instance = new PopoverConstructor({
      data: {
        key: options.key
      },
      propsData: options
    });
    instance.$mount();
    instance.show = true
    let el = instance.$el;
    if (options.insertAfter) {
      trigger.parentNode.insertBefore(el, trigger.nextSibling)
    } else {
      document.body.appendChild(el);
    }
    // should keep the instances and closePopover or not??
    // Leave it for the next time
    if (options.key) {
      instances.push(instance);
    } else {
      trigger.dataset.popover = true
    }

  }
  return instance

};

Popover.closePopover = function(key) {
  instances.splice(instances.findIndex(pop => pop.key == key), 1);
}

export default Popover;
