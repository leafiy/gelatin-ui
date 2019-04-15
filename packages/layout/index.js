import UiRow from "./row.js";
import UiCol from "./col.js"
import UiContainer from './container.js'
UiContainer.install = function(Vue) {
  Vue.component(UiContainer.name, UiContainer);
};
UiRow.install = function(Vue) {
  Vue.component(UiRow.name, UiRow);
};
UiCol.install = function(Vue) {
  Vue.component(UiCol.name, UiCol);
};
export { UiRow, UiCol,UiContainer };
