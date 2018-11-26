<template>
  <fade-transition>
    <div class="ui-tag" :class="classes" v-if="show">
      <slot></slot>
      <ui-icon name="close" class="ui-icon-close" @click.native="click" v-if="showClose"></ui-icon>
    </div>
  </fade-transition>
</template>
<script>
import UiIcon from '../icon/index.js'
import '../assets/scss/tag.scss'
import { FadeTransition } from 'vue2-transitions'
export default {

  name: 'ui-tag',

  data() {
    return {
      show: true
    }
  },
  components: {
    UiIcon,
    FadeTransition
  },
  computed: {
    classes() {
      return [
        this.showClose && 'ui-tag-with-icon', `ui-tag-${this.type}`
      ]
    }
  },
  props: {
    showClose: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['warning', 'error', 'success', 'default'].includes(value)
      }
    }
  },
  methods: {
    click() {
      this.show = false
    }
  }
}

</script>
<style lang="css" scoped>
</style>
