<template>
  <div class="ui-accordion-container">
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
    handler({ id, active }) {
      this.$slots.default.forEach(item => {
        if (active && item.componentInstance.id !== id) {
          item.componentInstance.active = false
        }
      })
    }
  },
  mounted() {
    events.$on(`${this.id}`, this.handler)
  }
}

</script>
<style lang="css" scoped>
</style>
