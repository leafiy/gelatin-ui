<template>
  <div class="ui-modal-wrapper">
    <ui-backdrop :show="value && showBackdrop" :lock="lock" v-if="showBackdrop" fullscreen :z-index="_zIndex" :color="backdropColor">
    </ui-backdrop>
    <transition :name="transition">
      <div class="ui-modal-dialog" v-if="value">
        <div class="ui-modal-content" :class="modalClasses" :style="modalStyles" ref="modal">
          <div class="ui-modal-header">
            <div v-if="header" v-html="header"></div>
            <slot name="header"></slot>
            <span class="ui-modal-close" v-if="showCloseIcon">
              <ui-icon @click.native="closeModal" name="close"></ui-icon>
            </span>
          </div>
          <div class="ui-modal-body" ref="modal-body" :style="contentStyles" v-if="content || $slots.default">
            <div v-if="content" v-html="content"></div>
            <slot></slot>
          </div>
          <div class="ui-modal-footer" v-if="footer || $slots.footer">
            <div v-html="footer" v-if="footer"></div>
            <ui-button-group class="ui-modal-btn" size="sm" v-if="buttons.length">
              <ui-button v-for="btn of buttons" :type="btn.type" :key="btn.text" @click.native="
                  () => {
                    btn.action && btn.action();
                  }
                ">{{ btn.content }}</ui-button>
            </ui-button-group>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import UiIcon from "../icon/icon.vue";
import UiButtonGroup from "../button-group/button-group.vue";
import UiButton from "../button/button.vue";
import UiBackdrop from "../backdrop/backdrop.vue";
import "../assets/scss/modal.scss";
import elementContains from "buxton/browser/elementContains";
import { lock, unlock } from "tua-body-scroll-lock";
import isMobile from "buxton/browser/isMobile.js";
// import UiResizer from "../resizer/resizer.vue";
export default {
  name: "ui-modal",

  data() {
    return {
      header: "",
      content: "",
      footer: "",
      buttons: [],
      contentStyles: ''

    };
  },
  props: {
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
    value: Boolean,
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
    lock: Boolean
  },
  components: {
    UiIcon,
    UiButtonGroup,
    UiButton,
    UiBackdrop
    // UiResizer
  },
  computed: {
    modalClasses() {
      return [
        this.value && "ui-modal-active",
        this.confirm && "ui-confirm",
        this.size && `ui-modal-size-${this.size}`
      ];
    },

    _zIndex() {
      return this.zIndex ? this.zIndex : this.$zIndex ? this.$zIndex.add() : 200
    },
    modalStyles() {
      return [{
        zIndex: this._zIndex + 1
      }];
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
      if (!this.value) {
        return;
      }
      if (!elementContains(this.$refs["modal"], el) && this.closeOnClick) {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("input", false);
      if (this.lock && isMobile()) {
        this.contentStyles = {
          overflow: ''
        }
        setTimeout(() => {
          unlock(this.$refs['modal-content'])
        }, 10)
      }

    },
    openModal() {
      document.body.appendChild(this.$el);
      if (this.lock && isMobile()) {

        this.contentStyles = {
          overflow: 'scroll'
        }
        setTimeout(() => {
          lock(this.$refs['modal-content'])
        }, 10)
      }
    }
  }
};

</script>
