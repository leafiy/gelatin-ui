<template>
  <div class="ui-share" @click="doShare" ref="share-btn">
    <slot></slot>
  </div>
</template>
<script>
import { makeUrl } from "./share.js";
import $UiDropdown from "../dropdown/index.js";
export default {
  name: "ui-share",

  data() {
    return {};
  },
  props: {
    data: Object,
    site: String,
    wechatQrcode: String,
    wechatTitle: {
      type: String,
      default: "微信扫一扫：分享"
    }
  },
  computed: {
    wechatContent() {
      return `
       <p>${this.wechatTitle}</p>
       <p><img src="${this.wechatQrcode}" /></p>
     `;
    }
  },
  methods: {
    doShare() {
      if (this.site !== "wechat") {
        let shareLink = makeUrl({ site: this.site, data: this.data });
        window.open(shareLink);
      } else {
        if (!this.wechatQrcode) {
          throw new Error("missing wechatQrcode");
        }
        $UiDropdown({
          reference: this.$refs["share-btn"],
          content: this.wechatContent,
          classes: "share-popper"
        });
      }
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
