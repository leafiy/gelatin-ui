<template>
 <div class="container">
 <ClientOnly>
  <ui-button v-ui-sticky="{top:57}" type="border">Scroll down this page</ui-button></ClientOnly>
 </div>
</template>

<script>
export default {

  name: 'sticky',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.container{
 height:3000px;
}
.ui-btn{
 margin:50px auto;
}
</style>