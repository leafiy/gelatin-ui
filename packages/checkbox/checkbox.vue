<template>
  <div class="ui-checkbox" :class="classes">
    <input type="checkbox" :id="id" :name="name" :value="value" :class="className" :required="required" :disabled="disabled" @change="onChange" :checked="state">
    <label :for="id">
      <slot></slot>
    </label>
    <svg class="input-box-tick" viewBox="0 0 16 16">
      <path fill="none" d="M1.7,7.8l3.8,3.4l9-8.8"></path>
    </svg>
  </div>
</template>
<script>
import nanoid from 'nanoid'
export default {
  name: 'ui-checkbox',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      default () {
        return nanoid();
      },
    },
    name: String,
    value: {
      default: null,
    },
    modelValue: "",
    className: String,
    checked: Boolean,
    required: Boolean,
    disabled: Boolean,
    model: {}
  },
  data() {
    return {
      isChecked: null,
    }
  },
  mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  },

  computed: {
    classes() {
      return {
        // 'ui-checkbox-animate': this.animate,
        'ui-checkbox-checked': this.checked,
        'ui-checkbox-disabled': this.disabled,
        'ui-checkbox-indeterminate': this.indeterminate
      }
    },
    state() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) > -1;
      }
      return !!this.modelValue;
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      let value;
      if (Array.isArray(this.modelValue)) {
        value = this.modelValue.slice(0);
        if (this.state) {
          value.splice(value.indexOf(this.value), 1);
        } else {
          value.push(this.value);
        }
      } else {
        value = !this.state;
      }
      this.$emit('input', value);
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
}

</script>
