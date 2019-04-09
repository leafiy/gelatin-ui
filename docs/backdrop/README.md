# Backdrop

## 组件调用

<backdrop-index></backdrop-index>

```html
<ui-backdrop :show="show"></ui-backdrop>
```

|prop|type|default|description|
|--|--|--|--|
|show|Boolean|false|控制显示|
|transition|String|fade||
|zIndex|Number|||
|fullscreen|Boolean|false|全屏遮罩，为true时遮罩层将会插入到body最末端|
|radius|Number,String|||
|autoRadius|Boolean|false|自动适应父元素圆角，避免使用`overflow hidden`|
|selectable|Boolean|true|是否可选 user-select|
|color|String|dark|["lighter", "light", "dark", "darker"]|
|lock|Boolean|false|是否锁定滚动|


## 指令directive调用

<backdrop-directive></backdrop-directive>

