import UiButton from "./button.vue";
UiButton.install = function(Vue) {
  Vue.component(UiButton.name, UiButton);
};

export default UiButton;
