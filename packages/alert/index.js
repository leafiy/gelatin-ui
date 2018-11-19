import Alert from "./alert.vue";

Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
