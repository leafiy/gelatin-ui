<template>
  <div class="ui-v">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ui-v",

  data() {
    return {
      fields: []
    };
  },
  props: {
    rules: Array
  },
  methods: {
    handleInput(e) {
      console.log(e)
    },
    handleBlur(e) { console.log(e) },
    handleInput(e) { console.log(e) },
    handleFocus(e) { console.log(e) },
    handleKeyup(e) { console.log(e) },
    handleKeydown(e) { console.log(e) },
    parseFileds() {
      this.$slots.default.forEach(field => {
        if (field.componentInstance && !field.componentInstance.$el.querySelector('input').name) {
          return new Error('input or component must have a name')
        }
        // field.componentInstance.handleInput = this.handleInput
        // field.componentInstance.handleBlur = this.handleBlur
        // field.componentInstance.handleInput = this.handleInput
        // field.componentInstance.handleFocus = this.handleFocus
        // field.componentInstance.handleKeyup = this.handleKeyup
        // field.componentInstance.handleKeydown = this.handleKeydown
        this.fields.push(field.componentInstance)

      })
    }
  },
  mounted() {
    if (this.$slots.default.length) {
      this.parseFileds()
    } else {
      throw new Error('why?')
    }
  }
};

</script>
<style lang="css" scoped></style>
