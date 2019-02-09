<template>
  <div class="ui-autocomplete">
    <ui-input
      :placeholder="placeholder"
      @keydown.native="onKeyDown"
      @focus="focus"
      @blur="blur"
      v-model="query"
      @keydown.native.enter="enterHandler"
    >
      <ui-icon slot="prefix" :name="icon"></ui-icon>
    </ui-input>
    <ui-height-transition
      :duration="100"
      @after-enter="$emit('open')"
      @after-leave="$emit('close')"
    >
      <div class="ui-autocomplete-list" ref="list" :style="listStyles">
        <ui-spinner center v-if="loading"></ui-spinner>
        <div
          v-for="(item, index) of items_"
          class="ui-autocomplete-list-item"
          :class="{ 'ui-autocomplete-list-item-disabled': item.disabled }"
          :key="index + Date.now()"
          @click="item.disabled ? '' : selectItem(index)"
        >
          <div v-html="item.item" v-ui-highlight="highlightOptions"></div>
        </div>
      </div>
    </ui-height-transition>
  </div>
</template>
<script>
import UiIcon from "../icon/icon.vue";
import UiHighlight from "../highlight/index.js";
import UiInput from "../input/index.js";
import UiSpinner from "../spinner/index.js";
import { debounce } from "lodash";
import validators from "../../src/utils/validator.js";
import isElement from "iselement";
import "../assets/scss/autocomplete.scss";
import keyNavi from "./key-navi.js";
import UiHeightTransition from "../height-transition/height-transition.vue";
import axis from "../../src/utils/getAxis.js";
export default {
  name: "ui-autocomplete",
  data() {
    return {
      activeItemIndex: -1,
      selectedIndex: -1,
      query: this.value === undefined || this.value === null ? "" : this.value,
      showList: false,
      loading: false,
      items_: [],
      list: "",
      lastQuery: "",
      axis: {}
    };
  },
  mixins: [keyNavi],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    loose: Boolean,
    highlight: {
      type: Boolean,
      default: true
    },
    highlightColor: String,
    debounce: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: "team"
    },
    placeholder: {
      type: String,
      default: ""
    },
    onInputChange: Function,
    onItemSelected: Function,
    showOnFocus: {
      type: Boolean,
      default: true
    },
    filterData: Boolean,
    value: [String, Number],
    disabelSelectedItem: Boolean,
    multiple: [Boolean, Number],
    showCheckIcon: Boolean
  },
  components: {
    UiInput,
    UiHeightTransition,
    UiSpinner,
    UiIcon
  },
  computed: {
    highlightOptions() {
      if (!this.highlight) {
        return null;
      } else {
        return {
          text: this.query,
          loose: this.loose,
          color: this.highlightColor
        };
      }
    },
    listStyles() {
      return {
        zIndex: this.$zIndex.get()
      };
    }
  },
  methods: {
    focus() {
      if (this.showOnFocus) {
        this.show();
      }
    },
    blur() {
      setTimeout(() => {
        this.showList = false;
      }, this.debounce);
    },
    show() {
      this.showList = true;
      this.$zIndex.add();
    },
    hide() {
      this.showList = false;
      this.$zIndex.remove();
    },
    itemHandler(item) {
      if (typeof item == "string" || typeof item == "number") {
        return validators.htmlStrict.test(item) ? item : `<span>${item}</span>`;
      } else if (isElement(item)) {
        // todo: make element react
        return item.innerHTML;
      } else {
        throw new Error("each item should be a string or an element");
      }
    },
    onItemSelectedDefault(index) {
      if (typeof this.items[index] == "string") {
        this.$emit("input", this.items[index]);
      } else {
        this.$emit("select", index);
      }
      this.activeItemIndex = -1;
      this.hide();
    },
    enterHandler() {
      setTimeout(() => {
        this.$emit("enter", this.query);
      }, this.debounce);
    },
    selectItem(index) {
      let item = null;
      if (typeof index === "undefined") {
        if (this.activeItemIndex === -1) {
          return;
        }
        item = this.items[this.activeItemIndex];
      } else {
        item = this.items[index];
      }
      this.hide();

      if (!item) {
        return;
      }
      if (this.disabelSelectedItem) {
        this.items_[index].disabled = true;
      }
      this.items_[index].selected = true;
      if (this.onItemSelected) {
        this.onItemSelected(index);
      } else {
        this.onItemSelectedDefault(index);
      }
    },
    itemsHandler(items) {
      items = items ? items : this.items;
      this.items_ = items.map(item => {
        return { item: this.itemHandler(item) };
      });
      this.activeItemIndex = -1;
    }
  },
  watch: {
    query(newValue, oldValue) {
      if (newValue === this.lastQuery) {
        this.lastQuery = null;
        return;
      }
      this.$emit("input", newValue);
    },
    value(val) {
      this.query = val;
      this.lastQuery = val;
    },
    items() {
      this.itemsHandler(this.items);
    },
    getAxis() {
      // this.axis = getAxis();
    },
    unbindEvents() {
      // window.removeEventListener("scroll", this.getAxis);
      // window.removeEventListener("resize", this.getAxis);
    },
    bindEvents() {
      // window.addEventListener("scroll", this.getAxis);
      // window.addEventListener("resize", this.getAxis);
    }
  },
  mounted() {
    this.itemsHandler();
  },
  directives: {
    UiHighlight
  }
};
</script>
