<template>
  <transition name="fade">
    <div
      class="ui-backdrop"
      v-if="show"
      :style="styles"
      :class="classes"
      @click="click"
    >
      <slot></slot>
      <ui-spinner v-if="showSpinner"></ui-spinner>
      <span v-if="text">{{ text }}</span>
    </div>
  </transition>
</template>
<script>
import UiSpinner from "../spinner/spinner.vue";
import "../assets/scss/backdrop.scss";
import events from "../../src/utils/events.js";
import Vue from "vue";
if (!Vue.prototype.$zIndex) {
  import("../../src/utils/zHandler.js").then(res => {
    Vue.prototype.$zIndex = new res.default();
  });
}
export default {
  name: "ui-backdrop",
  data() {
    return {
      show: false
    };
  },
  components: {
    UiSpinner
  },
  props: {
    type: {
      type: String
    },
    onClick: Function,
    showSpinner: Boolean,
    // zIndex: Number,
    global: Boolean,
    text: String,
    closeOnClick: Boolean,
    radius: [Number, String],
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
          zIndex: this.$zIndex.add(),
          borderRadius:
            typeof this.radius == "number" ? this.radius + "px" : this.radius
        }
      ];
    },
    classes() {
      return [`ui-backdrop-${this.color}`, this.global && "ui-backdrop-global"];
    }
  },
  methods: {
    click() {
      if (this.closeOnClick) {
        this.close();
      }
      if (this.onClick && typeof this.onClick == "function") {
        this.onClick();
      }
    },
    close() {
      this.show = false;
      this.$zIndex.remove();
    }
  },
  mounted() {
    this.show = true;
    this.$zIndex.add();
    if (this.global) {
      events.$on("close-backdrop", this.close);
    }
  }
};
</script>
