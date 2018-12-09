import Countdown from "./countdown.vue";

Countdown.install = function(Vue) {
  Vue.component(Countdown.name, Countdown);
};

export default Countdown;
