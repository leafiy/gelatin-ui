<template>
  <div class="container">
    <ui-button :disabled="disabled">
      <ui-countdown ref="countdown" :second="30" @start="start" @stop="stop">s</ui-countdown>
    </ui-button>
    <ui-button @click.native="restart">重新开始计时</ui-button>
    <ui-hr>与文字一起使用</ui-hr>
    <span class="example1" v-ui-loading="loading"><ui-countdown ref="countdown2" :second="10" @start="start2" @stop="stop2">s</ui-countdown>我是span文字哈</span>
  </div>
</template>
<script>
export default {

  name: 'second2',

  data() {
    return {
      disabled: false,
      loading: true
    }
  },
  methods: {
    start() {
      this.disabled = true
    },
    stop() {
      this.disabled = false

    },
    start2() {
      this.loading = true
    },
    stop2() {
      this.loading = false
      setTimeout(() => {
        this.$refs['countdown2'].start()
      }, 2000)
    },
    restart() {
      this.$refs['countdown'].start()
    }
  }
}

</script>
<style lang="css" scoped>
.example1 {
  display: inline-block;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid #eee;
}

</style>
