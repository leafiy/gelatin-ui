import Sticky from "./sticky.js";

Sticky.install = (Vue, opt) => {
  Vue.directive("ui-sticky", Sticky);
};
export default Sticky;
