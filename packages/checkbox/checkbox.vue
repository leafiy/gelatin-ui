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
      ref="input"
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
          v-if="isIndeterminate"
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
  data() {
    return {
      len: "",
      isIndeterminate: false,
      forceChecked: false
    };
  },
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
        "ui-checkbox-checked": this.isChecked,
        "ui-checkbox-disabled": this.disabled,
        "ui-checkbox-indeterminate": this.isIndeterminate
      };
    },
    isChecked() {
      if (this.forceChecked) {
        return !!this.forceChecked;
      }
      if (this.modelValue === undefined) {
        return this.checked;
      }
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);
      }
      return !!this.modelValue;
    }
  },
  methods: {
    onChange(e) {
      if (this.indeterminate) {
        let value = e.target.checked;
        return this.checkIndeterminate(value);
      }
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
      } else if (typeof this.value == "boolean") {
        value = !this.isChecked;
      } else {
        value = this.value;
      }
      this.$emit("input", value);
    },
    checkIndeterminate(value) {
      let model = [];
      this.getGroup().forEach(el => {
        if (el.value) {
          model.push(el.value);
        }
      });
      if (value) {
        this.$emit("input", model);
      } else {
        this.$emit("input", []);
      }
    },
    getGroup() {
      return Array.from(
        document.querySelectorAll(`input[name="${this.name}"]`)
      );
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.isChecked) {
        this.toggle();
      }
    },
    modelValue(value) {
      if (this.indeterminate && Array.isArray(value)) {
        let len = this.getGroup().length - 1;
        this.$refs["input"].checked = !!this.$refs["input"].checked;
        if (value.length > 0 && value.length < len) {
          this.isIndeterminate = true;
          this.forceChecked = false;
        }
        if (value.length == 0) {
          this.isIndeterminate = false;
          this.forceChecked = false;
        }
        if (value.length == len) {
          this.isIndeterminate = false;
          this.forceChecked = true;
        }
      }
    }
  },
  mounted() {
    if (this.indeterminate && !Array.isArray(this.modelValue)) {
      throw new Error("indeterminate requires Array model");
    }
    if (this.checked && !this.isChecked) {
      this.toggle();
    }
  }
};
</script>
