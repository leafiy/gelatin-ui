<template>
  <div class="container">
    <ClientOnly>
      <ui-carousel :scroll-count="1" full-width :delay="2000" :anchors="[]">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
      </ui-carousel>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'anchor',

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
