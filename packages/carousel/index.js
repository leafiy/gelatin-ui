import UiCarousel from "./carousel.vue";

UiCarousel.install = function(Vue) {
  Vue.component(UiCarousel.name, UiCarousel);
};

export default UiCarousel;
