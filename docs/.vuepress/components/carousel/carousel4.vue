<template>
  <div class="container">
    <ClientOnly>
      <ui-carousel @change="change" ref="carousel" :scroll-count="1" full-width auto loop :delay="5000" :start-index="3">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
      </ui-carousel>
      <p>
        carousel status: currentIndex {{currentIndex}} - lastIndex {{lastIndex}} - direction {{direction}}
      </p>
      <ui-button-group>
        <ui-button @click.native="next">自定义按钮 next</ui-button>
        <ui-button @click.native="prev">prev</ui-button>
        <ui-button @click.native="next2">next 2 item</ui-button>
      </ui-button-group>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'carousel',

  data() {
    return {
      currentIndex:'',
lastIndex:'',
direction:'',
    }
  },
  methods: {
    next() {
      this.$refs['carousel'].moveCarousel(1)
    },
    prev() {
      this.$refs['carousel'].moveCarousel(-1)
    },
    next2() {
      this.$refs['carousel'].moveCarousel(1, 2)
    },
    change({ newIndex, oldIndex, direction }) {
      this.currentIndex = newIndex
      this.lastIndex = oldIndex
      this.direction = direction
    }
  }
}

</script>
<style scoped lang="css">
img {
  max-width: none !important;
}

.item {
  border: 1px solid #9B9B9B;
  border-radius: 14px;
  padding: 10px;
  margin-right: 20px;
}

</style>
