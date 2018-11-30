import Backdrop from "./backdrop.vue";
import Vue from "vue";
import RenderCover from './render.js'
import events from '../../src/utils/events.js'
Backdrop.install = function(Vue) {
  Vue.component(Backdrop.name, Backdrop);
};

const Cover = () => {
  let cover = new RenderCover({ options: { global: true } })
  return cover.backdrop
}


Cover.close = function() {
  events.$emit('close-backdrop')

}

export { Backdrop, Cover };
