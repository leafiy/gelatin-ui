<template>
  <div class="ui-carousel-wrapper" v-if="items.length" ref="container">
    <div class="ui-carousel">
      <div class="ui-carousel-overflow" :style="expandStyles">
        <div class="ui-carousel-items" :style="listStyles">
          <ui-carousel-item :class="{'ui-carousel-item-active':index == idx}" :style="itemStyles" @mounted="itemMounted" v-for="(item,idx) of items" :index="idx" :item="item" :key="idx"></ui-carousel-item>
        </div>
      </div>
    </div>
    <div v-if="navStyle == 'arrow'" class="ui-carousel-nav-item ui-carousel-arrow-left" @click="moveCarousel(-1)" :disabled="atHead">
      <ui-icon name="left"></ui-icon>
    </div>
    <div v-if="navStyle == 'arrow'" class="ui-carousel-nav-item ui-carousel-arrow-right" @click="moveCarousel(1)" :disabled="atEnd">
      <ui-icon name="right"></ui-icon>
    </div>
    <div v-if="navStyle == 'bar'" class="ui-carousel-navbar">
      <span v-for="(item,idx) of items" class="ui-carousel-navbar-bar" :class="{'ui-carousel-navbar-bar-active':index == idx}" :key="idx" @click="barClick(idx)"></span>
    </div>
  </div>
</template>
<script>
import '../assets/scss/carousel.scss';
import UiCarouselItem from './carousel-item.vue'
import UiIcon from '../icon/icon.vue'
import touchHandler from '../../src/utils/touchHandler.js'
export default {

  name: 'ui-carousel',

  data() {
    return {
      inited: false,
      currentOffset: 0,
      items: [],
      index: 0,
      timer: null,
      list: [],
      pull: {
        from: -1,
        to: -1,
        distance: 0,
        type: null,
        available: false
      },
    }
  },
  components: {
    UiCarouselItem,
    UiIcon
  },
  props: {
    scrollCount: {
      type: Number,
      default: 1
    },
    navStyle: String,
    touch: {
      type: Boolean,
      default: true
    },
    auto: Boolean,
    delay: {
      type: Number,
      default: 2000
    },
    loop: Boolean,
    expand: Number // 解决overflow可能盖住元素阴影或其他效果的可能
  },
  computed: {
    expandStyles() {
      return {
        padding: this.expand + 'px',
        width: `calc(100% + ${this.expand}px)`,
        margin: -this.expand + 'px'
      }
    },
    listStyles() {
      return {
        transform: 'translateX' + '(' + this.currentOffset + 'px' + ')',
      }
    },
    itemStyles() {
      return {
        marginRight: this.gutter + 'px'
      }
    },
    atEnd() {
      return this.index == this.items.length - 1
    },
    atHead() {
      return this.index == 0
    },
  },
  watch: {
    index(val) {
      this.currentOffset = -this.getOffset(this.index);
    }
  },
  methods: {
    itemMounted({ width, index }) {
      this.list.push({ index, width })
    },
    getOffset(index) {
      let list = this.list.slice(0, index)
      list = list.map(item => item.width)
      return list.reduce((a, b) => a + b, 0)

    },
    moveCarousel(direction, count = this.scrollCount) {
      if (direction === 1 && !this.atEnd) {
        this.index += count
        if (this.index > this.items.length - 1) {
          this.index = this.items.length - 1
        }

      } else if (direction === -1 && !this.atHead) {
        this.index -= count
        if (this.index < 0) {
          this.index = 0
        }
      }
    },
    renderItems() {
      this.items = this.$slots.default.filter(item => item.tag)

    },
    barClick(index) {
      this.index = index
    },
    startAuto() {
      this.timer = setInterval(() => {
        if (this.index <= this.items.length - this.scrollCount) {
         this.moveCarousel(1)
        } else {
          clearInterval(this.timer)
          if (this.loop) {
            this.back()
          }
        }
      }, this.delay)
    },
    back() {
      this.timer = setInterval(() => {
        if (this.index <= this.scrollCount) {
          clearInterval(this.timer)
          this.startAuto()
        }
        this.moveCarousel(-1)
      }, this.delay)
    },
    handleTouchStart(event) {
      touchHandler({ event })
    },
    handleTouchMove(event) {
      touchHandler({ event })
    },
    handleTouchEnd(event) {
      if (touchHandler({ event }) == 'left') {
        this.moveCarousel(1)
      }
      if (touchHandler({ event }) == 'right') {
        this.moveCarousel(-1)
      }
    },
    bindTouchEvents() {
      this.$refs['container'].addEventListener("touchstart", this.handleTouchStart);
      this.$refs['container'].addEventListener("touchmove", this.handleTouchMove);
      this.$refs['container'].addEventListener("touchend", this.handleTouchEnd);
    },
    unBindTouchEvents() {
      this.$refs['container'].removeEventListener("touchstart", this.handleTouchStart);
      this.$refs['container'].removeEventListener("touchmove", this.handleTouchMove);
      this.$refs['container'].removeEventListener("touchend", this.handleTouchEnd);
    }
  },
  mounted() {
    this.renderItems()
    this.$nextTick(() => {
      if (this.touch) {
        this.bindTouchEvents()
        this.inited = true
      }
      if (this.auto) {
        this.startAuto()
      }
    })
  },
  activated() {
    if (this.touch && this.inited) {
      this.bindTouchEvents()
    }
  },
  deactivated() {
    if (this.touch) {
      this.unBindTouchEvents();
    }
  },
  beforeDestroy() {
    if (this.touch) {
      this.unBindTouchEvents();
    }
  }
}

</script>
