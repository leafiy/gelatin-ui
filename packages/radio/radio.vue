<template>
  <div :class="classes" class="ui-radio">
    <input type="radio" :name="name" :id="id" :value="value" :checked="isChecked" :disabled="disabled" @change="setValue" />
    <label :for="id">
      <slot name="radio-box">
        <span class="ui-radio-box">
        </span>
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
  name: 'ui-radio',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      default: function() {
        return 'ui-radio-' + nanoid()
      },
    },
    name: String,
    value: [String, Number, Object],
    modelValue: [Array, String, Number, Boolean, Object],
    checked: Boolean,
    disabled: Boolean,
    switch: Boolean
  },
  computed: {
    classes() {
      return {
        'ui-radio-disabled': this.disabled,
        'ui-radio-checked': this.isChecked,
      }
    },
    isChecked() {
      if (!this.modelValue) {
        return this.checked;
      } else {
        if (typeof this.value == 'object') {
          return isObjectEqual(this.modelValue, this.value)
        } else {
          return this.modelValue == this.value
        }
      }
    }

  },
  methods: {
    setValue(e) {
      if (this.disabled) return;
      let value
      if (this.isChecked) {
        return
      } else {
        value = this.value ? this.value : true
      }

      this.$emit("input", value);

    },

  }
};

</script>
