<template>
  <div class="container">
    <ClientOnly>
      <ui-button v-ui-tooltip="'content'">hove me</ui-button>
      <ui-button v-ui-tooltip="{content:'content',placement:'right'}">hove me</ui-button>
    </ClientOnly>
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
