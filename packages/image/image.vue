<template>
  <div class="ui-image" :class="[keepSize && 'ui-image-keep-size']">
    <transition name="fade">
      <div class="ui-image-image" v-if="!loading" :style="backgroundStyle"></div>
    </transition>
    <div class="ui-image-cover" v-if="cover"></div>
    <ui-spinner v-if="loading" center></ui-spinner>
    <div class="ui-image-slot" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import UiSpinner from '../spinner/spinner.vue'
import imgLoader from "../../src/utils/imgLoader.js";
import '../assets/scss/image.scss';
export default {
  name: "ui-image",
  props: {
    src: String,
    cover: Boolean,
    keepSize: Boolean,
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
