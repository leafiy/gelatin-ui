<template>
  <div class="container">
    <ui-v :rules="rules" ref="form">
      <ui-input placeholder="异步验证" type="text" name="async" :loading="loading1"></ui-input>
      <ui-input placeholder="自定义验证function，不能包含123和456" type="text" name="function" v-model="value1"></ui-input>
      <ui-input placeholder="自定义验证regex，/^\s+$/" type="text" name="regex" v-model="value2"></ui-input>
    </ui-v>
  </div>
</template>
<script>
export default {

  name: 'v-custom',

  data() {
    return {
      loading1: false,
      value1: '',
      value2: '',
      rules: {
        'async': [{
          trigger: 'input',
          type: () => {
            return new Promise((resolve, reject) => {
              this.loading1 = true
              setTimeout(() => {
                this.loading1 = false
                reject()
              }, 3000)
            })
          },
          message: '出错了'
        }],
        'function': [{
            trigger: 'input',
            type: (value) => {
              if (value.includes('123')) {
                return false
              } else {
                return true
              }
            },
            message: '不能包含123'
          },
          {
            trigger: 'input',
            type: (value) => {
              if (value.includes('456')) {
                return false
              } else {
                return true
              }
            },
            message: '不能包含456'
          }

        ],
        'regex': [{
          trigger: 'input',
          type: /^\s+$/,
          message: '输入什么都是错的'
        }]
      },
    }
  }
}

</script>
<style lang="css" scoped>
</style>
