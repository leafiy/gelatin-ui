<template>
  <div class="container">
    <ClientOnly>
      <ui-carousel :scroll-count="1" full-width :delay="2000" :anchors="anchors" nav-style="arrow">
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

  name: 'anchor2',

  data() {
    return {
      anchors: ['item1', 'item2', '3', 'page4', 'item-item', 'title-blah']
    }
  }
}

</script>
<style lang="css" scoped>
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
