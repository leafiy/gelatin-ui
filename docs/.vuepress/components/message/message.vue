<template>
  <div class="container">
    <ui-button @click.native="click">Message</ui-button>
    <ui-button @click.native="click2">message with title and icon</ui-button>
    <ui-button @click.native="click3">message with close icon</ui-button>
    <ui-hr></ui-hr>
    <ui-button @click.native="click4">position {x:left,y:bottom}</ui-button>
    <ui-button @click.native="click5" type="warning">warning</ui-button>
    <ui-button @click.native="$UiMessage.error('error message')" type="error">error</ui-button>
    <ui-hr>message with actions</ui-hr>
    <ui-button @click.native="click6" type="warning">with actions</ui-button>
  </div>
</template>
<script>
export default {

  name: 'message',

  data() {
    return {

    }
  },
  methods: {
    click() {
      this.$UiMessage({
        message: 'asdf asdf asdfas dfasdf asdfgashdiojfg hasjklghasjkldfghklasj dfhgjkl',
        // icon: 'team',
      })
    },
    click2() {
      this.$UiMessage({
        message: 'asdf asdf asdfas dfasdf asdfgashdiojfg hasjklghasjkldfghklasj dfhgjkl',
        title: 'I am a title',
        icon: 'user'
      })
    },
    click3() {
      this.$UiMessage({
        message: 'asdf asdf asdfas dfasdf asdfgashdiojfg hasjklghasjkldfghklasj dfhgjkl',
        title: 'I am a title',
        showClose: true
      })
    },
    click4() {
      this.$UiMessage({
        message: 'asdf asdf asdfas dfasdf asdfgashdiojfg hasjklghasjkldfghklasj dfhgjkl',
        title: 'I am a title',
        showClose: true,
        position: { x: 'left', y: 'center' }
      })
    },
    click5() {
      this.$UiMessage({
        message: 'warning message',
        title: 'I am a title',
        showClose: true,
        type: 'warning'
      })
    },
    click6() {
      this.$UiMessage({
        message: 'warning message',
        title: 'I am a title',
        showClose: true,
        duration: 0,
        type: 'warning',
        actions: [{
          text: '按钮1，还带一个icon',
          onClick: () => {
            this.$UiToast('点了按钮1，并且关闭此message')
          },
          icon:'heart-fill',
          closeAfter: true
        }, {
          text: '按钮2',
          onClick: () => {
            this.$UiToast.error('点了按钮2，但是不关闭该message')
          },
          closeAfter: false
        }]
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
