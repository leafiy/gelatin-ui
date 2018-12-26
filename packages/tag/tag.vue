<template>
  <transition name="fade">
    <div class="ui-tag" :class="classes" v-if="show">
      <div class="ui-tag-inner">
        <div class="ui-tag-slot"><slot></slot></div>
        <ui-icon
          name="close-circle-fill"
          class="ui-icon-close"
          @click.native="click"
          v-if="showClose"
        ></ui-icon>
      </div>
    </div>
  </transition>
</template>
<script>
import UiIcon from "../icon/index.js";
import "../assets/scss/tag.scss";
export default {
  name: "ui-tag",

  data() {
    return {
      show: true
    };
  },
  components: {
    UiIcon
  },
  computed: {
    classes() {
      return [
        this.showClose && "ui-tag-with-icon",
        `ui-tag-${this.type}`,
        `ui-tag-size-${this.size}`
      ];
    }
  },
  props: {
    showClose: Boolean,
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["warning", "error", "success", "default", "border"].includes(
          value
        );
      }
    },
    size: {
      type: String,
      default: "lg"
    }
  },
  methods: {
    click() {
      this.show = false;
      this.$emit("close");
    }
  }
};
</script>
<style lang="css" scoped></style>
