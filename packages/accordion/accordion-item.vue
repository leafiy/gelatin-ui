<template>
  <div class="ui-accordion-item" :class="classes">
    <p class="ui-accordion-title" v-html="title" @click="click" @mouseover="mouseover"></p>
    <collapse-transition>
      <div class="ui-accordion-content" v-show="active">
        <slot></slot>
      </div>
    </collapse-transition>
    <span class="ui-accordion-close-icon" @click="click"><ui-icon name="plus"></ui-icon></span>
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
      active: false,
      id: `ui-accordion-item-${nanoid()}`
    }
  },
  props: {
    title: String,
    openOnMouseOver: Boolean,
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
        'ui-accordion-item-active': this.active
      }
    }
  },
  inject: ['accordionId'],
  watch: {
    active(val) {
      if (this.accordion) {
        events.$emit(`${this.accordionId}`, { id: this.id, active: this.active })
      }
    }
  },
  methods: {
    click() {
      this.active = !this.active
    },
    mouseover() {
      if (this.openOnMouseOver) {
        this.active = !this.active
      }
    }
  }
}

</script>
<style lang="css" scoped>
</style>
