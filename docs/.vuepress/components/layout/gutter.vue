<template>
  <div class="container"> <ClientOnly>
    <ui-row :gutter="2">
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
    </ui-row>
    <ui-row :gutter="1">
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

  name: 'offset',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
