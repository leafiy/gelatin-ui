<template>
  <transition
    class="ui-height-transition"
    name="height"
    @after-enter="handleAfterEnter"
    @enter="handleEnter"
    @leave="handleLeave"
  >
    <slot></slot>
  </transition>
</template>
<script>
import "../assets/scss/height-transition.scss";
export default {
  name: "ui-height-transition",
  data() {
    return {};
  },
  methods: {
    handleAfterEnter(el) {
      el.style.height = `auto`;
      this.$emit("after-enter");
    },
    handleEnter(el) {
      const { width } = getComputedStyle(el);
      el.style.width = width;
      el.style.position = `absolute`;
      el.style.visibility = `hidden`;
      el.style.height = `auto`;
      const { height } = getComputedStyle(el);
      el.style.width = null;
      el.style.position = null;
      el.style.visibility = null;
      el.style.height = 0;
      setTimeout(() => {
        el.style.height = height;
      });
      this.$emit("enter");
    },
    handleLeave(el) {
      const { height } = getComputedStyle(el);
      el.style.height = height;
      setTimeout(() => {
        el.style.height = 0;
      });
      this.$emit("leave");
    }
  }
};
</script>
