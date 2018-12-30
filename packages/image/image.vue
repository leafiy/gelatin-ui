<template>
  <div class="ui-image" :class="[keepSize && 'ui-image-keep-size']">
    <transition name="fade">
      <div
        class="ui-image-image"
        v-if="!loading"
        :style="backgroundStyle"
      ></div>
    </transition>
    <div class="ui-image-cover" v-if="cover"></div>
    <slot name="loader" v-if="loading">
      <div class="ui-image-loader"><ui-spinner center></ui-spinner></div>
    </slot>
    <div class="ui-image-slot" :style="slotStyles" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import UiSpinner from "../spinner/spinner.vue";
import imgLoader from "../../src/utils/imgLoader.js";
import "../assets/scss/image.scss";
export default {
  name: "ui-image",
  props: {
    src: String,
    cover: Boolean,
    keepSize: Boolean,
    fallback: String
  },
  components: {
    UiSpinner
  },
  data() {
    return {
      loading: true,
      failed: false
    };
  },
  mounted() {
    imgLoader(this.src)
      .then(url => {
        this.loading = false;
        this.$emit("load-finished");
      })
      .catch(err => {
        this.loading = false;
        this.failed = true;
        this.$emit("load-failed");
      });
  },
  computed: {
    slotStyles() {
      return {
        zIndex: this.$zIndex.add()
      };
    },
    backgroundStyle() {
      return {
        backgroundImage: this.failed
          ? `url(${this.fallback})`
          : `url(${this.src})`
      };
    }
  }
};
</script>
