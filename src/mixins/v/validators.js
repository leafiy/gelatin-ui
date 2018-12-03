import validators from '../../utils/validator.js'
import isValidDate from '../../utils/isValidDate.js'
export default {
  methods: {
    trigger({ name, value, rule }) {
      return new Promise((resolve, reject) => {
        let type = rule.type
        if (this.builtinValidator.includes(type)) {
          this[`${type}Validate`]({ name, rule, value }).then(() => {
            resolve({ name, message: rule.message })
          }).catch(() => {
            reject({ name, message: rule.message })
          })
        } else if (typeof type == 'function') {
          this.costumFnValidate({ name, fn: type, value }).then(() => {
            resolve({ name, message: rule.message })
          }).catch((msg) => {
            reject({ name, message: msg || rule.message })
          })

        } else if (typeof type == 'string' || (type instanceof RegExp && type.constructor == RegExp)) {
          let re = type instanceof RegExp && type.constructor == RegExp ? type : new RegExp(type)
          this.costumReValidate({ name, re, value }).then(() => {
            resolve({ name, message: rule.message })
          }).catch(() => {
            reject({ name, message: rule.message })
          })
        } else {
          throw new Error('unsupported validate type')
        }
      })
    },
    costumFnValidate({ name, fn, value }) {
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
    costumReValidate({ name, re, value }) {
      return new Promise((resolve, reject) => {
        if (re.test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    requiredValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (!value) {
          reject()
        } else {
          resolve()
        }
      })
    },
    numberValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (!Number(value)) {
          reject()
        } else {
          resolve()
        }
      })
    },
    emailValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (validators['email'].test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    minLengthValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (value.length < rule.length) {
          reject()
        } else {
          resolve()
        }
      })
    },
    maxLengthValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (value.length > rule.length) {
          reject()
        } else {
          resolve()
        }
      })
    },
    linkValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (validators['link'].test(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    arrayValidate({ name, rule, value }) {
      return new Promise((resolve, reject) => {
        if (Array.isArray(value)) {
          resolve()
        } else {
          reject()
        }
      })
    },
    dateValidate({ name, rule, value }) {
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
