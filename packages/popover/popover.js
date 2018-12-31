import Vue from "vue";
import nanoid from "nanoid";
import popoverTemplate from "./popover.vue";
const PopoverConstructor = Vue.extend(popoverTemplate);

const Popover = function(options) {
  if (!options.trigger) {
    throw new Error("missing triggle element");
  }
  let el = options.trigger;
  if (el.dataset.popover) {
    return;
  }
  el.dataset.popover = "popover-" + nanoid();
  options = options.tooltip
    ? options
    : popoverOptions(el.dataset.popover, options);
  options.triggerId = el.dataset.popover;
  let instance = new PopoverConstructor({
    propsData: options
  });
  instance.$mount();
  if (!options.tooltip) {
    setTimeout(() => {
      instance.isShow = true;
    }, options.openDelay);
  }

  let $el = instance.$el;
  if (options.insertAfter) {
    el.parentNode.insertBefore($el, el.nextSibling);
  } else {
    document.body.appendChild($el);
  }
  return instance;
};

const popoverOptions = function(triggerId, options) {
  const defaultOptions = {
    insertAfter: false,
    closeOnClick: true,
    arrow: true,
    menu: []
  };
  options = Object.assign(defaultOptions, options);
  return options;
};

export default Popover;
