import popoverTemplate from "./popover.vue";
import Vue from "vue";
const PopoverConstructor = Vue.extend(popoverTemplate);

const Popover = function(options) {
  let { trigger } = options;
  if (!trigger) {
    return;
  }
  let instance = new PopoverConstructor({
    propsData: options
  });
  instance.$mount();
  let el = instance.$el;
  if (options.insertAfter) {
    trigger.parentNode.insertBefore(el, trigger.nextSibling)
  } else {
    document.body.appendChild(el);
  }
  return instance

};

export default Popover;
