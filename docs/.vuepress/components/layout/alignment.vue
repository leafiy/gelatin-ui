<template>
  <div class="container layout-doc">
    <ui-container>
      <ui-row align-v="start">
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
      </ui-row>
      <ui-row align-v="center">
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
      </ui-row>
      <ui-row align-v="end">
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
        <ui-col col-sm>col-sm</ui-col>
      </ui-row>
      <ui-row>
        <ui-col align-self="start" col-sm>col-sm</ui-col>
        <ui-col align-self="center" col-sm>col-sm</ui-col>
        <ui-col align-self="end" col-sm>col-sm</ui-col>
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

.ui-layout-row {
  height: 10em;
  background: rgba(255,0,0,.1);
}

</style>
