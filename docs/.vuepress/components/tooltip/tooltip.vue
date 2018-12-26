<template>
  <div class="container"> <ClientOnly>
    <p v-ui-tooltip="'I am a full with el'">I am a full with el </p>
    <span v-ui-tooltip="'span span span'">I am a span </span>
    <ui-button v-ui-tooltip="{content:'I am with a button',closeOnMouseleave:false,showCloseIcon:true}">????????????</ui-button>
    <ui-button v-ui-tooltip="{content:'I am with a button',closeOnMouseleave:false,showCloseIcon:true,offset:50}">Offset 50px</ui-button>
    <ui-button v-ui-tooltip="{content:'I am with a button',arrowSize:3,triangleOffset:10}">arrow size</ui-button>
    <p>
      <ui-button size="sm" full v-ui-tooltip="{content:'I am with a button',align:'left'}">align left</ui-button>
    </p>
     <p>
      <ui-button size="sm" full v-ui-tooltip="{content:'I am with a button',align:'right'}">align right</ui-button>
    </p>
    <p>
      <ui-button size="sm" full v-ui-tooltip="{content:'内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多内容非常多',align:'right'}">内容非常多</ui-button>
    </p></ClientOnly>
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
