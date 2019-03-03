<template>
  <div class="container">
    <ui-captcha></ui-captcha>
    <ui-captcha :width="160" :height="55" ref="captcha2"></ui-captcha>
    <ui-captcha :width="160" :height="55" ref="captcha2" factor="干死黄旭东" :font-size="15"></ui-captcha>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {

    }
  },
  methods:{
  }
}

</script>
<style lang="css" scoped>
</style>
