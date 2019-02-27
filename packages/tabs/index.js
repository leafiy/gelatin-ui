import UiTab from "./tabs.vue";

UiTab.install = function(Vue) {
  Vue.component(UiTab.name, UiTab);
};

export default UiTab;
