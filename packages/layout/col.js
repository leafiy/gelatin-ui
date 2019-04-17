import { mergeData } from "vue-functional-data-merge";
import { colProps, getResponsiveProps } from "../../src/utils/colProps.js";
const compProps = colProps();

export default {
  name: "ui-col",
  functional: true,
  props: compProps,
  render(h, { props, data, children }) {
    let respClasses = getResponsiveProps(props);
    let classes = {
      ["ui-layout-col__col"]: props.col && typeof props.col == "boolean",
      [`ui-layout-col__col-${props.col}`]:
        typeof props.col == "string" || typeof props.col == "number",
      [`ui-layout-col__offset-${props.offset}`]: props.offset,
      [`ui-layout-col__order-${props.order}`]: props.order,
      [`ui-layout-col__align-self-${props.alignSelf}`]: props.alignSelf
    };
    let componentData = mergeData(data, {
      staticClass: "ui-layout-col",
      class: Object.assign({}, classes, respClasses)
    });
    return h(props.tag, componentData, children);
  }
};
