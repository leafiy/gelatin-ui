<template>
  <div class="container">
    <ui-button-group size="sm">
      <ui-button @click.native="start1">start default</ui-button>
      <ui-button @click.native="finish1">finish</ui-button>
      <ui-button @click.native="fail1">fail</ui-button>
    </ui-button-group>
    <ui-button-group size="sm">
      <ui-button @click.native="start2">start manualy</ui-button>
      <ui-button @click.native="finish1">finish</ui-button>
      <ui-button @click.native="set1">+10%</ui-button>
      <ui-button @click.native="set2">-10%</ui-button>
      <ui-button @click.native="fail1">fail</ui-button>
    </ui-button-group>
    <ui-button size="sm" @click.native="indeterminate">indeterminate</ui-button>
  </div>
</template>
<script>
export default {

  name: 'bar',

  data() {
    return {

    }
  },
  methods: {
    start1() {
      this.$UiLoadingBar()
    },
    finish1() {
      this.$UiLoadingBar.finish()

    },
    set1() {
      this.$UiLoadingBar.increase(10)
    },
    set2() {
      this.$UiLoadingBar.decrease(10)
    },
    fail1() {
      this.$UiLoadingBar.fail()
    },
    start2() {
      this.$UiLoadingBar({ duration: 0 })
    },
    indeterminate() {
      this.$UiLoadingBar({ indeterminate: true })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
