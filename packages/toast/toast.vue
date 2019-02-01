<template>
  <div :class="classes" @mouseenter="pause" @mouseleave="resume">
    <transition
      enter-active-class="bounceIn"
      leave-active-class="fadeOut"
      @after-enter="entered"
      @after-leave="destroy"
      @before-leave="isEntered = false"
    >
      <div
        class="ui-toast-icon"
        @click="clickIcon"
        v-if="!isMessage && show"
        :style="iconStyles"
      >
        <ui-icon :name="iconName" v-if="iconName"></ui-icon>
      </div>
    </transition>
    <transition
      :enter-active-class="toastInTransition"
      :leave-active-class="toastOutTransition"
      @after-enter="showContent = true"
      @before-leave="showContent = false"
    >
      <div
        class="ui-toast-background"
        v-if="!isMessage && isEntered"
        :style="backgroundStyles"
      ></div>
    </transition>
    <div
      class="ui-toast-content"
      :style="contentStyles"
      v-if="!isMessage && message"
    >
      {{ message }}
    </div>
    <transition
      enter-active-class="slideInDown"
      leave-active-class="slideOutUp"
      @after-leave="destroy"
    >
      <div
        class="ui-message-content"
        :class="[
          iconName && 'ui-message-content-with-icon',
          showClose && 'ui-message-content-with-close'
        ]"
        v-if="isMessage && show"
      >
        <div class="ui-message-title" v-if="title">{{ title }}</div>
        <div class="ui-message-message" v-if="message">{{ message }}</div>
        <div class="ui-message-icon" v-if="iconName">
          <ui-icon :name="iconName"></ui-icon>
        </div>
        <div class="ui-message-close" @click="stop" v-if="showClose">
          <ui-icon name="icon-close-circle-fill"></ui-icon>
        </div>
        <div class="ui-message-actions" v-if="actions.length">
          <span
            class="ui-message-action-item"
            v-for="action of actions"
            :key="action.content"
            @click="clickOnMessageIcon(action)"
          >
            <ui-icon v-if="action.icon" :name="action.icon"></ui-icon>
            {{ action.content }}</span
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from "vue";
import Timer from "../../src/utils/timer.js";
import UiIcon from "../icon/icon.vue";
import "../assets/scss/toast.scss";

export default {
  name: "ui-toast",

  data() {
    return {
      showContent: false,
      show: false,
      type: "info",
      message: "",
      duration: 3000,
      showClose: false,
      onClose: null,
      timer: null,
      closed: false,
      id: "",
      icon: "",
      title: "",
      actions: [],
      zIndex: this.$zIndex ? this.$zIndex.get() : 1000,
      isEntered: false,
      closeOnClick: false,
      onClick: null,
      isMessage: false
    };
  },
  components: {
    UiIcon
  },
  computed: {
    iconName() {
      if (this.type == "info") {
        return this.icon ? this.icon : "bell";
      } else if (this.type == "warning") {
        return this.icon ? this.icon : "warning-circle";
      } else if (this.type == "error") {
        return this.icon ? this.icon : "close";
      } else {
        return "";
      }
    },
    classes() {
      return [
        "ui-toast",
        this.type && `ui-${this.isMessage ? "message" : "toast"}-${this.type}`,
        {
          "ui-message": this.isMessage
        }
      ];
    },
    toastTransition() {
      return `ui-toast-transition-x-${this.position.x}`;
    },
    iconStyles() {
      return {
        zIndex: this.zIndex + 2
      };
    },
    backgroundStyles() {
      return {
        zIndex: this.zIndex + 1
      };
    },
    contentStyles() {
      return {
        zIndex: this.zIndex + 1,
        // visibility: this.showContent ? 'visible' : 'hidden',
        opacity: this.showContent ? 1 : 0
      };
    },
    toastInTransition() {
      return this.position.x == "right" ? "toastInRight" : "toastInLeft";
    },
    toastOutTransition() {
      return this.position.x == "right" ? "toastOutRight" : "toastOutLeft";
    }
  },
  methods: {
    entered() {
      this.isEntered = true;
    },
    resume() {
      if (this.duration > 0) {
        this.timer.resume(500);
      }
    },
    pause() {
      if (this.duration > 0) {
        this.timer.pause();
      }
    },
    clickIcon() {
      if (this.closeOnClick) {
        this.stop();
      }
      if (this.onClick && typeof this.onClick == "function") {
        this.onClick();
      }
    },
    start() {
      if (this.duration > 0) {
        this.timer = new Timer(() => {
          if (!this.closed) {
            this.stop();
          }
        }, this.duration);
      }
    },
    stop() {
      this.show = false;

      if (this.onClose && typeof this.onClose == "function") {
        this.onClose(this);
        this.closeToast();
      }
    },
    destroy() {
      if (!this.closed) {
        this.$el.parentNode.removeChild(this.$el);
        this.closed = true;
        this.closeToast();
      }
    },
    clickOnMessageIcon(action) {
      if (action.onClick && typeof action.onClick == "function") {
        action.onClick();
      }
      if (action.closeAfter) {
        this.stop();
      }
    }
  },
  mounted() {
    this.start();
  },
  watch: {
    show(newValue) {
      if (newValue) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    }
  }
};
</script>
