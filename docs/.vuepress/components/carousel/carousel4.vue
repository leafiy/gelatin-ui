<template>
  <div class="container">
    <ui-carousel :scroll-count="1" full-width auto loop :delay="2000">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </ui-carousel>
  </div>
</template>
<script>
export default {

  name: 'carousel',

  data() {
    return {

    }
  }
}

</script>
<style scoped lang="css">
img {
  max-width: none !important;
}

.item {
  border: 1px solid #9B9B9B;
  border-radius: 14px;
  padding: 10px;
  margin-right: 20px;
}

</style>
