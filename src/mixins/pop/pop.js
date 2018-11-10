import { throttle } from "throttle-debounce";
import getAxis from "../../utils/getAxis.js";
import ClickOutside from "vue-click-outside";
import scrollbarWidth from "../../utils/scrollbar.js";
export default {
  data() {
    return {
      axis: {},
      triangleLeft: "",
      el: "",
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
      popoverOffset: ""
    };
  },
  props: {
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
    // arrowPosition: {
    //   type: String,
    //   default: "auto",
    //   validator: function(value) {
    //     return ["right", "left", "auto"].indexOf(value) !== -1;
    //   }
    // },
    // menuPosition: {
    //   type: String,
    //   default: "center",
    //   validator: function(value) {
    //     return ["center", "auto"].indexOf(value) !== -1;
    //   }
    // },
    radius: {
      type: Number,
      default: 10
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnMouseleave: Boolean,
    zIndex: Number
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
    triangleStyles() {
      return {
        borderWidth: `${this.triangleSize}px`,
        borderTopColor: this.borderTopColor,
        borderBottomColor: this.borderBottomColor,
        top: `${this.arrowTop}px`,
        left: `${this.triangleLeft}px`
      };
    },
    menuStyles() {
      return {
        borderRadius: `${this.radius}px`
      };
    }
  },
  methods: {
    getAxis() {
      this.axis = getAxis();
    },
    positionCorrection() {},

    calculatePopoverPosition: throttle(30, function() {
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
      // if (this.menuPosition == 'auto') {
      //   if (this.placeOnLeft < this.axis.x) {
      //     this.left = this.placeOnLeft;
      //   } else {
      //     this.left =
      //       this.placeOnRight + this.popoverOffset.width + this.offset >=
      //       this.axis.x * 2 ?
      //       this.placeOnRight - this.offset :
      //       this.placeOnRight;
      //   }
      // } else if (menuPosition == 'center') {

      // }

      this.left =
        this.triggerOffset.left +
        this.triggerOffset.width / 2 -
        this.popoverOffset.width / 2;

      if (this.left <= this.offset) {
        this.left = this.offset;
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
          this.setTrianglePosition();
        });
      }
    }),
    setTrianglePosition() {
      let popoverOffset = this.el.getBoundingClientRect();

      this.triangleLeft =
        this.triggerOffset.left +
        this.triggerOffset.width / 2 -
        this.left -
        this.triangleSize;

      // if (this.arrowPosition == "auto") {

      // }

      // if (this.arrowPosition == "left") {
      //   this.triangleLeft = this.triangleSize + this.offset;
      // }
      // if (this.arrowPosition == "right") {
      //   this.triangleLeft =
      //     popoverOffset.width -
      //     this.triangleSize -
      //     this.offset -
      //     this.radius * 2;
      // }
      if (this.axis.y > this.targetTop) {
        this.borderTopColor = "transparent";
        this.borderBottomColor = "#fff";
        this.arrowTop = -this.triangleSize * 2;
      } else {
        this.borderBottomColor = "transparent";
        this.borderTopColor = "#fff";
        this.arrowTop = popoverOffset.height;
      }
      // 最终位置修正
      this.$nextTick(() => {
        if (
          this.$refs["triangle"].getBoundingClientRect().right >=
          popoverOffset.right
        )
          this.triangleLeft -= this.triangleSize;
      });
    }
  },

  directives: {
    ClickOutside
  }
};
