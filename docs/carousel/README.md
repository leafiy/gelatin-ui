# Carousel

每个卡片的样式、尺寸，都由项目控制，gelatin-ui只负责滚动部分，可以随意插入你想要的元素，甚至是span，text，image

> carousel容器为flex容器,宽度是由每个item的宽度决定,具体项目中不可直接嵌套responsive或宽度为百分比元素

> 如果发生堆叠,只需用css为每个item增加固定的宽度值,gelatin可以做到每次滚动前自动判断item的宽度,即使是宽度发生变化也无需担心,也可通过`fullWidth`属性,强制每个item宽度都等于容器宽度


### 默认配置

<carousel-carousel></carousel-carousel>

 ```html
 <ui-carousel>
      <div class="item"><img src="https://placehold.it/200x200"></div>
        <div class="item"><img src="https://placehold.it/230x200"></div>
          <div class="item"><img src="https://placehold.it/220x200"></div>
            <div class="item"><img src="https://placehold.it/240x200"></div>
                <div class="item"><img src="https://placehold.it/320x200"></div>
                  <div class="item"><img src="https://placehold.it/190x200"></div>
                    <div class="item"><img src="https://placehold.it/10x200"></div>
                      <div class="item"><img src="https://placehold.it/230x200"></div>
                        <div class="item"><img src="https://placehold.it/140x200"></div>
                          <div class="item"><img src="https://placehold.it/320x200"></div>
    </ui-carousel>
 ```


### 自动滚动

<carousel-carousel2></carousel-carousel2>
 ```html
 <ui-carousel auto loop :delay="1000">
 ```



### expand,每次滚动3个卡片

如果卡片的阴影被`overflow:hidden`覆盖，可以根据阴影的尺寸设置expand

<carousel-carousel3></carousel-carousel3>

 ```html
 <ui-carousel :scroll-count="3" nav-style="arrow" auto loop :expand="12" :delay="1000">
 ```


### 自定义控制按钮及状态获取


<carousel-carousel4></carousel-carousel4>

```html
 <ui-carousel ref="carousel" :scroll-count="1" full-width auto loop :expand="12" :delay="1000">
```

```javascript
next() {
  this.$refs['carousel'].moveCarousel(1)
},
prev() {
  this.$refs['carousel'].moveCarousel(-1)
},
next2() {
  this.$refs['carousel'].moveCarousel(1, 2)
}
```


### Anchor

<carousel-anchor></carousel-anchor>




#### props
|prop|type|default|description|
|--|--|--|--|
|scrollCount|Number|1|每次滚动的数量|
|bar|Boolean||bar导航样式|
|arrow|Boolean||arrow导航样式|
|touch|Boolean|true|支持触摸滚动|
|auto|Boolean|false|自动滚动|
|delay|Number|2000|每次滚动延迟|
|loop|Boolean|false|是否循环|
|expand|Number||扩展容器显示范围，以显示卡片阴影|
|fullWidth|Boolean|false|强制item宽度等于容器宽度|
|startIndex|Number|0|从第几个item开始|
|anchors|Array||传入包含每个item名称的数组，更改浏览器hash，以达到前进后退效果[指定anchor名称的例子](/carousel/anchor.md)|


#### events

`change` 返回{newIndex,oldIndex,direction}