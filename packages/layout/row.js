import { mergeData } from "vue-functional-data-merge";
export default {
  name: "ui-row",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    noGutters: Boolean,
    alignV: {
      type: String,
      default: null,
      validator: val =>
        ["start", "end", "center", "baseline", "stretch"].includes(val)
    },
    alignH: {
      type: String,
      default: null,
      validator: val =>
        ["start", "end", "center", "between", "around"].includes(val)
    },
    alignContent: {
      type: String,
      default: null,
      validator: val =>
        ["start", "end", "center", "between", "around", "stretch"].includes(val)
    }
  },
  render(h, { props, data, children }) {
    let componentData = mergeData(data, {
      staticClass: "ui-layout-row",
      class: {
        "ui-layout-row__no-gutters": props.noGutters,
        [`ui-layout-row__align-items-${props.alignV}`]: props.alignV,
        [`ui-layout-row__justify-content-${props.alignH}`]: props.alignH,
        [`ui-layout-row__align-content-${
          props.alignContent
        }`]: props.alignContent
      }
    });
    return h(props.tag, componentData, children);
  }
};
