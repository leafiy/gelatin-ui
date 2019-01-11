<template>
 <div class="container">
  <ui-input>
   <ui-icon name="user" slot="prefix"></ui-icon>
   <ui-icon name="user" slot="suffix"></ui-icon>
  </ui-input>
  <ui-input>
   <div slot="prefix">http://</div>
   <div slot="suffix">.com</div>
  </ui-input>
 </div>
</template>

<script>
export default {

  name: 'input-slot',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>