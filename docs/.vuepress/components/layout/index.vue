<template>
  <div class="container">
    <ui-container>
      <ui-row>
        <ui-col col-sm>
          One of three columns
        </ui-col>
        <ui-col col-sm>
          One of three columns
        </ui-col>
        <ui-col col-sm>
          One of three columns
        </ui-col>
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
<style lang="css" scoped>
.ui-layout-col {
  background: rgba(8, 215, 184, .1);
  border: 1px solid rgba(8, 215, 184, .3);
      padding-top: .75rem;
    padding-bottom: .75rem;
}

</style>
