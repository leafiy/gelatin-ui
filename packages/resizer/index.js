import UiResizer from "./resizer.vue";

UiResizer.install = function(Vue) {
  Vue.component(UiResizer.name, UiResizer);
};

export default UiResizer;
