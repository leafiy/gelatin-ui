<template>
  <div class="container">
   <ui-textarea></ui-textarea>
   <ui-hr></ui-hr>
   <ui-textarea counter :max-length="100" placeholder="maxlength and counter"></ui-textarea>
  </div>
</template>

<script>
export default {

  name: 'textarea-index',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>