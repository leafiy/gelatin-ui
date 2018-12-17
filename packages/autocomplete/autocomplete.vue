<template>
  <div class="ui-autocomplete">
    <ui-input :icon="icon" :placeholder="placeholder" @keydown.native="onKeyDown" @focus="show" @blur="hide" v-model="query" @keyup.native.enter="enterHandler"><slot></slot></ui-input>
    <collapse-transition>
      <ul class="ui-autocomplete-list" ref="list" v-if="showItems === true">
        <li v-if="loading">
          <ui-spinner></ui-spinner>
        </li>
        <li class="ui-autocomplete-list-item" v-if="isInclude(item)" :key="index" v-for="(item, index) in items" @click="selectItem(index)" v-ui-highlight="{text:value,type:'primary'}" :class="{ 'ui-autocomplete-list-item-active': index === activeItemIndex }">
          <slot name="item" :item="item">
            <div v-html="itemHandler(item)">
            </div>
          </slot>
        </li>
      </ul>
    </collapse-transition>
  </div>
</template>
<script>
import UiHighlight from '../highlight/index.js'
import UiInput from '../input/index.js'
import UiSpinner from '../spinner/index.js'
import { debounce } from 'lodash'
import { CollapseTransition } from 'vue2-transitions'
import validators from '../../src/utils/validator.js'
import '../assets/scss/autocomplete.scss'
export default {
  name: 'ui-autocomplete',
  data() {
    return {
      activeItemIndex: -1,
      query: this.value,
      lastSetQuery: null,
      items: [],
      showItems: false,
      loading: false,
      itemHeight:''
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    filterData: Boolean,
    //是否过滤数据，只显示match的
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
      default: 'team'
    },
    placeholder: {
      type: String,
      default: ''
    },
    onInputChange: {
      type: Function,
      required: true
    },
    onItemSelected: Function,
    value: String,
    // todo 根据maxnumber自动调整list高度
    maxNumber: {
      type: Number,
      default: 5
    }
  },
  components: {
    UiInput,
    CollapseTransition,
    UiSpinner
  },
  methods: {
    show() {
      this.showItems = true
      this.loading = true
      if (this.showOnFocus) {
        this.onQueryChanged()
      }
      this.$emit('open')
    },
    hide() {
      this.showItems = false
      this.$emit('close')
    },
    itemHandler(item) {
      if (typeof item == 'string') {
        return item
      }
      // item.content must be html string / string
      if (typeof item == 'object' && item.content) {
        return item.content
      }
    },
    setInputQuery(value) {
      this.lastSetQuery = value
      this.query = value
    },
    onItemSelectedDefault({ item, index }) {
      if (typeof item === 'string') {
        if (validators.htmlStrict.test(item)) {
          let div = document.createElement('div')
          div.innerHTML = item
          //html约定，只取span中的textcontent
          item = div.querySelector('span').textContent
        }
        this.$emit('input', item)
        this.setInputQuery(item)
        this.showItems = false
      }
    },
    onKeyDown(e) {
      switch (e.keyCode) {
        case 40:
          this.highlightItem('down')
          e.preventDefault()
          break
        case 38:
          this.highlightItem('up')
          e.preventDefault()
          break
        case 13:
          this.selectItem()
          e.preventDefault()
          break
        default:
          return true
      }
    },
    enterHandler() {
      this.$emit('enter', this.query)
    },
    selectItem(index) {
      let item = null
      if (typeof index === 'undefined') {
        if (this.activeItemIndex === -1) {
          return
        }
        item = this.items[this.activeItemIndex]
      } else {
        item = this.items[index]
      }
      if (!item) {
        return
      }

      if (this.onItemSelected) {
        this.onItemSelected({ item, index })
      } else {
        this.onItemSelectedDefault({ item, index })
      }
      this.hide()
    },
    highlightItem(direction) {
      if (this.items.length === 0) {
        return
      }
      let selectedIndex = this.items.findIndex((item, index) => {
        return index === this.activeItemIndex
      })
      if (selectedIndex === -1) {
        if (direction === 'down') {
          selectedIndex = 0
        } else {
          selectedIndex = this.items.length - 1
        }
      } else {
        this.activeIndexItem = 0
        if (direction === 'down') {
          selectedIndex++
          if (selectedIndex === this.items.length) {
            selectedIndex = 0
          }
        } else {
          selectedIndex--
          if (selectedIndex < 0) {
            selectedIndex = this.items.length - 1
          }
        }
      }
      this.activeItemIndex = selectedIndex
    },
    setItems(items) {
      this.items = items
      this.activeItemIndex = -1
      this.showItems = true
    },
    onQueryChanged(value) {
      //接受直接返回数组或promise
      const result = this.onInputChange(value)
      this.items = []
      if (typeof result === 'undefined' || typeof result === 'boolean' || result === null) {
        this.loading = false
        return
      }
      if (Array.isArray(result)) {
        this.setItems(result)
        this.loading = false
      } else if (typeof result.then === 'function') {
        result.then(items => {
          this.setItems(items)
          this.loading = false
        })
      }
    },
    isInclude(item) {
      if (this.filterData) {
        return item.includes(this.query)
      } else {
        return true
      }
    }
  },
  watch: {
    query(newValue, oldValue) {
      if (newValue === this.lastSetQuery) {
        this.lastSetQuery = null
        return
      }
      this.loading = true
      this.onQueryChanged(newValue)
      this.$emit('input', newValue)
    },
    value(newValue, oldValue) {
      this.setInputQuery(newValue)
    }
  },
  beforeMount() {
    this.onQueryChanged = debounce(this.onQueryChanged, this.debounce)
  },
  directives: {
    UiHighlight
  }
}

</script>
<style lang="css" scoped>
</style>
