<template>
  <div class="ui-avatar" :class="classes">
    <div class="ui-avatar-container">
      <ui-image
        :fallback="fallback"
        :src="url"
        v-if="url"
        class="ui-avatar-image"
      ></ui-image>
      <div class="ui-avatar-string" v-if="!url && displayName">
        {{ displayName }}
      </div>
      <ui-icon :name="icon" v-if="!url && !displayName"></ui-icon>
    </div>
    <span class="ui-avatar-name" v-if="showName">{{ username }}</span>
    <span class="ui-avatar-slot"><slot></slot></span>
  </div>
</template>
<script>
import "../assets/scss/avatar.scss";
import UiIcon from "../icon/icon.vue";
import UiImage from "../image/image.vue";
export default {
  name: "ui-avatar",
  components: {
    UiIcon,
    UiImage
  },
  props: {
    shape: {
      validator(value) {
        return ["circle", "square"].includes(value);
      },
      default: "circle"
    },
    size: {
      type: String,
      validator(value) {
        return ["sm", "lg", "default"].includes(value);
      },
      default: "default"
    },
    url: String,
    username: String,
    icon: {
      type: String,
      default: "icon-user"
    },
    showName: {
      type: Boolean,
      default: true
    },
    fallback: String
  },
  computed: {
    displayName() {
      return this.username ? this.username[0].toUpperCase() : false;
    },
    classes() {
      return [`ui-avatar-size-${this.size}`, `ui-avatar-${this.shape}`];
    }
  }
};
</script>
