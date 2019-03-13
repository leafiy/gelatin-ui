<template>
  <div class="container"> <ClientOnly>
    <ui-share site="weibo" :data="weiboData">
      <ui-button size="sm">微博</ui-button>
    </ui-share>
    <ui-share site="wechat" :data="wechatData" :wechat-qrcode="qrcode">
      <ui-button size="sm">微信</ui-button>
    </ui-share>
    <ui-share site="facebook" :data="facebookData">
      <ui-button size="sm">facebook</ui-button>
    </ui-share>
    <ui-share site="twitter" :data="twitterData">
      <ui-button size="sm">twitter</ui-button>
    </ui-share>
    </ui-share></ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'share',

  data() {
    return {
      weiboData: {
        url: 'https://leafiy.github.io/gelatin-ui/',
        title: 'gelatin ui',
        image: 'https://unicapsule.com/img/welcome.73729e68.jpg',
        appkey: 'aaa'
      },
      wechatData: {
        url: 'https://leafiy.github.io/gelatin-ui/',
      },
      qrcode:'https://user-images.githubusercontent.com/870449/49635434-aea69500-fa3a-11e8-9a2b-e70253f450df.png',
      facebookData: {
        url: 'https://leafiy.github.io/gelatin-ui/',
      },
      twitterData: {
        url: 'https://leafiy.github.io/gelatin-ui/',
        title: 'gelatin ui',
        origin: 'leafiy'
      },
      googleData: {
        url: 'https://leafiy.github.io/gelatin-ui/',
      },
    }
  }
}

</script>
<style lang="css" scoped>
</style>
