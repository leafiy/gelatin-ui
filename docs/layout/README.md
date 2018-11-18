# layout

使用flex布局，rem为单位，不支持ie10以下浏览器


### Responsive

使用Number传入props

<layout-row-responsive></layout-row-responsive>


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
|xs|30rem|
|sm|48rem|
|md|64rem|
|lg|75rem|


### Responsive by percertage

<layout-row-responsive-percertage></layout-row-responsive-percertage>

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

<layout-offset></layout-offset>

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