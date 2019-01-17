<template>
  <div class="container">
    <ui-input></ui-input>
    <ui-input disabled v-model="disabled"></ui-input>
    <ui-input readonly v-model="readonly"></ui-input>
    <ui-input loading></ui-input>
    <ui-input :width="200" value="width=200"></ui-input>
  </div>
</template>
<script>
export default {

  name: 'input-index',

  data() {
    return {
      disabled: 'disabled',
      readonly: 'readonly',
    }
  }
}

</script>
<style lang="css" scoped>
</style>
