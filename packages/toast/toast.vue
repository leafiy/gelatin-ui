<template>
  <div class="ui-toast" :class="[type && 'ui-toast-' + type, icon && 'ui-toast-with-icon']" @mouseenter="pause" @mouseleave="resume">
    <transition name="ui-toast" enter-active-class="bounceIn" leave-active-class=" bounceOut" @after-enter="entered" @after-leave="destroy" @before-leave="isEntered = false">
      <div class="ui-toast-icon" @click="clickIcon" v-if="show" :style="{zIndex:zIndex && zIndex+2}">
        <ui-icon :name="icon" v-if="icon"></ui-icon>
      </div>
    </transition>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight" @after-enter="showContent = true">
      <div class="ui-toast-background" v-if="isEntered" :style="{zIndex:zIndex && zIndex+1}">
      </div>
    </transition>
    <div class="ui-toast-content" :style="contentStyles">
      <div class="ui-toast-title" v-if="title">{{title}}</div>
      <!-- <div class="ui-toast-message" v-html="message"></div> -->
      <!-- <div class="ui-toast-action" v-if="actions.length">
        <span
            class="ui-toast-action-item"
            v-for="action of actions"
            :key="action.text"
            @click="click(action);"
          >
            <icon v-if="action.icon" :name="action.icon"></icon>
            {{ action.text }}</span>
      </div> -->
    </div>
    <!--     <div class="ui-toast-close" @click="stop" v-if="showClose">
      <ui-icon name="icon-close-circle-fill"></ui-icon>
    </div> -->
  </div>
</template>
<script>
import Timer from "../../src/utils/timer.js";
import UiIcon from "../icon";
import "../assets/scss/toast.scss";

export default {
  name: "ui-toast",
  data() {
    return {
      animation: true,
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
      icon: " ",
      title: "",
      actions: [],
      zIndex: "",
      isEntered: false,
      closeOnClick: true
    };
  },
  components: {
    UiIcon,
  },
  computed: {
    toastTransition() {
      return `ui-toast-transition-x-${this.position.x}`
    },
    contentStyles() {
      return {
        zIndex: this.zIndex && this.zIndex + 3,
        // visibility: this.showContent ? 'visible' : 'hidden',
        opacity: this.showContent ? 1 : 0,
      }
    }
  },
  methods: {
    entered() {
      this.isEntered = true
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
        this.stop()
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
        this.closeToast()
      }
    },
    destroy() {
      if (!this.closed) {
        this.$el.parentNode.removeChild(this.$el);
        this.closed = true;
        this.closeToast();
      }
    },
    click(action) {
      if (action.action && typeof action.action == "function") {
        action.action();
      }
    }
  },
  mounted() {
    this.start();
  }
};

</script>
