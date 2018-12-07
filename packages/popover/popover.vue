<template>
  <div class="ui-popover" :class="{'ui-tooltip' : !!tooltip}" v-click-outside="close" v-if="show" :style="stlyes">
    <span
      class="ui-popover-triangle"
      v-if="arrow"
      :style="triangleStyles"
      ref="triangle"
    ></span>
    <ul v-if="menu.length" class="ui-popover-menu" :class="[`ui-popover-menu-${menuType}`]" :style="menuStyles">
      <ui-popover-item :params="params" :close-on-click="closeOnClick" :close-on-mouseleave="closeOnMouseleave" @close="close" v-for="item of menu" :key="item.content" :item="item"></ui-popover-item>
    </ul>
    <div class="ui-popover-menu" v-if="content" v-html="handleContent(content)" :style="menuStyles"></div>
    <div class="ui-popover-menu ui-tooltip-content" v-if="tooltip" v-html="tooltip" :style="[menuStyles,tooltipStyles] "></div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import UiPopoverItem from "./popover-item.vue";
import "../assets/scss/popover.scss";
import isElement from "iselement";
import pop from "../../src/mixins/pop/pop.js";
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
    textAlign: String

  },
  components: {
    UiPopoverItem
  },
  methods: {
    handleContent() {
      if (this.content.startsWith('data:image/')) {
        let img = document.createElement('img')
        img.src = this.content
        return img.outerHTML
      } else {
        return this.content
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
