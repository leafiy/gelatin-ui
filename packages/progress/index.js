import UiProgress from "./progress.vue";

UiProgress.install = function(Vue) {
  Vue.component(UiProgress.name, UiProgress);
};

export default UiProgress;
