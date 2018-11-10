import Tooltip from "./tooltip.js";

Tooltip.install = (Vue, opt) => {
  Vue.directive("ui-tooltip", Tooltip);
};
export default Tooltip;
