<template>
  <div class="ui-popover" v-click-outside="close" v-if="show" :style="stlyes">
    <span
      class="ui-popover-triangle"
      v-if="arrow"
      :style="triangleStyles"
    ></span>
    <ul
      v-if="menu.length"
      class="ui-popover-menu"
      :class="[`ui-popover-menu-${menuType}`]"
    >
      <ui-popover-item
        :params="params"
        :close-on-click="closeOnClick"
        :close-on-mouseleave="closeOnMouseleave"
        @close="close"
        v-for="item of menu"
        :key="item.content"
        :item="item"
      ></ui-popover-item>
    </ul>
    <div
      class="ui-popover-content"
      :style="contentStyles"
      v-if="!menu.length && content"
      v-html="content"
    ></div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import { throttle } from "throttle-debounce";
import UiPopoverItem from "./popover-item.vue";
import "../assets/scss/popover.scss";
import getAxis from "../../src/utils/getAxis.js";
import isElement from "iselement";
export default {
  name: "ui-popover",
  data() {
    return {
      show: false,
      axis: {},
      triangleLeft: "",
      closeOnClick: false,
      closeOnMouseleave: false,
      content: "",
      textAlign: "",

      //not for options
      targetTop: "",
      placeOnTop: "",
      placeOnRight: "",
      placeOnBottom: "",
      placeOnLeft: "",
      left: "",
      top: "",
      borderTopColor: "",
      borderBottomColor: "",
      arrowTop: "",
      triggerOffset: "",
      popoverOffset: ""
    };
  },
  props: {
    trigger: "",
    width: Number,
    arrow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 14
    },
    triangleSize: {
      type: Number,
      default: 8
    },
    triangleOffset: {
      type: Number,
      default: 15
    },
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
        return ["horizon", "vertical"].indexOf(value) !== -1;
      }
    },
    arrowPosition: {
      type: String,
      default: "center",
      validator: function(value) {
        return ["right", "left", "auto"].indexOf(value) !== -1;
      }
    },
    radius: {
      type: Number,
      default: 14
    }
  },
  components: {
    UiPopoverItem
  },
  computed: {
    stlyes() {
      return {
        top: this.top + "px",
        left: this.left + "px",
        width: this.width ? this.width + "px" : "",
        zIndex: this.zIndex
      };
    },
    triangleStyles() {
      return {
        borderWidth: `${this.triangleSize}px`,
        borderTopColor: this.borderTopColor,
        borderBottomColor: this.borderBottomColor,
        top: `${this.arrowTop}px`,
        left: `${this.triangleLeft}px`
      };
    },
    contentStyles() {
      return {
        textAlign: this.textAlign
      };
    }
  },
  methods: {
    getAxis() {
      this.axis = getAxis();
    },
    close(e) {
      if (!e || e.target != this.trigger || this.closeOnMouseleave) {
        this.show = false;
        this.trigger.dataset.popoverId = "";
        window.removeEventListener("resize", this.calculatePopoverPosition);
        window.removeEventListener("resize", this.getAxis);
        window.removeEventListener("scroll", this.calculatePopoverPosition);
        this.trigger.removeEventListener("mouseout", this.close);
      }
    },

    calculatePopoverPosition: throttle(30, function() {
      this.triggerOffset = this.trigger.getBoundingClientRect();
      this.popoverOffset = this.$el.getBoundingClientRect();
      this.targetTop = this.triggerOffset.top;
      this.placeOnTop = this.targetTop - this.popoverOffset.height;
      this.placeOnRight =
        this.triggerOffset.left +
        this.triggerOffset.width -
        this.popoverOffset.width +
        this.offset;
      this.placeOnBottom = this.targetTop + this.triggerOffset.height;
      this.placeOnLeft = this.triggerOffset.left + this.offset;
      if (this.placeOnLeft < this.axis.x) {
        this.left = this.placeOnLeft;
      } else {
        this.left =
          this.placeOnRight + this.popoverOffset.width + this.offset >=
          this.axis.x * 2
            ? this.placeOnRight - this.offset
            : this.placeOnRight;
      }
      if (this.axis.y > this.targetTop) {
        this.top = this.offset
          ? this.placeOnBottom + this.offset
          : this.placeOnBottom;
      } else {
        this.top = this.offset
          ? this.placeOnTop - this.offset
          : this.placeOnTop;
      }
      if (this.arrow) {
        this.setTrianglePosition();
      }
    }),
    setTrianglePosition() {
      if (this.arrowPosition == "auto") {
        this.triangleLeft =
          this.triggerOffset.left -
          this.popoverOffset.left +
          this.triggerOffset.width / 2 -
          this.triangleSize / 2;
      }
      if (this.arrowPosition == "left") {
        this.triangleLeft = this.triangleSize + this.offset;
      }
      if (this.arrowPosition == "right") {
        this.triangleLeft =
          this.popoverOffset.width -
          this.triangleSize -
          this.offset -
          this.radius;
      }
      if (this.axis.y > this.targetTop) {
        this.borderTopColor = "transparent";
        this.borderBottomColor = "#fff";
        this.arrowTop = -this.triangleSize * 2;
      } else {
        this.borderBottomColor = "transparent";
        this.borderTopColor = "#fff";
        this.arrowTop = this.popoverOffset.height;
      }
    },
    bindEvents() {
      if (this.closeOnMouseleave) {
        this.trigger.addEventListener("mouseout", this.close);
      }
    }
  },
  mounted() {
    this.show = true;
    this.$nextTick(() => {
      if (!isElement(this.trigger)) {
        throw new Error("trigger must be a element");
      }
      this.getAxis();
      this.calculatePopoverPosition();
      this.bindEvents();
    });
    window.addEventListener("resize", this.calculatePopoverPosition);
    window.addEventListener("resize", this.getAxis);
    window.addEventListener("scroll", this.calculatePopoverPosition);
  },

  directives: {
    ClickOutside
  }
};
</script>
