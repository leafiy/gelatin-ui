<template>
  <div class="ui-modal-container">
    <ui-backdrop
      :show="value"
      :lock="lock"
      v-if="showBackdrop"
      fullscreen
      :z-index="zIndex_"
      :color="backdropColor"
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
// import UiResizer from "../resizer/resizer.vue";
export default {
  name: "ui-modal",

  data() {
    return {
      buttons: [],
      contentStyles: "",
      wrapper: ""
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
        this.bindEvents();
      } else {
        this.unBindEvents();
      }
    }
  },

  methods: {
    bindEvents() {
      document.addEventListener("click", this.handleDocumentClick);
      document.addEventListener("touchstart", this.handleDocumentClick);
      document.addEventListener("keyup", this.handleKeyup);
    },
    unBindEvents() {
      document.removeEventListener("click", this.handleDocumentClick);
      document.removeEventListener("touchstart", this.handleDocumentClick);
      document.removeEventListener("keyup", this.handleKeyup);
    },
    handleKeyup(e) {
      if (e.key === "Escape" || (e.key === "Esc" && this.closeOnPressEscape)) {
        this.closeModal();
      }
    },
    handleDocumentClick(e) {
      let el = e.target;
      console.log(e.target.contains)
      if (!this.value) {
        return;
      }
      if (this.closeOnClick && !elementContains(this.$refs["modal"], el)) {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("input", false);
      if (this.lock && isMobile()) {
        this.contentStyles = {
          overflow: ""
        };
        setTimeout(() => {
          unlock(this.$refs["modal-content"]);
        }, 10);
      }
      if (typeof this.beforeClose === "function") {
        this.beforeClose();
      }
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
      this.$nextTick(() => {
        this.wrapper.appendChild(this.$refs["modal"]);
      });
    },
    createWrapper() {
      this.wrapper = document.createElement("div");
      this.wrapper.id = "ui-modal-wrapper";
      document.body.appendChild(this.wrapper);
    },
    afterEnter() {
      this.$emit("after-enter");
    },
    afterLeave() {
      this.$emit("after-leave");
    }
  },
  mounted() {
    this.wrapper = document.getElementById("ui-modal-wrapper");
    if (!this.wrapper) {
      this.createWrapper();
    }
  }
};
</script>
