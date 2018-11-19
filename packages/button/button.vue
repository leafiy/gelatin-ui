<template>
  <button :type="htmlType" :class="classes" :disabled="disabled" :loading="loading" @click="handleClick" formnovalidate>
    <span><slot></slot></span>
    <transition name="fade">
      <ui-icon name="spinner" class="spin" v-if="loading"></ui-icon>
    </transition>
  </button>
</template>
<script>
import '../assets/scss/button.scss'
import events from "../../src/utils/events.js";
export default {
  name: "ui-button",
  props: {
    type: {
      validator(value) {
        return [
          "primary",
          "border",
          "dashed",
          "warning",
          "error",
          "link",
          "light",
          "ghost"
        ].includes(value);
      }
    },
    shape: {
      validator(value) {
        return ["circle", "circle-outline"].includes(value);
      }
    },
    size: {
      validator(value) {
        return ["sm", "lg"].includes(value);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].includes(value);
      }
    },
    //icon: String,
    full: Boolean,
    submit: Boolean,
    center: Boolean,
    group: String
  },
  computed: {
    classes() {
      return [
        `ui-btn`,
        {
          [`ui-btn-disabled`]: !!this.disabled,
          [`ui-btn-${this.type}`]: !!this.type,
          [`ui-btn-full`]: this.full,
          [`ui-btn-center`]: this.center,
          [`ui-btn-${this.shape}`]: !!this.shape,
          [`ui-btn-${this.size}`]: !!this.size,
          [`ui-btn-loading`]: this.loading != null && this.loading
        }
      ];
    }
  },
  data() {
    return {
      error: {}
    };
  },
  methods: {
    handleClick(event) {
      if (!this.loading) {
        this.$emit("click", event);
      }
      if (this.group) {
        events.$emit(`v-${this.group}`);
      }
    },
    handleError(e) {
      let name = Object.keys(e)[0];
      this.error[name] = e[name];
    },
    validate() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let arr = [];
          for (let key of Object.keys(this.error)) {
            arr.push(this.error[key]);
          }
          if (arr.indexOf(true) > -1) {
            reject(arr);
          } else {
            resolve();
          }
        }, 20);
      });
    }
  },
  mounted() {
    events.$on(`do-v-${this.group}`, e => {
      this.handleError(e);
    });
  },
  beforeDestroy() {
    events.$off(`do-v-${this.group}`, () => {});
  }
};
</script>