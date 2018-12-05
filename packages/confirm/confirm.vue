<template>
  <ui-modal confirm v-model="isOpen" @modal-open="ModalOpen" @modal-close="ModalClose">
    <div class="ui-confirm-header" v-if="header || $slots.header">
      <div v-if="header" v-html="header"></div>
      <slot name="header">
      </slot>
    </div>
    <div class="ui-confirm-content" v-if="content || $slots.default">
      <div v-if="content" v-html="content"></div>
      <slot>
      </slot>
    </div>
    <ui-button-group size="sm" gutter class="ui-confirm-buttons">
      <ui-button shadow @click.native="onConfirm">{{confirm}}</ui-button>
      <ui-button shadow type="border" @click.native="onCancel">{{cancel}}</ui-button>
    </ui-button-group>
  </ui-modal>
</template>
<script>
import Modal from '../modal/modal.vue'
import '../assets/scss/confirm.scss'
import UiButtonGroup from '../button/button-group.vue'
import UiButton from '../button/button.vue'
export default {

  name: 'ui-confirm',

  data() {
    return {
      isOpen: this.value,
    }
  },
  components: {
    UiButton,
    UiButtonGroup
  },
  props: {
    value: Boolean,
    confirm: {
      type: String,
      default: '确认'
    },
    cancel: {
      type: String,
      default: '取消'
    },
    header: String,
    content: String,
    onConfirm: Function,
    onCancel: Function


  },
  methods: {
    ModalOpen() {
      this.$emit('input', true)
      this.$emit('confirm-open')
    },
    ModalClose() {
      this.$emit('input', false)
      this.$emit('confirm-close')
    },
  },
  watch: {
    value(val) {
      this.isOpen = this.value
    }
  }
}

</script>
