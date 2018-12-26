<template>
  <div class="container"> <ClientOnly>
    <ui-button @click.native="toast1">Normal</ui-button>
    <ui-button @click.native="toast2">close event</ui-button>
    <ui-button @click.native="toast3">click icon event</ui-button>
    <ui-button @click.native="toast4">warning</ui-button>
    <ui-button @click.native="toast5">error</ui-button>
    <ui-button @click.native="toast6">position:{x:right,y:bottom}</ui-button>
    <ui-button @click.native="toast7">position:{x:center,y:top}</ui-button>
    <ui-button @click.native="toast8">position:{x:center,y:center}</ui-button></ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'toast',

  data() {
    return {

    }
  },
  methods: {
    toast1() {
      this.$UiToast({
        message: 'Normal Toast',
        icon: "user"
      })
    },
    toast2() {
      this.$UiToast({
        message: '我不会消失，除非点icon一下',
        icon: "close",
        duration:0,
        closeOnClick:true,
        position: { x: 'left', y: "top" },
        onClose: () => {
          this.$UiToast('toast closed')
        }
      })
    },
    toast3() {
      this.$UiToast({
        message: 'click icon event',
        icon: "user",
        onClick: () => {
          alert('你点了图标')
        },
      })
    },
    toast4() {
      this.$UiToast({
        type: 'warning',
        message: 'warning message',
        icon: "stop"
      })
    },
    toast5() {
      this.$UiToast({
        type: 'error',
        message: 'error message',
        icon: "stop"
      })
    },
    toast6() {
      this.$UiToast({
        type: 'warning',
        message: 'warning message on left bottom warning message on left bottom',
        icon: "stop",
        position: { x: 'left', y: "bottom" }
      })
    },
    toast7() {
      this.$UiToast({
        type: 'warning',
        message: 'warning message on center top',
        icon: "stop",
        duration: 5000,
        position: { x: 'center', y: "top" }
      })
    }
    ,
    toast8() {
      this.$UiToast({
        type: 'error',
        message: 'warning message on center of window',
        icon: "stop",
        position: { x: 'center', y: "center" }
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
