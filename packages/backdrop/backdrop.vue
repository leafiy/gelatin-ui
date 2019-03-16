<template>
  <transition :name="transition">
    <div class="ui-backdrop" v-if="show" :style="styles" :class="classes">
      <slot></slot>
      <span v-if="content">{{ content }}</span>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/backdrop.scss";
export default {
  name: "ui-backdrop",
  data() {
    return {};
  },
  props: {
    show: Boolean,
    transition: {
      type: String,
      default: "fade"
    },
    onClick: Function,
    zIndex: Number,
    fullscreen: Boolean,
    content: String,
    radius: Number,
    color: {
      type: String,
      default: "dark",
      validator(value) {
        return ["white", "light", "dark", "darker"].includes(value);
      }
    }
  },
  computed: {
    styles() {
      return [
        {
          zIndex: this.zIndex,
          borderRadius: `${this.radius}px`
        }
      ];
    },
    classes() {
      return [
        `ui-backdrop-${this.color}`,
        this.fullscreen && "ui-backdrop-fullscreen"
      ];
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    }
  }
};
</script>
