<template>
  <transition
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    @before-enter="animating = true"
    @after-enter="enter"
    @before-leave="animating = true"
    @after-leave="leave"
  >
    <div
      class="ui-slide-panel"
      :class="[isolate && 'ui-slide-panel-isolate']"
      v-if="_show"
      :style="{ 'animation-duration': speed + 'ms' }"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/slide-panel.scss";
import upperCase from "../../src/utils/upperCase.js";
export default {
  name: "ui-slide-panel",

  data() {
    return {
      animating: false
    };
  },
  computed: {
    _show: {
      get: function() {
        return this.show;
      },
      set: function(newValue) {
        if (!this.animating) {
          return newValue;
        }
      }
    },
    enterClass() {
      return `slideIn${upperCase(this.direction)}`;
    },
    leaveClass() {
      return `slideOut${upperCase(this.direction)}`;
    }
  },
  props: {
    show: Boolean,
    speed: Number,
    isolate: Boolean,
    zIndex: Number,
    direction: {
      type: String,
      default: "right",
      validator(val) {
        return ["down", "up", "right", "left"].includes(val);
      }
    }
  },
  methods: {
    open() {
      this._show = true;
    },
    close() {
      this._show = false;
    },
    enter() {
      this.animating = true;
      this.$emit("open");
    },
    leave() {
      this.animating = false;
      this.$emit("close");
    }
  },
  watch: {
    _show() {
      if (this._show && this.isolate) {
        document.body.appendChild(this.$el);
      }
    }
  }
};
</script>
<style lang="css" scoped></style>
