# Confirm

<confirm-confirm></confirm-confirm>

<code-code>
```html
<ui-button @click.native="openConfirm">组件调用</ui-button>
<ui-button @click.native="openConfirmJS">JS调用</ui-button>
openConfirmJS() {
      this.$Confirm({
        header: 'header',
        content: 'content',
        onConfirm: () => {
          this.$UiToast('点了JS调用确认')
        },
        onCancel: () => {
          this.$UiToast('点了JS调用取消')
        }
      })
    }
```
</code-code>

#### options与modal相同

#### slots
|name||
|--|--|
|header|标题|
|content|内容|

#### 按钮文字
|prop|type|default|
|--|--|--|
|confirm|String|确认|
|cancel|String|取消|

#### events

|name||
|--|--|
|confirm-open|打开时|
|confirm-close|关闭时|
|confirm|点击确认按钮|
|cancel|点击取消|

#### JS调用属性

|name|type|
|--|--|
|header|String|
|content|String|
|onConfirm|Function|
|onCancel|Function|
