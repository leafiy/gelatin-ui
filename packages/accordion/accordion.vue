<template>
  <div class="ui-accordion-container" :class="[size && `ui-accordion-size-${size}`]">
    <slot></slot>
  </div>
</template>
<script>
import nanoid from 'nanoid'
import events from '../../src/utils/events.js'
export default {

  name: 'ui-accordion',

  data() {
    return {
      id: `accordion-${nanoid()}`
    }
  },
  provide() {
    return {
      accordionId: this.id
    }
  },
  methods: {
    handler({ id, show }) {
      this.$slots.default.forEach(item => {
        if (show && item.componentInstance.id !== id) {
          item.componentInstance.show = false
        }
      })
    }
  },
  props: {
    size: String
  },
  mounted() {
    events.$on(`${this.id}`, this.handler)
  }
}

</script>
<style lang="css" scoped>
</style>
