import UiAutocomplete from "./autocomplete.vue";

UiAutocomplete.install = function(Vue, options = {}) {
  Vue.component(UiAutocomplete.name, UiAutocomplete);
};

export default UiAutocomplete;
