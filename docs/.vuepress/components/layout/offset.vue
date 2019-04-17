<template>
  <div class="container layout-doc">
    <ui-container>
      <ui-row>
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="4" offset="4">col="4" offset="4"</ui-col>
      </ui-row>
      <ui-row>
        <ui-col col="3">col="3"</ui-col>
        <ui-col col="3" offset="2">col="3" offset="2"</ui-col>
        <ui-col col="3" offset="1">col="3" offset="1"</ui-col>
      </ui-row>
    </ui-container>
  </div>
</template>
<script>
export default {

  name: 'percent',

  data() {
    return {

    }
  }
}

</script>
<style lang="scss" scoped>
.ui-layout-col {
  background: rgb(8, 215, 184);
  border: 1px solid darken(rgb(8, 215, 184), 10%);
  padding: .5rem;
  color: #fff;
  text-align: center;
}
.ui-layout__container{
  margin:1em 0;
}
</style>
