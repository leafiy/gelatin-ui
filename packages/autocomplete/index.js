import UiAutocomplete from "./autocomplete.vue";

UiAutocomplete.install = function(Vue) {
  Vue.component(UiAutocomplete.name, UiAutocomplete);
  if (!Vue.prototype.$zIndex) {
    import("../../src/utils/zHandler.js").then(res => {
      Vue.prototype.$zIndex = new res.default();
    });
  }
};

export default UiAutocomplete;
