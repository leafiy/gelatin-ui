# :pill: Gelatin-Ui - a simple VueJS ui toolkit [Document](https://leafiy.github.io/gelatin-ui/)

`Gelatin 明胶，食用后无任何反应`

:pensive: 用着简单，看着好看 :flushed:

创立原因：为real life项目需求而生，elementUI太重了，iView太丑了，而且，用起来都好复杂

设计理念：代码可以丑陋，使用必须简单

Gelatin简单在哪，几个例子：

> 直接在package.json自定义主题颜色和其他变量(todo)
只需插入input或包含input的组件开箱即用的且自定义规则的validator，完全不影响原有项目结构
随意插入元素的Carousel，gelatin只负责滚动，样式始终由项目来决定
全屏随意插入的popover tooltip dropdown message toast modal等，只需设置触发元素，不再受原有项目可能出现的overflow hidden影响
甚至可以自动圆角的遮罩层 v-mask v-loading 几个字母就能做到


完成度

- [x] accordion
- [x] autocomplete
- [x] button
- [x] checkbox
- [x] heading
- [x] icon
- [x] input
- [x] loading
- [x] message
- [x] progress
- [x] spinner
- [x] toast
- [x] uplaoder
- [x] alert
- [x] avatar
- [x] card
- [x] confirm
- [x] highlight
- [x] image
- [x] layout
- [x] marquee
- [x] modal
- [x] radio
- [x] tag
- [x] tooltip
- [x] validator
- [x] backdrop
- [x] carousel
- [x] dropdown
- [x] hr
- [x] loader
- [x] mask
- [x] popover
- [x] share
- [x] textarea
- [x] typer

- [ ] tab
- [ ] tab-switch
- [x] countdown
- [ ] tree
- [ ] lightbox
- [ ] geo
- [ ] scroll-spy
- [ ] loading-bar
- [ ] back-to-top
- [ ] read-more
- [ ] photo-editor
- [ ] integration wangeditor
- [ ] panel
- [ ] slide-layer
- [ ] select / options
- [ ] unit test






## git commit message

```
npm install -g commitizen conventional-changelog-cli
commitizen init cz-conventional-changelog --save --save-exact
conventional-changelog -p angular -i CHANGELOG.md -w


// conventional-changelog -p angular -i CHANGELOG.md -w -r 0
// Change log
npm run changelog
```

## 按需引用配置

安装babel-plugin-component

配置bable plugin

```
plugins: [
    [
      "component",
      {
        libraryName: "gelatin-ui",
        libDir: "packages"
      },
      "gelatin-ui"
    ]
  ]
```


### popover / dropdown / tooltip

```
//popover
Vue.$Popover({options})


//dropdown
<ui-dropdown>
 <div slot="trigger" class="dropdown-trigger">
  // trigger
 </div>
</ui-dropdown>


//tooltip
<component v-tooltip="content"></component>
```