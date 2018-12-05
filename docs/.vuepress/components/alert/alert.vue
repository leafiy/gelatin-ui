<template>
  <div class="container">
    <ui-alert>defalut alert</ui-alert>
    <ui-alert>
      <div slot="title">Alert with header</div>
      alert content
    </ui-alert>
    <ui-alert closeable>
      <div slot="title">Closeable alert</div>
      alert content
    </ui-alert>
    <ui-alert type="warning">warning alert</ui-alert>
    <ui-alert type="error">error alert</ui-alert>
    <ui-alert type="normal">normal alert</ui-alert>
    <ui-hr>fill with background color</ui-hr>
    <ui-alert fill>defalut alert</ui-alert>
    <ui-alert fill>
      <div slot="title">Alert with header</div>
      alert content
    </ui-alert>
    <ui-alert fill closeable>
      <div slot="title">Closeable alert</div>
      alert content
    </ui-alert>
    <ui-alert fill type="warning">warning alert</ui-alert>
    <ui-alert fill type="error">error alert</ui-alert>
    <ui-alert fill type="normal">normal alert</ui-alert>
  </div>
</template>
<script>
export default {

  name: 'alert',

  data() {
    return {

    }
  }
}

</script>
