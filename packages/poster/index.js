import UiPoster from "./poster.vue";

UiPoster.install = function(Vue) {
  Vue.component(UiPoster.name, UiPoster);
};

export default UiPoster;
