<template>
  <transition name="fade">
    <div
      class="ui-popover"
      :class="{ 'ui-tooltip': tooltip, 'ui-dropdown': dropdown }"
      @mouseleave="mouseleave"
      v-click-outside="close"
      v-if="isShow"
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
        ref="menu"
        :class="[
          menuType && `ui-popover-menu-${menuType}`,
          { 'ui-popover-with-close': showCloseIcon }
        ]"
        :style="menuStyles"
      >
        <ul v-if="menu.length">
          <ui-popover-item
            :params="params"
            :close-on-click="closeOnClick"
            :close-on-mouseleave="closeOnMouseleave"
            @close="isShow = false"
            v-for="item of menu"
            :key="item.content"
            :item="item"
          ></ui-popover-item>
        </ul>
        <div
          class="ui-popover-content"
          v-if="content"
          @click="closeOnClick ? close : ''"
          v-html="handleContent(content)"
        ></div>
        <div
          class="ui-popover-close-icon"
          v-if="showCloseIcon && !menu.length"
          @click="close"
        >
          <ui-icon name="icon-close-circle-fill"></ui-icon>
        </div>
        <div class="ui-dropdown-content" v-if="$slots.default && dropdown">
          <slot></slot>
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
import mousePosition from "../../src/utils/mousePosition.js";

export default {
  name: "ui-popover",
  data() {
    return {
      isShow: false
    };
  },
  mixins: [popPosition],
  props: {
    triggerId: {
      type: String,
      required: true
    },
    tooltip: Boolean,
    dropdown: Boolean,
    params: Object,
    menu: {
      type: Array,
      default() {
        return [];
      }
    },
    menuType: {
      type: String,
      validator: function(value) {
        return ["horizon", "vertical"].includes(value);
      }
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnMouseleave: Boolean,
    onClose: Function,
    content: String,
    showCloseIcon: Boolean,
    textCetner: Boolean,
    width: Number,
    openDelay: Number,
    closeDelay: Number,
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
      default: 10
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
    },
    throttle: {
      type: Number,
      default: 20
    }
  },
  components: {
    UiPopoverItem,
    UiIcon
  },
  computed: {
    stlyes() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
        width: this.width ? `${this.width}px` : "",
        zIndex: this.zIndex,
        maxWidth: `calc(100% - ${this.offset * 2}px)`
      };
    }
  },
  methods: {
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
      setTimeout(() => {
        this.isShow = false;
      }, this.closeDelay);
    },
    mouseleave(e) {
      setTimeout(() => {
        let target = mousePosition().target;
        if (this.trigger.contains(target) || this.trigger == target) {
        } else {
          this.close();
        }
      }, 200);
    }
  },
  mounted() {
    this.trigger = document.querySelector(`[data-popover="${this.triggerId}"]`);
  },
  directives: {
    ClickOutside
  },
  watch: {
    isShow(newValue) {
      if (!newValue) {
        if (this.onClose) {
          this.onClose();
        }
        this.$emit("close");
        this.unbindEvents();
        this.trigger.removeAttribute("data-popover");
      } else {
        this.$nextTick(() => {
          this.$emit("open");
          this.bindEvents();
          this.el = this.$el;
          this.calculatePopoverPosition();
        });
      }
    }
  }
};
</script>
