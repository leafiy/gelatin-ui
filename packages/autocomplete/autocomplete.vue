<template>
  <div class="ui-autocomplete">
    <ui-input
      :placeholder="placeholder"
      @keydown.native="onKeyDown"
      @focus="show"
      @blur="hide"
      v-model="query"
      @keyup.native.enter="enterHandler"
    >
      <ui-icon slot="prefix" :name="icon"></ui-icon>
    </ui-input>
    <ui-height-transition>
      <ul class="ui-autocomplete-list" ref="list" v-if="showList && listLength">
        <ui-spinner center v-if="loading && showSpinner"></ui-spinner>
        <li
          class="ui-autocomplete-list-item"
          :key="index + Date.now()"
          v-for="(item, index) of showItems"
          @click="selectItem(index)"
          :class="{
            'ui-autocomplete-list-item-active': index === activeItemIndex
          }"
          v-show="item.show"
        >
          <div v-ui-highlight="{ text: query, type: 'primary' }">
            <span v-html="item.item"></span>
          </div>
        </li>
      </ul>
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
      query: this.value === undefined || this.value === null ? "" : this.value,
      lastSetQuery: null,
      showList: false,
      loading: false,
      showItems: []
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
    showSpinner: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 100
    },
    showOnFocus: {
      type: Boolean,
      default: true
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
    value: String
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
    }
  },
  methods: {
    show() {
      this.showList = true;
      this.loading = true;
      if (this.showOnFocus) {
        this.onQueryChanged();
      }
      this.$emit("open");
    },
    hide() {
      this.showList = false;
      this.$emit("close");
    },
    itemHandler(item) {
      if (typeof item == "string") {
        return item; //????
      } else if (isElement(item)) {
        return item;
      } else {
        throw new Error("each item should be a string or an element");
      }
    },
    onItemSelectedDefault(index) {
      this.$emit("select", index);
      if (typeof this.items[index] == "string") {
        this.$emit("input", this.items[index]);
      }
      this.activeItemIndex = -1;
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
      if (!item) {
        return;
      }

      if (this.onItemSelected) {
        this.onItemSelected(index);
      } else {
        this.onItemSelectedDefault(index);
      }
      this.hide();
    },

    setItems(items) {
      this.showItems = this.items.map(item => {
        return { item: this.itemHandler(item), show: true };
      });
      this.activeItemIndex = -1;
    },

    onQueryChanged(value) {
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
        this.loading = false;
      }
    }
    // isInclude(item) {
    //   if (this.filterData) {
    //     return item.includes(this.query);
    //   } else {
    //     return true;
    //   }
    // }
  },
  watch: {
    query(newValue) {
      this.loading = true;
      this.onQueryChanged(newValue);
    },
    value(val) {
      this.query = val;
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
