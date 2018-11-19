<template>
  <div :class="wrapClasses">
    <div class="ui-input__prefix" @click="focus" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </div>
    <ui-icon :name="icon" v-if="icon" class="prefix-icon"></ui-icon>
    <input :tabindex="tabindex" v-if="type !== 'textarea'" :autofocus="autofocus" :readonly="ifReadonly" :disabled="disabled" :style="[paddingLeft,paddingRight]" class="ui-input__inner" :class="inputClasses" :value="currentValue" :type="type" :maxlength="maxLength" :placeholder="placeholder" :autocomplete="autoComplete" ref="input" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keyup="handleKeyup" @keydown="handleKeydown" @keyup.enter="handleEnter" @keyup.esc="handleEsc">
    <textarea :tabindex="tabindex" v-if="type == 'textarea'" :readonly="ifReadonly" :disabled="disabled" :style="[paddingLeft,paddingRight]" class="ui-textarea__inner" :class="inputClasses" :value="currentValue" :type="type" :maxlength="maxLength" :placeholder="placeholder" :autocomplete="autoComplete" ref="input" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keyup="handleKeyup" @keydown="handleKeydown" @keyup.enter="handleEnter" @keyup.esc="handleEsc" :rows="rows"></textarea>
    <transition name="fade">
      <div class="ui-input-counter" v-if="showCounter && counter>0">{{counter}}/{{maxLength}}</div>
    </transition>
    <transition name="fade">
      <ui-icon name="spinner" class="suffix-icon spin" v-if="loading"></ui-icon>
    </transition>
    <div class="ui-input__suffix" @click="focus" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </div>
    <transition name="fade">
      <span class="ui-input__error-msg" v-if="errorArr && errorArr.length">{{errorArr}}</span></transition>
  </div>
