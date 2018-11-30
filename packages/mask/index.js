import Mask from "./mask.js";

Mask.install = (Vue, opt) => {
  Vue.directive("ui-mask", Mask);
};
export default Mask;
