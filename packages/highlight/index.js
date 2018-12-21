import UiHighlight from "./highlight.js";

UiHighlight.install = (Vue, opt) => {
  Vue.directive("ui-highlight", UiHighlight);
};
export default UiHighlight;
