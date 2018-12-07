import Typer from "./typer.vue";

Typer.install = function(Vue) {
  Vue.component(Typer.name, Typer);
};

export default Typer;
