<template>
  <transition :appear="appear" :name="transitionName" :mode="mode" :enter-active-class="enterActiveClass" @before-enter="beforeEnter" @before-leave="beforeLeave" @enter="enter" @after-enter="afterEnter">
    <slot></slot>
  </transition>
</template>
<script>
import "../assets/scss/router-transition.scss";
export default {
  name: "ui-router-transition",
  data() {
    return {
      prevHeight: 0,
      transitionName: "fade",
      enterActiveClass: "",
      to: "",
      from: "",
      mode: "out-in",
      prevPath: ''
    };
  },
  props: {
    isBack: Boolean,
    appear: Boolean
  },
  computed: {
    back() {
      return this.isBack ? this.isBack : this.depth();
    }
  },
  watch: {
    $route(to, from, next) {
      this.to = to;
      this.from = from;
      this.prevPath = from.path

      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        this.transitionName;
      if (transitionName === `slide`) {
        transitionName = this.back ? `slide-right` : `slide-left`;
      }
      if (transitionName === `slide-vertical`) {
        transitionName = this.back ? `slide-up` : `slide-down`;
      }
      this.enterActiveClass = `router-${transitionName}-enter-active`;
      if (to.meta.transitionName === `zoom`) {
        this.mode = `in-out`;
        this.enterActiveClass = `zoom-enter-active`;
      }
      if (from.meta.transitionName === `zoom`) {
        this.mode = null;
        this.enterActiveClass = null;
      }
      this.transitionName = "router-" + transitionName;
      console.log(this.transitionName)
    }
  },
  methods: {
    depth() {
      const toDepth = this.to.path.split(`/`).length;
      const fromDepth = this.from.path.split(`/`).length;
      return toDepth < fromDepth ? true : false;
    },
    beforeLeave(el) {
      this.prevHeight = getComputedStyle(el).height;
    },
    enter(el) {
      const { height } = getComputedStyle(el);
      el.style.height = this.prevHeight;
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      document.body.style.overflow = null;
    },
    beforeEnter(el) {
      document.body.style.overflow = "hidden";
    }
  },
  mounted() {
    this.prevPath = this.$route.path
  }
};

</script>
