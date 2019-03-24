<template>
  <div class="container">
    <ClientOnly>
      <p>Value:{{checkbox2}}</p>
      <ui-checkbox v-model="checkbox2" indeterminate name="checkbox2" value="">全选</ui-checkbox>
      <ui-checkbox v-model="checkbox2" value="小米" name="checkbox2">小米</ui-checkbox>
      <ui-checkbox v-model="checkbox2" value="oppo" name="checkbox2">oppo</ui-checkbox>
      <ui-checkbox v-model="checkbox2" value="屎壳郎" name="checkbox2">屎壳郎</ui-checkbox>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'indeterminate',

  data() {
    return {
      checkbox2: [],
    }
  }
}

</script>
<style lang="css" scoped>
</style>
