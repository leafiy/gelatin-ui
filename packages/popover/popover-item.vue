<template>
  <li
    @click="click"
    v-if="item"
    @mouseleave="mouseleave"
    :class="[item.class, { pointer: item.action }]"
    :title="item.content"
    class="ui-popover-item"
  >
    <ui-icon v-if="item.icon" :name="item.icon"></ui-icon>{{ item.content }}
  </li>
</template>
<script>
import UiIcon from "../icon";
export default {
  name: "ui-popover-item",
  components: {
    UiIcon
  },
  data() {
    return {};
  },
  props: {
    item: Object,
    params: {
      type: Object,
      default() {
        return {};
      }
    },
    closeOnClick: Boolean,
    closeOnMouseleave: Boolean
  },
  methods: {
    mouseleave() {
      if (this.closeOnMouseleave) {
        this.$emit("close");
      }
    },
    click() {
      if (this.item.action && typeof this.item.action === "function") {
        this.item.action(this.params || "");
      }
      if (this.closeOnClick) {
        this.$emit("close");
      }
    }
  }
};
</script>
