<template>
  <div class="ui-avatar" :class="sizeClasses">
    <div class="ui-avatar-container" :class="classes">
      <img :src="url" v-if="url" class="ui-avatar-image" />
      <div class="ui-avatar-string" v-if="!url && displayName">
        {{ displayName }}
      </div>
      <icon :name="icon" v-if="!url && !displayName"></icon>
    </div>
    <span class="ui-avatar-name" v-if="showName">{{ username }}</span>
    <span class="ui-avatar-slot"><slot></slot></span>
  </div>
</template>
<script>
import "../assets/scss/avatar.scss";
import Icon from "../icon/index.js";
export default {
  name: "ui-avatar",
  components: {
    Icon
  },
  props: {
    shape: {
      validator(value) {
        return ["circle", "square"].includes(value);
      },
      default: "circle"
    },
    // type: {
    //   validator(value) {
    //     return ["image", "username", "icon"].includes(value);
    //   },
    //   default: "image"
    // },
    size: {
      validator(value) {
        return ["small", "large", "default"].includes(value);
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
    }
  },
  computed: {
    displayName() {
      return this.username ? this.username[0].toUpperCase() : false;
    },
    classes() {
      return [`ui-avatar-${this.shape}`];
    },
    sizeClasses() {
      return [`ui-avatar-size-${this.size}`];
    }
  }
};
</script>
