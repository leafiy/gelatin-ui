import UiCountdown from "./countdown.vue";

UiCountdown.install = function(Vue) {
  Vue.component(UiCountdown.name, UiCountdown);
};

export default UiCountdown;
