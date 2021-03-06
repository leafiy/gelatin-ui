# Input


## Usages

<input-index></input-index>

 ```html
<ui-input></ui-input>
<ui-input disabled v-model="disabled"></ui-input>
<ui-input readonly v-model="readonly"></ui-input>
<ui-input loading></ui-input>
<ui-input :width="200" value="width=200"></ui-input>
<ui-input size="lg" placeholder="size : lg"></ui-input>
<ui-input size="sm" placeholder="size : sm"></ui-input>
```


|prop|type|default|description|
|--|--|--|--|
|tabindex|Number|||
|value|String,Number|||
|loading|Boolean|false||
|type|String|text|input html type|
|name|String|||
|maxLength|Number|||
|minLength|Number|||
|placeholder|String|'type in here'||
|disabled|Boolean|false||
|autoComplete|Boolean|fakse||
|showClear|Boolean|true||
|readonly|Boolean|false||
|autofocus|Boolean|false||
|width|Number|||
|min|Number,String|||
|max|Number,String|||


## suffix / prefix

<input-slot></input-slot>



 ```html
<ui-input>
 <ui-icon name="user" slot="prefix"></ui-icon>
 <ui-icon name="user" slot="suffix"></ui-icon>
</ui-input>
<ui-input>
 <div slot="prefix">http://</div>
 <div slot="suffix">.com</div>
</ui-input>
```






## themes

<input-theme></input-theme>


## group

<input-group></input-group>

props

|prop|type|default|description|
|--|--|--|--|
|placeholder|String|''|for each splited input|
|skip|Boolean|true|skip to next input when value length = maxLength|
|width|Number||each input width|
|maxLength|Number|1| default `abcd` will be 4 `input` / `maxLength=2` will be 2 `input`|
|theme|String||the same with input|
|value|String,Number||v-model|
|type|String|text|the same with input|
|autoSelect|Boolean|true|selcet input when focus|


 ```html
<ui-input-group v-model="model1" :max-length="2">
    </ui-input-group>
    <ui-input-group theme="ghost" v-model="model1">
    </ui-input-group>
    <ui-input-group :width="46" v-model="model1">

    </ui-input-group>
    <ui-input-group :width="46" v-model="model1" theme="inline">

    </ui-input-group>
 ```



### events

submit
input
keyup
keydown
input
focus
blur
change
clear
delete