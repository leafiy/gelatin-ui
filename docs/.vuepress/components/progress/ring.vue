<template>
  <div class="container">
    <ui-progress type="ring" :percentage="60"></ui-progress>
    <ui-progress type="ring" :percentage="40" animate :show-number="false"></ui-progress>
    <ui-progress type="ring" :percentage="33" foreColor="silver" backColor="red"></ui-progress>
    <ui-progress type="ring" :percentage="22" :size="60"></ui-progress>
    <ui-progress type="bar" :percentage="22" :size="22"></ui-progress>
    <ui-progress type="bar" animate :percentage="66" :size="22"></ui-progress>
  </div>
</template>
<script>
export default {

  name: 'ring',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
.ui-progress{
 margin:20px 0 ;
}
</style>
