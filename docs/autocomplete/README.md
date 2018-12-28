# Autocomplete


## Autocomplete


<autocomplete-index></autocomplete-index>

<!-- <autocomplete-el></autocomplete-el> -->


|prop|type|default|descript|
|--|--|--|--|
|items|Array|||
|loose|Boolean|false||
|highlight|Boolean|true||
|highlightColor|String|primary|see `highlight` document|
|showSpinner|Boolean|true||
|debounce|Number|100||
|icon|String|team||
|placeholder|String|||
|onInputChange|Function|||
|onItemSelected|Function|||
|showOnFocus|Boolean|false||
|filterData|Booean|false||
|value|string|||

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