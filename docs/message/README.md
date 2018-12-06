# Message 弹出文字提示

<message-message></message-message>

#### options

|option|type|default|required|
|--|--|--|--|
|type|String|info|["info", "error", "warning"]|
|title|String||至少一项|
|message|String||至少一项|
|duration|Number|3000||
|icon|String|||
|onClose|Function|||
|position|Object|{x:'right',y:'top'}|
|actions|Array|||


actions option

```js
actions: [{
  text: '按钮1，还带一个icon',
  onClick: () => {
    this.$Toast('点了按钮1，并且关闭此message')
  },
  icon:'small-dash',
  closeAfter: true
}, {
  text: '按钮2',
  onClick: () => {
    this.$Toast.error('点了按钮2，但是不关闭该message')
  },
  closeAfter: false
}]
```

type 是 `info` 时默认是没有图标的

简单调用方式

`Vue.prototype.$Message('string') == $Message({type:'info',message:'string'})`
`Vue.prototype.$Message.error('string') == $Message({type:'error',message:'string'})`
`Vue.prototype.$Message.warning('string') == $Message({type:'warning',message:'string'})`