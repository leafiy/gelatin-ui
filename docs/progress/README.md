# Progress

<progress-ring></progress-ring>

<code-code>
 ```html
<ui-progress type="ring" :percentage="60"></ui-progress>
<ui-progress type="ring" :percentage="40" animate :show-number="false"></ui-progress>
<ui-progress type="ring" :percentage="33" foreColor="silver" backColor="red"></ui-progress>
<ui-progress type="ring" :percentage="22" :size="60"></ui-progress>
<ui-progress type="bar" :percentage="22" :size="22"></ui-progress>
<ui-progress type="bar" animate :percentage="66" :size="22"></ui-progress>
```
</code-code>


props

|prop|type|default|description|
|--|--|--|--|
|type|String|ring||
|size|Number|36||
|percentage|Number|0||
|strokeWidth|Number|4||
|backColor|String|#E9EBEE||
|foreColor|String|#08D7B8||
|showNumber|Boolean|true||
|animate|Boolean|false||