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
      <ui-hr>disabled</ui-hr>
      <ui-radio v-model="radio" name="radio" value="4" :disabled="true">radio 4</ui-radio>
      <ui-checkbox v-model="checkbox" value="屎壳郎" name="checkbox" :disabled="true">屎壳郎</ui-checkbox>
      <ui-hr>indeterminate</ui-hr>
      <ui-checkbox v-model="checkbox2" indeterminate name="checkbox2" value="">全选</ui-checkbox>
      <ui-checkbox v-model="checkbox2" value="小米" name="checkbox2">小米</ui-checkbox>
      <ui-checkbox v-model="checkbox2" value="oppo" name="checkbox2">oppo</ui-checkbox>
      <ui-checkbox v-model="checkbox2" value="屎壳郎" name="checkbox2">屎壳郎</ui-checkbox>
      <ui-hr>boolean checkbox</ui-hr>
      <div class="container">
        <ui-checkbox v-model="foo">{{foo}}</ui-checkbox>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'checkbox',

  data() {
    return {
      radio: '2',
      checkbox: ['小米'],
      checkbox2: [],
      foo: false
    }
  }
}

</script>
