<!-- <template>
  <div class="ui-v">
    <slot></slot>
  </div>
</template> -->
<script>
import validators from '../../src/mixins/v/validators.js'
import Vue from 'vue'
import Error from './error.vue'
import isObjectEqual from '../../src/utils/isObjectEqual.js'
Promise.almost = r => Promise.all(r.map(p => p.catch ? p.catch(e => e) : p));
export default {
  name: "ui-v",

  data() {
    return {
      fields: {},
      errors: [],
      inited: false,
      supportedTrigger: ['input', 'blur', 'focus', 'keyup', 'keydown', 'submit', 'change'],
      builtinValidator: ['email', 'required', 'number', 'minLength', 'maxLength', 'link', 'array', 'date']
    };
  },
  mixins: [validators],
  components: {
    Error
  },
  props: {
    rules: Object,
  },
  methods: {
    parseFileds() {
      let rulesKey = Object.keys(this.rules)
      this.$slots.default.forEach(field => {
        if (field.componentInstance && field.componentInstance.name && rulesKey.includes(field.componentInstance.name)) {
          this.applyRules(field.componentInstance)
          this.fields[field.componentInstance.name] = field.componentInstance
        }
      })
    },
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
              let name = instance.name
              this.validateStart({ name })
              let value = instance.$el.querySelector('input').value
              this.$nextTick(() => {
                this.trigger({ name, value, rule }).then(({ name, message }) => {
                  this.removeErros({ name, message })
                }).catch(({ name, message }) => {
                  this.parseErrors({ name, message })
                })
              })
            })
          }
          instance.$on('clear', () => {
            this.clearErrors(instance.name)
          })
          instance.$on('focus', (value) => {
            if (!value) {
              instance.errors = false
              this.clearErrors(instance.name)
            }
          })
        })
      }
    },
    validate() {
      return new Promise((resolve, reject) => {
        let promises = []
        let results = []
        let errors = []
        Object.keys(this.rules).forEach(name => {
          let instance = this.fields[name]
          if (this.fields[name]) {
            this.rules[name].forEach(rule => {
              let value = instance.$el.querySelector('input').value || instance.value
              promises.push(this.trigger({ name, rule, value }))
            })
          } else {
            resolve()
          }

        })
        this.validateStart({ name: Object.keys(this.rules) })
        const reflect = p => p.then(v => ({ v, status: "fulfilled" }),
          e => ({ e, status: "rejected" }));
        Promise.all(promises.map(reflect)).then(v => {
          let errors = []
          v.forEach(item => {
            if (item.status == 'rejected') {
              errors.push(item.e)
              this.parseErrors(item.e)
            } else {
              this.removeErros(item.v)
            }
          })
          if (errors.length) {
            reject(errors)
          } else {
            resolve()
          }
        })
      })
    },

    parseErrors({ name, message }) {
      let instance = this.fields[name]
      if (instance) {
        instance.errors = true
      }
      let newError = {
        name: name,
        message: message
      }
      let exist = this.errors.some(error => {
        return isObjectEqual(error, newError)
      })
      if (!exist) {
        this.errors.push(newError)
      }
      this.$emit('add-error', newError)
    },
    removeErros({ name, message }) {
      let newError = { name, message }
      let instance = this.fields[name]
      this.errors.forEach((error, index) => {
        if (isObjectEqual(error, newError)) {
          this.errors.splice(index, 1)
        }
      })
      let exist = this.errors.some(error => {
        return isObjectEqual(error, newError)
      })
      if (!exist) {
        instance.errors = false
      }
      this.$emit('remove-error', newError)
    },
    clearErrors(name) {
      this.errors = this.errors.filter(item => item.name !== name)
    },
    validateStart({ name }) {
      this.$emit('validate-start', name)
    },
    validateFinish({ name, message, errors }) {
      this.$emit('validate-finish', { name, message, errors })
    },
    isInstance(item) {
      return item && item.componentOptions && item.componentOptions.propsData && item.componentOptions.propsData.name
    }
  },
  mounted() {
    if (this.$slots.default.length) {
      this.parseFileds()
    } else {
      throw new Error('why?')
    }
  },
  render(h) {
    return (
      <div class="ui-v">
      {
        this.$slots.default.map(item=>{
          return  this.isInstance(item) ? <Error errors={this.errors} name={this.isInstance(item)}>{item}</Error> : item
        })
      }
    </div>
    )
  }
};

</script>
