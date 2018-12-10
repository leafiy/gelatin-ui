# 按需引用

`yarn add babel-plugin-component -D`

更改babel plugins设置

```js
[
  "component",
  {
    libraryName: "gelatin-ui",
    libDir: "packages",
    style: ""
  },
  "gelatin-ui"
]
```


vue-cli 3.0 配置文件

```js
module.exports = {
 presets: ["@vue/app", "@babel/env"],
 plugins: [
   [
     "component",
     {
       libraryName: "gelatin-ui",
       libDir: "packages",
       style: ""
     },
     "gelatin-ui"
   ]
 ]
};
```

#### 项目中引用

`import {Input} from 'gelatin-ui'`

`Vue.use(Input)`

`<ui-input></ui-input>`