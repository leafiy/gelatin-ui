<template>
  <div class="container">
    <ui-input-group v-model="model1" :max-length="2">
    </ui-input-group>
    <ui-input-group theme="ghost" v-model="model1">
    </ui-input-group>
    <ui-input-group :width="46" v-model="model1">

    </ui-input-group>
    <ui-input-group :width="46" v-model="model1" theme="inline">

    </ui-input-group>
  </div>
</template>
<script>
export default {

  name: 'group',

  data() {
    return {
      model1:123456
    }
  }
}

</script>
<style lang="css" scoped>
</style>
