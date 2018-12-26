<template>
  <div class="container">
    <ui-hr>正常使用</ui-hr>
    <ui-image src="https://leafiy.oss-cn-beijing.aliyuncs.com/thomas-kinto-1178082-unsplash.jpg"></ui-image>
    <ui-hr>自定义loding动画</ui-hr>
    <ui-image src="https://leafiy.oss-cn-beijing.aliyuncs.com/thomas-kinto-1178082-unsplash.jpg">
      <span slot="loader">i am loding</span>
    </ui-image>
    <ui-hr>fallback image 用于图片获取失败</ui-hr>
    <ui-image keep-size src="https://leafiy.oss-cn-beijing.aliyuncs.com/thomas-kinto-1178082-unlash.jpg" fallback="https://leafiy.oss-cn-beijing.aliyuncs.com/Snipaste_2018-12-26_14-10-06.png">
    </ui-image>
    <ui-hr>加个遮罩</ui-hr>
    <ui-image cover src="https://leafiy.oss-cn-beijing.aliyuncs.com/jonny-caspari-1148429-unsplash.jpg"></ui-image>
  </div>
</template>
<script>
export default {

  name: 'image-loader',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
