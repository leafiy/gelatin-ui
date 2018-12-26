<template>
  <div class="container">
    <ClientOnly>
      <ui-avatar></ui-avatar>
      <ui-avatar shape="square"></ui-avatar>
      <ui-avatar username="Avatar"></ui-avatar>
      <ui-avatar username="Avatar">slot element</ui-avatar>
      <ui-avatar username="Avatar" :show-name="false">not show name</ui-avatar>
      <ui-avatar size="sm" url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg" username="size-sm"></ui-avatar>
      <ui-avatar url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg" username="leafiy"></ui-avatar>
      <ui-avatar size="lg" url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg" username="size-lg"></ui-avatar>
<p>fallback</p>
<ui-avatar size="lg" fallback="https://leafiy.oss-cn-beijing.aliyuncs.com/Snipaste_2018-12-26_14-10-06.png" url="
https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-splash.jpg" username="size-lg"></ui-avatar>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'avatar',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
.ui-avatar {
  margin-bottom: 20px;
}

</style>
