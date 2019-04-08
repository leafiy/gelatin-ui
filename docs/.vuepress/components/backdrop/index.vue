<template>
  <div class="container">
    <ui-button-group size="sm">
      <ui-button @click.native="show1">覆盖元素</ui-button>
      <ui-button @click.native="show2">覆盖元素（自动适应圆角）</ui-button>
      <ui-button @click.native="show3">插入到body</ui-button>
    </ui-button-group>
    <div class="box">
      <ui-backdrop :show="show"></ui-backdrop>好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字好多文字
    </div>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {
      show: false
    }
  },
  methods: {
    show1() {},
    show2() {},
    show3() {},
  }
}

</script>
<style lang="css" scoped>
.box {
  background: #f1f1f1;
  border: 1px solid #eee;
  color: #000;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  padding: 20px;
}

</style>
