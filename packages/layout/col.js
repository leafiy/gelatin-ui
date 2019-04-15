import { mergeData } from 'vue-functional-data-merge'
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

export default {
  name: 'ui-col',
  functional: true,
  props: {
    col: Boolean,
    cols: [String, Number],
    offset: [String, Number],
    order: [String, Number],
    alignSelf: {
      type: String,
      default: null,
      validator: val => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(val)
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
}
