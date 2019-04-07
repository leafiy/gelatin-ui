# Accordion 折叠面板

<accordion-index></accordion-index>




```html
<ui-accordion>
  <ui-accordion-item title="Title">
    <span>according content</span>
  </ui-accordion-item>
  <ui-accordion-item title="Title2">
    <span>according content</span>
  </ui-accordion-item>
  <ui-accordion-item title="open on mouseover" :open-on-mouse-over="true">
    <span>according content</span>
  </ui-accordion-item>
  <ui-accordion-item title="active on mounted" active>
    <span>according content</span>
  </ui-accordion-item>
</ui-accordion>
<ui-hr>keep items opening</ui-hr>
<ui-accordion keep-open>
  <ui-accordion-item title="Title">
    <span>according content</span>
  </ui-accordion-item>
  <ui-accordion-item title="Title2">
    <span>according content</span>
  </ui-accordion-item>
  <ui-accordion-item title="active on mounted" active>
    <span>according content</span>
  </ui-accordion-item>
</ui-accordion>
```



`ui-accordion` props

|prop|type|default|description|
|--|--|--|--|
|size|String||[sm]|
|keepOpen|Boolean|false|打开一个项目时是否关闭其他项目|


`ui-accordion-item` props

|prop|type|default|description|
|--|--|--|--|
|title|String||item 标题|
|openOnMouseOver|Boolean|false|鼠标经过打开|
|openOnClickTitle|Boolean|false|是否可以点击标题文字打开|
|active|Boolean|false|默认情况下打开|
|duration|Number||动画持续时间|