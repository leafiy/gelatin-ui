<template>
  <div class="ui-modal-wrapper">
    <transition :name="modalTransition">
      <div
        class="ui-modal"
        :class="classes"
        v-if="value"
        :style="styles"
        ref="modal"
      >
        <div class="ui-modal-inner">
          <ui-icon
            @click.native="closeModal"
            name="close"
            class="ui-modal-close-icon"
            v-if="showCloseIcon"
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
            <ui-button-group
              class="ui-modal-btn"
              size="sm"
              v-if="buttons.length"
            >
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
      </div>
    </transition>
    <ui-backdrop ref="backdrop" fullscreen :z-index="_zIndex"></ui-backdrop>
  </div>
</template>
<script>
import UiIcon from "../icon/icon.vue";
import UiButtonGroup from "../button-group/button-group.vue";
import UiButton from "../button/button.vue";
import UiBackdrop from "../backdrop/backdrop.vue";
import "../assets/scss/modal.scss";
import elementContains from "buxton/browser/elementContains";
export default {
  name: "ui-modal",

  data() {
    return {
      header: "",
      content: "",
      footer: "",
      buttons: []
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
    backdropColor: String,
    disableScroll: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "sm"
    },
    customClass: String
  },
  components: {
    UiIcon,
    UiButtonGroup,
    UiButton,
    UiBackdrop
  },
  computed: {
    classes() {
      return [
        this.value && "ui-modal-active",
        this.confirm && "ui-confirm",
        this.size && `ui-modal-size-${this.size}`,
        this.customClass
      ];
    },
    modalTransition() {
      return "modal";
    },
    _zIndex() {
      return this.$zIndex
        ? this.$zIndex.add()
        : this.zIndex
        ? this.zIndex
        : 1000;
    },
    styles() {
      return [
        {
          zIndex: this._zIndex + 1
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
        this.closeModal();
        this.unBindEvents();
      }
    }
  },

  methods: {
    bindEvents() {
      window.addEventListener("click", this.handleDocumentClick);
    },
    unBindEvents() {
      window.removeEventListener("click", this.handleDocumentClick);
    },
    handleDocumentClick(e) {
      let el = e.target;
      if (!elementContains(this.$refs["modal"], el)) {
        this.closeModal();
      }
    },
    closeModal() {
      if (this.disableScroll) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
      this.$emit("input", false);
      this.$emit("modal-close");
      if (this.showBackdrop) {
        this.$refs["backdrop"].close();
      }
    },
    openModal() {
      this.$emit("modal-open");
      this.$emit("input", true);
      if (this.showBackdrop) {
        this.$refs["backdrop"].open();
      }
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
    }
  }
};
</script>
