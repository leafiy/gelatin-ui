### tooltip/dropdown/popvoer 定位方式

`tooltip/dropdown/popvoer` 三个组件共享相同的定位方式和配置方式，只是在app中的调用方式不同

`tooltip`是directive

`dropdown`是component调用

`popover`是JS调用

三个组件均采取自动定位+偏移的方式，且永远不会超出浏览器可视范围，可拖动窗口查看效果

以下是三种方式共用的样式配置方式

|prop|type|defalut|description|
|--|--|--|--|
|width|Number|||
|arrow|Boolean|true|是否显示小箭头|
|offset|Number|14|菜单偏移|
|arrowSize|Number|10|箭头尺寸|
|align|String|center|菜单对齐与trigger的方式|
|radius|Number|10|菜单样式|
|zIndex|Number|200||