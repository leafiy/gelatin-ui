import Modal from "./modal.vue";
import $Modal from './modal.js'

Modal.install = function(Vue) {
  Vue.component(Modal.name, Modal);
};

export {Modal,$Modal};
