<template>
  <div class="ui-accordion-item" :class="classes">
    <div class="ui-accordion-title" @mouseenter="mouseenter" @click="clickTitle">
      <span v-html="title" class="ui-accordion-title-content"></span>
      <slot name="close">
        <span class="ui-accordion-close-icon" @click.self="click">
          <ui-icon name="plus"></ui-icon>
        </span>
      </slot>
    </div>
    <ui-height-transition :duration="duration" @before-enter="animating = true" @after-enter="animating = false" @before-leave="animating = true" @after-leave="animating = false">
      <div class="ui-accordion-content" v-show="show">
        <div class="ui-accordion-content-inner">
          <slot></slot>
        </div>
      </div>
    </ui-height-transition>
  </div>
</template>
<script>
import UiIcon from "../icon/index.js";
import "../assets/scss/accordion.scss";
import UiHeightTransition from "../height-transition/height-transition.vue";
import nanoid from "nanoid";
import events from "../../src/utils/events.js";
export default {
  name: "ui-accordion-item",
  data() {
    return {
      show: false,
      animating: false,
      id: `ui-accordion-item-${nanoid()}`
    };
  },
  props: {
    title: String,
    openOnMouseOver: Boolean,
    openOnClickTitle: {
      type: Boolean,
      default: true
    },
    active: Boolean,
    duration: Number
  },
  components: {
    UiIcon,
    UiHeightTransition
  },
  computed: {
    classes() {
      return {
        "ui-accordion-item-active": this.show
      };
    }
  },
  inject: ["accordionId"],
  watch: {
    show(val) {
      events.$emit(`${this.accordionId}`, { id: this.id, show: this.show });
      if (val) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
    active() {
      this.show = this.active
    }
  },
  methods: {
    clickTitle() {
      if (this.openOnClickTitle) {
        this.click();
      }
    },
    click() {
      this.show = !this.show;
    },
    mouseenter() {
      if (this.openOnMouseOver && !this.animating) {
        this.show = !this.show;
      }
    }
  },
  mounted() {
    if (this.active) this.show = true;
  }
};

</script>
