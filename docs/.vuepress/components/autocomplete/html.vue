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
<style lang="css" scoped>
</style>
