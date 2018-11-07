<template>
  <div class="ui-spinner" :class="classes" v-if="type == 'dot'">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
  </div>
</template>
<script>
import "../assets/scss/spinner.scss";
export default {
  name: "ui-spinner",

  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "dot"
    },
    center: Boolean
  },
  computed: {
    classes() {
      return [`ui-spinner-${this.type}`, { "ui-spinner-center": this.center }];
    }
  }
};
</script>
