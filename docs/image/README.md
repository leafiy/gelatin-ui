# Image

方便的图片懒加载，支持自定义loading图标，和fallback

<image-image></image-image>


<code-code>
 ```html
<ui-image src="https://leafiy.oss-cn-beijing.aliyuncs.com/thomas-kinto-1178082-unsplash.jpg"></ui-image>
<ui-image src="https://leafiy.oss-cn-beijing.aliyuncs.com/thomas-kinto-1178082-unsplash.jpg">
<span slot="loader">i am loding</span>
</ui-image>
<ui-image keep-size src="https://leafiy.oss-cn-beijing.aliyuncs.com/thomas-kinto-1178082-unlash.jpg" fallback="https://leafiy.oss-cn-beijing.aliyuncs.com/Snipaste_2018-12-26_14-10-06.png">
</ui-image>
<ui-image cover src="https://leafiy.oss-cn-beijing.aliyuncs.com/jonny-caspari-1148429-unsplash.jpg"></ui-image>
 ```

</code-code>


|prop|type|default|description|
|--|--|--|--|
|src|String|||
|cover|Boolean|false||
|keepSize|Boolean|false|保持原图片比例和大小|
|fallback|String|||


events

|event||
|--|--|
|load-finsih||
|load-failed||