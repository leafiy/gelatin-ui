<template>
  <div class="container layout-doc">
    <ui-hr>sm以上的屏幕</ui-hr>
    <ui-container>
      <ui-row>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
      </ui-row>
    </ui-container>
    <ui-hr>lg以上的屏幕</ui-hr>
    <ui-container>
      <ui-row>
        <ui-col col-lg>col-lg</ui-col>
        <ui-col col-lg>col-lg</ui-col>
        <ui-col col-lg>col-lg</ui-col>
      </ui-row>
    </ui-container>
    <ui-hr>md以上的屏幕</ui-hr>
    <ui-container>
      <ui-row>
        <ui-col col-md="2">col-md="2"</ui-col>
        <ui-col col-md="6">col-md="6"</ui-col>
        <ui-col col-md="4">col-md="4"</ui-col>
      </ui-row>
    </ui-container>
    <ui-hr></ui-hr>
    <ui-container>
      <ui-row>
        <ui-col col-md="2" col-lg="4" col-xl="6">col-md="2" col-lg="4" col-xl="6"</ui-col>
        <ui-col col-md="6" col-lg="3" col-xl="2">col-md="6" col-lg="3" col-xl="2"</ui-col>
        <ui-col col-md="4" col-lg="5" col-xl="4">col-md="4" col-lg="5" col-xl="4"</ui-col>
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

.ui-layout__container {
  margin: 1em 0;
}

</style>
