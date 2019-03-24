<template>
  <div class="container">
    <ClientOnly>
      <p>Radio value is {{radio}}</p>
      <div class="container">
        <ui-radio v-model="radio" name="radio" value="1">radio 1</ui-radio>
        <ui-radio v-model="radio" name="radio" value="2">radio 2</ui-radio>
        <ui-radio v-model="radio" name="radio" value="3">radio 3</ui-radio>
        <ui-radio v-model="radio" name="radio" value="4">radio 4</ui-radio>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'radio',

  data() {
    return {
      radio: '2'
    }
  }
}

</script>
<style lang="css" scoped>
</style>
