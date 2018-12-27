<template>
  <div class="container">
    <p v-ui-highlight="'High light'"><span>High light 文字高亮</span></p>
    <ui-hr>复杂元素</ui-hr>
    <div v-ui-highlight="'i'">
      <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
    </div>
    <ui-hr>自定义颜色</ui-hr>
    <div v-ui-highlight="{text:'d',color:'defalut'}">
      <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
    </div>
    <ui-hr>自定义class</ui-hr>
    <div v-ui-highlight="{text:'a',className:'classsss'}">
      <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
    </div>
    <ui-hr>color:error</ui-hr>
    <div v-ui-highlight="{text:'s',color:'error'}">
      <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
    </div>
    <ui-hr>loose match</ui-hr>
    <div v-ui-highlight="{text:'sibe',color:'error',loose:true}">
      <p><span>Lorem Ipsum is <b>simply dummy text of</b> the printing and <span>typesetting industry</span>. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></p>
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
<style lang="css">
.ui-highlight-classsss {
  color:#fff;
  background: #000;
  padding:0 1px;
  margin:0 1px;
}

</style>
