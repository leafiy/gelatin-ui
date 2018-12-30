<template>
  <transition :name="loadingBar ? 'fade' : ''">
    <div
      class="ui-progress-type-bar"
      v-if="show"
      :style="barStyles"
      :class="[
        indeterminate && 'ui-loading-bar-indeterminate',
        loadingBar && 'ui-loading-bar'
      ]"
    >
      <div
        v-if="!indeterminate"
        class="ui-progress-bar"
        role="progressbar"
        :style="styles"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span class="ui-progress-bar-number" v-if="showNumber"
          >{{ percentage }}%</span
        >
      </div>
      <div
        v-if="indeterminate"
        class="ui-loading-bar-indeterminate-bg1"
        :style="{ backgroundColor: foreColor }"
      ></div>
      <div
        v-if="indeterminate"
        class="ui-loading-bar-indeterminate-bg2"
        :style="{ backgroundColor: foreColor }"
      ></div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
if (!Vue.prototype.$zIndex) {
  import("../../../src/utils/zHandler.js").then(res => {
    Vue.prototype.$zIndex = new res.default();
  });
}
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
    "progressNumber",
    "indeterminate",
    "loadingBar",
    "zIndex",
    "show",
    "duration"
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
