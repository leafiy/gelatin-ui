<template>
  <div class="container">
    <ui-carousel auto loop :delay="1000" nav-style="bar">
      <div class="item"><img src="https://placehold.it/200x200"></div>
        <div class="item"><img src="https://placehold.it/230x200"></div>
          <div class="item"><img src="https://placehold.it/220x200"></div>
            <div class="item"><img src="https://placehold.it/240x200"></div>
                <div class="item"><img src="https://placehold.it/320x200"></div>
                  <div class="item"><img src="https://placehold.it/190x200"></div>
                    <div class="item"><img src="https://placehold.it/10x200"></div>
                      <div class="item"><img src="https://placehold.it/230x200"></div>
                        <div class="item"><img src="https://placehold.it/140x200"></div>
                          <div class="item"><img src="https://placehold.it/320x200"></div>
    </ui-carousel>
  </div>
</template>
<script>
export default {

  name: 'carousel2',

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
  border:1px solid #9B9B9B;
  border-radius: 14px;
  padding:10px;
  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

</style>
