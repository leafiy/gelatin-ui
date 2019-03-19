<template>
  <div class="container">
    <ClientOnly>

      <ui-hr>Radio value is {{radio}}</ui-hr>

      <div class="container">
        <ui-radio v-model="radio" name="radio" value="1">radio 1</ui-radio>
        <ui-radio v-model="radio" name="radio" value="2">radio 2</ui-radio>
        <ui-radio v-model="radio" name="radio" value="3">radio 3</ui-radio>
        <ui-radio v-model="radio" name="radio" value="4">radio 4</ui-radio>
      </div>
      <ui-hr>checkbox value is an Array - {{checkbox}}</ui-hr>
      <ui-checkbox v-model="checkbox" value="三星" name="checkbox">三星</ui-checkbox>
      <ui-checkbox v-model="checkbox" value="小米" name="checkbox">小米</ui-checkbox>
      <ui-checkbox v-model="checkbox" value="oppo" name="checkbox">oppo</ui-checkbox>
      <ui-checkbox v-model="checkbox" value="屎壳郎" name="checkbox">屎壳郎</ui-checkbox>

    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'checkbox',

  data() {
    return {
      radio:'2',
      checkbox:  ['小米']
    }
  }
}

</script>
