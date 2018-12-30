import UiUploader from "./uploader.vue";

UiUploader.install = function(Vue) {
  Vue.component(UiUploader.name, UiUploader);
  if (!Vue.prototype.$zIndex) {
    import("../../src/utils/zHandler.js").then(res => {
      Vue.prototype.$zIndex = new res.default();
    });
  }
};

export default UiUploader;
