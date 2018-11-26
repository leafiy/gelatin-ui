import Autocomplete from "./autocomplete.vue";

Autocomplete.install = function(Vue) {
  Vue.component(Autocomplete.name, Autocomplete);
};

export default Autocomplete;
