<template>
  <div :class="classes" class="ui-checkbox">
    <input type="checkbox" :id="id" :name="name" :value="value" :checked="isChecked" :disabled="disabled" :indeterminate="!isChecked&&indeterminate" @change="setValue" />
    <label :for="id" @click="prevent">
      <slot name="checkbox-box">
        <span class="ui-checkbox-box">
         <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5385 0.228769C11.0395 -0.16 10.3415 -0.0410482 9.97806 0.492783L4.78903 8.12889L1.93058 5.01584C1.50946 4.53423 0.802782 4.51102 0.352815 4.96362C-0.0971515 5.41331 -0.120227 6.17054 0.30378 6.64925C0.30378 6.64925 3.7766 10.5253 4.2756 10.9141C4.7746 11.3029 5.47263 11.1839 5.83606 10.6501L11.7866 1.89699C12.15 1.36026 12.0375 0.614635 11.5385 0.228769Z" />
            </svg>
        </span>
        <span class="ui-checkbox-indeterminate-bar" v-if="indeterminate && !toggle" ></span>
      </slot>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import nanoid from 'nanoid'
import '../assets/scss/checkbox.scss'
import isObjectEqual from '../../src/utils/isObjectEqual.js'
export default {
  name: 'ui-checkbox',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      default: function() {
        return nanoid()
      },
    },
    value: [String, Number, Object],
    modelValue: [Array, String, Number, Boolean, Object],
    checked: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    toggle: Boolean,
    name: String
  },
  computed: {
    classes() {
      return {
        'ui-checkbox-disabled': this.disabled,
        'ui-checkbox-checked': this.isChecked,
        'ui-checkbox-toggle': this.toggle,
        'ui-checkbox-indeterminate': this.$options.propsData.hasOwnProperty('indeterminate') && this.indeterminate
      }
    },
    isChecked() {
      if (!this.modelValue) {
        return this.checked;
      }
      if (this.isGroup) {
        if (typeof this.value == 'object') {
          return this.modelValue.some(item => isObjectEqual(item, this.value))
        } else {
          return this.modelValue.includes(this.value)
        }

      }
      return !!this.modelValue;


    },
    isGroup() {
      return this.$options.propsData.hasOwnProperty('value') && Array.isArray(this.modelValue)
    },
    checkList() {
      return this.isGroup && this.modelValue
    }

  },
  methods: {
    prevent(e) {
      if (this.$options.propsData.hasOwnProperty('indeterminate')) {
        e.preventDefault()
        return
      }
    },
    setValue(e) {
      if (this.disabled || this.$options.hasOwnProperty('indeterminate')) return;
      let value
      if (!this.isGroup) {

        if (!this.isChecked && this.value) {
          value = this.value
        } else {
          value = !this.isChecked
        }


      } else {
        if (this.isChecked) {
          this.checkList.splice(this.checkList.indexOf(this.value), 1)
        } else {
          this.checkList.push(this.value)
        }
        value = this.checkList
      }


      this.$emit("input", value);
      this.$emit('change', value)

    },

  }
};

</script>
