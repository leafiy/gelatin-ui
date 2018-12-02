<template>
  <div class="container">
    <div>
      <ui-checkbox v-model="checkbox1" :value="1">checkbox</ui-checkbox>
      <ui-checkbox v-model="checkbox1" :value="'string'">checkbox</ui-checkbox>
      <ui-checkbox v-model="checkbox1" :value="{a:'b'}">checkbox</ui-checkbox>
      <p>{{checkbox1}}</p>
    </div>
    <div>
      <ui-checkbox v-model="checkbox2" :value="1">checkbox</ui-checkbox>
      <ui-checkbox v-model="checkbox2" :value="'string'">checkbox</ui-checkbox>
      <ui-checkbox v-model="checkbox2" :value="{a:'b'}">checkbox</ui-checkbox>
      <p>{{checkbox2}}</p>
    </div>
  </div>
</template>
<script>
export default {

  name: 'checkbox-group',

  data() {
    return {
      checkbox1: ['string'],
      checkbox2: []
    }
  }
}

</script>
