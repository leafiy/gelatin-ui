<template>
  <div class=" ui-autocomplete">
    <ui-popperover
      transition=""
      @show="popperShow"
      @hide="popperHide"
      :arrow="arrow"
      classes="ui-autocomplete-popperover"
      ref="popper"
      :disable="disablePopper"
    >
      <ui-input
        v-resize="handleResize"
        :placeholder="placeholder"
        @focus="handleFocus"
        @input="handleInput"
        @blur="handleBlur"
        v-model="query"
        @keydown.native.enter="enterHandler"
        slot="reference"
        ref="input"
      >
        <ui-icon slot="prefix" :name="icon"></ui-icon>
      </ui-input>
      <div class="ui-autocomplete-list" ref="list" :style="listStyles">
        <ui-spinner center v-if="loading"></ui-spinner>
        <vue-perfect-scrollbar class="scroll-area" ref="ps" v-else>
          <div
            v-for="(item, index) of items_"
            class="ui-autocomplete-list-item"
            :class="{ 'ui-autocomplete-list-item-disabled': item.disabled }"
            :key="index + Date.now()"
            @click="item.disabled ? '' : selectItem(index)"
          >
            <div v-html="item.item" v-ui-highlight="highlightOptions"></div>
          </div>
        </vue-perfect-scrollbar>
      </div>
    </ui-popperover>
  </div>
</template>
<script>
import UiPopperover from "../popover/popover.vue";
import UiIcon from "../icon/icon.vue";
import UiHighlight from "../highlight/index.js";
import UiInput from "../input/index.js";
import UiSpinner from "../spinner/index.js";
import { debounce } from "lodash";
import "../assets/scss/autocomplete.scss";
import keyNavi from "./key-navi.js";
import resize from "vue-resize-directive";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "ui-autocomplete",
  data() {
    return {
      width: "",
      activeItemIndex: -1,
      selectedIndex: -1,
      query: this.value === undefined || this.value === null ? "" : this.value,
      showList: false,
      loading: false,
      items_: [],
      list: "",
      lastQuery: "",
      axis: {},
      disablePopper: true
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
    showCheckIcon: Boolean,
    arrow: Boolean
  },
  components: {
    UiInput,
    UiSpinner,
    UiIcon,
    UiPopperover,
    VuePerfectScrollbar
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
        width: this.width + "px"
      };
    }
  },
  methods: {
    handleResize() {
      this.width = this.$refs["input"].$el.offsetWidth;
    },
    popperShow() {},
    popperHide() {
      this.disablePopper = true;
    },
    handleFocus() {
      if (this.showOnFocus) {
        this.disablePopper = false;
        this.show();
      }
    },
    handleInput() {
      this.disablePopper = false;
      this.show();
    },
    handleBlur() {
      // this.disablePopper = true
    },
    show() {
      this.$refs["popper"].showPopper = true;
      this.$refs["popper"].updatePopper();
    },
    itemHandler(item) {
      if (typeof item == "string" || typeof item == "number") {
        return `<span>${item}</span>`;
      } else {
        throw new Error("item should be string or number");
      }
    },
    onItemSelectedDefault(index) {
      if (typeof this.items[index] == "string") {
        this.$emit("input", this.items[index]);
      } else {
        this.$emit("select", index);
      }
      this.activeItemIndex = -1;
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
    }
  },
  mounted() {
    this.itemsHandler();
    this.width = this.$refs["input"].$el.offsetWidth;
    this.$nextTick(() => {
      this.$refs["popper"].disableEventListeners();
    });
  },
  directives: {
    UiHighlight,
    resize
  }
};
</script>
