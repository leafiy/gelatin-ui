import V from "./v.vue";

V.install = function(Vue) {
  Vue.component(V.name, V);
};

export default V;
