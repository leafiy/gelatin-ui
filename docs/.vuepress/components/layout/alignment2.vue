<template>
  <div class="container layout-doc">
    <ui-container>
      <ui-row align-h="start">
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="4">col="4"</ui-col>
      </ui-row>
      <ui-row align-h="end">
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="4">col="4"</ui-col>
      </ui-row>
      <ui-row align-h="center">
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="4">col="4"</ui-col>
      </ui-row>
      <ui-row align-h="between">
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="4">col="4"</ui-col>
      </ui-row>
      <ui-row align-h="around">
        <ui-col col="4">col="4"</ui-col>
        <ui-col col="4">col="4"</ui-col>
      </ui-row>
    </ui-container>

  </div>
</template>



<script>
export default {

  name: 'alignment',

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
