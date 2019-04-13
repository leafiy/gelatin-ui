<template>
  <div class="container">
    <ui-hr>default</ui-hr>
    <ui-spinner></ui-spinner>
    <ui-hr>bounce</ui-hr>
    <ui-spinner type="bounce"></ui-spinner>
    <ui-hr>scale</ui-hr>
    <ui-spinner type="scale"></ui-spinner>
    <ui-hr>circle</ui-hr>
    <ui-spinner type="circle"></ui-spinner>
    <ui-hr>ring</ui-hr>
    <ui-spinner type="ring"></ui-spinner>
    <ui-hr>color:light</ui-hr>
    <div class="box">
      <ui-spinner color="light"></ui-spinner>
      <ui-spinner color="light" type="bounce"></ui-spinner>
      <ui-spinner color="light" type="scale"></ui-spinner>
      <ui-spinner color="light" type="circle"></ui-spinner>
      <ui-spinner color="light" type="ring"></ui-spinner>
    </div>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {

    }
  }
}

</script>
<style lang="scss" scoped>
.box {
  margin: 20px auto;
  width: 100%;
  background: rgba(0, 0, 0, .7);
  height: 100px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  .ui-spinner{

  }
}

</style>
