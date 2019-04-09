<template>
  <div class="container">
    <ui-button-group size="sm">
      <ui-button @click.native="()=>show(1)">覆盖元素</ui-button>
      <ui-button @click.native="()=>close(1)">关闭遮罩</ui-button>
    </ui-button-group>
    <div class="box" v-ui-mask></div>
  </div>
</template>
<script>
export default {

  name: 'directive',

  data() {
    return {
      options1: {}
    }
  },

  methods: {
    show(n) {
      this.options1 = {
        show: true
      }
    },
    close(n) {
      this.options1.show = false
    }
  }
}

</script>
<style lang="css" scoped>
.box {
  background: #f1f1f1;
  border: 1px solid #eee;
  color: #000;
  width: 160px;
  height: 160px;
  border-radius: 10px;
  padding: 20px;
}

</style>
