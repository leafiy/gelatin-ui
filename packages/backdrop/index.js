import Backdrop from "./backdrop.vue";
import Vue from "vue";

Backdrop.install = function(Vue) {
  Vue.component(Backdrop.name, Backdrop);
};


const BackdropConstructor = Vue.extend(Backdrop);
const Cover = function(options = {}) {
  options.global = true
  let cover = new BackdropConstructor({
    el: document.createElement('div'),
    propsData: options
  })
  cover.$mount()
  document.body.appendChild(cover.$el)
  return cover
}



export { Backdrop, Cover };
