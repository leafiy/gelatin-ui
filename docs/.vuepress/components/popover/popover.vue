<template>
  <div class="container"> <ClientOnly>
    <ui-button size="sm" @click="click" ref="btn1">open a popover</ui-button>
    <ui-button size="sm" @click="click2">打开其他元素上的popover</ui-button>
    <ui-button size="sm" @click="click3">也可以是一个菜单</ui-button>
    <ui-button size="sm" @click="click4">绑定事件到菜单</ui-button>
    <ui-button size="sm" @click="click5">菜单横向排列</ui-button></ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'popover',

  data() {
    return {

    }
  },
  methods: {
    click(e) {
      this.$UiPopover({
        trigger: e.target,
        content: '一个简单的 popover',
        closeOnClick: false,
      })
    },
    click2() {
      this.$UiPopover({
        trigger: this.$refs['btn1'].$el,
        content: '打开其他元素上的popover',
        closeOnClick: true,
      })
    },
    click3(e) {
      this.$UiPopover({
        trigger: e.target,
        closeOnClick: true,
        menu: [
          { content: "EN-US" },
          { content: "简体中文" },
          { content: "繁体中文" }
        ]
      })
    },
    click4(e) {
      this.$UiPopover({
        trigger: e.target,
        closeOnClick: true,
        menu: [{
            content: "EN-US",
            icon: 'team',
            action: () => {
              this.$UiToast('你点了EN-US')
            }
          },
          {
            content: "简体中文",
            icon: 'team',
            action: () => {
              this.$UiToast('你点了简体中文')
            }
          },
          {
            content: "繁体中文",
            icon: 'team',
            action: () => {
              this.$UiToast('你点了繁体中文')
            }
          }
        ]
      })
    },
    click5(e) {
      this.$UiPopover({
        trigger: e.target,
        closeOnClick: true,
        menuType: 'horizon',
        menu: [{
            icon: 'sound'
          },
          {
            icon: 'camera'
          },
          {
            icon: 'flag'
          }
        ]
      })
    }
  }
}

</script>
<style lang="scss">
.ui-popover-menu {
  ul {
    padding: 0;
    margin:0;
  }
}

</style>
