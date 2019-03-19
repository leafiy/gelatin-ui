<template>
  <div class="ui-radio" :class="classes">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :required="required"
      :disabled="disabled"
      @change="onChange"
      :checked="isChecked"
    />
    <label :for="id">
      <slot name="input-bix">
        <span class="ui-radio-input-box"> </span>
      </slot>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import guid from "buxton/string/guid";
import "../assets/scss/checkbox.scss";
export default {
  name: "ui-radio",
  model: {
    prop: "modelValue",
    event: "input"
  },
  props: {
    id: {
      type: String,
      default() {
        return "radio-id-" + guid();
      }
    },
    name: String,
    value: String,
    modelValue: {
      default: undefined
    },
    checked: Boolean,
    required: Boolean,
    disabled: Boolean,
    model: {}
  },
  computed: {
    classes() {
      return {
        "ui-radio-checked": this.isChecked,
        "ui-radio-disabled": this.disabled
      };
    },
    isChecked() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      return this.modelValue === this.value;
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      this.$emit("input", this.isChecked ? "" : this.value);
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
