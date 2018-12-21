# 全局安装

`yarn add https://github.com/leafiy/gelatin-ui`

`import GelatinUi from "gelatin-ui";`

`Vue.use(GelatinUi);`

## 开发模式

由于组件中存在交叉引用已经通过`Vue.use()`安装过的组件,而`vue-cli3`中的`hot-reload`模块使用的时`vue.common.js`很有可能和项目中的`import Vue from 'vue'`并不是一个`Vue`实例,所以会导致这些组件被安装两次,造成`$attrs/$listeners readonly`的错误信息

[关于$attrs is readony](https://github.com/alexsasharegan/vue-transmit/issues/19#issuecomment-353983806)

此错误信息并不影响任何功能,如果打包为生产环境也不会再出现,一般可忽略,如果不能忍受,可以通过配置`babel alias`解决,使整个项目使用同一个`Vue`实例

```js
module.exports = {
  plugins: [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        'vue': "./node_modules/vue/dist/vue.esm.js"
      }
    }]
  ]
};
```