<template>
  <div class="ui-share" @click="doShare" ref="share-btn"><slot></slot></div>
</template>
<script>
import { makeUrl } from "./share.js";
export default {
  name: "ui-share",

  data() {
    return {
      wechatQrcode: "",
      wechatQrcodeTitle: "微信扫一扫：分享"
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    site: {
      type: String,
      required: true
    }
  },
  methods: {
    wechatContent(url) {
      return `
       <p>${this.wechatQrcodeTitle}</p>
       <p><img src="${url}" /></p>
     `;
    },
    doShare() {
      // if (this.site !== "wechat") {
      //   let shareLink = makeUrl({ site: this.site, data: this.data });
      //   window.open(shareLink);
      // } else {
      //   if (!this.data.qrcode && this.data.url) {
      //     import(/* webpackChunkName: "vendor" */ "qrcode")
      //       .then(module => {
      //         return module.default.toDataURL(this.data.url);
      //       })
      //       .then(base64 => {
      //         this.wechatQrcode = base64;
      //         return import("../popover/popover.js");
      //       })
      //       .then(module => {
      //         const Popover = module.default;
      //         new Popover({
      //           trigger: this.$refs["share-btn"],
      //           content: this.wechatContent(this.wechatQrcode),
      //           textAlign: "center"
      //         });
      //       })
      //       .catch(err => {
      //         console.error(err);
      //       });
      //   }
      //   if (this.data.qrcode && !this.data.url) {
      //     import("../popover/popover.js")
      //       .then(module => {
      //         const Popover = module.default;
      //         new Popover({
      //           trigger: this.$refs["share-btn"],
      //           content: this.wechatContent(this.data.qrcode),
      //           textAlign: "center"
      //         });
      //       })
      //       .catch(err => {
      //         console.error(err);
      //       });
      //   }
      // }
    }
  }
};
</script>
<style scoped>
.ui-share {
  cursor: pointer;
  display: inline-block;
}
</style>
