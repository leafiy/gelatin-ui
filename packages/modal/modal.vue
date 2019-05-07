<template>
  <div class="ui-modal-container">
    <ui-backdrop
      :show="showBackdrop_"
      ref="backdrop"
      :lock="lock"
      v-if="showBackdrop"
      fullscreen
      :z-index="zIndex_"
      :color="backdropColor"
      @click.native="clickOutside"
    >
    </ui-backdrop>
    <transition
      :name="transition"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        class="ui-modal"
        :class="modalClasses"
        :style="modalStyles"
        ref="modal"
        v-if="value"
        v-ui-click-outside="clickOutside"
      >
        <div class="ui-modal-header">
          <div v-if="title && !slots.header" v-html="title"></div>
          <div>
            <slot name="header"></slot>
          </div>
          <ui-close-icon
            v-if="showCloseIcon"
            @click="closeModal"
          ></ui-close-icon>
        </div>
        <div class="ui-modal-body" ref="modal-body" :style="contentStyles">
          <div v-if="body && !$slots.default" v-html="body"></div>
          <slot></slot>
        </div>
        <div class="ui-modal-footer">
          <div v-html="footer" v-if="footer && !$slots.footer"></div>
          <ui-button-group class="ui-modal-btn" size="sm" v-if="buttons.length">
            <ui-button
              v-for="btn of buttons"
              :type="btn.type"
              :key="btn.text"
              @click.native="
                () => {
                  btn.action && btn.action();
                }
              "
              >{{ btn.content }}</ui-button
            >
          </ui-button-group>
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import UiButtonGroup from "../button-group/button-group.vue";
import UiButton from "../button/button.vue";
import UiBackdrop from "../backdrop/backdrop.vue";
import UiCloseIcon from "../close-icon/close-icon.vue";
import "../assets/scss/modal.scss";
import elementContains from "buxton/browser/elementContains";
import { lock, unlock } from "tua-body-scroll-lock";
import isMobile from "buxton/browser/isMobile.js";
import events from "../../src/utils/events.js";
// import UiResizer from "../resizer/resizer.vue";
export default {
  name: "ui-modal",

  data() {
    return {
      buttons: [],
      contentStyles: "",
      closed: false,
      showBackdrop_: false
    };
  },
  props: {
    title: String,
    body: String,
    footer: String,
    confirm: Boolean,
    zIndex: Number,
    showBackdrop: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    backdropColor: String,
    size: String,
    transition: {
      type: String,
      default: "modal"
    },
    lock: {
      type: Boolean,
      default: false
    },
    beforeClose: Function,
    customClass: String
  },
  components: {
    UiButtonGroup,
    UiButton,
    UiBackdrop,
    UiCloseIcon
    // UiResizer
  },
  computed: {
    modalClasses() {
      return [
        this.value && "ui-modal-active",
        this.confirm && "ui-confirm",
        this.size && `ui-modal-size-${this.size}`,
        this.customClass
      ];
    },

    zIndex_() {
      return this.zIndex
        ? this.zIndex
        : this.$zIndex
        ? this.$zIndex.add()
        : 200;
    },
    modalStyles() {
      return [
        {
          zIndex: this.zIndex_ + 1
        }
      ];
    }
  },
  watch: {
    value(value) {
      if (value) {
        this.openModal();
      } else {
        if (!closed) {
          this.closeModal();
        }
      }
    }
  },
  methods: {
    handleKeyup(e) {
      if (e.key === "Escape" || (e.key === "Esc" && this.closeOnPressEscape)) {
        this.closeModal();
      }
    },
    clickOutside() {
      if (this.closeOnClick) {
        this.closeModal();
      }
    },

    closeModal() {
      this.showBackdrop_ = false;
      if (this.closed) {
        return;
      }
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.close);
      } else {
        this.close();
      }
    },
    close() {
      if (this.lock && isMobile()) {
        this.contentStyles = {
          overflow: ""
        };
        setTimeout(() => {
          unlock(this.$refs["modal-content"]);
        }, 10);
      }
      this.$emit("input", false);
      this.closed = true;

      // this.$el.parentNode.removeChild(this.$el);
    },
    openModal() {
      if (this.lock && isMobile()) {
        this.contentStyles = {
          overflow: "scroll"
        };
        setTimeout(() => {
          lock(this.$refs["modal-content"]);
        }, 10);
      }
      this.closed = false;
      if (this.showBackdrop) {
        this.showBackdrop_ = true;
      }
      this.$nextTick(() => {
        this.$refs["modal"].scrollTop = 0;
      });
      document.body.appendChild(this.$el);
    },
    afterEnter() {
      this.$emit("after-enter");
    },
    afterLeave() {
      this.$emit("after-leave");
    }
  },
  mounted() {},
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
    events.$emit("close-all-backdrop");
  }
};
</script>
