<template>
  <div class="container">
    <ClientOnly>
      <ui-autocomplete :items="items" v-model="value" :show-on-focus="true"></ui-autocomplete>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'html-list',

  data() {
    return {
      items: ['<div class="ui-avatar ui-avatar-size-sm ui-avatar-circle"><div class="ui-avatar-container"><div class="ui-image ui-avatar-image"><div class="ui-image-image" style="background-image: url(&quot;https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg&quot;);"></div></div></div> <span class="ui-avatar-name">size-sm</span> <span class="ui-avatar-slot"></span></div>',
        '<div class="ui-avatar ui-avatar-size-lg ui-avatar-circle"><div class="ui-avatar-container"><div class="ui-image ui-avatar-image"><div class="ui-image-image" style="background-image: url(&quot;https://leafiy.oss-cn-beijing.aliyuncs.com/leafiyanthony-tuil-512016-unsplash.jpg&quot;);"></div></div></div> <span class="ui-avatar-name">Sed posuere egestas augue eu facilisis. </span> <span class="ui-avatar-slot"></span></div>'
      ],
      value: '',
      value2: '',
    }
  }
}

</script>
<style lang="css" scoped>
</style>
