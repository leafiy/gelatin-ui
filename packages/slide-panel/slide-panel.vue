<template>
  <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
    <div class="ui-slide-panel" v-if="_show">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import '../assets/scss/slide-panel.scss';
import upperCase from '../../src/utils/upperCase.js'
export default {

  name: 'ui-slide-panel',

  data() {
    return {

    }
  },
  watch: {
    _show() {
      console.log(this._show)
    }
  },
  computed: {
    _show: {
      get: function() {
        return this.show
      },
      // setter
      set: function(newValue) {
        return newValue
      }
    },
    transitionName() {
      return `slide-panel-${this.direction}`
    },
    enterClass() {
      return `slideIn${upperCase(this.direction)}`
    },
    leaveClass() {
     return `slideOut${upperCase(this.direction)}`
    },
  },
  props: {
    show: Boolean,
    direction: {
      type: String,
      default: 'right',
      validator(val) {
        return ['top', 'bottom', 'right', 'left', 'center'].includes(val)
      }
    }
  },
  methods: {
    open() {
      this._show = true
    },
    close() {
      this._show = false
    }
  }
}

</script>
<style lang="css" scoped>
</style>
