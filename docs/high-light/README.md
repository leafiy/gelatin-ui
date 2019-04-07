# High light 文字高亮

<high-light-index></high-light-index>

**约定: 只能highlight指令元素内span元素内的内容 && 只匹配文字**



```html
<p v-ui-highlight="'High light'"><span>High light 文字高亮</span></p>
<div v-ui-highlight="'i'">
  <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
</div>
<div v-ui-highlight="{text:'d',color:'defalut'}">
  <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
</div>
<div v-ui-highlight="{text:'a',className:'classsss'}">
  <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
</div>
<div v-ui-highlight="{text:'s',color:'error'}">
  <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
</div>
<div v-ui-highlight="{text:'sibe',color:'error',loose:true}">
      <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
    </div>
```


|option|type|default|description|
|--|--|--|--|
|text|String|||
|className|String||custom class `ui-hightlight-${className}`|
|color|String||[default,primary,warning,error]|
|tag|String|b|被高亮元素的标签|
|loose|Boolean|false|宽松匹配|