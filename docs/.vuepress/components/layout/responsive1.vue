<template>
  <div class="container layout-doc">
    <ui-container>
      <ui-hr>sm以上的屏幕</ui-hr>
      <ui-row>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
      </ui-row>
      <ui-hr>lg以上的屏幕</ui-hr>
      <ui-row>
        <ui-col col-lg>col-lg</ui-col>
        <ui-col col-lg>col-lg</ui-col>
        <ui-col col-lg>col-lg</ui-col>
      </ui-row>
     <ui-row>
        <ui-col col="2">col="2"</ui-col>
        <ui-col col="6">col="6"</ui-col>
        <ui-col col="4">col="4"</ui-col>
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
.ui-layout-row{
  margin:1em 0;
}
</style>
