import ConfirmComponent from './confirm.vue'
import Vue from 'vue'
const ConfirmContrustor = Vue.extend(ConfirmComponent)

const $Confirm = function(options = {}) {
  options = {
    propsData: options
  }
  let confirm = new ConfirmContrustor(options)
  confirm.$mount()
  confirm.$props.value = true
  document.body.appendChild(confirm.$el)

}

export default $Confirm
