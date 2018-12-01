<template>
  <div class="ui-v">
    <slot></slot>
  </div>
</template>
<script>
import validators from '../../src/mixins/v/validators.js'
export default {
  name: "ui-v",

  data() {
    return {
      fields: [],
      inited: false,
      supportedTrigger: ['input', 'blur', 'focus', 'keyup', 'keydown', 'submit'],
      builtinValidator: ['email', 'required', 'number', 'minLength', 'maxLength', 'link']
    };
  },
  mixins: [validators],
  props: {
    rules: Array,
  },
  methods: {
    // inputHandler(instance, rule) {
    //   this.trigger(instance, rule)
    // },
    // blurHandler(instance, rule) {
    //   this.trigger(instance, rule)
    // },
    // focusHandler(instance, rule) { console.log('focus') },
    // keyupHandler(instance, rule) { console.log('keyup') },
    // keydownHandler(instance, rule) { console.log('keydown') },
    applyRules(instance) {
      this.rules.forEach(rule => {
        if (rule.name == instance.name || rule.name == instance.$el.querySelector('input').name) {
          if (!rule.trigger || !rule.type || !rule.message) {
            throw new Error('rule must have trigger/type/message')
          }
          if (!this.supportedTrigger.includes(rule.trigger)) {
            throw new Error('only support triggers: ' + this.supportedTrigger.join(','))
          }
          if (rule.trigger !== 'submit') {
            instance.$on(rule.trigger, () => {
              this.trigger(instance, rule)
              console.log(rule.trigger,instance.inputVal)
              // this[`${rule.trigger}Handler`](instance, rule)
            })
            instance.$on('clear', () => {
              instance.errors = []
            })
          }

        }
      })
    },
    parseFileds() {
      this.$slots.default.forEach(field => {
        if (field.componentInstance && field.componentInstance.$el.querySelector('input').name) {
          this.applyRules(field.componentInstance)
          this.fields.push(field.componentInstance)
        }


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
