import Share from "./share.vue";

Share.install = function(Vue) {
  Vue.component(Share.name, Share);
};

export default Share;
