<template>
  <div class="container">
    <ClientOnly>
      <ui-button-group size="sm">
        <ui-button @click.native="show1 = true">无遮罩</ui-button>
        <ui-button @click.native="show2 = true">backdropColor:light</ui-button>
      </ui-button-group>
      <ui-modal v-model="show1" lock :show-backdrop="false">
        <div slot="header">Modal Header</div>
        <p>modal content</p>
      </ui-modal>
      <ui-modal v-model="show2" lock backdrop-color="light">
        <p>modal content</p>
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
