<template>
  <transition :name="modalTransition">
    <div class="ui-modal" :class="classes" v-if="isOpen" :style="styles">
      <div class="ui-modal-inner">
        <ui-icon
          @click.native="closeModal"
          name="close"
          class="ui-modal-close-icon"
        ></ui-icon>
        <div class="ui-modal-header" v-if="header || $slots.header">
          <div v-if="header" v-html="header"></div>
          <slot name="header"></slot>
        </div>
        <div class="ui-modal-content" v-if="content || $slots.default">
          <div v-if="content" v-html="content"></div>
          <slot></slot>
        </div>
        <div class="ui-modal-footer">
          <div v-if="footer || $slots.footer" v-html="footer"></div>
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
              >{{ btn.text }}</ui-button
            >
          </ui-button-group>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import UiIcon from "../icon/icon.vue";
import UiButtonGroup from "../button/button-group.vue";
import UiButton from "../button/button.vue";
import "../assets/scss/modal.scss";
import { $UiCover } from "../backdrop/index.js";
if (!Vue.prototype.$zIndex) {
  import("../../src/utils/zHandler.js").then(res => {
    Vue.prototype.$zIndex = new res.default();
  });
}
export default {
  name: "ui-modal",

  data() {
    return {
      cover: null,
      header: "",
      content: "",
      footer: "",
      buttons: [],
      isOpen: !!this.value
    };
  },
  components: {
    UiIcon,
    UiButtonGroup,
    UiButton
  },
  computed: {
    classes() {
      return [
        this.value && "ui-modal-active",
        this.confirm && "ui-confirm",
        this.size && `ui-modal-size-${this.size}`
      ];
    },
    modalTransition() {
      return "modal";
    },
    styles() {
      return [
        {
          zIndex: this.$zIndex.get()
        }
      ];
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.openModal();
        this.isOpen = true;
        this.$zIndex.add();
      } else {
        this.closeModal();
        this.isOpen = false;
        this.$zIndex.remove();
      }
    }
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
    backdropColor: String,
    disableScroll: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  methods: {
    closeModal() {
      if (this.showBackdrop) {
        this.closeCover();
      }
      if (this.disableScroll) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
      this.isOpen = false;
      this.$emit("input", false);
      this.$emit("modal-close");
    },
    openModal() {
      if (this.showBackdrop) {
        this.openCover();
      }
      this.$emit("modal-open");
      document.body.appendChild(this.$el);
      if (this.disableScroll) {
        import(/* webpackChunkName: "vendor" */ "../../src/utils/scrollbar.js").then(
          module => {
            let scrollbarWidth = module.default();
            document.body.style.overflow = "hidden";
            if (scrollbarWidth > 0) {
              document.body.style.paddingRight = scrollbarWidth + "px";
            }
          }
        );
      }
    },
    openCover() {
      if (!this.cover) {
        this.cover = new $UiCover({
          closeOnClick: this.closeOnClick,
          color: this.backdropColor,
          onClick: () => {
            if (this.closeOnClick) {
              this.closeModal();
            }
          }
        });
      } else {
        this.cover.show = true;
      }
    },
    closeCover() {
      if (this.cover) {
        this.cover.show = false;
      }
    }
  }
};
</script>
