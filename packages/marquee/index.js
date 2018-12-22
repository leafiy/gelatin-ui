import UiMarquee from "./marquee.vue";

UiMarquee.install = function(Vue) {
  Vue.component(UiMarquee.name, UiMarquee);
};

export default UiMarquee;
