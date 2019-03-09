<template>
  <div class="ui-tabs">
    <div
      class="ui-tabs-item"
      v-for="(item, index) in items"
      :ref="id + index + item.title"
      :key="id + index + item.title"
      :class="[{ 'ui-tabs-item-active': index === activeIndex }]"
      :disabled="item.disabled || false"
      @click="handleClick(item, index)"
    >
      <ui-icon v-if="item.icon" :name="item.icon"></ui-icon>{{ item.title }}
    </div>
    <div class="ui-tabs-active-line" :style="activeStyles" />
  </div>
</template>
<script>
import UiIcon from "../icon/icon.vue";
import "../assets/scss/tab.scss";
import nanoid from "nanoid";
export default {
  name: "ui-tabs",
  data() {
    return {
      activeIndex: this.value,
      activeLineWidth: 0,
      activeLineOffset: 0,
      activeLineHeight: 0,
      id: nanoid()
    };
  },
  components: {
    UiIcon
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      required: true
    }
  },
  watch: {
    value() {
      this.activeIndex = this.value;
      this.moveActiveLine(this.items[this.value], this.value);
    }
  },
  computed: {
    activeStyles() {
      return {
        width: `${this.activeLineWidth}px`,
        height: `${this.activeLineHeight}px`,
        transform: `translateX(${this.activeLineOffset}px)`
      };
    }
  },

  methods: {
    handleClick(item, index) {
      this.$emit("change", index);
      this.$emit("input", index);
      this.moveActiveLine(item, index);
    },
    moveActiveLine(item, index = 0) {
      const element =
        this.$refs[`${this.id}${index}${item.title}`] &&
        this.$refs[`${this.id}${index}${item.title}`][0];
      if (!element) return;
      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
      this.activeLineHeight = element.clientHeight;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.moveActiveLine(this.items[this.value], this.value);
    });
  }
};
</script>
