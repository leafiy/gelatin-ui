<template>
  <div class="container">
    <ui-button size="sm" @click.native="click" ref="btn1">open a popover</ui-button>
    <ui-button size="sm" @click.native="click2">打开其他元素上的popover</ui-button>
    <ui-button size="sm" @click.native="click3">也可以是一个菜单</ui-button>
    <ui-button size="sm" @click.native="click4">绑定事件到菜单</ui-button>
    <ui-button size="sm" @click.native="click5">菜单横向排列</ui-button>
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
      this.$Popover({
        trigger: e.target,
        content: '一个简单的 popover',
        closeOnClick: false,
      })
    },
    click2() {
      this.$Popover({
        trigger: this.$refs['btn1'].$el,
        content: '打开其他元素上的popover',
        closeOnClick: true,
      })
    },
    click3(e) {
      this.$Popover({
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
      this.$Popover({
        trigger: e.target,
        closeOnClick: true,
        menu: [{
            content: "EN-US",
            icon: 'team',
            action: () => {
              this.$Toast('你点了EN-US')
            }
          },
          {
            content: "简体中文",
            icon: 'team',
            action: () => {
              this.$Toast('你点了简体中文')
            }
          },
          {
            content: "繁体中文",
            icon: 'team',
            action: () => {
              this.$Toast('你点了繁体中文')
            }
          }
        ]
      })
    },
    click5(e) {
      this.$Popover({
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
  }
}

</style>
