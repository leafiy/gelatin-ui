<template>
  <div class="ui-progress" :class="[animate && `ui-progress-animate`]">
    <component :is="type" :size="size" :percentage="percentage" :stroke-width="strokeWidth" :back-color="backColor" :fore-color="foreColor" :show-number="showNumber" :progress-number="progressNumber" :show="show"></component>
  </div>
</template>
<script>
import '../assets/scss/progress.scss'
import Ring from './types/ring.vue'
import Bar from './types/bar.vue'
export default {
  name: "ui-progress",
  data() {
    return {};
  },
  components: {
    Ring,
    Bar
  },
  props: {
    type: {
      type: String,
      default: 'ring'
    },
    size: {
      type: Number,
      default: 36
    },
    percentage: {
      type: Number,
      default: 0,
      validator: val => {
        return val <= 100;
      }
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    backColor: {
      type: String,
      default: "#E9EBEE"
    },
    foreColor: {
      type: String,
      default: "#08D7B8"
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    animate: Boolean,
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {

    progressNumber() {
      return this.showNumber && parseInt(this.percentage);
    }
  },
  mounted() {}
};

</script>
