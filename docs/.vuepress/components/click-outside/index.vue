<template>
  <div class="container">
    <div class="box" v-ui-click-outside="clickOutside" @click="clickInside">click me</div>
    <p>Clicked in : {{text}}</p>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {
      text: 'not clicked'
    }
  },
  methods: {
    clickOutside() {
      this.text = 'outside'
    },
    clickInside() {
      this.text = 'inside'
    }
  }
}

</script>
<style lang="css" scoped>
.box {
  background: #08D7B8;
  width: 100px;
  height: 100px;
  color: #fff;
  text-align: center;
  line-height: 100px;
}

</style>
