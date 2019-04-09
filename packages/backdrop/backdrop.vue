<template>
  <transition :name="transition" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="ui-backdrop" v-if="show" :style="styles" :class="classes">
      <slot>
        <span v-if="content">{{ content }}</span>
      </slot>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/backdrop.scss";
import { lock, unlock } from 'tua-body-scroll-lock'
import isIOS from 'buxton/browser/isIOS.js'
import UiSpinner from '../spinner/spinner.vue'
export default {
  name: "ui-backdrop",
  data() {
    return {
      parentPosition: '',
      radius_: typeof this.radius == 'number' ? `${this.radius}px` : `${this.radius}`
    };
  },
  props: {
    show: Boolean,
    transition: {
      type: String,
      default: "fade"
    },
    zIndex: Number,
    fullscreen: Boolean,
    content: String,
    radius: [Number, String],
    autoRadius: Boolean,
    selectable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "dark",
      validator(value) {
        return ["lighter", "light", "dark", "darker"].includes(value);
      }
    },
    lock: Boolean,
    loading: Boolean
  },
  components: {
    UiSpinner
  },
  computed: {
    styles() {
      return [{
        zIndex: this.zIndex,
        borderRadius: this.radius_,
        userSelect: this.selectable ? '' : 'none'
      }];
    },
    classes() {
      return [
        `ui-backdrop-${this.color}`,
        this.fullscreen && "ui-backdrop-fullscreen"
      ];
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.fitContainer()
        if (this.lock) {
          this.lockScroll()
        }
      } else {
        if (this.lock) {
          this.unlockScroll()
        }
      }
    }
  },
  methods: {
    lockScroll() {
      if (this.fullscreen) {
        lock(null)
      }
      if (isIOS()) {
        lock(this.$el)
      }
    },
    unlockScroll() {
      if (this.fullscreen) {
        unlock(null)
      }
      if (isIOS()) {
        unlock(this.$el)
      }
    },
    fitContainer() {
      if (!this.fullscreen && this.$el.parentNode) {
        this.parentPosition = getComputedStyle(this.$el.parentNode).position
        if (this.parentPosition !== 'relative' && this.parentPosition !== 'absolute') {
          this.$el.parentNode.style.position = 'relative'
        }
      }
      if (this.autoRadius && !this.radius && !this.fullscreen) {
        let radius = getComputedStyle(this.$el.parentNode).borderRadius
        this.radius_ = radius
      }
      if (this.fullscreen) {
        document.body.appendChild(this.$el)
      }
    },
    resetContainer() {
      if (!this.fullscreen && this.$el.parentNode) {
        this.$el.parentNode.style.position = this.parentPosition
      }
      if (this.fullscreen) {
        document.body.removeChild(this.$el)
      }
    },
    afterEnter() {
      this.$emit('after-enter')
    },
    afterLeave() {
      this.resetContainer()
      this.$emit('after-leave')
    },
  },
  mounted() {
    this.$root.$on('clear-backdrop', () => {
      this.show = false
    })

  }
};

</script>
