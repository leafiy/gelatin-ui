import UiInput from "./input.vue";
import UiInputGroup from "./input-group.vue";
UiInput.install = function(Vue) {
  Vue.component(UiInput.name, UiInput);
};
UiInputGroup.install = function(Vue) {
  Vue.component(UiInputGroup.name, UiInputGroup);
};
export { UiInput, UiInputGroup };
