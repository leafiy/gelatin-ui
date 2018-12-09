<template>
  <div class="container">
    <p v-ui-tooltip="'I am a full with el'">I am a full with el </p>
    <p>
      <span v-ui-tooltip="'span span span'">I am a span </span>
    </p>
    <p>
      <ui-button v-ui-tooltip="{content:'I am with a button',closeOnMouseleave:false,showCloseIcon:true}">????????????</ui-button>
    </p>
  </div>
</template>
<script>
export default {

  name: 'tooltip',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
