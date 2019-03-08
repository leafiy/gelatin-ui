<template>
  <div class="container">
   <ui-button @click="click" id="dropdown">click me</ui-button>
  </div>
</template>

<script>
export default {

  name: 'dropdown',

  data () {
    return {

    }
  },
  methods:{
   click(){
     this.$UiDropdown({
      reference:'#dropdown',
      content:'content'
     })
   }
  }
}
</script>

<style lang="css" scoped>
</style>