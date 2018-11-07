import Toast from "./toast.js";

Toast.install = function(Vue) {
  Vue.prototype.$Toast = Toast;
};

export default Toast;
