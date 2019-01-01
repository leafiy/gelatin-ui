import ToastTemplate from "./toast.vue";
import Vue from "vue";
import nanoid from "nanoid";
const ToastConstructor = Vue.extend(ToastTemplate);
const instances = [];
let toastContainer = {};

const $UiToast = function(options) {
  options = typeof options === "string" ? { message: options } : options;
  if (!options.message) {
    throw new Error("message is required");
  }
  let { position = { x: "right", y: "top" } } = options;
  if (typeof position !== "object" || !position.x || !position.y) {
    throw new Error(`position should a Object with x,y axis`);
  }
  let p = `${position.y}-${position.x}`;
  if (!toastContainer[p]) {
    toastContainer[p] = document.createElement("div");
    toastContainer[p].className = `ui-toast-wrapper ui-toast-wrapper-x-${
      position.x
    } ui-toast-wrapper-y-${position.y}`;
    document.body.appendChild(toastContainer[p]);
    toastContainer[p].style.zIndex = options.zIndex
      ? options.zIndex
      : Vue.prototype.$zIndex
      ? Vue.prototype.$zIndex.add()
      : 1000;
  }
  const id = nanoid();

  options.position = position;
  options.closeToast = function() {
    $UiToast.closeToast(id);
  };
  const instance = new ToastConstructor({
    el: document.createElement("div"),
    data: options
  });

  instance.$mount();
  instance.show = true;
  instance.$id = id;
  toastContainer[p].appendChild(instance.$el);
  instances.push(instance);
  return instance;
};

$UiToast.closeToast = function(id) {
  instances.splice(instances.findIndex(toast => toast.$id == id), 1);
};

$UiToast.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].stop();
  }
};

const types = ["info", "error", "warning"];

types.forEach(type => {
  $UiToast[type] = options => {
    options = typeof options === "string" ? { message: options } : options;
    return new $UiToast({ ...options, type });
  };
});

export default $UiToast;
export { $UiToast };
