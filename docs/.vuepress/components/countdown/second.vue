<template>
  <div class="container"> <ClientOnly>
    <ui-countdown ref="c" :second="10" @start="start" @stop="stop">s</ui-countdown></ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'countdown',

  data() {
    return {

    }
  },
  methods: {
    stop() {
      setTimeout(() => {
        this.$refs['c'].start()
      }, 2000)
    },
    start() {},
  }
}

</script>
<style lang="css" scoped>
</style>
