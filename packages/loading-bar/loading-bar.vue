<template>
  <transition name="fade">
    <div
      class="ui-loading-bar"
      v-if="show"
      :style="{
        'background-color': backColor,
        zIndex: zIndex,
        height: size + 'px'
      }"
    >
      <div
        class="ui-loading-bar-inner"
        v-if="!indeterminate"
        :style="styles"
      ></div>
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
export default {
  name: "loading-bar",

  data() {
    return {
      percentage: 0,
      foreColor: "#08D7B8",
      backColor: "transparent",
      duration: 4000,
      indeterminate: false,
      size: 3,
      zIndex: 4000,
      show: false
    };
  },
  watch: {
    percentage() {
      if (this.percentage > 0) {
        this.show = true;
      }
    }
  },
  computed: {
    styles() {
      return {
        width: parseInt(this.percentage) + "%",
        backgroundColor: this.foreColor
      };
    }
  },
  methods: {
    close(delay = 300) {
      setTimeout(() => {
        this.show = false;
        this.$emit("finish");
      }, delay);
    }
  },
  mounted() {
    console.log(this);
    if (this.indeterminate) {
      this.show = true;
    }
  }
};
</script>
