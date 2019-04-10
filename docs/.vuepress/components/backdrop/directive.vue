<template>
  <div class="container">
    <ui-hr>默认指令</ui-hr>
    <div class="box" v-ui-mask>
      {{text}}
    </div>
    <ui-hr>参数指令</ui-hr>
    <div class="box" v-ui-mask="options1">
      {{text2}}
    </div>
    <div class="box" v-ui-mask="options2">
      {{text3}}
    </div>
    <div class="box" v-ui-mask="t">
      v-ui-mask="true"
    </div>
    <ui-hr>动态指令</ui-hr>
    <ui-button-group size="sm">
      <ui-button @click.native="show">覆盖元素</ui-button>
      <ui-button @click.native="close">关闭遮罩</ui-button>
    </ui-button-group>
    <div class="box" v-ui-mask="options3">
    </div>
  </div>
</template>
<script>
export default {

  name: 'directive',

  data() {
    return {
      t: true,
      options1: { show: true },
      options2: { show: false },
      text: '<div class="box" v-ui-mask></div>',
      text2: '<div class="box" v-ui-mask="{show:true}"></div>',
      text3: '<div class="box" v-ui-mask="{show:false}"></div>',
      options3: {}
    }
  },

  methods: {
    show() {
      this.options3 = {
        show: true
      }
    },
    close() {
      this.options3.show = false
    }
  }
}

</script>
<style lang="css" scoped>
.box {
  background: #f1f1f1;
  border: 1px solid #eee;
  color: #000;
  width: 460px;
  height: 160px;
  border-radius: 10px;
  padding: 20px;
}

</style>
