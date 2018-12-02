import validators from '../../utils/validator.js'
import isValidDate from '../../utils/isValidDate.js'
export default {
  methods: {
    trigger({ instance, value, rule }) {

      return new Promise((resolve, reject) => {

        let type = rule.type

        if (this.builtinValidator.includes(type)) {
          this[`${type}Validate`]({ instance, rule, value }).then(() => {
            resolve({ instance, message: rule.message })
          }).catch(() => {
            reject({ instance, message: rule.message })
          })
        } else if (typeof type == 'function') {
          this.costumFnValidate({ instance, fn: type, value }).then(() => {
            resolve({ instance, message: rule.message })
          }).catch((msg) => {
            reject({ instance, message: msg || rule.message })
          })

        } else if (typeof type == 'string' || (type instanceof RegExp && type.constructor == RegExp)) {
          let re = type instanceof RegExp && type.constructor == RegExp ? type : new RegExp(type)
          this.costumReValidate({ instance, re, value }).then(() => {
            resolve({ instance, message: rule.message })
          }).catch(() => {
            reject({ instance, message: rule.message })
          })
        } else {
          throw new Error('unsupported validate type')
        }
      })
    },
    costumFnValidate({ instance, fn, value }) {
      return new Promise((resolve, reject) => {
        let f = fn(value)
        if (f.then) {
          f.then(() => {
            resolve()
          }).catch((msg) => {
            reject(msg)
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
    costumReValidate({ instance, re, value }) {
      return new Promise((resolve, reject) => {
        if (re.test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    requiredValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (!value) {
          reject()
        } else {
          resolve()
        }
      })
    },
    numberValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (!Number(value)) {
          reject()
        } else {
          resolve()
        }
      })
    },
    emailValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (validators['email'].test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    minLengthValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (value.length < rule.length) {
          reject()
        } else {
          resolve()
        }
      })
    },
    maxLengthValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (value.length > rule.length) {
          reject()
        } else {
          resolve()
        }
      })
    },
    linkValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (validators['link'].test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    arrayValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (Array.isArray(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    dateValidate({ instance, rule, value }) {
      return new Promise((resolve, reject) => {
        if (isValidDate(value)) {
          resolve()
        } else {
          reject()
        }
      })
    }
  }
}
