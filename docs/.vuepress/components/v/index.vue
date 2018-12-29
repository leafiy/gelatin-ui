<template>
  <div class="container">
    <ui-v ref="form1" :rules="rules">
      <ui-input placeholder="required validate" type="text" name="required"></ui-input>
      <ui-input placeholder="number validate" type="text" name="number"></ui-input>
      <ui-input placeholder="email validate" type="email" name="email"></ui-input>
      <ui-input placeholder="maxlength validate" type="text" name="max"></ui-input>
      <ui-input placeholder="minlength validate" type="text" name="min"></ui-input>
      <ui-input placeholder="password" type="password" name="password" v-model="password"></ui-input>
      <ui-input placeholder="password" type="password" name="password2" v-model="password2"></ui-input>
    </ui-v>
    <ui-hr></ui-hr>
  </div>
</template>
<script>
export default {

  name: 'v-index',

  data() {
    return {
      password: "",
      password2: "",
      rules: {
        required: [{
          trigger: 'input',
          type: 'required',
          message: '这个input必须填写'
        }],
        number: [{
          trigger: 'input',
          type: 'number',
          message: '不是number'
        }],
        email: [{
          trigger: 'input',
          type: 'email',
          message: '不是email'
        }],
        max: [{
          trigger: 'input',
          type: 'maxLength',
          length: 10,
          message: '超过10个了'
        }],
        min: [{
          trigger: 'input',
          type: 'minLength',
          length: 10,
          message: '最少要10个'
        }],
        password: [{
            trigger: 'input',
            type: 'minLength',
            length: 3,
            message: '最少要3个'
          },
          {
            trigger: 'input',
            type: 'maxLength',
            length: 10,
            message: '最多不能超过10个'
          }, {
            trigger: 'input',
            type: 'required',
            message: '这个input必须填写'
          }
        ],
        password2: [{
          trigger: 'input',
          type: () => {
            return this.password === this.password2
          },
          message: '两次密码输入不一致'
        }],
      }
    }
  }
}

</script>
<style lang="css" scoped>
</style>
