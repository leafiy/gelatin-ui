<template>
  <div class="container">
    <ui-button @click.native="openModal">组件调用</ui-button>
    <ui-button @click.native="openModal2">JS调用</ui-button>
    <ui-hr></ui-hr>
    <ui-modal v-model="open" backdrop-color="light">
      <div slot="header">Modal Header</div>
      <p>modal content</p>
      <div slot="footer">Modal Footer</div>
    </ui-modal>
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
      this.$Modal({
        header: 'I am Header',
        content: 'I am Content',
        buttons: [{
            text: 'ok',
            action: () => {
              alert('clicked ok')
            }
          },
          {
            text: 'no no no',
            type: 'border'
          },
          {
            text: 'no no no',
            type: 'warning'
          }
        ]
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
