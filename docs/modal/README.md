# Modal

## 组件调用

<modal-modal></modal-modal>


```html
<ui-modal v-model="show" :before-close="beforeClose">
  <div slot="header">Modal Header</div>
  <p>modal content</p>
  <div slot="footer">Modal Footer</div>
</ui-modal>
<ui-modal v-model="show2" size="lg">
  <div slot="header">Large size modal</div>
  <p>modal content</p>
  <div slot="footer">Modal Footer</div>
</ui-modal>
<ui-modal v-model="show3" size="sm">
  <div slot="header">Small size modal</div>
  <p>modal content</p>
  <div slot="footer">Modal Footer</div>
</ui-modal>
```

### 锁定滚动

<modal-lock></modal-lock>


### Options

<modal-options></modal-options>

```html
<ui-modal v-model="show1" lock>
  <div slot="header">Modal Header</div>
  <p>modal content</p>
  <div slot="footer">Modal Footer</div>
</ui-modal>
```







  ```js
this.$UiModal({
        header: 'I am Header',
        content: 'I am Content',
        buttons: [{
            content: 'ok',
            action: () => {
              alert('clicked ok')
            }
          },
          {
            content: 'no no no',
            type: 'border'
          },
          {
            content: 'no no no',
            type: 'warning'
          }
        ]
      })
```


#### 通用options

|options|type|description|defalut|optional|
|--|--|--|--|--|--|
|zIndex|Number| | ||
|showBackdrop|Boolean|是否显示遮罩层|true||
|closeOnClick|Boolean|点击遮罩层是否关闭modal|true||
|showCloseIcon|Boolean|是否显示关闭按钮|true||
|backdropColor|String|遮罩层颜色|dark|['white', 'light', 'dark', 'darker']||
|disableScroll|Boolean|打开modal时是否禁用滚动|true||
|customClass|String|||


#### 组件调用 slots

|slot||
|--|--|
|header|modal标题|
|footer|modal底部|
|default|modal内容|

#### 事件

|events|description|
|--|--|
|modal-close||
|modal-open||

#### JS调用属性

|options|type||
|-|-|-|
|buttons|Array|嵌入按钮|
|size|String|['lg','sm']|


