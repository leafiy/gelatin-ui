<template>
  <div class="ui-image" :style="styles">
    <transition name="fade">
      <div class="ui-image-image" v-if="!loading" :style="backgroundStyle"></div>
    </transition>
    <div class="ui-image-cover" v-if="cover"></div>
    <loader :show="loading"></loader>
    <div class="ui-image-slot" v-if="$slots.default"><slot></slot></div>
  </div>
</template>
<script>
import imgLoader from "../../src/utils/imgLoader.js";
import '../assets/scss/image.scss';
export default {
  name: "ui-image",
  props: {
    src: String,
    type: {
      type: String,
      default: "cover"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "160px"
    },
    cover: {
      type: Boolean,
      default: false
    }
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
        this.$emit("load-finished");
      });
  },
  computed: {
    styles() {
      return {
        width:
          typeof this.width == "number" ? `${this.width}px` : `${this.width}`,
        height:
          typeof this.height == "number" ? `${this.height}px` : `${this.height}`
      };
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.src})`
      };
    }
  }
};
</script>