</template>
<script>
import '../assets/scss/input.scss'
import events from '../../src/utils/events.js'
import Validators from "../../src/utils/validator.js";
import { flatten } from 'lodash'
import autosize from "autosize";
export default {
  name: "ui-input",
  data() {
    return {
      currentValue: this.value,
      focusIn: false,
      error: [],
      triggers: {},
      paddingLeft: "",
      paddingRight: "",
      supportTriggers: ["submit", "input", "blur", "focus", "keyup", "keydown"]
    };
  },
  props: {
    rules: Array,
    group: String,
    tabindex: Number,
    clearErrorOnInput: {
      type: Boolean,
      default: true
    },
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: "text"
    },
    maxLength: {
      type: Number,
      default: 40
    },
    placeholder: {
      type: String,
      default: "type in here"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    autoComplete: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ""
    },
    ghost: Boolean,
    // errorArr: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // },
    loading: {
      type: Boolean,
      default: false
    },
    clickToCopy: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    rows: Number,
    showCounter: Boolean,
    autoGrow: Boolean,
    autofocus: Boolean
  },
  computed: {
    counter() {
      return this.value.length;
    },
    ifReadonly() {
      return this.readonly ? "readonly" : false;
    },
    inputClasses() {
      return [];
    },
    wrapClasses() {
      return [
        this.focusIn
          ? `ui-${this.type == "textarea" ? "textarea" : "input"}__focusin`
          : "",
        this.type == "textarea" ? "ui-textarea" : "ui-input",
        this.disabled ? "ui-input__disabled" : "",
        this.icon ? "ui-input__with-icon" : "",
        this.errorArr && this.errorArr.length ? "ui-input__with-error" : "",
        this.$slots.suffix ? "ui-input__with-suffix" : "",
        this.$slots.prefix ? "ui-input__with-prefix" : "",
        this.flat ? "ui-input__flat" : "",
        this.ghost ? "ui-input__ghost" : ""
      ];
    },
    errorArr() {
      let errorArr = [];
      for (let e of this.error) {
        if (typeof e === "string") {
          if (!errorArr.includes(e)) {
            errorArr.push(e);
          }
        } else {
          if (!errorArr.includes(e.message)) {
            errorArr.push(e.message);
          }
        }
      }
      return errorArr.join(", ");
    }
  },
  methods: {
    select() {
      this.$el.querySelector(".ui-input__inner").select();
    },
    focus() {
      this.$el.querySelector(".ui-input__inner").focus();
      this.triggerValidate("focus");
    },
    handleEnter() {
      this.$emit("submit", event.target.value);
    },
    handleEsc() {
      this.$emit("esc", event.target.value);
      this.$el.querySelector(".ui-input__inner").blur();
    },
    handleKeyup(event) {
      this.$emit("keyup", event.target.value);
      this.triggerValidate(event.type);
    },
    handleKeydown(event) {
      this.$emit("keydown", event.target.value);
      this.triggerValidate(event.type);
    },
    handleInput(event) {
      let value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.triggerValidate(event.type);
      // if (this.type == 'textarea' && this.autoGrow) {
      //   this.grow()
      // }
      if (this.clearErrorOnInput) {
        this.error = [];
      }
    },
    handleFocus(event) {
      this.focusIn = true;
      this.$emit("focus", event.target.value);
      this.triggerValidate(event.type);
    },
    handleBlur(event) {
      this.focusIn = false;
      this.$emit("blur", event.target.value);
      this.triggerValidate(event.type);
    },
    // grow() {
    //   let el = this.$el.querySelector('textarea')
    //   let height = el.offsetHeight;
    //   if (el.scrollHeight > height) {
    //     el.style.cssText = 'height:' + el.scrollHeight + 'px';
    //   } else {
    //     el.style.cssText = ''
    //   }
    // },
    setVaule() {
      this.currentValue = this.value;
    },
    initValidate() {
      let triggers = {};
      for (let rule of this.rules) {
        if (typeof rule.trigger != "string") {
          throw new Error("trigger must be string");
        }
        if (!this.supportTriggers.includes(rule.trigger)) {
          throw new Error("only support: " + this.supportTriggers.join(", "));
        }
        if (!this[`${rule.type}Check`]) {
          throw new Error(`[${t.type}] validator not support`);
        }
        if (!rule.type) {
          throw new Error("must have a type");
        }
        if (!rule.v) {
          throw new Error("must have validate method");
        }
        if (!triggers[rule.trigger]) {
          triggers[rule.trigger] = [];
        }
        triggers[rule.trigger].push(rule);
      }
      this.triggers = triggers;
    },
    triggerValidate(type) {
      if (this.triggers[type]) {
        let p = [];
        for (let t of this.triggers[type]) {
          p.push(this[`${t.type}Check`](t));
        }
        Promise.all(p).then(data => {
          data = data.map(e => {
            if (e) {
              this.error.push(e);
            }
          });
          events.$emit(`do-v-${this.group}`, {
            [this.$vnode.data.ref]: !!this.errorArr
          });
        });
      }
    },
    requiredCheck(rule) {
      return new Promise((resolve, reject) => {
        if (this.currentValue) {
          resolve();
        } else {
          resolve(rule.message);
        }
      });
    },
    regexCheck(rule) {
      if (!Validators[rule.v]) {
        throw new Error(`not support ${v}, use customValidator instead`);
        return;
      }
      return new Promise((resolve, reject) => {
        if (this.currentValue && !Validators[rule.v].test(this.currentValue)) {
          resolve(rule.message);
        } else {
          resolve();
        }
      });
    },
    minLengthCheck(rule) {
      return new Promise((resolve, reject) => {
        if (this.currentValue && this.currentValue.length < rule.v) {
          resolve(rule.message);
        } else {
          resolve();
        }
      });
    },
    maxLengthCheck(rule) {
      return new Promise((resolve, reject) => {
        if (this.currentValue && this.currentValue.length > rule.v) {
          resolve(rule.message);
        } else {
          resolve();
        }
      });
    }
  },
  mounted() {
    if (this.$slots.prefix) {
      let padding = this.$el.querySelector(".ui-input__prefix").offsetWidth;
      if (this.icon) padding += 22;
      this.paddingLeft = { paddingLeft: `${padding + 6}px` };
    }
    if (this.$slots.suffix) {
      let padding = this.$el.querySelector(".ui-input__suffix").offsetWidth;
      this.paddingRight = { paddingRight: `${padding + 6}px` };
    }
    if (this.rules) {
      this.initValidate();
      events.$on(`v-${this.group}`, () => {
        this.triggerValidate("submit");
      });
    }
    if (this.autoGrow && this.type == "textarea") {
      autosize(this.$el.querySelector("textarea"));
    }
  },
  beforeDestroy: function() {
    events.$off(`v-${this.group}`, () => {});
    events.$off(`do-v-${this.group}`, () => {});
  },

  watch: {
    value: "setVaule"
  }
};
</script>