<template>
  <div :class="wrapClasses" class="ui-textarea">
    <div
      class="ui-textarea-prefix"
      @click="focus"
      v-if="$slots.prefix"
      ref="prefix"
    >
      <slot name="prefix"></slot>
    </div>
    <textarea
      :name="name"
      class="ui-textarea-inner"
      :rows="rows"
      :tabindex="tabindex"
      :readonly="readonly"
      :disabled="disabled"
      v-model="inputVal"
      :maxlength="maxLength"
      :minLength="minLength"
      :placeholder="placeholder"
      ref="textarea"
      @input.exact="handleInput"
      @focus.exact="handleFocus"
      @blur.exact="handleBlur"
      @keyup.exact="handleKeyup"
      @keydown.exact="handleKeydown"
      @keyup.enter.exact="handleEnter"
      @keyup.esc.exact="handleEsc"
      @change.exact="handleChange"
    ></textarea>
    <transition name="fade">
      <div
        class="ui-textarea-counter"
        v-if="counter && inputVal && inputVal.length"
      >
        {{ inputVal.length }}/{{ maxLength }}
      </div>
    </transition>
  </div>
</template>
<script>
import "../assets/scss/textarea.scss";
import Autosize from "autosize";
export default {
  name: "ui-textarea",
  data() {
    return {
      focusIn: false,
      inputVal:
        this.value === undefined || this.value === null ? "" : this.value,
      errors: false,
      autosizeIns: null
    };
  },

  props: {
    tabindex: Number,
    value: [String, Number],
    maxLength: Number,
    minLength: Number,
    counter: Boolean,
    name: String,
    autosize: {
      type: Boolean,
      default: true
    },
    // resize: Boolean,
    placeholder: {
      type: String,
      default: "type in here"
    },
    rows: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean,
    theme: String // flat/ghost
  },
  computed: {
    wrapClasses() {
      return [
        this.focusIn && `ui-textarea-focusin`,
        this.disabled && `ui-textarea-disabled`,
        this.errors && `ui-textarea-with-error`,
        this.$slots.prefix && `ui-textarea-with-prefix`,
        this.theme && `ui-textarea-theme-${this.theme}`,
        this.readonly && `ui-textarea-readonly`
        // this.resize && `ui-textarea-resize`
      ];
    }
  },
  methods: {
    select() {
      this.$refs["textarea"].select();
    },
    focus() {
      this.$refs["textarea"].focus();
    },
    handleEnter(e) {
      this.$emit("submit", this.inputVal);
    },
    handleEsc(e) {
      this.$emit("esc", this.inputVal);
      this.$refs["textarea"].blur();
    },
    handleKeyup(e) {
      this.$emit("keyup", this.inputVal);
    },
    handleKeydown(e) {
      this.$emit("keydown", this.inputVal);
    },
    handleInput(e) {
      this.inputVal = e.target.value;
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
      this.inputVal = "";
      this.focus();
    },
    resetSize() {
      Autosize.update(this.$refs["textarea"]);
    },
    sizeChanged() {
      this.$emit("size-changed");
    }
  },
  watch: {
    value(val) {
      this.inputVal = val;
    }
  },
  mounted() {
    if (this.autosize) {
      this.autosizeIns = Autosize(this.$refs["textarea"]);
      this.$refs["textarea"].addEventListener(
        "autosize:resized",
        this.sizeChanged
      );
    }
  },
  beforeDestroy() {
    if (this.autosize) {
      this.$refs["textarea"].removeEventListener(
        "autosize:resized",
        this.sizeChanged
      );
    }
  }
};
</script>
