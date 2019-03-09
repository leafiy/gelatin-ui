# popover / tooltip / dropdown


## popover - 组件调用

<popover-index></popover-index>

<code-code>
```html
<ui-popover>
  <ui-button slot="reference">default</ui-button>
  <div>content</div>
</ui-popover>
<ui-popover :popper-options="{placement:'top'}">
  <ui-button slot="reference">placement:'top'</ui-button>
  <div>content</div>
</ui-popover>
<ui-popover :popper-options="{placement:'left'}">
  <ui-button slot="reference">placement:'left'</ui-button>
  <div>content</div>
</ui-popover>
<ui-popover :popper-options="{placement:'right'}">
  <ui-button slot="reference">placement:'right'</ui-button>
  <div>content</div>
</ui-popover>
<ui-popover>
  <ui-button slot="reference">复杂元素</ui-button>
  <div>
    <div class="a">npm install</div>
    <div class="a"># install dependencies</div>
    <div class="a">npm run build</div>
    <div class="a"># build dist files</div>
  </div>
</ui-popover>
```
</code-code>

 ## Dropdown - JS 调用


<popover-dropdown></popover-dropdown>

<code-code>
```html
<ui-button @click="click" id="dropdown">click me</ui-button>
<ui-button @click="click2" id="dropdown2">list dropdown menu</ui-button>
click() {
  this.$UiDropdown({
    reference: '#dropdown',
    content: 'content'
  })
},
click2() {
  this.$UiDropdown({
    reference: '#dropdown2',
    list: [{
        title: 'list item 1',
        onClick: () => {
          this.$UiToast('clicked list item 1')
        }
      },
      {
        title: 'list item 2',
        onClick: () => {
          this.$UiToast('clicked list item 2')
        }
      },
      {
        title: 'list item 3',
        onClick: () => {
          this.$UiToast('clicked list item 3')
        }
      }
    ]
  })
}
```

</code-code>


## Tooltip - Directive 调用

<popover-tooltip></popover-tooltip>


#### options

|option|type|default|description|
|--|--|--|--|
|transition|String|fade||
|refer|String||实际popover跟随的元素，用于触发其他元素上的popover|
|reference|String,HTMLDivElement||触发元素|
|trigger|String|click|click or hover|
|disable|Boolean|false|是否禁用|
|content|String||dropdown tooltip中显示的内容|
|list|Array||dropdown list每个项目包含title onCLick两个属性|
|placement|String||覆盖popoverOptions的placement|
|destroyOnLeave|Boolean|false|消失时是否销毁实例|
|delayIn|Number|10|现实延迟|
|delayOut|Number|10|消失延迟|
|appendToBody|Boolean|true|是否插入到body末端|
|arrow|Boolean|true|是否显示小箭头|
|arrowSize|Number|6|箭头尺寸|
|stopPropagation|Boolean|||
|preventDefault|Boolean|||
|boundariesSelector|String||边界元素，参考popperjs|
|closeOnClick|Boolean|false|点击后是否关闭|
|popperOptions|Object||[popperJs设置](https://popper.js.org/popper-documentation.html) |
|zIndex|Number|||


#### events

`hide`

`show`

`documentClick`

`destroyed`

`update`



