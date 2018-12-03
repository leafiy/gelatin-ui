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
      fields: {},
      inited: false,
      supportedTrigger: ['input', 'blur', 'focus', 'keyup', 'keydown', 'submit', 'change'],
      builtinValidator: ['email', 'required', 'number', 'minLength', 'maxLength', 'link', 'array', 'date']
    };
  },
  mixins: [validators],
  props: {
    rules: Object,
  },
  methods: {
    applyRules(instance) {
      let rules = this.rules[instance.name]
      if (rules) {
        rules.forEach(rule => {
          if (!rule.trigger || !rule.type || !rule.message) {
            throw new Error('rule must have trigger/type/message')
          }
          if (!this.supportedTrigger.includes(rule.trigger)) {
            throw new Error('only support triggers: ' + this.supportedTrigger.join(','))
          }
          if (rule.trigger !== 'submit') {

            instance.$on(rule.trigger, (val) => {
              this.validateStart({ name: instance.name })
              let value = instance.$el.querySelector('input').value
              this.$nextTick(() => {
                this.trigger({ instance, value, rule }).then(({ instance, message }) => {
                  this.removeErros({ instance, message })
                  this.validateFinish()
                }).catch(({ instance, message }) => {
                  this.parseErrors({ instance, message })
                  this.validateFinish({ name: instance.name, message })
                })
              })
            })
          }
        })
      }
    },
    validate() {
      return new Promise((resolve, reject) => {
        let promises = []
        let results = []
        let errors = []
        Object.keys(this.rules).forEach(name => {
          if (this.fields[name]) {
            this.rules[name].forEach(rule => {
              let instance = this.fields[name]
              let value = instance.$el.querySelector('input').value || instance.value
              promises.push(this.trigger({ instance, rule, value }))
            })
          } else {
            resolve()
          }

        })
        this.validateStart({ name: Object.keys(this.rules) })
        // MF
        promises.forEach(p => {
          p.then(({ instance, message }) => {
            results.push({ instance, message })
            this.removeErros({ instance, message })
            if (results.length == promises.length) {
              resolve(results)
              this.validateFinish()

            }
          }).catch(({ instance, message }) => {
            errors.push({ name: instance.name, message })
            this.parseErrors({ instance, message })
            if (errors.length == promises.length) {
              reject(errors)
              this.validateFinish({ errors })

            }
          })
        })
      })
    },
    parseFileds() {
      this.$slots.default.forEach(field => {
        if (field.componentInstance && field.componentInstance.$el.querySelector('input').name) {
          this.applyRules(field.componentInstance)
          this.fields[field.componentInstance.name] = field.componentInstance
        }
      })
    },
    parseErrors({ instance, message }) {
      if (instance.errors && !instance.errors.includes(message)) {
        instance.errors.push(message)
      }
      this.$emit('add-error', { name: instance.name, message: message })
    },
    removeErros({ instance, message }) {
      if (instance.errors && instance.errors.includes(message)) {
        instance.errors.splice(instance.errors.indexOf(message), 1)
      }
      this.$emit('remove-error', { name: instance.name, message: message })
    },
    validateStart({ name }) {
      this.$emit('validate-start', name)
    },
    validateFinish({ name, message, errors }) {
      this.$emit('validate-finish', { name, message, errors })
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
