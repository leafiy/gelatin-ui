<template>
  <transition :name="transitionName" @after-leave="destroy">
    <div v-if="show" class="ui-toast" :class="[type && 'ui-toast-' + type, icon && 'ui-toast-with-icon']" @mouseenter="pause" @mouseleave="resume">
      <div class="ui-toast-inner">
        <div class="ui-toast-icon" v-if="icon">
          <ui-icon :name="icon"></ui-icon>
        </div>
        <div class="ui-toast-title" v-if="title">{{ title }}</div>
        <div class="ui-toast-message" v-html="message" v-if="type !== 'loading'"></div>
        <div class="ui-toast-message" v-else></div>
        <div class="ui-toast-action" v-if="actions.length">
          <span
            class="ui-toast-action-item"
            v-for="action of actions"
            :key="action.text"
            @click="click(action);"
          >
            <icon v-if="action.icon" :name="action.icon"></icon>
            {{ action.text }}</span>
        </div>
      </div>
      <div class="ui-toast-close" @click="stop" v-if="showClose">
        <ui-icon name="icon-close-circle-fill"></ui-icon>
      </div>
    </div>
  </transition>
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
      zIndex: "",
    };
  },
  components: {
    UiIcon
  },
  computed: {
    transitionName() {
      return this.animation ? "ui-toast-animation" : "";
    }
  },
  methods: {
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
