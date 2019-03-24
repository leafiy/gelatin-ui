<template>
  <div class="container">
    <ClientOnly>
      <p>
       Value:{{checkbox}}
      </p>
      <ui-checkbox v-model="checkbox" value="三星" name="checkbox">三星</ui-checkbox>
      <ui-checkbox v-model="checkbox" value="小米" name="checkbox">小米</ui-checkbox>
      <ui-checkbox v-model="checkbox" value="oppo" name="checkbox">oppo</ui-checkbox>
      <ui-checkbox v-model="checkbox" value="屎壳郎" name="checkbox">屎壳郎</ui-checkbox>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'array',

  data() {
    return {
      checkbox: ['小米'],
    }
  }
}

</script>
<style lang="css" scoped>
</style>
