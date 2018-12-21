import UiTooltip from "./tooltip.js";

UiTooltip.install = (Vue, opt) => {
  Vue.directive("ui-tooltip", UiTooltip);
};
export default UiTooltip;
