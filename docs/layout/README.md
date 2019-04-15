# layout

使用flex布局，基本沿用bootstrapV4的代码，不支持ie10以下浏览器

<layout-index></layout-index>



### Responsive

使用Number传入props


<!-- <layout-row-responsive></layout-row-responsive> -->


```html
<ui-row>
  <ui-col :xs="6" :sm="10" :md="8" :lg="4">
    <div class="box"></div>
  </ui-col>
  <ui-col :xs="6" :sm="2" :md="4" :lg="8">
    <div class="box"></div>
  </ui-col>
</ui-row>
<ui-row>
  <ui-col :xs="3" :sm="2" :md="3" :lg="2">
    <div class="box"></div>
  </ui-col>
  <ui-col :xs="3" :sm="2" :md="3" :lg="3">
    <div class="box"></div>
  </ui-col>
  <ui-col :xs="3" :sm="2" :md="3" :lg="4">
    <div class="box"></div>
  </ui-col>
  <ui-col :xs="3" :sm="6" :md="3" :lg="3">
    <div class="box"></div>
  </ui-col>
</ui-row>

```


|breakpoint|size|
|---------|---|
|xs|30em|
|sm|48em|
|md|64em|
|lg|75em|
|xlg|96em|

### Responsive by percertage

<!-- <layout-row-responsive-percertage></layout-row-responsive-percertage> -->

```html
<ui-row>
 <ui-col :basis="50">
   <div class="box">50</div>
 </ui-col>
 <ui-col :basis="40">
   <div class="box">40</div>
 </ui-col>
 <ui-col :basis="10">
   <div class="box">10</div>
 </ui-col>
</ui-row>
```


### Offset

<!-- <layout-offset></layout-offset> -->

```html
    <ui-row>
      <ui-col :xs-offset="10" :xs="2">
        <div class="box"></div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :xs-offset="8" :xs="4">
        <div class="box"></div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :xs-offset="6" :xs="6">
        <div class="box"></div>
      </ui-col>
    </ui-row>
```

### Gutter

<!-- <layout-gutter></layout-gutter> -->

gutter unit is **rem**


```html
<ui-row :gutter="2">
      <ui-col :xs="3" :sm="2" :md="3" :lg="2">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="2" :md="3" :lg="3">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="2" :md="3" :lg="4">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="6" :md="3" :lg="3">
        <div class="box"></div>
      </ui-col>
    </ui-row>
    <ui-row :gutter="1">
      <ui-col :xs="3" :sm="2" :md="3" :lg="2">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="2" :md="3" :lg="3">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="2" :md="3" :lg="4">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="6" :md="3" :lg="3">
        <div class="box"></div>
      </ui-col>
    </ui-row>
```


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