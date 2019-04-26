<template>
  <div
    class="ui-image"
    :key="componentKey"
    :class="[keepSize && 'ui-image-keep-size']"
    :style="{ height: imageHeight + 'px', width: imageWidth + 'px' }"
  >
    <transition name="fade">
      <div
        class="ui-image-image"
        v-if="!loading"
        :style="backgroundStyle"
      ></div>
    </transition>
    <div class="ui-image-cover" v-if="cover"></div>
    <slot name="loader" v-if="loading">
      <div class="ui-image-loader">
        <ui-spinner center></ui-spinner>
      </div>
    </slot>
    <div class="ui-image-slot" :style="slotStyles" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import UiSpinner from "../spinner/spinner.vue";
import loadImage from "buxton/browser/loadImage.js";

import "../assets/scss/image.scss";
export default {
  name: "ui-image",
  props: {
    src: String,
    cover: Boolean,
    keepSize: Boolean,
    fallback: String,
    zIndex: Number,
    timeout: Number
  },
  components: {
    UiSpinner
  },
  data() {
    return {
      loading: true,
      failed: false,
      imageHeight: "",
      imageWidth: "",
      loader: null,
      componentKey: Date.now()
    };
  },
  methods: {
    load() {
      loadImage(this.src, this.timeout)
        .then(({ src, width, height }) => {
          this.loading = false;
          this.$emit("load-finished");
          if (this.keepSize) {
            let aspect = this.$el.offsetWidth / width;
            this.imageHeight = height * aspect;
          }
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.failed = true;
          this.$emit("load-failed", err.message);
        });
    }
  },
  mounted() {
    this.load();
  },
  watch: {
    src(value) {
      this.componentKey = Date.now();
    }
  },
  computed: {
    slotStyles() {
      return {
        zIndex: this.zIndex
          ? this.zIndex
          : this.$zIndex
          ? this.$zIndex.add()
          : 200
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
