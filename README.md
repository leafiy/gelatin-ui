# gelatin-ui
vue 2.0 ui toolkit

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