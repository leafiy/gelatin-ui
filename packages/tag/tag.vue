<template>
  <fade-transition>
    <div class="ui-tag" :class="classes" v-if="show">
      <div class="ui-tag-slot">
        <slot></slot>
      </div>
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
    html: String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['warning', 'error', 'success', 'default', 'border'].includes(value)
      }
    }
  },
  methods: {
    click() {
      this.show = false
      this.$emit('close')
    }
  }
}

</script>
<style lang="css" scoped>
</style>
