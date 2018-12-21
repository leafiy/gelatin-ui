import UiButton from './button.vue';
import UiButtonGroup from './button-group.vue';
UiButton.install = function(Vue) {
  Vue.component(UiButton.name, UiButton);
};
UiButtonGroup.install = function(Vue) {
  Vue.component(UiButtonGroup.name, UiButtonGroup);
};
export { UiButton, UiButtonGroup };
