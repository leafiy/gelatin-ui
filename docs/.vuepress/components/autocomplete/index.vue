<template>
  <div class="container">
    <ui-autocomplete :items="items" v-model="value1"></ui-autocomplete>
  </div>
</template>
<script>
export default {

  name: 'autocomplete',

  data() {
    return {
      items: ['a', 'b', 'c@c.com', 'xxxddd'],
      value1: ''
    }
  },
  methods: {

  }
}

</script>
<style lang="css" scoped>
</style>
