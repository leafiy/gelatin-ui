<template>
  <div class="container">
    <ClientOnly>
      <ui-button-group size="sm">
        <ui-button @click="click">默认设置</ui-button>
        <ui-button @click.native="show2 = true">size:lg</ui-button>
        <ui-button @click.native="show3 = true">size:sm</ui-button>
      </ui-button-group>
      <ui-modal v-model="show" :before-close="beforeClose">
        <div slot="header">Modal Header</div>
        <p>modal content</p>
        <div slot="footer">Modal Footer</div>
      </ui-modal>
      <ui-modal v-model="show2" size="lg">
        <div slot="header">Large size modal</div>
        <p>modal content</p>
        <div slot="footer">Modal Footer</div>
      </ui-modal>
      <ui-modal v-model="show3" size="sm">
        <div slot="header">Small size modal</div>
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
      show: false,
      show2: false,
      show3: false,
      beforeClose: (done) => {
        this.$UiToast('modal closed')
        done()
      }
    }
  },
  methods: {
    click(e) {
        this.show = true
    }
  }
}

</script>
