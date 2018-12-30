import UiImage from "./image.vue";

UiImage.install = function(Vue) {
  Vue.component(UiImage.name, UiImage);
  if (!Vue.prototype.$zIndex) {
    import("../../src/utils/zHandler.js").then(res => {
      Vue.prototype.$zIndex = new res.default();
    });
  }
};

export default UiImage;
