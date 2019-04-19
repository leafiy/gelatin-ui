<template>
  <ui-icon @click.native="click" :name="name" class="ui-close-icon"></ui-icon>
</template>
<script>
import UiIcon from "../icon/icon.vue";
import "../assets/scss/close-icon.scss";
export default {
  name: "ui-close-icon",

  props: {
    name: {
      type: String,
      default: "close"
    }
  },
  components: {
    UiIcon
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
