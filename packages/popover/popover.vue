<template>
  <transition name="fade">
    <div
      class="ui-popover"
      :class="{ 'ui-tooltip': tooltip }"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      v-click-outside="close"
      v-if="show"
      :style="stlyes"
    >
      <span
        class="ui-popover-arrow"
        v-if="arrow"
        :style="arrowStyles"
        ref="arrow"
      ></span>
      <div
        class="ui-popover-menu"
        :class="[
          `ui-popover-menu-${menuType}`,
          { 'ui-popover-with-close': showCloseIcon }
        ]"
        :style="menuStyles"
      >
        <ul v-if="menu.length">
          <ui-popover-item
            :params="params"
            :close-on-click="closeOnClick"
            :close-on-mouseleave="closeOnMouseleave"
            @close="show = false"
            v-for="item of menu"
            :key="item.content"
            :item="item"
          ></ui-popover-item>
        </ul>
        <div
          class="ui-popover-content"
          v-if="content"
          @click="closeOnClick ? (show = false) : ''"
          v-html="handleContent(content)"
        ></div>
        <div
          class="ui-popover-close-icon"
          v-if="showCloseIcon && !menu.length"
          @click="show = false"
        >
          <ui-icon name="close"></ui-icon>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import ClickOutside from "vue-click-outside";
import UiPopoverItem from "./popover-item.vue";
import "../assets/scss/popover.scss";
import popPosition from "../../src/mixins/pop/position.js";
import UiIcon from "../icon/icon.vue";
export default {
  name: "ui-popover",
  data() {
    return {};
  },
  mixins: [popPosition],
  props: {
    triggerId: String,
    tooltip: Boolean,
    params: Object,
    menu: {
      type: Array,
      default() {
        return [];
      }
    },
    menuType: {
      type: String,
      default: "vertical",
      validator: function(value) {
        return ["horizon", "vertical"].includes(value);
      }
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    openOnMouseover: Boolean,
    closeOnMouseleave: Boolean,
    onClose: Function,
    content: String,
    showCloseIcon: Boolean,
    textCetner: Boolean,
    width: Number,
    arrow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 10
    },
    arrowSize: {
      type: Number,
      default: 6
    },
    arrowOffset: {
      type: Number,
      default: 10
    },
    align: {
      type: String,
      default: "center",
      validator: function(value) {
        return ["center", "left", "right"].indexOf(value) !== -1;
      }
    },
    radius: {
      type: Number,
      default: 8
    }
  },
  components: {
    UiPopoverItem,
    UiIcon
  },
  methods: {
    mouseenter() {},
    mouseleave() {},
    handleContent(content) {
      if (content.startsWith("data:image/")) {
        let img = document.createElement("img");
        img.src = content;
        return img.outerHTML;
      } else {
        return content;
      }
    },
    unbindEvents() {
      window.removeEventListener("resize", this.calculatePopoverPosition);
      window.removeEventListener("scroll", this.calculatePopoverPosition);
      window.removeEventListener("scroll", this.getAxis);
      window.removeEventListener("resize", this.getAxis);
      if (this.closeOnMouseleave && !this.tooltip) {
        this.trigger.removeEventListener("mouseout", this.close);
      }
    },
    bindEvents() {
      window.addEventListener("resize", this.calculatePopoverPosition);
      window.addEventListener("scroll", this.calculatePopoverPosition);
      window.addEventListener("scroll", this.getAxis);
      window.addEventListener("resize", this.getAxis);
      if (this.closeOnMouseleave && !this.tooltip) {
        this.trigger.addEventListener("mouseout", this.close);
      }
    },
    close(e) {
      this.show = false;
      if (!this.key) {
        this.trigger.removeAttribute("data-popover");
      }
    }
  },
  mounted() {
    this.trigger = document.querySelector(`[data-popover="${this.triggerId}"]`);
  },
  directives: {
    ClickOutside
  },
  watch: {
    show(show) {
      if (!show) {
        if (this.onClose) {
          this.onClose();
        }
        this.$emit("close");
        this.unbindEvents();
      } else {
        this.$nextTick(() => {
          this.bindEvents();
          this.el = this.$el;
          this.calculatePopoverPosition();
        });
      }
    }
  }
};
</script>
