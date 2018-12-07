<template>
  <div class="ui-carousel-wrapper">
    <div class="ui-carousel-nav-left" @click="moveCarousel(-1)" :disabled="atHead"></div>
    <div class="ui-carousel">
      <div class="ui-carousel-item" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
        <slot></slot>
      </div>
    </div>
    <div class="ui-carousel-nav-right" @click="moveCarousel(1)" :disabled="atEnd"></div>
  </div>
</template>
<script>
import '../assets/scss/carousel.scss'
export default {

  name: 'ui-carousel',

  data() {
    return {
      currentOffset: 0,
      items: '',
      index: 0
    }
  },
  props: {
    windowSize: {
      type: Number,
      default: 2
    },
    paginationGutter: Number
  },
  computed: {
    paginationFactor() {

    },
    atEnd() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHead() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEnd) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHead) {
        this.currentOffset += this.paginationFactor;
      }
    },
  },
  mounted() {
    this.items = this.$slots.default
  }
}

</script>
