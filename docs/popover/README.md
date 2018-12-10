# popover

<popover-popover></popover-popover>

<code-code>
```js
click(e) {
      this.$Popover({
        trigger: e.target,
        content: '一个简单的 popover',
        closeOnClick: false,
      })
    },
    click2() {
      this.$Popover({
        trigger: this.$refs['btn1'].$el,
        content: '打开其他元素上的popover',
        closeOnClick: true,
      })
    },
    click3(e) {
      this.$Popover({
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
      this.$Popover({
        trigger: e.target,
        closeOnClick: true,
        menu: [{
            content: "EN-US",
            icon: 'team',
            action: () => {
              this.$Toast('你点了EN-US')
            }
          },
          {
            content: "简体中文",
            icon: 'team',
            action: () => {
              this.$Toast('你点了简体中文')
            }
          },
          {
            content: "繁体中文",
            icon: 'team',
            action: () => {
              this.$Toast('你点了繁体中文')
            }
          }
        ]
      })
    },
    click5(e) {
      this.$Popover({
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


#### options
|option|type|default|description|
|--|--|--|--|
|trigger|element||必须|
|closeOnMouseleave|Boolean|false|鼠标离开时隐藏|
|insertAfter|Boolean|false|false时插入到body中，true时插入到trigger next|
|openDelay|Number|0|打开延迟|
|closeOnClick|Boolean|true|点击popover是否关闭|
|closeDelay|Number|0|关闭延迟|
|content|String|''|文字内容|
|textCetner|Boolean|true|文字是否居中|
|arrow|Boolean|true|是否显示小箭头|
|menu|Array|||


[更多配置](/common/popover.md)