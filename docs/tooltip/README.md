# Tooltip

<tooltip-tooltip></tooltip-tooltip>


 ```html
<p v-ui-tooltip="'I am a full with el'">I am a full with el </p>
<span v-ui-tooltip="'span span span'">I am a span </span>
<ui-button v-ui-tooltip="{content:'I am with a button',closeOnMouseleave:false,showCloseIcon:true}">????????????</ui-button>
 ```


#### options
|options|type|default|description|
|--|--|--|--|
|closeOnMouseleave|Boolean|true|鼠标离开时消失|
|showCloseIcon|Boolean|false|显示关闭按钮|
|insertAfter|Boolean|true|将元素插入至trigger element之后，false时插入到body最后|
|textCetner|Boolean|true|文字居中|
|openDelay|Number|0|显示延迟|
|closeDelay|Number|50|关闭延迟|
|content|String||内容|

[更多配置](/common/popover.md)