<template>
  <div
    class="ui-progress-type-ring"
    :style="{ width: size + 'px', height: size + 'px' }"
    :data-pct="parseInt(percentage)"
  >
    <svg
      :width="size"
      :height="size"
      :viewPort="'0 0 ' + size + ' ' + size"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="ui-progress-ring"
        :stroke="backColor"
        :r="r"
        :cx="size / 2"
        :cy="size / 2"
        :stroke-width="strokeWidth"
        fill="none"
      ></circle>
      <circle
        class="ui-progress-ring-inner"
        :stroke="foreColor"
        :r="r"
        :cx="size / 2"
        :cy="size / 2"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="dashoffset"
      ></circle>
    </svg>
  </div>
</template>
<script>
export default {
  name: "ring",

  data() {
    return {};
  },
  props: {
    size: {
      type: Number
    },
    percentage: Number,
    strokeWidth: Number,
    backColor: {
      type: String,
      default: "#E9EBEE"
    },
    foreColor: {
      type: String,
      default: "#08D7B8"
    },
    showNumber: Boolean
  },
  computed: {
    r() {
      return this.size / 2 - this.strokeWidth / 2;
    },
    dasharray() {
      return 2 * Math.PI * this.r;
    },
    dashoffset() {
      return this.dasharray * (1 - this.percentage / 100);
    }
  }
};
</script>
