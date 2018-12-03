<template>
  <div :class="wrapClasses" class="ui-input">
    <div class="ui-input-prefix" @click="focus" v-if="$slots.prefix" ref="prefix">
      <slot name="prefix"></slot>
    </div>
    <input :tabindex="tabindex" :name="name" :autofocus="autofocus" :readonly="readonly" :disabled="disabled" class="ui-input-inner" :value="inputVal" :type="type" :maxlength="maxLength" :minLength="minLength" :placeholder="placeholder" :autocomplete="autoComplete ? 'on' : 'off'" ref="input" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keyup="handleKeyup" @keydown="handleKeydown" @keyup.enter="handleEnter" @keyup.esc="handleEsc" @change="handleChange" />
    <fade-transition>
      <div class="ui-input-clear" v-if="inputVal && showClear" @click="clear">
        <ui-icon name="close-circle-fill"></ui-icon>
      </div>
    </fade-transition>
    <fade-transition>
      <ui-spinner v-if="loading"></ui-spinner>
    </fade-transition>
    <div class="ui-input-suffix" @click="focus" v-if="$slots.suffix" ref="suffix">
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
import UiSpinner from '../spinner/spinner.vue'
import { FadeTransition } from "vue2-transitions";
export default {
  name: "ui-input",
  data() {
    return {
      focusIn: false,
      inputVal: this.value === undefined || this.value === null ?
        '' : this.value,
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
    maxLength: Number,
    minLength: Number,
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
  },
  components: {
    UiIcon,
    FadeTransition,
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
    }
  },
  methods: {
    select() {
      this.$refs["input"].select();
    },
    focus() {
      this.$refs["input"].focus();
    },
    handleEnter(e) {
      this.$emit("submit", this.inputVal);
    },
    handleEsc(e) {
      this.$emit("esc", this.inputVal);
      this.$refs["input"].blur();
    },
    handleKeyup(e) {
      this.$emit("keyup", this.inputVal);
    },
    handleKeydown(e) {
      this.$emit("keydown", this.inputVal);
    },
    handleInput(e) {
      this.inputVal = e.target.value
      this.$emit("input", this.inputVal);
    },
    handleFocus(e) {
      this.focusIn = true;
      this.$emit("focus", this.inputVal);
    },
    handleBlur(e) {
      this.focusIn = false;
      this.$emit("blur", this.inputVal);
    },
    handleChange(e) {
      this.$emit("change", this.inputVal);
    },
    clear() {


      this.$emit('input', '')
      this.$emit('change', '');
      this.$emit('clear')
      this.$nextTick(() => {
        this.inputVal = "";
        this.errors = false
        this.focus();
      })
    }
  },
  watch: {
    value(val) {
      this.inputVal = val
    }
  }
};

</script>
