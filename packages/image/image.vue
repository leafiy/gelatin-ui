<template>
  <div class="ui-image">
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
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.src})`
      };
    }
  }
};
</script>
