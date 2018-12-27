<template>
  <div class="container">
    <ui-button size="sm" @click="show = !show">click me</ui-button>
    <ui-button size="sm" @click="show2 = !show2">duration 1000</ui-button>
    <ui-height-transition>
      <div v-show="show">
        <div class="box">put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.</div>
      </div>
    </ui-height-transition>
    <ui-height-transition :duration="1000">
      <div v-show="show2">
        <div class="box">put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.put some text here.</div>
      </div>
    </ui-height-transition>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {
      show: false,
      show2:false
    }
  }
}

</script>
<style lang="css" scoped>
</style>
