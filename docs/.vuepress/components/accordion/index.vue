<template>
  <div class="container">
    <ui-accordion>
      <ui-accordion-item title="Title">
        <span>according content</span>
      </ui-accordion-item>
      <ui-accordion-item title="Title2">
        <span>according content</span>
      </ui-accordion-item>
      <ui-accordion-item title="open on mouseover" :open-on-mouse-over="true">
        <span>according content</span>
      </ui-accordion-item>
      <ui-accordion-item title="active on mounted" active>
        <span>according content</span>
      </ui-accordion-item>
    </ui-accordion>
    <ui-hr>keep items opening</ui-hr>
    <ui-accordion keep-open>
      <ui-accordion-item title="Title">
        <span>according content</span>
      </ui-accordion-item>
      <ui-accordion-item title="Title2">
        <span>according content</span>
      </ui-accordion-item>
      <ui-accordion-item title="active on mounted" active>
        <span>according content</span>
      </ui-accordion-item>
    </ui-accordion>
  </div>
</template>
<script>
export default {

  name: 'accordion',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
