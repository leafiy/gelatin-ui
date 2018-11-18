<template>
  <div class="container">
    <ui-row>
      <ui-col :xs-offset="10" :xs="2">
        <div class="box"></div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :xs-offset="8" :xs="4">
        <div class="box"></div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :xs-offset="6" :xs="6">
        <div class="box"></div>
      </ui-col>
    </ui-row>
  </div>
</template>
<script>
export default {

  name: 'offset',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
