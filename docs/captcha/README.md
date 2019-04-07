# Captcha 验证码

<captcha-index></captcha-index>



 ```html
<ui-captcha></ui-captcha>
<ui-captcha :width="160" :height="55" ref="captcha2"></ui-captcha>
 ```



|prop|type|default|description|
|--|--|--|--|
|clickRefresh|Boolean|true|点击刷新验证码|
|lineWidth|Number|0.5|干扰线条宽度|
|lineNum|Number|2|线条数量|
|dotNum|Number|2|干扰点数量|
|dotRadius|Number|10|点半径|
|foreColor|Array,String|[10, 80]|颜色范围，数组为范围随机，字符为固定颜色|
|backColor|Array,String|[150, 250]|颜色范围，数组为范围随机，字符为固定颜色|
|fontSize|Number|30||
|font|String|Georgia||
|fontStyle|String|'fill'/'stroke']|字符绘制方式|
|factor|String|'acdefhijkmnpwxy12345789'|验证码字符范围|
|len|Number|4||
|width|Number|||
|height|Number|||