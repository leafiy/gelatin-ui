import vtooltip, { defaultOptions, state } from "./directive/tooltip";
import vclosepopover from "./directive/close-popover";
import Popover from "./Popover.vue";
import { merge } from "lodash";
import "../assets/scss/popover.scss";
export { createTooltip, destroyTooltip } from "./directive/tooltip";

export function install(Vue, options = {}) {
  if (install.installed) return;
  install.installed = true;

  const finalOptions = {};
  merge(finalOptions, defaultOptions, options);

  vtooltip.options = finalOptions;

  Vue.directive(vtooltip.name, vtooltip);
  Vue.directive(vclosepopover.name, vclosepopover);
  Vue.component(UiPopover.name, UiPopover);
}

export const UiTooltip = vtooltip;
export const UiClosePopover = vclosepopover;
export const UiPopover = Popover;

UiPopover.install = function(Vue) {
  Vue.component(UiPopover.name, UiPopover);
};

export default UiPopover;
