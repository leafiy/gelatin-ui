import UiBackdrop from "./backdrop.vue";
import RenderCover from "./render.js";
import events from "../../src/utils/events.js";
UiBackdrop.install = function(Vue) {
  Vue.component(UiBackdrop.name, UiBackdrop);
};

const $UiCover = function(options = {}) {
  options.global = true;
  let cover = new RenderCover({ options });
  return cover.backdrop;
};

$UiCover.close = function() {
  events.$emit("close-backdrop");
};

export { UiBackdrop, $UiCover };
