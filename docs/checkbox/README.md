# Checkbox

#### 基础用法


<checkbox-checkbox></checkbox-checkbox>

```html
<ui-checkbox v-model="checkbox1">checkbox</ui-checkbox>
<ui-radio v-model="checkbox1" :value="checkbox1">radio</ui-radio>
```

#### indeterminate

<code-code>
```html
<ui-checkbox v-model="checkbox2" indeterminate name="checkbox2" value="">全选</ui-checkbox>
<ui-checkbox v-model="checkbox2" value="小米" name="checkbox2">小米</ui-checkbox>
<ui-checkbox v-model="checkbox2" value="oppo" name="checkbox2">oppo</ui-checkbox>
<ui-checkbox v-model="checkbox2" value="屎壳郎" name="checkbox2">屎壳郎</ui-checkbox>
```
</code-code>