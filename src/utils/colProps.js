const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']
import camelToDash from "buxton/string/camelToDash.js";

const compProps = {
  col: {
    type: [Boolean, String, Number],
    default: false
  },
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


const colProps = () => {
  breakpoints.forEach(p => {
    compProps[`col-${p}`] = {
      type: [Boolean, String, Number],
      default: false
    }
    compProps[p] = {
      type: [String, Number]
    }
    compProps[`order-${p}`] = [String, Number]
    compProps[`offset-${p}`] = [String, Number]
  })
  return compProps
}


export default colProps
