<template>
  <div class="ui-dropdown">
    <div
      class="ui-dropdown-trigger"
      :data-popover="id"
      ref="trigger"
      @click="open"
    >
      <slot name="trigger"></slot>
    </div>
    <popover
      :triggerId="id"
      ref="popover"
      @open="onPopOpen"
      @close="onPopClose"
      dropdown
      :close-on-click="closeOnClick"
      :open-on-mouseover="openOnMouseover"
      :close-on-mouseleave="closeOnMouseleave"
      :on-close="onClose"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :arrow="arrow"
      :offset="offset"
      :arrow-size="arrowSize"
      :arrow-offset="arrowOffset"
      :radius="radius"
      :throttle="throttle"
    >
      <slot></slot>
    </popover>
  </div>
</template>
<script>
import nanoid from "nanoid";
import popover from "./popover.vue";
export default {
  name: "ui-dropdown",

  data() {
    return {
      id: ""
    };
  },
  props: {
    closeOnClick: {
      type: Boolean,
      default: true
    },
    openOnMouseover: Boolean,
    closeOnMouseleave: Boolean,
    onClose: Function,
    openDelay: Number,
    closeDelay: Number,
    arrow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 10
    },
    arrowSize: {
      type: Number,
      default: 10
    },
    arrowOffset: {
      type: Number,
      default: 10
    },
    radius: {
      type: Number,
      default: 8
    },
    throttle: {
      type: Number,
      default: 20
    }
  },
  components: {
    popover
  },
  methods: {
    open() {
      this.id = "popover-" + nanoid();
      this.$refs["popover"].isShow = true;
    },
    onPopOpen() {
      this.$emit("open");
    },
    onPopClose() {
      this.$emit("close");
    }
  }
};
</script>
