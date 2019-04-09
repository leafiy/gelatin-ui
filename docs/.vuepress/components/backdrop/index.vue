<template>
  <div class="container">
    <ui-button-group size="sm">
      <ui-button @click.native="show1 = true">覆盖元素</ui-button>
      <ui-button @click.native="show1 = false">关闭遮罩</ui-button>
    </ui-button-group>
    <div class="box">
      <ui-backdrop :show="show1"></ui-backdrop>好多文字好多文字好多文字好多文字好多文字
    </div>
    <ui-hr></ui-hr>
    <ui-button-group size="sm">
      <ui-button @click.native="show2 = true">覆盖元素（自动适应父元素圆角）</ui-button>
      <ui-button @click.native="show2 = false">关闭遮罩</ui-button>
    </ui-button-group>
    <div class="box">
      <ui-backdrop :show="show2" auto-radius></ui-backdrop>好多文字好多文字好多文字好多文字好多文字
    </div>
    <ui-hr></ui-hr>
    <ui-button-group size="sm">
      <ui-button @click.native="show3 = true">自定义transition 和 钩子</ui-button>
      <ui-button @click.native="show3 = false">关闭遮罩</ui-button>
    </ui-button-group>
    <div class="box">
      <ui-backdrop :show="show3" auto-radius :transition="transition" @after-enter="afterEnter" @after-leave="afterLeave"></ui-backdrop>好多文字好多文字好多文字好多文字好多文字
    </div>
    <ui-hr></ui-hr>
    <ui-button-group size="sm">
      <ui-button @click.native="show4 = true;lock=true">全屏遮罩</ui-button>
      <ui-button @click.native="show4 = true;lock=false">不锁定滚动</ui-button>
      <ui-button @click.native="show4 = true;color='lighter';lock=true">lighter</ui-button>
      <ui-button @click.native="show4 = true;color='light';lock=true">light</ui-button>
      <ui-button @click.native="show4 = true;color='darker';lock=true">darker</ui-button>
    </ui-button-group>
    <ui-backdrop :show="show4" auto-radius fullscreen :lock="lock" :color="color" :z-index="1000" @click.native="show4 = false">全屏遮罩</ui-backdrop>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      transition: 'fold',
      color: 'dark',
      lock:true,
      afterEnter: () => { this.$UiToast('backdrop open') },
      afterLeave: () => { this.$UiToast('backdrop close') },
    }
  },
  methods: {


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
