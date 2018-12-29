<template>
  <div class="ui-autocomplete">
    <ui-input
      :placeholder="placeholder"
      @keydown.native="onKeyDown"
      @focus="focus"
      @blur="blur"
      v-model="query"
      @keyup.native.enter="enterHandler"
    >
      <ui-icon slot="prefix" :name="icon"></ui-icon>
    </ui-input>
    <ui-height-transition :duration="100">
      <div
        class="ui-autocomplete-list"
        v-if="showList && listLength"
        ref="list"
      >
        <ui-spinner center v-if="loading && showSpinner"></ui-spinner>
        <div
          v-for="(item, index) of showItems"
          class="ui-autocomplete-list-item"
          v-if="item.show"
          :key="index + Date.now()"
          @click="selectItem(index)"
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
import mixins from "./mixins.js";
import UiHeightTransition from "../height-transition/height-transition.vue";
export default {
  name: "ui-autocomplete",
  data() {
    return {
      activeItemIndex: -1,
      selectedIndex: -1,
      query: this.value === undefined || this.value === null ? "" : this.value,
      showList: false,
      loading: false,
      showItems: [],
      list: "",
      lastQuery: ""
    };
  },
  mixins: [mixins],
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
    showSpinner: {
      type: Boolean,
      default: true
    },
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
    showOnFocus: Boolean,
    filterData: Boolean,
    value: [String]
  },
  components: {
    UiInput,
    UiHeightTransition,
    UiSpinner,
    UiIcon
  },
  computed: {
    listLength() {
      return this.showItems.filter(item => item.show).length;
    },
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
      this.$emit("open");
    },
    hide() {
      this.showList = false;
      this.$emit("close");
    },
    itemHandler(item) {
      if (typeof item == "string") {
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
      // this.showList = false;
    },
    enterHandler() {
      this.$emit("enter", this.query);
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

      if (this.onItemSelected) {
        this.onItemSelected(index);
      } else {
        this.onItemSelectedDefault(index);
      }
    },

    setItems(items) {
      items = items ? items : this.items;
      this.showItems = items.map(item => {
        return { item: this.itemHandler(item), show: true };
      });
      this.activeItemIndex = -1;
    },

    onQueryChanged(value) {
      this.show();
      if (this.onInputChange) {
        const result = this.onInputChange && this.onInputChange(value);
        if (
          typeof result === "undefined" ||
          typeof result === "boolean" ||
          result === null
        ) {
          this.loading = false;
          return;
        }
        if (Array.isArray(result)) {
          this.setItems(result);
          this.loading = false;
        }
        if (typeof result.then === "function") {
          this.loading = true;
          result.then(items => {
            this.setItems(items);
            this.loading = false;
          });
        }
      } else {
        if (this.filterData) {
          this.showItems.forEach((item, index) => {
            if (value) {
              if (typeof item.item == "string") {
                if (!item.item.includes(this.query)) {
                  item.show = false;
                } else {
                  item.show = true;
                }
              }
            } else {
              item.show = true;
            }
          });
        }

        this.loading = false;
      }
    }
  },
  watch: {
    query(newValue, oldValue) {
      if (newValue === this.lastQuery) {
        this.lastQuery = null;
        return;
      }
      this.onQueryChanged(newValue);
      this.$emit("input", newValue);
    },
    value(val) {
      this.query = val;
      this.lastQuery = val;
    }
  },
  beforeMount() {
    this.onQueryChanged = debounce(this.onQueryChanged, this.debounce);
  },
  mounted() {
    this.setItems();
  },
  directives: {
    UiHighlight
  }
};
</script>
