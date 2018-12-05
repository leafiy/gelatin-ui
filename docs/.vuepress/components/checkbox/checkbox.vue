<template>
  <div class="container">
    <ClientOnly>
      <ui-checkbox v-model="checkbox1">checkbox</ui-checkbox>
      <ui-radio v-model="checkbox1" :value="checkbox1">radio</ui-radio>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'checkbox',

  data() {
    return {
      checkbox1: false
    }
  }
}

</script>
