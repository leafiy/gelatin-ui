<template>
  <div class="ui-accordion-item" :class="classes">
    <p class="ui-accordion-title" @mouseover="mouseover" @click="clickTitle">
      <span v-html="title" class="ui-accordion-title-content"></span>
      <slot name="close">
        <span class="ui-accordion-close-icon" @click="click"><ui-icon name="plus"></ui-icon></span>
      </slot>
    </p>
    <collapse-transition>
      <div class="ui-accordion-content" v-show="show">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
import UiIcon from '../icon/index.js'
import '../assets/scss/accordion.scss'
import { CollapseTransition } from 'vue2-transitions'
import nanoid from 'nanoid'
import events from '../../src/utils/events.js'
export default {
  name: 'ui-accordion-item',
  data() {
    return {
      show: false,
      id: `ui-accordion-item-${nanoid()}`
    }
  },
  props: {
    title: String,
    openOnMouseOver: Boolean,
    openOnClickTitle: {
      type: Boolean,
      default: true
    },
    active: Boolean,
    accordion: {
      type: Boolean,
      default: true
    }
  },
  components: {
    UiIcon,
    CollapseTransition
  },
  computed: {
    classes() {
      return {
        'ui-accordion-item-active': this.show
      }
    }
  },
  inject: ['accordionId'],
  watch: {
    show(val) {
      if (this.accordion) {
        events.$emit(`${this.accordionId}`, { id: this.id, show: this.show })

      }
      if (val) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  },
  methods: {
    clickTitle() {
      if (this.openOnClickTitle) {
        this.click()
      }
    },
    click() {
      this.show = !this.show
    },
    mouseover() {
      if (this.openOnMouseOver) {
        this.show = !this.show
      }
    }
  },
  watch: {
    active() {
      this.show = this.active
    }
  }
}

</script>
<style lang="css" scoped>
</style>
