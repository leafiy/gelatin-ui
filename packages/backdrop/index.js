import Backdrop from "./backdrop.vue";
import Vue from "vue";
import RenderCover from './render.js'
import events from '../../src/utils/events.js'
Backdrop.install = function(Vue) {
  Vue.component(Backdrop.name, Backdrop);
};

const $Cover = (options = {}) => {
  options = Object.assign(options, { global: true })
  let cover = new RenderCover({options})
  return cover.backdrop
}


$Cover.close = function() {
  events.$emit('close-backdrop')

}

export { Backdrop, $Cover };
