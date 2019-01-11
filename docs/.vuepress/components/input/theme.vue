<template>
 <div class="container">
  <ui-input theme="ghost" value="theme=ghost"></ui-input>
  <ui-input theme="solid" value="theme=solid"></ui-input>
  <ui-input theme="inline" value="theme=inline" :show-clear="false"></ui-input>

 </div>
</template>

<script>
export default {

  name: 'theme',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>