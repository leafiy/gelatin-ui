<template>
  <svg v-if="iconId" aria-hidden="true" class="ui-icon">
    <use :xlink:href="iconId"></use>
  </svg>
</template>
<script>
import "../assets/scss/icon.scss";
import "../assets/image/iconfont.svg";
import "./iconfont.js";
export default {
  name: "ui-icon",
  props: {
    name: String
  },
  computed: {
    iconId() {
      return this.name
        ? this.name.startsWith("icon-")
          ? `#${this.name}`
          : `#icon-${this.name}`
        : "";
    }
  }
};
</script>
