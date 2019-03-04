<template>
    <div class="container">
        <ui-popover>
            <span slot="reference">click me</span>
            <div>content</div>
        </ui-popover>
        <ui-popover :popper-options="{placement:'left'}">
            <span slot="reference">click me</span>
            <div>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</div>
        </ui-popover>
    </div>
</template>

<script>
export default {

  name: 'popover',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>