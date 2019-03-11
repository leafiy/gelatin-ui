# Autocomplete


## Autocomplete


<autocomplete-index></autocomplete-index>

<code-code>
 ```html
<template>
  <div class="container">
    <ui-hr>只在输入过程中打开</ui-hr>
    <ui-autocomplete :items="items" v-model="value1"></ui-autocomplete>
    <ui-hr>不对结果进行highlight处理</ui-hr>
    <ui-autocomplete :items="items" :highlight="false" v-model="value4" :show-on-focus="true" :filter-data="false"></ui-autocomplete>
    <ui-hr>对结果采用loose匹配</ui-hr>
    <ui-autocomplete :items="items" loose v-model="value5" :show-on-focus="true" :filter-data="false"></ui-autocomplete>
  </div>
</template>
<script>
export default {

  name: 'autocomplete',

  data() {
    return {
      items: ['aaa', 'bbb', '😄',
        'ccc@cccc.com', 'xxxddd', '中文也可以', 'Lorem ipsum dolor sit amet', 'pulvinar velit, nec eleifend sapien'
      ],
      value1: '',
      value2: '😄',
      value3: '',
      value4: '',
      value5: ''
    }
  },
  methods: {

  }
}

</script>
 ```
</code-code>


|prop|type|default|descript|
|--|--|--|--|
|items|Array|||
|loose|Boolean|false||
|highlight|Boolean|true||
|highlightColor|String|primary|see `highlight` document|
|loading|Boolean|true||
|icon|String|team||
|placeholder|String|||
|onItemSelected|Function|||
|showOnFocus|Boolean|true||
|value|String/Number|||
|disableSelectedItem|Boolean|false|对选择过的item进行disabled处理|
|multiple|Boolean/Number|false|允许多选|

## onInputChange & onItemSelected

<autocomplete-custom></autocomplete-custom>

<code-code>
 ```html
  <ui-autocomplete :items="items" v-model="value" :show-on-focus="true" :on-input-change="onInputChange" :on-item-selected="onItemSelected"></ui-autocomplete>
 ```

 ```javascript
 onInputChange(value) {
      return new Promise((resolve, reject) => {
        resolve(this.items.map(item => item += '😀'))
      })
    },
    onItemSelected(index) {

      this.selected = 'selected: no.' + index + ' in this list and content is ' + this.items[index]
    }
 ```
</code-code>


`onInputChange` 每次输入时,传回自定义结果数组,可以直接`return array` 也可以传入`promise resolve(array)` , 例子中是输入后给每个结果后面加一个笑脸

`onItemSelected` 当选择时返回被选择项目的索引 `index`

## 复杂元素列表

### 传入html字符串列表

<autocomplete-html></autocomplete-html>

*暂不支持element reaction*

```html
<template>
  <div class="container">
    <ui-autocomplete :items="items" v-model="value" :show-on-focus="true"></ui-autocomplete>
    <ui-hr>传入element列表</ui-hr>
    <ui-autocomplete :items="items2" v-model="value2" :show-on-focus="true"></ui-autocomplete>
  </div>
</template>
<script>
export default {

  name: 'html-list',

  data() {
    return {
      items: ['<div class="ui-avatar ui-avatar-size-sm ui-avatar-circle"><div class="ui-avatar-container"><div class="ui-image ui-avatar-image"><div class="ui-image-image" style="background-image: url(&quot;https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg&quot;);"></div></div></div> <span class="ui-avatar-name">size-sm</span> <span class="ui-avatar-slot"></span></div>',
        '<div class="ui-avatar ui-avatar-size-lg ui-avatar-circle"><div class="ui-avatar-container"><div class="ui-image ui-avatar-image"><div class="ui-image-image" style="background-image: url(&quot;https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg&quot;);"></div></div></div> <span class="ui-avatar-name">Sed posuere egestas augue eu facilisis. </span> <span class="ui-avatar-slot"></span></div>'
      ],
      value: '',
      value2: '',
    }
  },
  computed: {
    items2() {
      let arr = []
      for (let item of this.items) {
        let div = document.createElement('div')
        div.innerHTML = item
        arr.push(div)
      }
      return arr
    }
  }
}

</script>
```

