import getAxis from "../../utils/getAxis.js";
import scrollbarWidth from "../../utils/scrollbar.js";
import { throttle } from "lodash";

export default {
  data() {
    return {
      axis: {},
      el: "",
      key: "",
      // content: "",
      //not for options
      mounted: false,
      targetTop: "",
      placeOnTop: "",
      placeOnRight: "",
      placeOnBottom: "",
      placeOnLeft: "",
      left: "",
      top: "",
      borderTopColor: "",
      borderBottomColor: "",
      arrowLeft: "",
      arrowTop: "",
      triggerOffset: "",
      popoverOffset: "",
      translateX: "",
      zIndex: this.$zIndex ? this.$zIndex.add() : 1000
    };
  },
  computed: {
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
    }
  },
  methods: {
    getAxis() {
      this.axis = getAxis();
    },
    calculatePopoverPosition(e) {
      this.triggerOffset = this.trigger.getBoundingClientRect();
      this.popoverOffset = this.el.getBoundingClientRect();
      this.targetTop = this.triggerOffset.top;
      this.placeOnTop = this.targetTop - this.popoverOffset.height;
      this.placeOnRight =
        this.triggerOffset.left +
        this.triggerOffset.width -
        this.popoverOffset.width;
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
    },
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
  },
  beforeDestory() {
    if (this.$zIndex) {
      this.$zIndex.remove();
    }
  },
  beforeMount() {
    this.calculatePopoverPosition = throttle(
      this.calculatePopoverPosition,
      this.throttle
    );
    this.getAxis = throttle(this.getAxis, this.throttle);
  }
};
