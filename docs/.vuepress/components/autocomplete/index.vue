<template>
  <div class="container">
    <ui-hr>只在输入过程中打开</ui-hr>
    <ui-autocomplete :items="items" v-model="value1" :filter-data="true"></ui-autocomplete>
   <!--  <ui-hr>focus时打开</ui-hr>
    <ui-autocomplete :items="items" v-model="value2" :show-on-focus="true" :filter-data="true"></ui-autocomplete>
    <ui-hr>不对结果进行highlight处理</ui-hr>
    <ui-autocomplete :items="items" :highlight="false" v-model="value4" :show-on-focus="true"></ui-autocomplete>
    <ui-hr>对结果采用loose匹配</ui-hr>
    <ui-autocomplete :items="items" loose v-model="value5" :show-on-focus="true"></ui-autocomplete>
    <ui-hr>禁用已选择的项目</ui-hr>
    <ui-autocomplete :items="items" loose v-model="value5" :show-on-focus="true" :disabel-selected-item="true"></ui-autocomplete> -->
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
<style lang="css" scoped>
</style>
