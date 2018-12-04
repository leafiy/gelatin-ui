<template>
  <transition :name="modalTransition">
    <div class="ui-modal" :class="classes" v-if="isShow" :style="styles">
      <div class="ui-modal-inner">
        <ui-icon @click.native="closeModal" name="close" class="ui-modal-close-icon"></ui-icon>
        <div class="ui-modal-header">
          <div v-if="header" v-html="header"></div>
          <slot name="header"></slot>
        </div>
        <div class="ui-modal-content">
          <div v-if="content" v-html="content"></div>
          <slot></slot>
        </div>
        <div class="ui-modal-footer">
          <div v-if="footer" v-html="footer"></div>
          <ui-button-group class="ui-modal-btn" size="sm" v-if="buttons.length">
            <ui-button v-for="btn of buttons" :type="btn.type" :key="btn.text" @click.native="()=>{btn.action && btn.action()}">{{btn.text}}</ui-button>
          </ui-button-group>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import UiBackdrop from '../backdrop/backdrop.vue'
import UiIcon from '../icon/icon.vue'
import UiButtonGroup from '../button/button-group.vue'
import UiButton from '../button/button.vue'
import '../assets/scss/modal.scss'
import { Cover } from '../backdrop/index.js'
export default {

  name: 'ui-modal',

  data() {
    return {
      cover: null,
      isShow: this.value,
      header: '',
      content: '',
      footer: '',
      buttons: []
    }
  },
  components: {
    UiBackdrop,
    UiIcon,
    UiButtonGroup,
    UiButton
  },
  computed: {
    classes() {
      return [
        this.isShow && 'ui-modal-active'
      ]
    },
    modalTransition() {
      return 'modal'
    },
    styles() {
      return [{
        'zIndex': this.zIndex
      }]
    }
  },
  props: {
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
    backdropColor: String,
    disableScroll: {
      type: Boolean,
      default: true
    }

  },
  methods: {
    closeModal() {
      this.isShow = false
      if (this.showBackdrop) {
        this.closeCover()
      }
      this.$emit('modal-close')
      this.$emit('input', false);
      if (this.disableScroll) {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    },
    openModal() {
      if (this.showBackdrop) {
        this.openCover()
      }
      this.isShow = true
      document.body.appendChild(this.$el)
      this.$emit('modal-open')
      if (this.disableScroll) {
        import('../../src/utils/scrollbar.js').then(module => {
          let scrollbarWidth = module.default()
          document.body.style.overflow = 'hidden'
          document.body.style.paddingRight = scrollbarWidth + 'px'
        })

      }
    },
    openCover() {
      if (!this.cover) {
        this.cover = new Cover({
          closeOnClick: this.closeOnClick,
          color: this.backdropColor,
          onClick: () => {
            this.closeModal()
          }
        })
      } else {
        this.cover.show = true
      }
    },
    closeCover() {
      if (this.cover) {
        this.cover.show = false
      }
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.openModal()
      } else {
        this.closeModal()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {

    })

  },
  beforeDestroy() {

  }
}

</script>
<style lang="css" scoped>
</style>
