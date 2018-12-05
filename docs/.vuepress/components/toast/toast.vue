<template>
  <div class="container">
    <ui-button-group size="sm">
      <ui-button @click.native="toast1">Normal</ui-button>
      <ui-button @click.native="">Toast</ui-button>
      <ui-button @click.native="">Toast</ui-button>
      <ui-button @click.native="">Toast</ui-button>
      <ui-button @click.native="">Toast</ui-button>
      <ui-button @click.native="">Toast</ui-button>
      <ui-button @click.native="">Toast</ui-button>
    </ui-button-group>
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
      this.$Toast({
        title: 'Normal Toast',
        duration: 2000,
        icon:"user",
        onClose:()=>{
          alert('close')
        }
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
