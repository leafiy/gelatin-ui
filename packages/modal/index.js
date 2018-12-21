import UiModal from "./modal.vue";
import $UiModal from './modal.js'

UiModal.install = function(Vue) {
  Vue.component(UiModal.name, UiModal);
};

export { UiModal, $UiModal };
