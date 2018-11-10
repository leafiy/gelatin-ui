<template>
  <div class="ui-popover" v-click-outside="close" v-if="show" :style="stlyes">
    <span
      class="ui-popover-triangle"
      v-if="arrow"
      :style="triangleStyles"
      ref="triangle"
    ></span>
    <ul
      v-if="menu.length"
      class="ui-popover-menu"
      :class="[`ui-popover-menu-${menuType}`]"
      :style="menuStyles"
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
  </div>
</template>
<script>
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
    }
  },
  components: {
    UiPopoverItem
  },

  methods: {
    close(e) {
      if (!e || e.target != this.trigger || this.closeOnMouseleave) {
        this.trigger.dataset.popoverId = "";
        window.removeEventListener("resize", this.calculatePopoverPosition);
        window.removeEventListener("resize", this.getAxis);
        window.removeEventListener("scroll", this.calculatePopoverPosition);
        this.trigger.removeEventListener("mouseout", this.close);
        this.show = false;
      }
    },
    bindEvents() {
      if (this.closeOnMouseleave) {
        this.trigger.addEventListener("mouseout", this.close);
      }
    }
  },
  mounted() {
    if (!isElement(this.trigger)) {
      throw new Error("trigger must be a element");
    }
    this.getAxis();
    this.$nextTick(() => {
      this.el = this.$el;
      this.calculatePopoverPosition();
      this.bindEvents();
    });
    window.addEventListener("resize", this.calculatePopoverPosition);
    window.addEventListener("resize", this.getAxis);
    window.addEventListener("scroll", this.calculatePopoverPosition);
  }
};
</script>
