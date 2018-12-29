<template>
  <div class="container">
    <ui-v :rules="rules" ref="form">
      <ui-input name="email"></ui-input>
    </ui-v>
    <ui-button size="sm" @click.native="validate">点我验证</ui-button>
  </div>
</template>
<script>
export default {

  name: 'v-submit',

  data() {
    return {
      rules: {
        email: [{
          trigger: 'submit',
          type: 'email',
          message: '不是email'
        }, {
          trigger: 'blur',
          type: 'required',
          message: '必须填写'
        }],

      }
    }
  },
  methods: {
    validate() {
      this.$refs['form'].validate().then(_ => {
        this.$UiToast('没错！')
      }).catch(_ => {
        this.$UiToast.error('有错')
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
