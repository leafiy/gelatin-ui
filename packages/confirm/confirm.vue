<template>
  <ui-modal confirm v-model="isOpen" @modal-open="ConfirmOpen" @modal-close="ConfirmClose">
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
      <ui-button shadow @click.native="clickConfirm">{{confirm}}</ui-button>
      <ui-button shadow type="border" @click.native="clickCancel">{{cancel}}</ui-button>
    </ui-button-group>
  </ui-modal>
</template>
<script>
import UiModal from '../modal/modal.vue'
import '../assets/scss/confirm.scss'
import UiButtonGroup from '../button/button-group.vue'
import UiButton from '../button/button.vue'
export default {
  name: "ui-confirm",

  data() {
    return {
      isOpen: this.value
    };
  },
  components: {
    UiModal,
    UiButton,
    UiButtonGroup
  },
  props: {
    value: Boolean,
    confirm: {
      type: String,
      default: "确认"
    },
    cancel: {
      type: String,
      default: "取消"
    },
    header: String,
    content: String,
    onConfirm: Function,
    onCancel: Function
  },
  methods: {
    ConfirmOpen() {
      this.$emit("input", true);
      this.$emit("confirm-open");
    },
    ConfirmClose() {
      this.$emit("input", false);
      this.$emit("confirm-close");
    },
    clickConfirm() {
      if (this.onConfirm && typeof this.onConfirm == "function") {
        this.onConfirm();
      }
      this.$emit("confirm");
      this.isOpen = !this.isOpen;
    },
    clickCancel() {
      if (this.onCancel && typeof this.onCancel == "function") {
        this.onCancel();
      }
      this.$emit("cancel");
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    value(val) {
      this.isOpen = this.value;
    }
  }
};
</script>
