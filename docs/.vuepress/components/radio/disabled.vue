<template>
 <div class="container">
  <ClientOnly>
   <ui-radio v-model="radio" name="radio" value="4" :disabled="true">radio 4</ui-radio>
  </ClientOnly>
 </div>
</template>

<script>
export default {

  name: 'disabled',

  data () {
    return {
      radio:'4'
    }
  }
}
</script>

<style lang="css" scoped>
</style>