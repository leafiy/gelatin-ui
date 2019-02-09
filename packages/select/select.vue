<template>
  <div class="ui-select">
    <ui-autocomplete
      :on-item-selected="onItemSelected"
      :items="items"
      :show-on-focus="showOnFocus"
      :highlight="highlight"
      :icon="icon"
    >
      <div class="ui-select-tags" slot="tags">
        <ui-tag
          v-for="(item, index) of selectedItems"
          :key="index + item"
          :show-close="true"
          @close="removeItem"
          >{{ item }}</ui-tag
        >
      </div>
    </ui-autocomplete>
  </div>
</template>
<script>
import UiAutocomplete from "../autocomplete/index.js";
import UiTag from "../tag/index.js";
import "../assets/scss/select.scss";
export default {
  name: "ui-select",

  data() {
    return {
      showOnFocus: true,
      highlight: false,
      selectedItems: []
    };
  },
  components: {
    UiAutocomplete,
    UiTag
  },
  props: {
    items: Array,
    icon: {
      type: String,
      default: ""
    },
    maxNumber: Number
  },
  methods: {
    onItemSelected(index) {
      if (!this.maxNumber || this.selectedItems.length < this.maxNumber) {
        this.selectedItems.push(this.items[index]);
      }
    },
    removeItem(index) {}
  }
};
</script>
