<template>
  <div class="ui-progress-type-bar" :style="barStyles">
    <div
      class="ui-progress-bar"
      role="progressbar"
      :style="styles"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
      ref="bar"
    >
      <span class="ui-progress-bar-number" v-if="showNumber"
        >{{ parseInt(percentage) }}%</span
      >
    </div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "bar",

  data() {
    return {
      timer: null
    };
  },
  props: [
    "size",
    "percentage",
    "backColor",
    "foreColor",
    "showNumber",
    "zIndex"
  ],
  computed: {
    barStyles() {
      return {
        height: this.size + "px",
        backgroundColor: this.backColor,
        zIndex: this.zIndex
      };
    },
    styles() {
      return {
        width: this.percentage + "%",
        backgroundColor: this.foreColor,
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    percentage() {
      if (this.percentage >= 100) {
        this.$emit("finish");
      }
    }
  }
};
</script>
