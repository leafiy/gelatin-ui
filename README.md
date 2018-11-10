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