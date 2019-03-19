<template>
  <div :class="classes" class="ui-checkbox">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :required="required"
      :disabled="disabled"
      @change="onChange"
      :checked="isChecked"
      :indeterminate="!isChecked && indeterminate"
    />
    <label :for="id">
      <slot name="input-box">
        <span class="ui-checkbox-input-box">
          <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5385 0.228769C11.0395 -0.16 10.3415 -0.0410482 9.97806 0.492783L4.78903 8.12889L1.93058 5.01584C1.50946 4.53423 0.802782 4.51102 0.352815 4.96362C-0.0971515 5.41331 -0.120227 6.17054 0.30378 6.64925C0.30378 6.64925 3.7766 10.5253 4.2756 10.9141C4.7746 11.3029 5.47263 11.1839 5.83606 10.6501L11.7866 1.89699C12.15 1.36026 12.0375 0.614635 11.5385 0.228769Z"
            />
          </svg>
        </span>
        <span
          class="ui-checkbox-indeterminate-bar"
          v-if="indeterminate && !toggle"
        ></span>
      </slot>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import guid from "buxton/string/guid";
import "../assets/scss/checkbox.scss";

export default {
  name: "ui-checkbox",
  model: {
    prop: "modelValue",
    event: "input"
  },
  props: {
    id: {
      type: String,
      default() {
        return "checkbox-id-" + guid();
      }
    },
    name: String,
    value: [String, Number, Boolean, Array],
    modelValue: {
      default: undefined
    },
    checked: Boolean,
    required: Boolean,
    disabled: Boolean,
    model: {},
    indeterminate: Boolean
  },
  computed: {
    classes() {
      return {
        "ui-checkbox-checked": this.isChecked
      };
    },
    isChecked() {
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
        if (this.isChecked) {
          value.splice(value.indexOf(this.value), 1);
        } else {
          value.push(this.value);
        }
      } else {
        value = this.value;
      }

      this.$emit("input", value);
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.isChecked) {
        this.toggle();
      }
    }
  },
  mounted() {
    if (this.checked && !this.isChecked) {
      this.toggle();
    }
  }
};
</script>
