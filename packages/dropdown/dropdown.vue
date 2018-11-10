<template>
  <div class="ui-dropdown">
    <div class="ui-dropdown-trigger" ref="trigger" @click="open">
      <slot name="trigger"></slot>
    </div>
    <div
      class="ui-dropdown-menu"
      v-if="show"
      :style="stlyes"
      ref="dropdown-menu"
      v-click-outside="close"
    >
      <span
        class="ui-dropdown-triangle"
        :style="triangleStyles"
        ref="triangle"
      ></span>
      <div class="ui-dropdown-content" :style="menuStyles">
        <slot name="dropdown-content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { throttle } from "throttle-debounce";
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
  methods: {
    open() {
      this.trigger = this.$refs["trigger"];
      this.show = true;
      this.$nextTick(() => {
        this.el = this.$refs["dropdown-menu"];
        this.getAxis();
        this.calculatePopoverPosition();
      });
    },
    close() {
      this.show = false;
    }
  }
};
</script>
<style lang="css" scoped></style>
