import Loader from "./loader.vue";

Loader.install = function(Vue) {
  Vue.component(Loader.name, Loader);
};

export default Loader;
