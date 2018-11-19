<template>
  <div :class="[classes,alignDirection]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ui-button-group",
  props: {
    size: {
      validator(value) {
        return ["small", "large"].includes(value);
      }
    },
    vertical: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "left"
    },
    gutter: Boolean
  },
  computed: {
    classes() {
      return [
        `ui-btn-group`,
        {
          [`ui-btn-group-${this.size}`]: !!this.size,
          [`ui-btn-group-vertical`]: this.vertical,
          [`ui-btn-group-gutter`]: this.gutter
        }
      ];
    },
    alignDirection() {
      return `ui-btn-group-${this.align}`;
    }
  }
};

</script>
