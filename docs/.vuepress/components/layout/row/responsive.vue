<template>
  <div class="container"> <ClientOnly>
    <ui-row>
      <ui-col :xs="6" :sm="10" :md="8" :lg="4">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="6" :sm="2" :md="4" :lg="8">
        <div class="box"></div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :xs="3" :sm="2" :md="3" :lg="2">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="2" :md="3" :lg="3">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="2" :md="3" :lg="4">
        <div class="box"></div>
      </ui-col>
      <ui-col :xs="3" :sm="6" :md="3" :lg="3">
        <div class="box"></div>
      </ui-col>
    </ui-row></ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'layout',
  components: {},
  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
