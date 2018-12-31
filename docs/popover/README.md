# popover / tooltip / dropdown

 ## JS 调用
<popover-popover></popover-popover>

<code-code>
```js
click(e) {
      this.$UiPopover({
        trigger: e.target,
        content: '一个简单的 popover',
        closeOnClick: false,
      })
    },
    click2() {
      this.$UiPopover({
        trigger: this.$refs['btn1'].$el,
        content: '打开其他元素上的popover',
        closeOnClick: true,
      })
    },
    click3(e) {
      this.$UiPopover({
        trigger: e.target,
        closeOnClick: true,
        menu: [
          { content: "EN-US" },
          { content: "简体中文" },
          { content: "繁体中文" }
        ]
      })
    },
    click4(e) {
      this.$UiPopover({
        trigger: e.target,
        closeOnClick: true,
        menu: [{
            content: "EN-US",
            icon: 'team',
            action: () => {
              this.$UiToast('你点了EN-US')
            }
          },
          {
            content: "简体中文",
            icon: 'team',
            action: () => {
              this.$UiToast('你点了简体中文')
            }
          },
          {
            content: "繁体中文",
            icon: 'team',
            action: () => {
              this.$UiToast('你点了繁体中文')
            }
          }
        ]
      })
    },
    click5(e) {
      this.$UiPopover({
        trigger: e.target,
        closeOnClick: true,
        menuType: 'horizon',
        menu: [{
            icon: 'sound'
          },
          {
            icon: 'camera'
          },
          {
            icon: 'flag'
          }
        ]
      })
    }
```

</code-code>



## Directive 调用

<tooltip-tooltip></tooltip-tooltip>



---



## Component 调用

<dropdown-dropdown></dropdown-dropdown>

options

|option|type|default|description|
|--|--|--|--|
|trigger|element||必须,触发弹出的元素|
|closeOnMouseleave|Boolean|false|鼠标离开时隐藏|
|insertAfter|Boolean|false|false时插入到body中，true时插入到trigger的nextSibling,dropdown时不可用|
|openDelay|Number|0|打开延迟|
|closeDelay|Number|0|关闭延迟|
|closeOnClick|Boolean|true|点击popover是否关闭|
|content|String|''|文字内容|
|textCetner|Boolean|true|文字是否居中|
|arrow|Boolean|true|是否显示小箭头|
|arrowSize|Number|10|箭头大小|
|arrowOffset|Number|10|箭头偏移|
|offset|Number||菜单偏移|
|align|String|center|[center,left,right]菜单对齐方式|
|radius|Number|8|菜单圆角|
|menu|Array|||
|menuType|String|horizon|menu排列方向['horizon','vertical']|
|params|||当使用menu时,向action传递的参数|
|openOnMouseover|Boolean|false||
|closeOnMouseleave|Boolean|false||
|onClose|Function||关闭回调|
|showCloseIcon|Boolean|false|显示关闭按钮,dropdown不可用|
|width|Number||popover宽度|
|throttle|Number|30|当浏览器尺寸改变时重新计算位置的throttle|







