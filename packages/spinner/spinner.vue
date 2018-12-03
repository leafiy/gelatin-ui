<template>
  <transition name="fade">
    <div class="ui-spinner" :class="classes" v-if="type == 'dot' && isMounted">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/spinner.scss";
export default {
  name: "ui-spinner",

  data() {
    return {
      isMounted: false
    };
  },
  props: {
    type: {
      type: String,
      default: "dot"
    },
    center: Boolean,
    light: Boolean,
    dark: Boolean
  },
  computed: {
    classes() {
      return [`ui-spinner-${this.type}`, { "ui-spinner-center": this.center }, { "ui-spinner-light": this.light }, { "ui-spinner-dark": this.dark }];
    }
  },
  mounted() {
    this.isMounted = true
  }
};

</script>
