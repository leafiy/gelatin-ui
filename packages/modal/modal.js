import ModalComponent from './modal.vue'
import Vue from 'vue'
const ModalContrustor = Vue.extend(ModalComponent)

const $Modal = function(options = {}) {
  options = {
    data: options
  }
  let modal = new ModalContrustor(options)
  modal.$mount()
  modal.$props.value = true
  document.body.appendChild(modal.$el)

}

export default $Modal
