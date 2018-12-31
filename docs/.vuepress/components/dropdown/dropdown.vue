<template>
  <div class="container">
    <ClientOnly>
      <ui-dropdown>
        <ui-button size="sm" slot="trigger">dropdown</ui-button>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed velit suscipit, eleifend massa et, vestibulum est</span>
      </ui-dropdown>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'dropdown',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
