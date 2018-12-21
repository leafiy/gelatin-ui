<template>
  <div class="container">
    <ClientOnly>
      <ui-button @click.native="openConfirm">组件调用</ui-button>
      <ui-button @click.native="openConfirmJS">JS调用</ui-button>
      <ui-hr></ui-hr>
      <ui-confirm v-model="showConfirm" @confirm="confirm" @cancel="cancel">
        <b slot="header">Header</b>
        Content
      </ui-confirm>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'confirm',

  data() {
    return {
      showConfirm: false
    }
  },
  methods: {
    openConfirm() {
      this.showConfirm = !this.showConfirm
    },
    confirm() {
      this.$UiToast('点了确认')
      this.showConfirm = false
    },
    cancel() {
      this.$UiToast('点了取消')
      this.showConfirm = false
    },
    openConfirmJS() {
      this.$UiConfirm({
        header: 'header',
        content: 'content',
        onConfirm: () => {
          this.$UiToast('点了JS调用确认')
        },
        onCancel: () => {
          this.$UiToast('点了JS调用取消')
        }
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
