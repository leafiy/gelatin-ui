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

```html
<ui-modal v-model="show1" lock>
  <div slot="header">Modal Header</div>
  <p>modal content</p>
  <div slot="footer">Modal Footer</div>
</ui-modal>
```

### Options

<modal-options></modal-options>

```html
<ui-modal v-model="show1" lock>
  <div slot="header">Modal Header</div>
  <p>modal content</p>
  <div slot="footer">Modal Footer</div>
</ui-modal>
```


#### 所有选项

|prop|type|default|description|
|-|-|-|-|
|zIndex|Number|||
|showBackdrop|Boolean|true|是否显示遮罩背景|
|closeOnClick|Boolean|true|点击modal外是否关闭|
|value|v-model|Boolean|控制显示的model|
|showCloseIcon|Boolean|true|显示关闭按钮|
|closeOnPressEscape|Boolean|true|是否按Esc键关闭|
|backdropColor|String|dark|遮罩背景颜色[backdrop](/backdrop/README.md)|
|size|String||['lg','sm']|
|transition|String|modal||
|lock|Boolean|false|锁定body滚动|
|beforeClose|Function||`before-close` 仅当用户通过点击关闭图标或遮罩关闭 modal 时起效 `function(done)，done 用于关闭 modal`|



