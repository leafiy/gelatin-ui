import UiTextarea from "./textarea.vue";

UiTextarea.install = function(Vue) {
  Vue.component(UiTextarea.name, UiTextarea);
};

export default UiTextarea;
