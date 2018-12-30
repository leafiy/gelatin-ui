import getAxis from "../../utils/getAxis.js";
import scrollbarWidth from "../../utils/scrollbar.js";
import { debounce, throttle } from "lodash";
import Vue from "vue";
if (!Vue.prototype.$zIndex) {
  import("../../utils/zHandler.js").then(res => {
    Vue.prototype.$zIndex = new res.default();
  });
}
export default {
  data() {
    return {
      axis: {},
      arrowLeft: "",
      el: "",
      key: "",
      // content: "",
      show: false,
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
      popoverOffset: "",
      userOnClose: "",
      translateX: "",
      zIndex: this.$zIndex.get()
    };
  },
  computed: {
    stlyes() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
        width: this.width ? `${this.width}px` : "",
        zIndex: this.zIndex
      };
    },
    arrowStyles() {
      return {
        borderWidth: `${this.arrowSize}px`,
        borderTopColor: this.borderTopColor,
        borderBottomColor: this.borderBottomColor,
        top: `${this.arrowTop}px`,
        left: `${this.arrowLeft}px`,
        zIndex: this.zIndex + 1
      };
    },
    menuStyles() {
      return {
        borderRadius: `${this.radius}px`,
        transform: `translateX(${this.translateX})`,
        textAlign: this.textCetner ? "center" : ""
      };
    },
    tooltipStyles() {
      if (this.tooltip) {
        return {
          textAlign: this.textCetner ? "center" : ""
        };
      }
    }
  },
  methods: {
    getAxis() {
      this.axis = getAxis();
    },
    calculatePopoverPosition: throttle(function(e) {
      this.triggerOffset = this.trigger.getBoundingClientRect();
      this.popoverOffset = this.el.getBoundingClientRect();
      this.targetTop = this.triggerOffset.top;
      this.placeOnTop = this.targetTop - this.popoverOffset.height;
      this.placeOnRight =
        this.triggerOffset.left +
        this.triggerOffset.width -
        this.popoverOffset.width;
      // + this.offset;
      this.placeOnBottom = this.targetTop + this.triggerOffset.height;
      this.placeOnLeft = this.triggerOffset.left;

      if (this.align == "center") {
        this.left =
          this.triggerOffset.left +
          this.triggerOffset.width / 2 -
          this.popoverOffset.width / 2;
      }

      if (this.align == "right") {
        this.left =
          this.triggerOffset.left +
          this.triggerOffset.width -
          this.popoverOffset.width;
      }

      if (this.align == "left") {
        this.left = this.triggerOffset.left;
      }

      if (this.left <= this.offset) {
        this.left = this.offset;
      }
      if (this.left >= this.axis.x * 2 - this.offset) {
        this.left = this.axis.x * 2 - this.popoverOffset.width - this.offset;
      }

      if (this.left + this.popoverOffset.width > this.axis.x * 2) {
        this.left =
          this.axis.x * 2 -
          this.popoverOffset.width -
          scrollbarWidth() -
          this.offset;
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
        this.$nextTick(() => {
          this.setarrowPosition();
        });
      }
    }, 20),
    setarrowPosition() {
      let popoverOffset = this.el.getBoundingClientRect();

      if (this.align == "center") {
        this.arrowLeft =
          this.triggerOffset.left +
          this.triggerOffset.width / 2 -
          this.left -
          this.arrowSize;
      }
      if (this.align == "right") {
        this.arrowLeft = this.popoverOffset.width / 2 + this.arrowSize;
      }

      if (this.align == "left") {
        this.arrowLeft = this.popoverOffset.width / 4 - this.arrowSize;
      }

      if (this.axis.y > this.targetTop) {
        this.borderTopColor = "transparent";
        this.borderBottomColor = "#fff";
        this.arrowTop = -this.arrowSize * 2;
      } else {
        this.borderBottomColor = "transparent";
        this.borderTopColor = "#fff";
        this.arrowTop = popoverOffset.height;
      }

      this.$nextTick(() => {
        let arrowOffset = this.$refs["arrow"].getBoundingClientRect();
        if (arrowOffset.right + this.offset >= popoverOffset.right) {
          this.translateX = `${this.arrowSize}px`;
        }
        if (arrowOffset.left - this.offset <= popoverOffset.left) {
          this.translateX = `-${this.arrowSize}px`;
        }
      });
    }
  },
  mounted() {
    this.getAxis();
    this.$zIndex.add();
  },
  beforeDestory() {
    this.$zIndex.remove();
  }
};
