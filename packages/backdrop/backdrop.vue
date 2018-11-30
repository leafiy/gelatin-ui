<template>
  <transition name="fade">
    <div class="ui-backdrop" v-if="isMounted" :style="styles" :class="classes" @click="click">
      <slot></slot>
      <ui-spinner v-if="showSpinner"></ui-spinner>
      <span v-if="text">{{text}}</span>
    </div>
  </transition>
  </div>
</template>
<script>
import UiSpinner from '../spinner/spinner.vue'
import '../assets/scss/backdrop.scss'
import events from '../../src/utils/events.js'
export default {
  name: 'ui-backdrop',
  data() {
    return {
      isMounted: false,
    }
  },
  components: {
    UiSpinner
  },
  props: {
    type: {
      type: String
    },
    showSpinner: Boolean,
    zIndex: Number,
    global: Boolean,
    text:String,
    closeOnClick: Boolean,
    radius: [Number, String],
    color: {
      type: String,
      default: 'dark',
      validator(value) {
        return ['white', 'light', 'dark', 'darker'].includes(value)
      }
    }
  },
  computed: {
    styles() {
      return [{
        zIndex: this.zIndex,
        borderRadius: typeof this.radius == 'number' ? this.radius + 'px' : this.radius
      }]
    },
    classes() {
      return [`ui-backdrop-${this.color}`, this.global && 'ui-backdrop-global']
    },
  },
  methods: {
    click() {
      if (this.closeOnClick) {
        this.close()
      }
    },
    close() {
      this.isMounted = false
    }
  },
  mounted() {
    this.isMounted = true
    if (this.global) {
      events.$on('close-backdrop', this.close)
    }
  }

}

</script>
