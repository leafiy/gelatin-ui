<template>
  <transition
    :name="transition"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="ui-backdrop" v-if="show_" :style="styles" :class="classes">
      <slot>
        <span v-if="content">{{ content }}</span>
      </slot>
      <ui-spinner
        :color="spinnerColor"
        :type="loading"
        v-if="loading"
      ></ui-spinner>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/backdrop.scss";
import { lock, unlock } from "tua-body-scroll-lock";
import isIOS from "buxton/browser/isIOS.js";
import UiSpinner from "../spinner/spinner.vue";
import { globalStore } from "../../src/utils/globalStore.js";
import events from "../../src/utils/events.js";
export default {
  name: "ui-backdrop",
  data() {
    return {
      parentPosition: "",
      radius_:
        typeof this.radius == "number" ? `${this.radius}px` : `${this.radius}`,
      show_: false
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: "fade"
    },
    zIndex: Number,
    fullscreen: Boolean,
    content: String,
    radius: [Number, String],
    autoRadius: Boolean,
    selectable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "dark",
      validator(value) {
        return ["lighter", "light", "dark", "darker"].includes(value);
      }
    },
    lock: Boolean,
    parentEl: Array,
    loading: [String, Boolean],
    blur: [Boolean, Number]
  },
  components: {
    UiSpinner
  },
  computed: {
    styles() {
      return [
        {
          zIndex: this.zIndex,
          borderRadius: this.radius_,
          userSelect: this.selectable ? "" : "none"
        }
      ];
    },
    classes() {
      return [
        `ui-backdrop-${this.color}`,
        this.fullscreen && "ui-backdrop-fullscreen"
      ];
    },
    spinnerColor() {
      return this.color == "dark" || this.color == "darker" ? "light" : "dark";
    }
  },
  watch: {
    show(value) {
      this.show_ = value;
      if (value) {
        if (this.fullscreen && globalStore.fullscreenBackdrop) {
          this.show_ = false;
          return;
        }

        this.fitContainer();
      } else {
        if (this.lock) {
          this.unlockScroll();
        }
      }
    }
  },
  methods: {
    getParent() {
      if (this.parentEl) {
        return this.parentEl[0] ? this.parentEl[0] : null;
      } else {
        return this.$el.parentNode;
      }
    },
    lockScroll() {
      if (this.fullscreen) {
        lock(null);
      }
      if (isIOS()) {
        lock(this.$el);
      }
    },
    unlockScroll() {
      if (this.fullscreen) {
        unlock(null);
      }
      if (isIOS()) {
        unlock(this.$el);
      }
    },
    fitContainer() {
      let el = this.getParent();
      if (!this.fullscreen && el) {
        this.parentPosition = getComputedStyle(el).position;
        if (
          this.parentPosition !== "relative" &&
          this.parentPosition !== "absolute"
        ) {
          el.style.position = "relative";
        }
      }
      if (this.autoRadius && !this.radius && !this.fullscreen) {
        let radius = getComputedStyle(el).borderRadius;
        this.radius_ = radius;
      }
      if (this.fullscreen) {
        document.body.appendChild(this.$el);
        globalStore.fullscreenBackdrop = true;
      }
      if (this.lock) {
        this.lockScroll();
      }
    },
    resetContainer() {
      let el = this.getParent();
      if (!this.fullscreen && el) {
        el.style.position = this.parentPosition;
      }
      if (this.fullscreen) {
        document.body.removeChild(this.$el);
        globalStore.fullscreenBackdrop = false;
      }
    },
    afterEnter() {
      this.$emit("after-enter");
    },
    afterLeave() {
      this.resetContainer();
      this.$emit("after-leave");
    }
  },
  mounted() {
    if (this.show) {
      this.show_ = true;
      this.fitContainer();
    }
    events.$on("close-all-backdrop", () => {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    });
  }
};
</script>
