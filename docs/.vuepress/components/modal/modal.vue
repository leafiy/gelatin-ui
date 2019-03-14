<template>
  <div class="container">
    <ClientOnly>
      <ui-button @click.native="openModal">组件调用</ui-button>
      <ui-button @click.native="openModal2">JS调用</ui-button>
      <ui-hr></ui-hr>
      {{open}}
      <ui-modal v-model="open" backdrop-color="darker" :close-on-click="false" >
        <div slot="header">Modal Header</div>
        <p>modal content</p>
        <div slot="footer">Modal Footer</div>
      </ui-modal>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'modal',

  data() {
    return {
      open: false
    }
  },
  methods: {
    openModal() {
      this.open = !this.open
    },
    openModal2() {
      this.$UiModal({
        header: 'I am Header',
        content: 'I am Content',
        buttons: [{
            content: 'ok',
            action: () => {
              alert('clicked ok')
            }
          },
          {
            content: 'no no no',
            type: 'warning',
            action: () => {
              alert('clicked no')
            }
          }
        ]
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
