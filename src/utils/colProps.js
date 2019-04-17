const breakpoints = ["xs", "sm", "md", "lg", "xl"];
import camelToDash from "buxton/string/camelToDash.js";

const props = {
  col: {
    type: [Boolean, String, Number],
    default: false
  },
  offset: [String, Number],
  order: [String, Number],
  alignSelf: {
    type: String,
    default: null,
    validator: val =>
      ["auto", "start", "end", "center", "baseline", "stretch"].includes(val)
  },
  tag: {
    type: String,
    default: "div"
  }
};

const colProps = () => {
  breakpoints.forEach(p => {
    props[`col-${p}`] = {
      type: [Boolean, String, Number],
      default: false
    };
    props[p] = {
      type: [String, Number]
    };
    props[`order-${p}`] = [String, Number];
    props[`offset-${p}`] = [String, Number];
  });
  return props;
};

const getResponsiveProps = props => {
  let respClasses = {};

  Object.keys(props).forEach(p => {
    if (props[p]) {
      breakpoints.forEach(b => {
        let camelP = camelToDash(p);
        let splitP = camelP.split("-");
        if (camelP.includes(b)) {
          let suffix;
          if (p == b) {
            suffix = `ui-layout-col__col-${b}-${props[p]}`;
          } else {
            suffix =
              typeof props[p] == "string"
                ? `ui-layout-col__${splitP[0]}-${b}-${props[p]}`
                : `ui-layout-col__${splitP[0]}-${b}`;
          }
          respClasses[suffix] = true;
        }
      });
    }
  });
  return respClasses;
};

export { colProps, getResponsiveProps };
