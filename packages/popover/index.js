import UiPopover from "./popover.vue";

UiPopover.install = function(Vue) {
  Vue.component(UiPopover.name, UiPopover);
};

export default UiPopover;
