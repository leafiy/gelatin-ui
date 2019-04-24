import UiLazyLoad from "./lazyLoad.vue";
UiLazyLoad.install = function(Vue) {
  Vue.component(UiLazyLoad.name, UiLazyLoad);
};

export default UiLazyLoad;
