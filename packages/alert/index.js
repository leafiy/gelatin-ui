import UiAlert from "./alert.vue";

UiAlert.install = function(Vue) {
  Vue.component(UiAlert.name, UiAlert);
};

export default UiAlert;
