<template>
  <div class="ui-popover">
    <span class="ui-popover-reference">
      <slot name="reference"></slot>
    </span>
    <transition :name="transition" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass" @after-enter="afterEnter" @after-leave="afterLeave">
      <div class="ui-popover-menu" ref="popper" v-show="!disable && showPopper">
        <div class="ui-popover-arrow" v-if="arrow" :style="arrowStyle"></div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import Popper from 'popper.js'
import '../assets/scss/popover.scss'
import elementContains from 'buxton/browser/elementContains'
export default {
  name: 'ui-popover',
  data() {
    return {
      arrowStyle: null,
      currentPosition: '',
      showPopper: false,
      referenceElm: null,
      popperJS: null,
      currentPlacement: '',
      defaultOptions: {
        placement: 'bottom',
        computeStyle: {
          gpuAcceleration: false
        }
      }
    }
  },
  props: {
    transition: {
      type: String,
      default: 'fade'
    },
    enterActiveClass: String,
    leaveActiveClass: String,
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'hover'].includes(value)
    },
    disable: Boolean,
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
      default: 10
    },
    stopPropagation: Boolean,
    preventDefault: Boolean,
    boundariesSelector: String,
    popperOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    zIndex: Number

  },
  computed: {

  },
  watch: {
    showPopper(value) {
      if (value) {
        this.$emit('show');
        if (this.popperJS) {
          this.popperJS.enableEventListeners();
        }
        this.updatePopper();
      } else {
        if (this.popperJS) {
          this.popperJS.disableEventListeners();
        }
        this.$emit('hide');
      }
    },
    disable(value) {
      if (value) {
        this.showPopper = false;
      }
    },
    currentPosition(value){
      console.log(value)
    }
  },
  created() {
    this.appendedArrow = false;
    this.appendedToBody = false;
    this.options = Object.assign(this.defaultOptions, this.popperOptions);
  },
  mounted() {
    this.referenceElm = this.reference || this.$slots.reference[0].elm;
    this.popper = this.$refs['popper']
    this.bindEvents()
  },
  methods: {
    updateStyles() {

    },
    afterEnter() {},
    afterLeave() {},
    on(el, event, handler) {
      el.addEventListener(event, handler, false)
    },
    off(el, event, handler) {
      el.removeEventListener(event, handler, false)
    },
    bindEvents() {
      if (this.trigger == 'click') {
        this.on(this.referenceElm, 'click', this.doToggle);
        this.on(document, 'click', this.handleDocumentClick);
      }
      if (this.trigger == 'hover') {
        this.on(this.referenceElm, 'mouseover', this.onMouseOver);
        this.on(this.referenceElm, 'focus', this.onMouseOver);
        this.on(this.popper, 'mouseover', this.onMouseOver);
        this.on(this.popper, 'focus', this.onMouseOver);
        this.on(this.referenceElm, 'mouseout', this.onMouseOut);
        this.on(this.referenceElm, 'blur', this.onMouseOut);
        this.on(this.popper, 'mouseout', this.onMouseOut);
        this.on(this.popper, 'blur', this.onMouseOut);
      }
    },
    doToggle(event) {
      if (this.stopPropagation) {
        event.stopPropagation();
      }
      if (this.preventDefault) {
        event.preventDefault();
      }
      this.showPopper = true
    },
    doShow() {
      this.showPopper = true;
    },
    doClose() {
      this.showPopper = false;
    },
    doDestroy() {
      if (this.showPopper) {
        return;
      }
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
      this.off(this.referenceElm, 'click', this.doToggle);
      this.off(this.referenceElm, 'mouseup', this.doClose);
      this.off(this.referenceElm, 'mousedown', this.doShow);
      this.off(this.referenceElm, 'focus', this.doShow);
      this.off(this.referenceElm, 'blur', this.doClose);
      this.off(this.referenceElm, 'mouseout', this.onMouseOut);
      this.off(this.referenceElm, 'mouseover', this.onMouseOver);
      this.off(document, 'click', this.handleDocumentClick);
      this.showPopper = false;
      this.doDestroy();
    },
    createPopper() {
      this.$nextTick(() => {
        if (this.appendToBody && !this.appendedToBody) {
          this.appendedToBody = true;
          document.body.appendChild(this.popper);
        }
        if (this.popperJS && this.popperJS.destroy) {
          this.popperJS.destroy();
        }
        if (this.boundariesSelector && document.querySelector(this.boundariesSelector)) {
          this.popperOptions.modifiers = Object.assign({}, this.popperOptions.modifiers);
          this.popperOptions.modifiers.preventOverflow = Object.assign({}, this.popperOptions.modifiers.preventOverflow);
          this.popperOptions.modifiers.preventOverflow.boundariesElement = boundariesElement;
        }
        this.popperOptions.onUpdate = (data) => {
          this.onUpdate(this.popperOptions.onUpdate, data)
        }
        this.popperOptions.onCreate = () => {
          this.$emit('created', this);
          this.$nextTick(this.updatePopper);
        };

        this.popperJS = new Popper(this.referenceElm, this.popper, this.popperOptions);
      });
    },

    updatePopper() {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
    },
    onUpdate(fn, data) {
      if (this.currentPosition !== data.placement) {
        this.currentPosition = data.placement
      }


      if (fn && typeof fn == 'fucntion') {
        fn()
      }

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
        this.showPopper = false;
      }, this.delayOut);
    },
    handleDocumentClick(e) {
      if (!this.$el || !this.referenceElm ||
        elementContains(this.$el, e.target) ||
        elementContains(this.referenceElm, e.target) ||
        !this.popper || elementContains(this.popper, e.target)
      ) {
        return;
      }
      this.$emit('documentClick', this);
      this.showPopper = false;
    }
  },
  destroyed() {
    this.destroyPopper();
  }
}

</script>
