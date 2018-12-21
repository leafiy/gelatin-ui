import UiAvatar from "./avatar.vue";

UiAvatar.install = function(Vue) {
  Vue.component(UiAvatar.name, UiAvatar);
};

export default UiAvatar;
