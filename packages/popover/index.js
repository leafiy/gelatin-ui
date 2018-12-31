import $UiPopover from "./popover.js";
import UiTooltip from "./tooltip.js";
import UiDropdown from "./dropdown.vue";
UiDropdown.install = function(Vue) {
  Vue.component(UiDropdown.name, UiDropdown);
};
export { $UiPopover, UiTooltip, UiDropdown };
