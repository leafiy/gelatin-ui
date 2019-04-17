<template>
  <div class="container layout-doc">
    <ui-container>
      <ui-row>
        <ui-col col="2">no order</ui-col>
        <ui-col col="2" order-md="2" order-lg="3">order-md="2" order-lg="3"</ui-col>
        <ui-col col="2" order-md="3" order-lg="1">order-md="3" order-lg="1"</ui-col>
        <ui-col col="2" order-md="1" order-lg="4">order-md="1" order-lg="4"</ui-col>
        <ui-col col="2" order-md="4" order-lg="2">order-md="4" order-lg="2"</ui-col>

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
