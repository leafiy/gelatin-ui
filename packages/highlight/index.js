import Highlight from "./highlight.js";

Highlight.install = (Vue, opt) => {
  Vue.directive("ui-highlight", Highlight);
};
export default Highlight;
