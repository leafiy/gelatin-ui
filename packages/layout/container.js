import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'ui-container',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: Boolean
  },
  render(h, { props, data, children }) {
    let componentData = mergeData(data, {
      class: {
        'ui-layout-container': !props.fluid,
        'ui-layout-container-fluid': props.fluid
      }
    })
    return h(props.tag, componentData, children)
  }

}
