import UiUploader from "./uploader.vue";

UiUploader.install = function(Vue) {
  Vue.component(UiUploader.name, UiUploader);
};

export default UiUploader;
