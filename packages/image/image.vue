<template>
  <div class="ui-image" :class="[keepSize && 'ui-image-keep-size']" :style="{ height: imageHeight + 'px', width: imageWidth + 'px' }">
    <transition name="fade">
      <div class="ui-image-image" v-if="!loading" :style="backgroundStyle"></div>
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
import imgLoader from "../../src/utils/imgLoader.js";
import "../assets/scss/image.scss";
export default {
  name: "ui-image",
  props: {
    src: String,
    cover: Boolean,
    keepSize: Boolean,
    fallback: String,
    zIndex: Number
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
      loader: null
    };
  },
  methods: {
    load() {
      this.loader = imgLoader(this.src)
        .then(url => {
          console.log(url)
          this.loading = false;
          this.$emit("load-finished");
          if (this.keepSize) {
            import("buxton/browser/imageSize").then(module => {
              module.default(this.src).then(({ width, height }) => {
                let aspect = this.$el.offsetWidth / width;
                this.imageHeight = height * aspect;
              });
            });
          }
        })
        .catch(err => {
          console.log(err)
          this.loading = false;
          this.failed = true;
          this.$emit("load-failed");
        });
    }
  },
  mounted() {
    // this.load();
  },
  watch: {
    src(value) {
      this.loader = null
      this.load();
    }
  },
  computed: {
    slotStyles() {
      return {
        zIndex: this.zIndex ?
          this.zIndex : this.$zIndex ?
          this.$zIndex.add() : 200
      };
    },
    backgroundStyle() {
      return {
        backgroundImage: this.failed ?
          `url(${this.fallback})` : `url(${this.src})`
      };
    }
  }
};

</script>
