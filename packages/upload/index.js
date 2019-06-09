import UiUpload from "./upload.vue";

UiUpload.install = function(Vue) {
  Vue.component(UiUpload.name, UiUpload);
};

export default UiUpload;
