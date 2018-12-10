<template>
  <transition name="fade">
    <div class="ui-popover" :class="{'ui-tooltip' : !!tooltip}" v-click-outside="close" v-if="show" :style="stlyes">
      <span
      class="ui-popover-triangle"
      v-if="arrow"
      :style="triangleStyles"
      ref="triangle"
    ></span>
      <div v-if="!tooltip" class="ui-popover-menu" :class="[`ui-popover-menu-${menuType}`]" :style="menuStyles">
        <ul v-if="menu.length">
          <ui-popover-item :params="params" :close-on-click="closeOnClick" :close-on-mouseleave="closeOnMouseleave" @close="show=false" v-for="item of menu" :key="item.content" :item="item"></ui-popover-item>
        </ul>
        <div class="ui-popover-content" v-if="content" @click="closeOnClick? show=false:''" v-html="handleContent(content)"></div>
      </div>
      <div class="ui-popover-menu" :class="{'ui-tooltip-with-close':showCloseIcon}" v-if="tooltip" :style="[menuStyles,tooltipStyles] ">
        <div class="ui-tooltip-content" v-html="tooltip"></div>
        <div class="ui-tooltip-close-icon" v-if="tooltip && showCloseIcon" @click="show=false">
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
import isElement from "iselement";
import pop from "../../src/mixins/pop/pop.js";
import UiIcon from '../icon/icon.vue'
export default {
  name: "ui-popover",
  data() {
    return {};
  },
  mixins: [pop],
  props: {
    trigger: "",
    tooltip: "",
    params: Object,
    menu: {
      type: Array,
      default () {
        return [];
      }
    },
    menuType: {
      type: String,
      default: "vertical",
      validator: function(value) {
        return ["horizon", "vertical"].includes(value)
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
    textCetner: Boolean

  },
  components: {
    UiPopoverItem,
    UiIcon
  },
  methods: {
    handleContent(content) {
      if (content.startsWith('data:image/')) {
        let img = document.createElement('img')
        img.src = content
        return img.outerHTML
      } else {
        return content
      }
    },
    unbindEvents() {
      window.removeEventListener("resize", this.calculatePopoverPosition);
      window.removeEventListener("scroll", this.calculatePopoverPosition);
      window.removeEventListener('scroll', this.getAxis)
      window.removeEventListener('resize', this.getAxis)
      if (this.closeOnMouseleave && !this.tooltip) {
        this.trigger.removeEventListener("mouseout", this.close);
      }
    },
    bindEvents() {
      window.addEventListener("resize", this.calculatePopoverPosition);
      window.addEventListener("scroll", this.calculatePopoverPosition);
      window.addEventListener('scroll', this.getAxis)
      window.addEventListener('resize', this.getAxis)
      if (this.closeOnMouseleave && !this.tooltip) {
        this.trigger.addEventListener("mouseout", this.close);
      }
    },
    close(e) {
      this.show = false;
      if (!this.key) {
        this.trigger.removeAttribute('data-popover')
      }
    },
  },
  mounted() {
    if (!isElement(this.trigger)) {
      throw new Error("trigger must be a element");
    }
  },
  directives: {
    ClickOutside
  },
  watch: {
    show(show) {
      if (!show) {
        if (this.onClose) {
          this.onClose()
        }
        this.$emit('close')
        this.unbindEvents()
      } else {
        this.$nextTick(() => {
          this.bindEvents()
          this.el = this.$el
          this.calculatePopoverPosition()
        })
      }
    }
  },
};

</script>
