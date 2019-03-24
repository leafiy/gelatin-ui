<template>
  <div class="container">
    <ClientOnly>
      <ui-checkbox v-model="checkbox" value="屎壳郎" name="checkbox" :disabled="true">屎壳郎</ui-checkbox>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'disabled',

  data() {
    return {
      checkbox: ''
    }
  }
}

</script>
<style lang="css" scoped>
</style>
