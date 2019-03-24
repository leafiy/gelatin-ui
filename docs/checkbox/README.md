# Checkbox

### Boolean Checkbox

<checkbox-boolean></checkbox-boolean>


```html
<ui-checkbox v-model="foo">{{foo}}</ui-checkbox>
```
```javascript
 foo:false
```


### Array Checkboxs

<checkbox-array></checkbox-array>


```html
<ui-checkbox v-model="checkbox" value="三星" name="checkbox">三星</ui-checkbox>
<ui-checkbox v-model="checkbox" value="小米" name="checkbox">小米</ui-checkbox>
<ui-checkbox v-model="checkbox" value="oppo" name="checkbox">oppo</ui-checkbox>
<ui-checkbox v-model="checkbox" value="屎壳郎" name="checkbox">屎壳郎</ui-checkbox>
```

```javascript
data() {
  return {
    checkbox: ['小米'],
  }
}
```



### Indeterminate Checkboxs


<checkbox-indeterminate></checkbox-indeterminate>

```html
<ui-checkbox v-model="checkbox2" indeterminate name="checkbox2" value="">全选</ui-checkbox>
<ui-checkbox v-model="checkbox2" value="小米" name="checkbox2">小米</ui-checkbox>
<ui-checkbox v-model="checkbox2" value="oppo" name="checkbox2">oppo</ui-checkbox>
<ui-checkbox v-model="checkbox2" value="屎壳郎" name="checkbox2">屎壳郎</ui-checkbox>
```

```javascript
data(){
 return {
  checkbox2:[]
 }
}
````


### Disabled

<checkbox-disabled></checkbox-disabled>
