import UiAutocomplete from "./autocomplete.vue";

UiAutocomplete.install = function(Vue) {
  Vue.component(UiAutocomplete.name, UiAutocomplete);
};

export default UiAutocomplete;
