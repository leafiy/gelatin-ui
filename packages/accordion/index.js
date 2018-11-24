import Accordion from "./accordion.vue";

Accordion.install = function(Vue) {
  Vue.component(Accordion.name, Accordion);
};

export default Accordion;
