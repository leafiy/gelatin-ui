# Avatar

<avatar-avatar></avatar-avatar>


 ```html
 <ui-avatar></ui-avatar>
    <ui-avatar shape="square"></ui-avatar>
    <ui-avatar username="Avatar"></ui-avatar>
    <ui-avatar username="Avatar">slot element</ui-avatar>
    <ui-avatar username="Avatar" :show-name="false">not show name</ui-avatar>
    <ui-avatar size="sm" url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg" username="size-sm"></ui-avatar>
    <ui-avatar url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg" username="leafiy"></ui-avatar>
    <ui-avatar size="lg" url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg" username="size-lg"></ui-avatar>
<ui-avatar size="lg" fallback="https://leafiy.oss-cn-beijing.aliyuncs.com/Snipaste_2018-12-26_14-10-06.png" url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-splash.jpg" username="size-lg"></ui-avatar>
 ```


|prop|type|default|description|
|--|--|--|--|
|shape|String|circle||
|size|String|||
|url|String|||
|username|String|||
|icon|String|user||
|showName|Boolean|true||
|lazy|Boolean|true|启用图片懒加载|
|fallback|String||图片加载失败时显示的图片,只在`lazy`为`true`时生效|