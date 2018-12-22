<template>
  <transition name="fade">
    <div v-if="!closed" :class="wrapClasses">
      <span class="ui-alert-icon" v-if="showIcon">
        <slot name="icon"></slot>
      </span>
      <div class="ui-alert-title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="ui-alert-message" v-if="$slots.default"><slot></slot></div>
      <ui-icon
        class="ui-alert-close-icon"
        name="icon-close-circle-fill"
        v-if="closeable"
        @click.native="close"
      ></ui-icon>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/alert.scss";

export default {
  name: "ui-alert",
  props: {
    type: {
      validator(value) {
        return ["success", "warning", "error", "normal"].includes(value);
      },
      default: "success"
    },
    closeable: Boolean,
    showIcon: Boolean,
    fill: Boolean
  },
  data() {
    return {
      closed: false
    };
  },
  computed: {
    wrapClasses() {
      return [
        `ui-alert`,
        `ui-alert-${this.type}`,
        this.showIcon && `ui-alert-with-icon`,
        this.$slots.title && `ui-alert-with-title`,
        this.fill && `ui-alert-fill`
      ];
    }
  },
  methods: {
    close(e) {
      this.closed = true;
      this.$emit("close", e);
    }
  }
};
</script>
