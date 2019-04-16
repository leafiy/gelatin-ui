# Layout 布局

使用flex布局，使用[bootstrapV4](https://getbootstrap.com/docs/4.3/layout/grid/)Grid部分的的代码，简化了使用方式，不支持ie10以下浏览器

<layout-index></layout-index>

使用3个组件构成布局系统 `ui-container` > `ui-row` > `ui-col` 每个组件都可传入 `tag:String` 属性指定元素类型，默认为`div`

`ui-container` 属性： `fluid` 则为占满 `viewport` 宽度

`ui-row`

|prop|type|default|despcription|
|-|-|-|-|
|noGutters|Boolean||取消`ui-row`左右`margin` 和子 `ui-col` 左右`padding`|
|alignV|String||`flex`容器垂直方向对齐 ['start', 'end', 'center', 'baseline', 'stretch']|
|alignH|String||`flex`容器水平方向对齐 ['start', 'end', 'center', 'between', 'around']|
|alignContent|String||`flex`多行容器水平方向对齐 ['start', 'end', 'center', 'between', 'around', 'stretch']|


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






### space between 最后一个item对齐方式


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