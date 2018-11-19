<template>
  <transition name="fade">
    <div v-if="!closed" :class="wrapClasses">
      <span class="alert-icon" v-if="showIcon">
                <slot name="icon">
                    <ui-icon :name="iconType"></ui-icon>
                </slot>
            </span>
      <div class="alert-title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="alert-message" v-if="$slots.message">
        <slot name="message"></slot>
      </div>
      <a class="alert-close" v-if="closable" @click="close">
        <slot name="close">
          <ui-icon name="icon-close-circle-fill"></ui-icon>
        </slot>
      </a>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import '../assets/scss/alert.scss'
import UiCard from '../card/card.vue'
export default {
  name: "ui-lert",
  props: {
    type: {
      validator(value) {
        return ["success", "warning", "error"].includes(value);
      },
      default: "success"
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closed: false
    };
  },
  components: {
    UiCard
  },
  computed: {
    wrapClasses() {
      return [
        `ui-alert`,
        `ui-alert-${this.type}`,
        {
          [`ui-alert-with-icon`]: this.showIcon
        }
      ];
    },
    iconType() {
      let type = "";

      switch (this.type) {
        case "success":
          type = "icon-check-circle-fill";
          break;
        case "warning":
          type = "icon-info-circle-fill";
          break;
        case "error":
          type = "icon-minus-circle-fill";
          break;
      }

      return type;
    }
  },
  methods: {
    close(e) {
      this.closed = true;
      this.$emit("on-close", e);
    }
  }
};

</script>
