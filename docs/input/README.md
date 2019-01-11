# Input


## Usages

<input-index></input-index>

<code-code>
 ```html
<ui-input></ui-input>
 <ui-input disabled v-model="disabled"></ui-input>
 <ui-input readonly v-model="readonly"></ui-input>
 <ui-input loading></ui-input>
```

</code-code>

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


## suffix / prefix

<input-slot></input-slot>

<code-code>

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
</code-code>





## themes

<input-theme></input-theme>


## group

<input-group></input-group>

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