<template>
 <div class="container">
  <ui-select :items="items"></ui-select>
 </div>
</template>

<script>
export default {

  name: 'index',

  data () {
    return {
     items:[1,2,3,4,5,6]
    }
  }
}
</script>

<style lang="css" scoped>
</style>