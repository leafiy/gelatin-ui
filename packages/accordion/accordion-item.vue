<template>
  <div class="ui-accordion-item" :class="classes">
    <p class="ui-accordion-title" @click="click" @mouseover="mouseover">
      <span v-html="title"></span>
      <span class="ui-accordion-close-icon"><ui-icon name="plus"></ui-icon></span>
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
    }
  },
  methods: {
    click() {
      this.show = !this.show
    },
    mouseover() {
      if (this.openOnMouseOver) {
        this.show = !this.show
      }
    }
  },
  mounted() {
    if (this.active) this.show = true
  }
}

</script>
<style lang="css" scoped>
</style>
