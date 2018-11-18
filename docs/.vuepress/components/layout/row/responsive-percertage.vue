<template>
 <div class="container">
    <ui-row>
      <ui-col :basis="50">
        <div class="box">50</div>
      </ui-col>
      <ui-col :basis="40">
        <div class="box">40</div>
      </ui-col>
      <ui-col :basis="10">
        <div class="box">10</div>
      </ui-col>
    </ui-row>

  </div>
</template>

<script>
export default {

  name: 'responsive-percertage',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>