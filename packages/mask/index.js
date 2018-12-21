import UiMask from "./mask.js";

UiMask.install = (Vue, opt) => {
  Vue.directive("ui-mask", UiMask);
};
export default UiMask;
