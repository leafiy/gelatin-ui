import UiToast from "../toast/toast.js";

const $UiMessage = function(options = {}) {
  options = typeof options === "string" ? { message: options } : options;
  options.isMessage = true;
  if (!options.title && !options.message) {
    throw new Error("must have title/message");
  }
  let instance = new UiToast(options);
  return instance;
};

const types = ["info", "error", "warning"];

types.forEach(type => {
  $UiMessage[type] = options => {
    options = typeof options === "string" ? { message: options } : options;
    return new $UiMessage({ ...options, type });
  };
});

export default $UiMessage;
