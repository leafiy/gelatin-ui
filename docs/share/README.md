# Share

<share-share></share-share>


<code-code title="usage">

```html
<ui-share site="weibo" :data="weiboData">
  <ui-button size="sm">微博</ui-button>
</ui-share>
<ui-share site="wechat" :data="wechatData">
  <ui-button size="sm">微信/传入url</ui-button>
</ui-share>
<ui-share site="wechat" :data="wechatData2">
  <ui-button size="sm">微信/直接传入二维码url</ui-button>
</ui-share>
<ui-share site="facebook" :data="facebookData">
  <ui-button size="sm">facebook</ui-button>
</ui-share>
<ui-share site="twitter" :data="twitterData">
  <ui-button size="sm">twitter</ui-button>
</ui-share>
<ui-share site="google" :data="googleData">
  <ui-button size="sm">google</ui-button>
</ui-share>
```

</code-code>

微博实例
```js
weiboData:{
  url:'https://leafiy.github.io/gelatin-ui/',
  title:'gelatin ui',
  image:'https://unicapsule.com/img/welcome.73729e68.jpg',
  appkey:'aaa' //换成自己的
}
```

微信实例

**可直接传入二维码url/base64或者传入url自动生成qrcode**

```js
wechatData:{
  url:'https://leafiy.github.io/gelatin-ui/',
},
wechatData2:{
  qrcode:'https://user-images.githubusercontent.com/870449/49635434-aea69500-fa3a-11e8-9a2b-e70253f450df.png',
}
```


facebook/twitter/google

```js
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
```