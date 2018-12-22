<template>
  <div :class="classes" class="ui-radio" @click="setValue">
    <input
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      @change="change"
      :checked="isChecked"
      :disabled="disabled"
    />
    <label :for="id">
      <slot name="radio-box"> <span class="ui-radio-box"> </span> </slot>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import nanoid from "nanoid";
import "../assets/scss/checkbox.scss";
import isObjectEqual from "../../src/utils/isObjectEqual.js";
export default {
  name: "ui-radio",
  model: {
    prop: "modelValue",
    event: "input"
  },
  props: {
    id: {
      type: String,
      default: function() {
        return "ui-radio-" + nanoid();
      }
    },
    name: String,
    value: [String, Number, Object, Boolean],
    modelValue: [Array, String, Number, Boolean, Object],
    checked: Boolean,
    disabled: Boolean,
    toggle: Boolean
  },
  computed: {
    classes() {
      return {
        "ui-radio-disabled": this.disabled,
        "ui-radio-checked": this.isChecked,
        "ui-radio-toggle": this.toggle
      };
    },
    isChecked() {
      if (!this.modelValue) {
        return this.checked;
      } else {
        if (typeof this.value == "object") {
          return isObjectEqual(this.modelValue, this.value);
        } else {
          return this.modelValue == this.value;
        }
      }
    }
  },
  methods: {
    change(e) {
      this.$emit("change", e.target.value);
    },
    setValue(e) {
      if (this.disabled) return;
      let value;
      if (this.isChecked) {
        value = false;
      } else {
        value = this.value ? this.value : true;
      }
      this.$emit("input", value);
    }
  }
};
</script>
