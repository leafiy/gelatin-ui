<carousel-anchor2></carousel-anchor2>


```html
<ui-carousel :scroll-count="1" full-width :delay="2000" :anchors="anchors" nav-style="arrow">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</ui-carousel>
```

```javascript
data() {
  return {
    anchors: ['item1', 'item2', '3', 'page4', 'item-item', 'title-blah']
  }
}
````


`anchors` 传入数组启用浏览器hash模式，如果是空数组，则会自动使用index作为hashtag，传入与item长度相等的数组则会使用数组每个项目作为hashtag