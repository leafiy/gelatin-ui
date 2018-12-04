<template>
  <div role="button" :class="classes" :disabled="disabled" :loading="loading" @click="handleClick" @mousedown="mouseDown" @mouseup="mouseUp">
    <div class="ui-btn-inner">
      <span><slot></slot></span>
      <transition name="fade">
        <ui-spinner :light="type !== 'border'" v-if="loading"></ui-spinner>
      </transition>
    </div>
  </div>
</template>
<script>
import UiSpinner from '../spinner/spinner.vue'
import '../assets/scss/button.scss'

export default {
  name: "ui-button",
  data() {
    return {
      isActive: false
    }
  },
  components: { UiSpinner },
  props: {
    type: {
      type: String,
      validator(value) {
        return [
          "primary",
          "border",
          "warning",
          "error",
          "ghost",
          "normal"
        ].includes(value);
      },
      default: 'primary'
    },
    // shape: {
    //   type: String,
    //   default: 'block',
    //   validator(value) {
    //     return ["circle", "block"].includes(value);
    //   }
    // },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ["sm", "lg", 'md'].includes(value);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    shadow: Boolean,
    full: Boolean,
    center: Boolean
  },
  computed: {
    classes() {
      return [
        `ui-btn`,
        this.disabled && 'ui-btn-disabled',
        this.shadow && 'ui-btn-shadow',
        this.type && `ui-btn-${this.type}`,
        this.full && 'ui-btn-full',
        this.center && 'ui-btn-center',
        // this.shape && `ui-btn-shape-${this.shape}`,
        this.size && `ui-btn-size-${this.size}`,
        this.loading && 'ui-btn-loading',
        this.isActive && 'ui-btn-active'
      ];
    }
  },
  methods: {
    handleClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit("click", event);
      }
    },
    mouseDown() {
      if (!this.loading && !this.disabled) {
        this.isActive = true
      }
    },
    mouseUp() {
      if (!this.loading && !this.disabled) {
        this.isActive = false
      }
    },
  }
};

</script>
