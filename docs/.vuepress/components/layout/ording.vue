<template>
  <div class="container layout-doc">
    <ui-container>
      <ui-row>
        <ui-col col="2">no order</ui-col>
        <ui-col col="2" order="2">order="2"</ui-col>
        <ui-col col="2" order="3">order="3"</ui-col>
        <ui-col col="2" order="1">order="1"</ui-col>
        <ui-col col="2" order="4">order="4"</ui-col>

      </ui-row>
      <ui-row>
        <ui-col col="2" order="last">col="2" order="last"</ui-col>
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="6" order="first">col="6" order="first"</ui-col>
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
