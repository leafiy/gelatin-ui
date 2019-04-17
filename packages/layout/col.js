import { mergeData } from 'vue-functional-data-merge'
import memoize from 'buxton/utils/memoize'
import colPorps from '../../src/utils/colProps.js'


const compProps = memoize(colPorps)
console.log(compProps())

//先将camelcase 的prop转换为 dash形式
//如果该prop包含breakpoints，则为responsive class
const getResponsiveProps = (props) => {
  let respClasses = {}


  Object.keys(props).forEach(p => {
    if (props[p]) {
      breakpoints.forEach(b => {
        if (camelToDash(p).includes(b)) {
          let suffix
          if (p == b) {
            suffix = `ui-layout-col__col-${b}-${props[p]}`
          } else {
            suffix = typeof props[p] == 'string' ? `ui-layout-col__col-${b}-${props[p]}` : `ui-layout-col__col-${b}`
          }
          respClasses[suffix] = true
        } else {
          respClasses['ui-layout-col__col'] = true
        }
      })
    }
  })
  return respClasses
}

export default {
  name: 'ui-col',
  functional: true,
  // props: compProps,
  render(h, { props, data, children }) {
    // let respClasses = getResponsiveProps(props)
    // let classes = {
    //   // ['ui-layout-col__col']: !props.col,
    //   [`ui-layout-col__col-${props.col}`]: typeof props.col == 'string' || typeof props.col == 'number',
    //   [`ui-layout-col__offset-${props.offset}`]: props.offset,
    //   [`ui-layout-col__order-${props.order}`]: props.order,
    //   [`ui-layout-col__align-self-${props.alignSelf}`]: props.alignSelf,

    // }
    // let componentData = mergeData(data, {
    //   staticClass: 'ui-layout-col',
    //   class: Object.assign({}, classes, respClasses)
    // })
    // return h(props.tag, componentData, children)
  }
}
