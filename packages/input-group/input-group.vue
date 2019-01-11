<template>
  <div class="ui-input-group">
    <ui-input
      v-for="(val, index) of inputVal"
      :type="type"
      :value="handleEachVal(val)"
      :theme="theme"
      :show-clear="false"
      :style="styles"
      :max-length="maxLength"
      :ref="'input-' + index"
      :key="val + index"
      placeholder=""
      @focus="({ value }) => focus(value, index)"
      @delete="({ value }) => handleDelete(value, index)"
      @blur="({ value }) => blur(value, index)"
      @input="({ value }) => input(value, index)"
      @keyup="({ value, event }) => handleKeyup(value, index, event)"
      @keydown="({ value, event }) => handleKeydown(value, index, event)"
    ></ui-input>
  </div>
</template>
<script>
import arrayChunk from "../../src/utils/arrayChunks.js";
import flatten from "../../src/utils/flattenArray.js";
import UiInput from "../input/input.vue";
export default {
  name: "ui-input-group",

  data() {
    return {
      currentIndex: "",
      inputVal: [],
      lastkeyCode: ""
    };
  },
  components: {
    UiInput
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    skip: {
      type: Boolean,
      default: true
    },
    width: Number,
    maxLength: {
      type: Number,
      default: 1
    },
    theme: String,
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    autoSelect: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    styles() {
      return {
        width: this.width && this.width + "px"
      };
    }
  },
  methods: {
    handleEachVal(val) {
      return val.join("");
    },
    focus(value, index) {
      this.currentIndex = index;
      if (this.autoSelect) {
        this.$refs[`input-${index}`][0].select();
      }
      this.$emit("focusin", { index, value });
    },
    blur(value, index) {
      this.$emit("blur", { index, value });
    },
    handleDelete(value, index) {},
    handleKeydown(value, index, e) {
      if (e.keyCode == this.lastkeyCode) {
        if (e.keyCode == 8 && !value) {
          let index = this.currentIndex - 1;
          this.skipInput(index);
        }
      }
      this.lastkeyCode = e.keyCode;
    },
    handleKeyup(value, index, e) {
      this.lastkeyCode = e.keyCode;
    },
    input(value, index) {
      if (value.length >= this.maxLength) {
        let index = this.currentIndex + 1;
        this.skipInput(index);
      }
      this.setInputVal(index, value);
    },
    skipInput(index) {
      if (index > this.inputVal.length - 1) {
        index = this.inputVal.length;
      }
      if (index < 0) {
        index = 0;
      }
      if (this.$refs[`input-${index}`] && this.$refs[`input-${index}`][0]) {
        this.$refs[`input-${index}`][0].focus();
      }
    },
    setInputVal(index, newValue) {
      this.inputVal.splice(index, 1, [newValue]);
      this.$emit("input", flatten(this.inputVal, 2).join(""));
    }
  },
  mounted() {
    this.inputVal = arrayChunk([...this.value.toString()], this.maxLength);
  }
};
</script>
