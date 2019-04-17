# Layout 布局

使用flex布局，使用[bootstrapV4](https://getbootstrap.com/docs/4.3/layout/grid/)Grid部分的的代码，简化了使用方式，不支持ie10以下浏览器

<layout-index></layout-index>

使用3个组件构成布局系统 `ui-container` > `ui-row` > `ui-col` 每个组件都可传入 `tag:String` 属性指定元素类型，默认为`div`

`ui-container` 属性： `fluid` 则为占满 `viewport` 宽度

`ui-row` 属性

|prop|type|default|despcription|
|-|-|-|-|
|noGutters|Boolean||取消`ui-row`左右`margin` 和子 `ui-col` 左右`padding`|
|alignV|String||`flex`容器垂直方向对齐 ['start', 'end', 'center', 'baseline', 'stretch']|
|alignH|String||`flex`容器水平方向对齐 ['start', 'end', 'center', 'between', 'around']|
|alignContent|String||`flex`多行容器水平方向对齐 ['start', 'end', 'center', 'between', 'around', 'stretch']|

`ui-col` 属性

|prop|type|default|despcription|
|-|-|-|-|
|col|[Boolean,String,Number]|false|为`true`时，为自动宽度列，为`string` `number`时为占用列数，等效于`xs` `col-xs`|
|col-xs/xs|[String,Number]||格数|
|col-sm/sm|[String,Number]||格数|
|col-md/md|[String,Number]||格数|
|col-lg/lg|[String,Number]||格数|
|col-xl/xl|[String,Number]||格数|
|offset|[String,Number]|||
|order|[String,Number]|||
|alignSelf|String||['auto', 'start', 'end', 'center', 'baseline', 'stretch']单列`flex`对齐方式|
|tag|String|div||
|order-xs|[String,Number]|||
|offset-xs|[String,Number]|||
|order-sm|[String,Number]|||
|offset-sm|[String,Number]|||
|order-md|[String,Number]|||
|offset-md|[String,Number]|||
|order-lg|[String,Number]|||
|offset-lg|[String,Number]|||
|order-xl|[String,Number]|||
|offset-xl|[String,Number]|||

```html
<ui-container>
  <ui-row>
    <ui-col col-sm>
      One of three columns
    </ui-col>
    <ui-col col-sm>
      One of three columns
    </ui-col>
    <ui-col col-sm>
      One of three columns
    </ui-col>
  </ui-row>
</ui-container>
```


### 等宽列

<layout-equal></layout-equal>

```html
<ui-container>
  <ui-row>
    <ui-col col>
      1 of 2
    </ui-col>
    <ui-col col>
      2 of 2
    </ui-col>
  </ui-row>
  <ui-row>
    <ui-col col>
      1 of 3
    </ui-col>
    <ui-col col>
      2 of 3
    </ui-col>
    <ui-col col>
      3 of 3
    </ui-col>
  </ui-row>
</ui-container>

<ui-container>
  <ui-row>
    <ui-col col>Column</ui-col>
    <ui-col col>Column</ui-col>
    <div style="width:100%;">100% width element</div>
    <ui-col col>Column</ui-col>
    <ui-col col>Column</ui-col>
  </ui-row>
</ui-container>
```

### 设置单列宽度
<layout-one></layout-one>


### 可变列宽

<layout-variable-width-content></layout-variable-width-content>

### 百分比列

<layout-percent></layout-percent>


### Responsive 响应式

<layout-responsive1></layout-responsive1>


### 垂直方向对齐

<layout-alignment></layout-alignment>

```html
<ui-container>
  <ui-row align-v="start">
    <ui-col col-sm>col-sm</ui-col>
    <ui-col col-sm>col-sm</ui-col>
    <ui-col col-sm>col-sm</ui-col>
  </ui-row>
  <ui-row align-v="center">
    <ui-col col-sm>col-sm</ui-col>
    <ui-col col-sm>col-sm</ui-col>
    <ui-col col-sm>col-sm</ui-col>
  </ui-row>
  <ui-row align-v="end">
    <ui-col col-sm>col-sm</ui-col>
    <ui-col col-sm>col-sm</ui-col>
    <ui-col col-sm>col-sm</ui-col>
  </ui-row>
  <ui-row>
    <ui-col align-self="start" col-sm>col-sm</ui-col>
    <ui-col align-self="center" col-sm>col-sm</ui-col>
    <ui-col align-self="end" col-sm>col-sm</ui-col>
  </ui-row>
</ui-container>
```

### 水平方向对齐

<layout-alignment2></layout-alignment2>

```html
<ui-container>
  <ui-row align-h="start">
    <ui-col col="4">col="4"</ui-col>
    <ui-col col="4">col="4"</ui-col>
  </ui-row>
  <ui-row align-h="end">
    <ui-col col="4">col="4"</ui-col>
    <ui-col col="4">col="4"</ui-col>
  </ui-row>
  <ui-row align-h="center">
    <ui-col col="4">col="4"</ui-col>
    <ui-col col="4">col="4"</ui-col>
  </ui-row>
  <ui-row align-h="between">
    <ui-col col="4">col="4"</ui-col>
    <ui-col col="4">col="4"</ui-col>
  </ui-row>
  <ui-row align-h="around">
    <ui-col col="4">col="4"</ui-col>
    <ui-col col="4">col="4"</ui-col>
  </ui-row>
</ui-container>
```

#### space between 最后一个item对齐方式


![space between](@images/space-bewteen.png)

[Flex-box: Align last row to grid](https://stackoverflow.com/a/34816625)

```css
.grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.grid::after {
  content: "";
  flex: auto;
}
```

#### 固定宽度 space between,不适用ui-col

```css
.list {
  &::after {
    content: "";
    @include lg {
      width: 300px; // item宽度
    }

    @include md {
      width: 300px;
    }
  }
  @include xs{
    justify-content: center;
  }
  @include sm{
    justify-content: space-between;
  }
}
```


### 超过12格

<layout-wrapper></layout-wrapper>


## responsive display utilities

支持所有 [bootstarp v4 display utilities](https://v4.bootcss.com/docs/4.0/utilities/display/)

## Reording 列排序

<layout-ording></layout-ording>

```html
<ui-row>
  <ui-col col="2">no order</ui-col>
  <ui-col col="2" order="2">order="2"</ui-col>
  <ui-col col="2" order="3">order="3"</ui-col>
  <ui-col col="2" order="1">order="1"</ui-col>
  <ui-col col="2" order="4">order="4"</ui-col>

</ui-row>
<ui-row>
  <ui-col col="2" order="last">col="2" order="last"</ui-col>
  <ui-col col="4">col="4"</ui-col>
  <ui-col col="6" order="first">col="6" order="first"</ui-col>
</ui-row>
```

### Responsive + reording

<layout-ording2></layout-ording2>

```html
<ui-row>
  <ui-col col="2">no order</ui-col>
  <ui-col col="2" order-md="2" order-lg="3">order-md="2" order-lg="3"</ui-col>
  <ui-col col="2" order-md="3" order-lg="1">order-md="3" order-lg="1"</ui-col>
  <ui-col col="2" order-md="1" order-lg="4">order-md="1" order-lg="4"</ui-col>
  <ui-col col="2" order-md="4" order-lg="2">order-md="4" order-lg="2"</ui-col>
</ui-row>
```

## Offset

<layout-offset></layout-offset>

```html
<ui-row>
  <ui-col col="4">col="4"</ui-col>
  <ui-col col="4" offset="4">col="4" offset="4"</ui-col>
</ui-row>
<ui-row>
  <ui-col col="3">col="3"</ui-col>
  <ui-col col="3" offset="2">col="3" offset="2"</ui-col>
  <ui-col col="3" offset="1">col="3" offset="1"</ui-col>
</ui-row>
```

### Responsive + offset

<layout-offset2></layout-offset2>

```html
<ui-row>
  <ui-col col-md="4">col-md="4"</ui-col>
  <ui-col col-md="4" offset-lg="4" offset-xl="2">col-md="4" offset-lg="4" offset-xl="2"</ui-col>
</ui-row>
```


## 在其他元素中使用的 Sass mixins

```scss
$xs:0;
$sm:576px;
$md:768px;
$lg:992px;
$xl:1200px;
@mixin xs {
  @media (min-width: $xs) {
    @content
  }
}

@mixin sm {
  @media (min-width: $sm) {
    @content
  }
}

@mixin md {
  @media (min-width: $md) {
    @content
  }
}

@mixin lg {
  @media (min-width: $lg) {
    @content
  }
}
@mixin xl {
  @media (min-width: $xl) {
    @content
  }
}
```

<layout-mixin></layout-mixin>



```scss

#example-element {
  @include xs {
    background: #000;
  }

  @include sm {
    background: red;
  }

  @include md {
    background: green;
  }

  @include lg {
    background: silver;
  }

  @include xl {
    background: blue;
  }
}
```
