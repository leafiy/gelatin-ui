<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ui-button-group",
  props: {
    size: {
      type: String,
      validator(value) {
        return ["sm", "lg", 'md'].includes(value);
      },
      default: "md"
    },
    vertical: Boolean,
    shadow: Boolean
  },
  computed: {
    classes() {
      return [
        `ui-btn-group`,
        {
          [`ui-btn-group-size-${this.size}`]: !!this.size,
          [`ui-btn-group-vertical`]: this.vertical,
          [`ui-btn-group-shadow`]: this.shadow
        }
      ];
    }
  }
};

</script>
