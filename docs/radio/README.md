# Radio


### 基础用法

<radio-radio></radio-radio>
```html
<ui-radio v-model="radio" name="radio" value="1">radio 1</ui-radio>
<ui-radio v-model="radio" name="radio" value="2">radio 2</ui-radio>
<ui-radio v-model="radio" name="radio" value="3">radio 3</ui-radio>
<ui-radio v-model="radio" name="radio" value="4">radio 4</ui-radio>
```


```javascript
data() {
  return {
    radio: '2'
  }
}
````



### Disabled

<radio-disabled></radio-disabled>
```html
<ui-radio v-model="radio" name="radio" value="4" disabled>radio 4</ui-radio>
```