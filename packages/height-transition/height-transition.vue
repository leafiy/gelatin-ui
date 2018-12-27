<template>
  <transition
    name="height"
    @enter="enterHandler"
    @after-enter="afterEnterHandler"
    @leave="leaveHandler"
    @before-enter="$emit('before-enter')"
    @enter-cancelled="$emit('enter-cancelled')"
    @before-leave="$emit('before-leave')"
    @after-leave="$emit('after-leave')"
    @leave-cancelled="$emit('leave-cancelled')"
  >
    <slot></slot>
  </transition>
</template>
<script>
import "../assets/scss/height-transition.scss";
export default {
  name: "ui-height-transition",
  props: {
    duration: {
      type: Number,
      default: 300
    }
  },
  methods: {
    enterHandler(el) {
      const width = getComputedStyle(el).width;
      el.style.position = "absolute";
      el.style.visibility = "hidden";
      el.style.height = "auto";
      el.style.width = width;
      const height = getComputedStyle(el).height;
      el.style.position = "";
      el.style.visibility = "";
      el.style.width = "";
      el.style.height = 0;
      getComputedStyle(el).height;
      el.style.transitionDuration = this.duration + "ms";
      requestAnimationFrame(() => {
        el.style.height = height;
      });
      this.$emit("enter");
    },
    afterEnterHandler(el) {
      el.style.height = "auto";
      this.$emit("after-enter");
    },
    leaveHandler(el) {
      const height = getComputedStyle(el).height;
      el.style.height = height;
      getComputedStyle(el).height;
      el.style.transitionDuration = this.duration + "ms";
      requestAnimationFrame(() => {
        el.style.height = "0";
      });
      this.$emit("leave");
    }
  }
};
</script>
<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
