<template>
  <div class="container">
    <ClientOnly>
      <ui-button-group size="sm">
        <ui-button @click.native="show1 = true">锁定body滚动</ui-button>
        <ui-button @click.native="show2 = true">超多文字并锁定滚动</ui-button>
      </ui-button-group>
      <ui-modal v-model="show1" lock>
        <div slot="header">Modal Header</div>
        <p>modal content</p>
        <div slot="footer">Modal Footer</div>
      </ui-modal>
      <ui-modal v-model="show2" lock>
        <div slot="header">超多文字并锁定滚动</div>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <p>modal content</p>
        <div slot="footer">Modal Footer</div>
      </ui-modal>
      <!-- <ui-button @click.native="openModal2">JS调用</ui-button> -->
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'modal',

  data() {
    return {
      show1: false,
      show2: false
    }
  },
  methods: {
    // openModal() {
    //   this.open = !this.open
    // },
    // openModal2() {
    //   this.$UiModal({
    //     header: 'I am Header',
    //     content: 'I am Content',
    //     buttons: [{
    //         content: 'ok',
    //         action: () => {
    //           alert('clicked ok')
    //         }
    //       },
    //       {
    //         content: 'no no no',
    //         type: 'warning',
    //         action: () => {
    //           alert('clicked no')
    //         }
    //       }
    //     ]
    //   })
    // }
  }
}

</script>
<style lang="css" scoped>
</style>
