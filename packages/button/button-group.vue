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
      default: "md",

    },
    vertical: Boolean,
    gutter: Boolean
  },
  computed: {
    classes() {
      return [
        `ui-btn-group`,
        this.gutter && `ui-btn-group-gutter`,
        {
          [`ui-btn-group-size-${this.size}`]: !!this.size,
          [`ui-btn-group-vertical`]: this.vertical,
        }
      ];
    }
  }
};

</script>
