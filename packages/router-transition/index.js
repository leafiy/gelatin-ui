import UiRouterTransition from "./router-transition.vue";

UiRouterTransition.install = function(Vue) {
  Vue.component(UiRouterTransition.name, UiRouterTransition);
};

export default UiRouterTransition;
