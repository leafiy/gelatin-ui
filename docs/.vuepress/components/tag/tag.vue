<template>
 <div class="container">
  <ui-tag>some text</ui-tag>
  <ui-tag :show-close="true">with close icon</ui-tag>
  <ui-tag type="warning">type: warning</ui-tag>
  <ui-tag type="error" :show-close="true">type: error</ui-tag>
  <ui-tag type="success">type: success</ui-tag>
  <ui-tag type="border">type: border</ui-tag>
  <ui-tag size="sm">type: default size:sm</ui-tag>

</div>

</template>

<script>
export default {

  name: 'tag',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>