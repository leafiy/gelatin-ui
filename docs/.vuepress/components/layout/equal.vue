<template>
  <div class="container">
    <ui-container>
      <ui-row>
        <ui-col col>
          1 of 2
        </ui-col>
        <ui-col col>
          2 of 2
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col col>
          1 of 3
        </ui-col>
        <ui-col col>
          2 of 3
        </ui-col>
        <ui-col col>
          3 of 3
        </ui-col>
      </ui-row>
    </ui-container>
    <ui-hr>断行</ui-hr>
    <ui-container>
      <ui-row>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
        <div style="width:100%;">100% width element</div>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
      </ui-row>
    </ui-container>
    <ui-container>
      <ui-row>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
        <div style="width:100%;">100% width element</div>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
        <ui-col col>Column</ui-col>
      </ui-row>
    </ui-container>
  </div>
</template>
<script>
export default {

  name: 'index',

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
