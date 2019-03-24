<template>
  <div class="container">
    <ClientOnly>
      <div class="container">
        <ui-checkbox v-model="foo">{{foo}}</ui-checkbox>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'boolean',

  data() {
    return {
      foo: false
    }
  }
}

</script>
<style lang="css" scoped>
</style>
