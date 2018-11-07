<template>
  <div class="ui-popover" v-click-outside="close" v-if="show" :style="stlyes">
    <span
      class="ui-popover-triangle"
      :class="arrowClasses"
      v-if="arrow"
      :style="triangleStyles"
    ></span>
    <ul
      v-if="menu.length"
      class="ui-popover-menu"
      :class="menuType ? 'ui-popover-menu-horizon' : ''"
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
import { debounce } from "throttle-debounce";
import UiPopoverItem from "./popover-item.vue";
import "../assets/scss/popover.scss";

export default {
  name: "ui-popover",

  data() {
    return {
      width: "",
      show: false,
      arrow: true,
      offset: 14,
      triangleSize: 8,
      triangleOffset: 15,
      params: {},
      menu: [],
      menuType: "",
      arrowPosition: "",
      closeOnClick: false,
      closeOnMouseleave: false,
      content: "",
      textAlign: "",
      trigger: "",
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
      marginLeft: "",
      float: "",
      marginRight: "",
      arrowTop: ""
    };
  },
  components: {
    UiPopoverItem
  },
  computed: {
    arrowClasses() {
      return {
        "ui-popover-arrow-at-left": this.arrowPosition == "left",
        "ui-popover-arrow-at-right": this.arrowPosition == "right"
      };
    },
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
        float: this.float,
        top: `${this.arrowTop}px`
      };
    },
    contentStyles() {
      return {
        textAlign: this.textAlign
      };
    }
  },
  methods: {
    close(e) {
      if (!e || e.target != this.trigger || this.closeOnMouseleave) {
        this.show = false;
        this.trigger.dataset.popoverId = "";
        window.removeEventListener("resize", this.calculatePopoverPosition);
        window.removeEventListener("scroll", this.calculatePopoverPosition);
        this.trigger.removeEventListener("mouseout", this.close);
      }
    },
    getAxis() {
      return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
    },
    calculatePopoverPosition: debounce(10, function() {
      let triggerOffset = this.trigger.getBoundingClientRect();
      let popoverOffset = this.$el.getBoundingClientRect();
      this.targetTop = triggerOffset.top;
      this.placeOnTop = this.targetTop - popoverOffset.height;
      this.placeOnRight =
        triggerOffset.left +
        triggerOffset.width -
        popoverOffset.width +
        this.offset;
      this.placeOnBottom = this.targetTop + triggerOffset.height;
      this.placeOnLeft = triggerOffset.left + this.offset;
      let axis = this.getAxis();
      if (this.placeOnLeft < axis.x) {
        this.left = this.placeOnLeft;
      } else {
        this.left = this.placeOnRight;
      }
      if (axis.y > this.targetTop) {
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
      let axis = this.getAxis();
      let popoverOffset = this.$el.getBoundingClientRect();
      if (!this.arrowPosition) {
        if (this.placeOnLeft < axis.x) {
          this.arrowPosition = "left";
        } else {
          this.arrowPosition = "right";
        }
      }

      if (axis.y > this.targetTop) {
        // this.popover.insertBefore(this.triangle, this.popover.childNodes[0])
        this.borderTopColor = "transparent";
        this.borderBottomColor = "#fff";
        this.arrowTop = -this.triangleSize * 2;
      } else {
        // this.popover.appendChild(this.triangle)
        this.borderBottomColor = "transparent";
        this.borderTopColor = "#fff";
        this.arrowTop = popoverOffset.height;
      }
    },
    bindEvents() {
      if (this.closeOnMouseleave) {
        this.trigger.addEventListener("mouseout", this.close);
      }
    }
  },
  mounted() {
    // this.show = true;
    this.$nextTick(() => {
      this.calculatePopoverPosition();
      this.bindEvents();
    });
    window.addEventListener("resize", this.calculatePopoverPosition);
    window.addEventListener("scroll", this.calculatePopoverPosition);
  },

  directives: {
    ClickOutside
  }
};
</script>
