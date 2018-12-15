import loadingBar from '../progress/types/bar.vue'
import Vue from 'vue'
const LoadingBar = Vue.extend(loadingBar)
let instance = null



const $LoadingBar = function(options) {

  const defaultOptions = {
    size: 3,
    percentage: 0,
    indeterminate: false,
    loadingBar: true,
    showNumber: false,
    foreColor: '#08D7B8',
    backColor: '#ffffff',
    duration: 4000
  }
  options = Object.assign(defaultOptions, options)

  if (instance) {
    clearInterval(instance.timer)
    instance = null
  }
  instance = new LoadingBar({
    propsData: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.show = true
  clearInterval(instance.timer)
  if (options.indeterminate) {
    return instance
  }
  if (options.duration) {
    instance.timer = setInterval(() => {
      instance.percentage += 100 / (10 * (options.duration / 1000))
      if (instance.percentage >= 100) {
        clearInterval(instance.timer)
        instance.timer = null
      }
    }, 100)
  }
  return instance
}
$LoadingBar.finish = function() {
  if (!instance) {
    return
  }
  instance.percentage = 100
  clearInterval(instance.timer)
  setTimeout(() => {
    instance.show = false
  }, 500)
}
$LoadingBar.increase = function(percent = 1) {
  if (!instance) {
    return
  }
  instance.percentage += percent
  if (instance.percentage >= 100) {
    instance.percentage = 100
  }
}
$LoadingBar.decrease = function(percent = 1) {
  if (!instance) {
    return
  }
  instance.percentage -= percent
  if (instance.percentage <= 0) {
    instance.percentage = 0
  }
}
$LoadingBar.fail = function() {
  if (!instance) {
    return
  }
  instance.percentage = 100
  instance.foreColor = '#ea4335'
  setTimeout(() => {
    instance.show = false
  }, 1000)
  clearInterval(instance.timer)
  instance.time = null
}
export default $LoadingBar