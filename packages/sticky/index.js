import UiSticky from "./sticky.js";

UiSticky.install = (Vue, opt) => {
  Vue.directive("ui-sticky", UiSticky);
};
export default UiSticky;
