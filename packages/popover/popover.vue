<template>
  <div class="ui-popover">
    <slot name="reference"></slot>
    <div class="ui-popover-menu" ref="popper" v-show="visible" :style="menuStyle" :class="classes" @click="clickMenu">
      <transition :name="transition" @after-enter="afterEnter" @after-leave="afterLeave">
        <div class="ui-popover-inner" :class="{ 'ui-popover-menu-list': list && list.length }" v-show="showMenu">
          <div class="ui-popover-arrow" v-if="arrow" :style="arrowStyle" ref="arrow"></div>
          <slot></slot>
          <div v-html="content" v-if="content"></div>
          <ul v-if="list && list.length">
            <li class="ui-popover-menu-list-item" v-for="(item, index) of list" :key="index" v-html="item.title" @click="
                () => {
                  handleListClick(item);
                }
              "></li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Popper from "popper.js";
import "../assets/scss/popover.scss";
import elementContains from "buxton/browser/elementContains";

export default {
  name: "ui-popover",
  data() {
    return {
      showMenu: false,
      currentPosition: "",
      showPopper: false,
      referenceElm: null,
      popperJS: null,
      currentPlacement: "",
      defaultOptions: {
        placement: "bottom",
        computeStyle: {
          gpuAcceleration: false
        }
      }
    };
  },
  props: {
    transition: {
      type: String,
      default: "fade"
    },
    refer: String,
    reference: null,
    trigger: {
      type: String,
      default: "click",
      validator: value => ["click", "hover"].includes(value)
    },
    disable: Boolean,
    content: String,
    list: Array,
    placement: String,
    destroyOnLeave: Boolean,
    delayIn: {
      type: Number,
      default: 10
    },
    delayOut: {
      type: Number,
      default: 10
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: true
    },
    arrowSize: {
      type: Number,
      default: 6
    },
    stopPropagation: Boolean,
    preventDefault: Boolean,
    boundariesSelector: String,
    closeOnClick: Boolean,
    classes: String,
    popperOptions: {
      type: Object,
      default () {
        return {};
      }
    },
    zIndex: Number
  },
  computed: {
    visible() {
      return !this.disable && this.showPopper;
    },
    zIndex_() {
      return this.zIndex ? this.zIndex : this.$zIndex ? this.$zIndex.add() : 200
    },
    menuStyle() {
      let styles = {};
      styles.zIndex = this.zIndex_;
      if (this.currentPosition == "bottom") {
        styles.marginTop = `${this.arrowSize}px`;
      }
      if (this.currentPosition == "top") {
        styles.marginBottom = `${this.arrowSize}px`;
      }
      if (this.currentPosition == "left") {
        styles.marginRight = `${this.arrowSize}px`;
      }
      if (this.currentPosition == "right") {
        styles.marginLeft = `${this.arrowSize}px`;
      }
      return styles;
    },
    arrowStyle() {
      let transform, top, bottom, left, right;
      if (this.currentPosition == "bottom") {
        transform = `translate3d(-${this.arrowSize}px,0,0)`;
        top = `-${this.arrowSize * 2}px`;
      }
      if (this.currentPosition == "top") {
        transform = `translate3d(-${this.arrowSize}px,0,0)`;
        bottom = `-${this.arrowSize * 2}px`;
      }
      if (this.currentPosition == "left") {
        transform = `translate3d(0,-${this.arrowSize}px,0)`;
        right = `-${this.arrowSize * 2}px`;
      }
      if (this.currentPosition == "right") {
        transform = `translate3d(0,-${this.arrowSize}px,0)`;
        left = `-${this.arrowSize * 2}px`;
      }
      return {
        borderWidth: this.arrowSize + "px",
        transform,
        top,
        bottom,
        left,
        right
      };
    }
  },
  watch: {
    showPopper(value) {
      if (value) {
        this.$nextTick(() => {
          this.showMenu = true;
        });
        if (this.popperJS) {
          this.popperJS.enableEventListeners();
        }
        this.updatePopper();
      } else {
        if (this.destroyOnLeave) {
          this.doDestroy();
        }
        if (this.popperJS) {
          this.popperJS.disableEventListeners();
        }
      }
    },
    disable(value) {
      if (value) {
        this.showPopper = false;
      }
    }
  },
  created() {
    this.appendedToBody = false;
    this.options = Object.assign(this.defaultOptions, this.popperOptions);
  },
  mounted() {
    this.referenceElm =
      (this.$slots.reference && this.$slots.reference[0].elm) ||
      (this.reference &&
        typeof this.reference == "string" &&
        document.querySelector(this.reference)) ||
      this.reference;
    if (!this.referenceElm) {
      throw new Error("cannot find reference element");
    }
    this.popper = this.$refs["popper"];
    this.bindEvents();
  },
  methods: {
    afterEnter() {
      this.$emit("show");
      if (this.trigger == "click") {
        this.on(document, "click", this.handleDocumentClick);
      }
    },
    afterLeave() {
      this.$emit("hide");
      this.showPopper = false;
      this.off(document, "click", this.handleDocumentClick);
    },
    enableEventListeners() {
      if (this.popperJS) {
        this.popperJS.enableEventListeners();
      }
    },
    disableEventListeners() {
      if (this.popperJS) {
        this.popperJS.disableEventListeners();
      }
    },
    clickMenu() {
      this.$emit("click-menu");
    },
    handleListClick(item) {
      if (item && item.onClick && typeof item.onClick == "function") {
        item.onClick(item);
      }
      if (this.closeOnClick) {
        this.doClose();
      }
    },
    on(el, event, handler) {
      el.addEventListener(event, handler, false);
    },
    off(el, event, handler) {
      el.removeEventListener(event, handler, false);
    },
    bindEvents() {
      if (this.trigger == "click") {
        this.on(this.referenceElm, "click", this.doToggle);
      }
      if (this.trigger == "hover") {
        this.on(this.referenceElm, "mouseover", this.onMouseOver);
        this.on(this.referenceElm, "focus", this.onMouseOver);
        this.on(this.popper, "mouseover", this.onMouseOver);
        this.on(this.popper, "focus", this.onMouseOver);
        this.on(this.referenceElm, "mouseout", this.onMouseOut);
        this.on(this.referenceElm, "blur", this.onMouseOut);
        this.on(this.popper, "mouseout", this.onMouseOut);
        this.on(this.popper, "blur", this.onMouseOut);
      }
    },
    doToggle(event) {
      if (this.stopPropagation) {
        event.stopPropagation();
      }
      if (this.preventDefault) {
        event.preventDefault();
      }
      this.showPopper = true;
    },
    doShow() {
      this.showPopper = true;
    },
    doClose() {
      this.showMenu = false;
    },
    doDestroy() {
      if (this.popperJS) {
        this.popperJS.destroy();
        this.popperJS = null;
      }
      if (this.appendedToBody) {
        this.appendedToBody = false;
        document.body.removeChild(this.popper);
      }
    },
    destroyPopper() {
      this.off(this.referenceElm, "click", this.doToggle);
      this.off(this.referenceElm, "mouseup", this.doClose);
      this.off(this.referenceElm, "mousedown", this.doShow);
      this.off(this.referenceElm, "focus", this.doShow);
      this.off(this.referenceElm, "blur", this.doClose);
      this.off(this.referenceElm, "mouseout", this.onMouseOut);
      this.off(this.referenceElm, "mouseover", this.onMouseOver);
      this.showMenu = false;
      this.doDestroy();
    },
    createPopper() {
      this.$nextTick(() => {
        let referenceElm = this.referenceElm;
        if (this.appendToBody && !this.appendedToBody) {
          this.appendedToBody = true;
          document.body.appendChild(this.popper);
        }
        if (this.popperJS && this.popperJS.destroy) {
          this.popperJS.destroy();
        }
        if (
          this.boundariesSelector &&
          document.querySelector(this.boundariesSelector)
        ) {
          this.popperOptions.modifiers = Object.assign({},
            this.popperOptions.modifiers
          );
          this.popperOptions.modifiers.preventOverflow = Object.assign({},
            this.popperOptions.modifiers.preventOverflow
          );
          this.popperOptions.modifiers.preventOverflow.boundariesElement = this.boundariesElement;
        }
        this.popperOptions.onUpdate = data => {
          if (data) {
            this.onUpdate(this.popperOptions.onUpdate, data);
          }
        };
        this.popperOptions.onCreate = () => {
          this.$nextTick(this.updatePopper);
        };
        if (this.refer && document.querySelector(this.refer)) {
          referenceElm = document.querySelector(this.refer);
        }
        if (this.placement) {
          this.popperOptions.placement = this.placement;
        }
        this.popperJS = new Popper(
          referenceElm,
          this.popper,
          this.popperOptions
        );
        this.currentPosition = this.popperOptions.placement;
      });
    },

    updatePopper() {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
    },
    onUpdate(fn, data) {
      if (this.currentPosition !== data.placement) {
        this.currentPosition = data.placement;
      }

      if (typeof fn == "function") {
        fn();
      }
      this.$emit("update", data);
    },
    onMouseOver() {
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this.showPopper = true;
      }, this.delayIn);
    },
    onMouseOut() {
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this.showMenu = false;
      }, this.delayOut);
    },
    handleDocumentClick(e) {
      let reference =
        typeof this.reference == "string" ?
        document.querySelector(this.reference) :
        reference;
      if (
        !this.$el ||
        !this.referenceElm ||
        elementContains(this.$el, e.target) ||
        elementContains(this.referenceElm, e.target) ||
        !this.popper ||
        elementContains(this.popper, e.target) ||
        (reference &&
          elementContains(document.querySelector(this.reference), e.target))
      ) {
        return;
      }
      this.$emit("document-click", this);
      this.showMenu = false;
    }
  },
  destroyed() {
    this.destroyPopper();
    this.$emit("destroyed");
  }
};

</script>
