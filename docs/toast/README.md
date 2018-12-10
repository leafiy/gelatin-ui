# Toast 单行文字提示

*仅能用作单行文字，只能绑定一个点击事件*

<toast-toast></toast-toast>


#### options

|option|type|default|required|
|--|--|--|--|
|type|String|info|["info", "error", "warning"]|
|message|String||yes|
|duration|Number|3000|为0不会自动关闭|
|icon|String|||
|onClose|Function|||
|onClick|Function|||
|position|Object|{x:'right',y:'top'}|
|closeOnClick|Boolean|false|点击图标关闭toast|

type 是 `info` 时默认是没有图标的

简单调用方式

`Vue.prototype.$Toast('string') == $Toast({type:'info',message:'string'})`
`Vue.prototype.$Toast.error('string') == $Toast({type:'error',message:'string'})`
`Vue.prototype.$Toast.warning('string') == $Toast({type:'warning',message:'string'})`