<template>
  <div class="container">
    <ClientOnly>
      <ui-accordion>
        <ui-accordion-item :title="title" active>
          <pre><slot></slot></pre>
        </ui-accordion-item>
      </ui-accordion>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'code-show',

  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: 'usage'
    }
  }
}

</script>
<style lang="css">
.ui-accordion-title {
  margin: 0;
}

</style>
