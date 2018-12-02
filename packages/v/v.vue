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
              let value = instance.$el.querySelector('input').value
              this.$nextTick(() => {
                this.trigger({ instance, value, rule }).then(({ instance, message }) => {
                  this.removeErros({ instance, message })
                }).catch(({ instance, message }) => {
                  this.parseErrors({ instance, message })
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
              let value = instance.$el.querySelector('input').value
              promises.push(this.trigger({ instance, rule, value }))
            })
          } else {
            resolve()
          }

        })
        // MF
        promises.forEach(p => {
          p.then(o => {
            results.push(o)
            if (results.length == promises.length) {
              resolve(results)
            }
          }).catch(o => {
            errors.push(o)
            if (errors.length == promises.length) {
              reject(errors)
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
      if (!instance.errors) {
        this.$emit('add-error', { name: instance.name, message: message })
      }
    },
    removeErros({ instance, message }) {
      if (instance.errors && instance.errors.includes(message)) {
        instance.errors.splice(instance.errors.indexOf(message), 1)
      }
      if (!instance.errors) {
        this.$emit('remove-error', { name: instance.name, message: message })
      }
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
