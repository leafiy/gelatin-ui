import Loading from "./loading.js";

Loading.install = (Vue, opt) => {
  Vue.directive("ui-loading", Loading);
};
export default Loading;
