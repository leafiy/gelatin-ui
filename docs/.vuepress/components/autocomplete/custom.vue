<template>
  <div class="container">
    <ui-autocomplete :items="items" v-model="value" :show-on-focus="true" :on-input-change="onInputChange" :on-item-selected="onItemSelected"></ui-autocomplete>
    <p>{{selected}}</p>
  </div>
</template>
<script>
export default {

  name: 'custom',

  data() {
    return {
      items: ['aaa', 'bbb', '😄',
        'ccc@cccc.com', 'xxxddd', '中文也可以', 'Lorem ipsum dolor sit amet', 'pulvinar velit, nec eleifend sapien'
      ],
      value: '',
      selected: ''
    }
  },
  methods: {
    onInputChange(value) {
      return new Promise((resolve, reject) => {
        resolve(this.items.map(item => item += '😀'))
      })
    },
    onItemSelected(index) {

      this.selected = 'selected: no.' + index + ' in this list and content is ' + this.items[index]
    },
  }
}

</script>
<style lang="css" scoped>
</style>
