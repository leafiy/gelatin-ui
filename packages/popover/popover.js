import Pop from "./pop.js";
import nanoid from "nanoid";
let instances = [];
const defaultOptions = {
  closeOnMouseleave: false,
  insertAfter: false,
  openDelay: 0,
  closeOnClick: true,
  closeDelay: 0,
  content: "",
  textCetner: true,
  arrow: true,
  menu: []
};

const Popover = function(options) {
  if (!options.trigger) {
    throw new Error("missing triggle element");
  }
  let el = options.trigger;
  if (el.dataset.popover) {
    return;
  }
  el.dataset.popover = "popover-" + nanoid();
  options = renderOptions(el, options);
  let instance = new Pop(options);
  setTimeout(() => {
    instance.show = true;
  }, options.openDelay);

  instance.$on("close", () => {
    el.removeAttribute("data-popover");
  });

  return instance;
};

const renderOptions = function(el, options) {
  options.triggerId = el.dataset.popover;
  if (typeof options == "string") {
    options = {
      tooltip: options
    };
  }
  Object.keys(defaultOptions).forEach(key => {
    if (!options.hasOwnProperty(key)) {
      options[key] = defaultOptions[key];
    }
  });
  return options;
};

export default Popover;
