<template>
  <div class="container">
    <ui-autocomplete :items="items" v-model="value"></ui-autocomplete>
  </div>
</template>
<script>
export default {

  name: 'el',

  data() {
    return {
      items: ['a', 'b', 'c@c.com', 'xxxddd','中文也可以'],
      value: ''
    }
  },
  methods: {

  }
}

</script>
<style lang="css" scoped>
</style>
