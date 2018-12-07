<template>
  <ui-accordion>
    <ui-accordion-item :title="title">
      <pre><slot></slot></pre>
    </ui-accordion-item>
  </ui-accordion>
</template>
<script>
export default {

  name: 'code-show',

  data() {
    return {

    }
  },
  props: {
    title: String
  }
}

</script>
<style lang="css">
.ui-accordion-title {
  margin: 0;
}

</style>
