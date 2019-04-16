import { mergeData } from 'vue-functional-data-merge'
const breakpoints = ['sm', 'md', 'lg', 'xl']
import camelToDash from "buxton/string/camelToDash.js";
const compProps = {
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


breakpoints.forEach(p => {
  compProps[`col-${p}`] = {
    type: [Boolean, String, Number],
    default: false
  }
  compProps[`order-${p}`] = [String, Number]
  compProps[`offset-${p}`] = [String, Number]
})

//先将camelcase 的prop转换为 dash形式
//如果该prop包含breakpoints，则为responsive class
const getResponsiveProps = (props) => {
  let respClasses = {}
  Object.keys(props).forEach(p => {
    if (props[p]) {
      breakpoints.forEach(b => {
        if (camelToDash(p).includes(b)) {
          let suffix = typeof props[p] == 'string' ? `ui-layout-col__col-${b}-${props[p]}` : `ui-layout-col__col-${b}`
          respClasses[suffix] = true
        }
      })
    }
  })
  return respClasses
}

export default {
  name: 'ui-col',
  functional: true,
  props: compProps,
  render(h, { props, data, children }) {
    let respClasses = getResponsiveProps(props)
    let classes = {
      ['ui-layout-col__col']: props.col,
      [`ui-layout-col__cols-${props.cols}`]: props.cols,
      [`ui-layout-col__offset-${props.offset}`]: props.offset,
      [`ui-layout-col__order-${props.order}`]: props.order,
      [`ui-layout-col__align-self-${props.alignSelf}`]: props.alignSelf,

    }
    let componentData = mergeData(data, {
      staticClass: 'ui-layout-col',
      class: Object.assign({}, classes, respClasses)
    })
    return h(props.tag, componentData, children)
  }
}
