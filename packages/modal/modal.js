import ModalComponent from "./modal.vue";
import Vue from "vue";
const ModalContrustor = Vue.extend(ModalComponent);

const $Modal = function(options = {}) {
  options = {
    data: options
  };
  let modal = new ModalContrustor(options);
  modal.$mount();
  modal.$props.value = true;
  modal.$on("modal-close", () => {
    modal.$props.value = false;
  });
  document.body.appendChild(modal.$el);
};

export default $Modal;
