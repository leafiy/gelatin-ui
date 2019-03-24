<template>
  <div :class="wrapClasses" class="ui-input" @click="focus" :style="styles">
    <div
      class="ui-input-prefix"
      @click="focus"
      v-if="$slots.prefix"
      ref="prefix"
    >
      <slot name="prefix"></slot>
    </div>
    <input
      :tabindex="tabindex"
      :name="name"
      :autofocus="autofocus"
      :readonly="readonly"
      :disabled="disabled"
      class="ui-input-inner"
      :value="inputVal"
      :type="type"
      :maxlength="maxLength"
      :minLength="minLength"
      :placeholder="placeholder"
      :autocomplete="autoComplete ? 'on' : 'off'"
      ref="input"
      @input.exact="handleInput"
      @focus.exact="handleFocus"
      @blur.exact="handleBlur"
      @keyup.exact="handleKeyup"
      @keydown.exact="handleKeydown"
      @keyup.enter.exact="handleEnter"
      @keyup.esc.exact="handleEsc"
      @change.exact="handleChange"
      @keyup.delete.exact="handleDelete"
      :min="min"
      :max="max"
    />
    <transition name="fade">
      <div
        class="ui-input-clear"
        v-if="inputVal && showClear && !readonly"
        @click="clear"
      >
        <ui-icon name="close-circle-fill"></ui-icon>
      </div>
    </transition>
    <transition name="fade">
      <ui-spinner v-if="loading"></ui-spinner>
    </transition>
    <slot></slot>
    <div
      class="ui-input-suffix"
      @click="$refs['input'] && focus"
      v-if="$slots.suffix"
      ref="suffix"
    >
      <slot name="suffix"></slot>
    </div>
    <!-- <transition name="fade">
      <div class="ui-input-errors" v-if="errors.length">{{errors.join(', ')}}</div>
    </transition> -->
  </div>
</template>
<script>
import "../assets/scss/input.scss";
import UiIcon from "../icon/icon.vue";
import UiSpinner from "../spinner/spinner.vue";
export default {
  name: "ui-input",
  data() {
    return {
      focusIn: false,
      inputVal:
        this.value === undefined || this.value === null ? "" : this.value,
      errors: false
    };
  },
  props: {
    tabindex: Number,
    value: [String, Number],
    loading: Boolean,
    type: {
      type: String,
      default: "text"
    },
    name: String,
    maxLength: [Number, String],
    minLength: [Number, String],
    max: [Number, String],
    min: [Number, String],
    placeholder: {
      type: String,
      default: "type in here"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoComplete: Boolean,
    showClear: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean,
    theme: String, // flat/ghost
    width: Number
  },
  components: {
    UiIcon,
    UiSpinner
  },
  computed: {
    wrapClasses() {
      return [
        this.focusIn && `ui-input-focusin`,
        this.disabled && `ui-input-disabled`,
        this.errors && `ui-input-with-error`,
        this.$slots.suffix && `ui-input-with-suffix`,
        this.$slots.prefix && `ui-input-with-prefix`,
        this.theme && `ui-input-theme-${this.theme}`,
        this.readonly && `ui-input-readonly`
      ];
    },
    styles() {
      return {
        width: this.width && this.width + "px"
      };
    }
  },
  methods: {
    select() {
      this.$refs["input"] && this.$refs["input"].select();
    },
    focus() {
      this.$refs["input"] && this.$refs["input"].focus();
    },
    handleEnter(e) {
      // this.$emit("enter", this.inputVal);
      this.correctType("enter");
    },
    handleEsc(e) {
      this.$refs["input"].blur();
      this.correctType("esc");
    },
    handleKeyup(e) {
      this.correctType("keyup");
    },
    handleKeydown(e) {
      this.correctType("keydown");
    },
    handleInput(e) {
      this.inputVal = e.target.value;
      this.correctType("input");
    },
    handleFocus(e) {
      this.focusIn = true;
      this.correctType("focus");
    },
    handleBlur(e) {
      this.focusIn = false;
      this.correctType("blur");
    },
    handleChange(e) {
      this.correctType("change");
    },
    handleDelete(e) {
      this.correctType("delete");
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
      this.$nextTick(() => {
        this.inputVal = "";
        this.errors = false;
        this.focus();
      });
    },
    correctType(event) {
      if (this.type == "number") {
        this.$emit(event, Number(this.inputVal));
      } else {
        this.$emit(event, this.inputVal);
      }
    }
  },
  watch: {
    value(val) {
      this.inputVal = val;
    }
  }
};
</script>
