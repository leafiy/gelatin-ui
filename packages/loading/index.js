import UiLoading from "./loading.js";

UiLoading.install = (Vue, opt) => {
  Vue.directive("ui-loading", UiLoading);
};
export default UiLoading;
