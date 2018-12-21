# Loading bar

<loading-bar-bar></loading-bar-bar>

#### Methods

挂载在`Vue.prototype`,调用`$UiLoadingBar`使用

在Vue app中使用,永远只有一个实例,调用 `finish()` 或 `fail()` 后需要重新调用`$UiLoadingBar()`创建新实例使用

`this.$UiLoadingBar(options)` 创建LoadingBar实例

`this.$UiLoadingBar.finish()` 手动完成

`this.$UiLoadingBar.increase(percent)` 增加百分比

`this.$UiLoadingBar.decrease(percent)` 减少半分比

`this.$UiLoadingBar.fail()` 手动失败


#### Options

|option|type|default|description|
|--|--|--|--|
|size|Number|3|进度条高度|
|percentage|Number|0|初始进度|
|indeterminate|Boolean|false|为true时为不间断动画,`percentage` `duration` 无效|
|foreColor|String|`#08D7B8`|进度条颜色|
|backColor|String|`#ffffff`|背景颜色|
|duration|Number|4000|当为自动时从0到100的持续时间|