<template>
  <transition :name="transition" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="ui-backdrop" v-if="show" :style="styles" :class="classes">
      <slot>
        <span v-if="content">{{ content }}</span>
      </slot>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/backdrop.scss";
export default {
  name: "ui-backdrop",
  data() {
    return {};
  },
  props: {
    show: Boolean,
    transition: {
      type: String,
      default: "fade"
    },
    onClick: Function,
    zIndex: Number,
    fullscreen: Boolean,
    content: String,
    appendToBody: Boolean,
    radius: [Number, String],
    color: {
      type: String,
      default: "dark",
      validator(value) {
        return ["lighter", "light", "dark", "darker"].includes(value);
      }
    }
  },
  computed: {
    styles() {
      return [{
        zIndex: this.zIndex,
        borderRadius: typeof this.radius == 'number' ? `${this.radius}px` : `${this.radius}`
      }];
    },
    classes() {
      return [
        `ui-backdrop-${this.color}`,
        this.fullscreen && "ui-backdrop-fullscreen"
      ];
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.$emit("show");
      } else {
        this.$emit("hide");
      }
    }
  },
  methods: {
    afterEnter() {
      this.$emit('after-enter')
    },
    afterLeave() {
      this.$emit('after-leave')
    },
  }
};

</script>
