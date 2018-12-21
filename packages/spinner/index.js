import UiSpinner from "./spinner.vue";

UiSpinner.install = function(Vue) {
  Vue.component(UiSpinner.name, UiSpinner);
};

export default UiSpinner;
