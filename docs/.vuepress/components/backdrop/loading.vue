<template>
  <div class="container">
    <div class="box" v-ui-loading>文字文字</div>
    <p v-ui-loading>一段文字</p>
    <div class="loading-example" v-ui-loading="'ring'">任意元素</div>
    <p v-ui-loading="{loading:'bounce'}">一段文字</p>
    <p v-ui-loading="{loading:'bounce',color:'light'}">一段文字</p>
    <p>
      <span v-ui-loading>一行文字</span>
    </p>
  </div>
</template>
<script>
export default {

  name: 'loading',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
.box {
  background: #f1f1f1;
  border: 1px solid #eee;
  color: #000;
  width: 460px;
  height: 160px;
  border-radius: 10px;
  padding: 20px;
}
.loading-example{
 width:100px;
 height: 100px;
 border-radius: 50%;
 text-align: center;
 line-height: 100px;
}
</style>
