<template>
  <div class="ui-dropdown">
    <div class="ui-dropdown-trigger" ref="trigger" @click="open">
      <slot name="trigger"></slot>
    </div>
    <transition name="fade" @enter="enter">
      <div class="ui-dropdown-menu" v-if="show" :style="stlyes" ref="dropdown-menu" v-click-outside="close">
        <span
        class="ui-dropdown-triangle"
        :style="triangleStyles"
        ref="triangle"
      ></span>
        <div class="ui-dropdown-content" :style="menuStyles">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import pop from "../../src/mixins/pop/pop.js";

import "../assets/scss/dropdown.scss";
export default {
  name: "ui-dropdown",
  mixins: [pop],
  data() {
    return {
      show: false,
      axis: ""
    };
  },
  props: {
    closeOnMouseleave: Boolean
  },
  mounted() {
    this.trigger = this.$refs['trigger']
  },
  watch: {
    show() {
      if (this.show) {
        this.$emit('open')
        this.bindEvents()
      } else {
        this.$emit('close')
        this.unbindEvents()
      }
    }
  },
  methods: {
    enter() {
      this.el = this.$refs["dropdown-menu"];
      this.getAxis();
      this.calculatePopoverPosition();

    },
    open() {
      this.show = true;
    },
    close() {
      this.show = false;

    },
    unbindEvents() {
      window.removeEventListener("resize", this.calculatePopoverPosition);
      window.removeEventListener("scroll", this.calculatePopoverPosition);
      window.removeEventListener('scroll', this.getAxis)
      window.removeEventListener('resize', this.getAxis)
      if (this.closeOnMouseleave) {
        this.trigger.removeEventListener("mouseout", this.close);
      }
    },
    bindEvents() {
      window.addEventListener("resize", this.calculatePopoverPosition);
      window.addEventListener("scroll", this.calculatePopoverPosition);
      window.addEventListener('scroll', this.getAxis)
      window.addEventListener('resize', this.getAxis)
      if (this.closeOnMouseleave) {
        this.trigger.addEventListener("mouseout", this.close);
      }
    },
  },

  directives: {
    ClickOutside
  }
};

</script>
<style lang="css" scoped></style>
