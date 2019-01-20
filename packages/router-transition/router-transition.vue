<template>
  <transition
    :name="transitionName"
    :mode="mode"
    :enter-active-class="enterActiveClass"
    @before-leave="beforeLeave"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "ui-router-transition",

  data() {
    return {
      prevHeight: 0,
      transitionName: "fade",
      enterActiveClass: ``,
      to: "",
      from: "",
      mode: "out-in"
    };
  },
  props: {
    isBack: Boolean
  },
  computed: {
    back() {
      return this.isBack ? true : this.depth();
    }
  },
  watch: {
    $route(to, from, next) {
      this.to = to;
      this.from = from;
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        this.transitionName;
    }
  },
  methods: {
    depth() {
      const toDepth = this.to.path.split(`/`).length;
      const fromDepth = this.from.path.split(`/`).length;
      return toDepth < fromDepth ? true : false;
    },
    beforeLeave() {},
    enter() {},
    afterEnter() {}
  }
};
</script>
<style lang="css" scoped></style>
