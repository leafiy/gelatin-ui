<template>
  <li
    @click="action"
    v-if="item"
    @mouseleave="mouseleave"
    :class="[item.class, { pointer: item.action }]"
    :title="item.content"
  >
    <icon v-if="item.icon" :name="item.icon"></icon>{{ item.content }}
  </li>
</template>
<script>
import Icon from "../icon";
export default {
  name: "ui-popover-item",
  components: {
    Icon
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
    action() {
      if (this.item.action && typeof this.item.action === "function") {
        this.item.action(this.params || "");
        if (this.closeOnClick) {
          this.$emit("close");
        }
      }
    }
  }
};
</script>
