<template>
  <div :class="wrapClasses" class="ui-textarea">
    <div class="ui-textarea-prefix" @click="focus" v-if="$slots.prefix" ref="prefix">
      <slot name="prefix"></slot>
    </div>
    <textarea class="ui-textarea-inner" :rows="rows" :tabindex="tabindex" :readonly="readonly" :disabled="disabled" v-model="val" :maxlength="maxLength" :minLength="minLength" :placeholder="placeholder" ref="textarea" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keyup="handleKeyup" @keydown="handleKeydown" @keyup.enter="handleEnter" @keyup.esc="handleEsc" @change="handleChange"></textarea>
    <fade-transition>
      <div class="ui-textarea-counter" v-if="counter && val && val.length">{{val.length}}/{{maxLength}}</div>
    </fade-transition>
  </div>
</template>
<script>
import '../assets/scss/textarea.scss'
import UiIcon from '../icon/icon.vue'
import { FadeTransition } from 'vue2-transitions'
import Autosize from 'autosize'
export default {
  name: "ui-textarea",
  data() {
    return {
      focusIn: false,
      val: this.value,
      error: [],
    };
  },

  props: {
    tabindex: Number,
    value: [String, Number],
    maxLength: Number,
    minLength: Number,
    counter: Boolean,
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
    theme: String, // flat/ghost
    errors: Array
  },
  components: {
    UiIcon,
    FadeTransition
  },
  computed: {
    wrapClasses() {
      return [
        this.focusIn && `ui-textarea-focusin`,
        this.disabled && `ui-textarea-disabled`,
        this.errors && `ui-textarea-with-error`,
        this.$slots.prefix && `ui-textarea-with-prefix`,
        this.theme && `ui-textarea-theme-${this.theme}`,
        this.readonly && `ui-textarea-readonly`,
        // this.resize && `ui-textarea-resize`
      ];
    }
  },
  methods: {
    select() {
      this.$refs['textarea'].select();
    },
    focus() {
      this.$refs['textarea'].focus();
    },
    handleEnter(e) {
      this.$emit("submit", this.val);
    },
    handleEsc(e) {
      this.$emit("esc", this.val);
      this.$refs['textarea'].blur();
    },
    handleKeyup(e) {
      this.$emit("keyup", this.val);
    },
    handleKeydown(e) {
      this.$emit("keydown", this.val);
    },
    handleInput(e) {

      this.$emit("input", this.val);
    },
    handleFocus(e) {
      this.focusIn = true;
      this.$emit("focus", this.val);
    },
    handleBlur(e) {
      this.focusIn = false;
      this.$emit("blur", this.val);
    },
    handleChange(e) {
      this.$emit('change', this.val)
    },
    clear() {
      this.val = ''
      this.focus()
    }
  },
  watch: {
    val(val) {
      this.$emit('input', val);
    }
  },
  mounted() {
    if (this.autosize) {
      Autosize(this.$refs['textarea'])
    }
  }
};

</script>
