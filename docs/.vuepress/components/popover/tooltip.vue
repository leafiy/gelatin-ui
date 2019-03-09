<template>
  <div class="container">
    <ui-button v-ui-tooltip="'content'">hove me</ui-button>
    <ui-button v-ui-tooltip="{content:'content',placement:'right'}">hove me</ui-button>
  </div>
</template>
<script>
export default {
  name: 'tooltip',
  data() {
    return {}
  }
}

</script>
