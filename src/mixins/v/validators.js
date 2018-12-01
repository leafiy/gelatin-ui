import validators from '../../utils/validator.js'
export default {
  methods: {
    trigger(instance, rule) {
      let type = rule.type
      if (this.builtinValidator.includes(type)) {
        this[`${type}Validate`](instance, rule).then(() => {}).catch(() => {
          instance.errors.push(rule.message)
        })
      } else if (typeof type == 'function') {
        this.costumFnValidate(instance, type).then(() => {

        }).catch(() => {
          instance.errors.push(rule.message)
        })

      } else if (typeof type == 'string' || (type instanceof RegExp && type.constructor == RegExp)) {
        let re = type instanceof RegExp && type.constructor == RegExp ? type : new RegExp(type)
        this.costumReValidate(instance, re).then(() => {}).catch(() => {
          instance.errors.push(rule.message)
        })
      }
    },
    costumFnValidate(instance, fn) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        let f = fn(value)
        if (f.then) {
          f.then(() => {
            resolve()
          }).catch(() => {
            reject()
          })
        } else {
          if (f) {
            resolve()
          } else {
            reject()
          }
        }
      })
    },
    costumReValidate(instance, re) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (re.test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    requiredValidate(instance, rule) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (!value) {
          reject()
        } else {
          resolve()
        }
      })
    },
    numberValidate(instance, rule) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (!Number(value)) {
          reject()
        } else {
          resolve()
        }
      })
    },
    emailValidate(instance, rule) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (validators['email'].test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    minLengthValidate(instance, rule) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (value.length < rule.length) {
          reject()
        } else {
          resolve()
        }
      })
    },
    maxLengthValidate(instance, rule) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (value.length > rule.length) {
          reject()
        } else {
          resolve()
        }
      })
    },
    linkValidate(instance, rule) {
      return new Promise((resolve, reject) => {
        let value = instance.inputVal
        if (validators['link'].test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
  }
}
