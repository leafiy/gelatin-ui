# Carousel

每个卡片的样式、尺寸，都由项目控制，gelatin-ui只负责滚动部分，可以随意插入你想要的元素，甚至是span，text，image

#### 默认配置

<carousel-carousel></carousel-carousel>

<code-code title="默认配置">
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
</code-code>

#### 自动滚动

<carousel-carousel2></carousel-carousel2>

<code-code title="usage">
 ```html
 <ui-carousel auto loop :delay="1000">
 ```

</code-code>

#### expand,每次滚动3个卡片

如果卡片的阴影被`overflow:hidden`覆盖，可以根据阴影的尺寸设置expand

<carousel-carousel3></carousel-carousel3>

<code-code title="usage">
 ```html
 <ui-carousel :scroll-count="3" nav-style="arrow" auto loop :expand="12" :delay="1000">
 ```
</code-code>

props
|prop|type|default|description|
|--|--|--|--|
|scrollCount|Number|1|每次滚动的数量|
|navStyle|String||bar,arrow 箭头或bar样式，没有则不显示|
|touch|Boolean|true|支持触摸滚动|
|auto|Boolean|false|自动滚动|
|delay|Number|2000|每次滚动延迟|
|loop|Boolean|false|是否循环|
|expand|Number||扩展容器显示范围，以显示卡片阴影|