<template>
  <div class="container">
    <ClientOnly>
    <div class="container">
      <ui-popover>
        <ui-button slot="reference">default</ui-button>
        <div>content</div>
      </ui-popover>
      <ui-popover :popper-options="{placement:'top'}">
        <ui-button slot="reference">placement:'top'</ui-button>
        <div>content</div>
      </ui-popover>
      <ui-popover :popper-options="{placement:'left'}">
        <ui-button slot="reference">placement:'left'</ui-button>
        <div>content</div>
      </ui-popover>
      <ui-popover :popper-options="{placement:'right'}">
        <ui-button slot="reference">placement:'right'</ui-button>
        <div>content</div>
      </ui-popover>
    </div>
    <div class="container">
      <ui-popover>
        <ui-button slot="reference">复杂元素</ui-button>
        <div>
          <div class="a">npm install</div>
          <div class="a"># install dependencies</div>
          <div class="a">npm run build</div>
          <div class="a"># build dist files</div>
        </div>
      </ui-popover>
      <ui-popover :popper-options="{placement:'right'}" trigger="hover">
        <ui-button slot="reference">hover trigger</ui-button>
        <div>content</div>
      </ui-popover>
    </div>
    <div class="container">
      <ui-popover refer="#popover1">
        <ui-button slot="reference">reference selector #popover1</ui-button>
        <div>content</div>
      </ui-popover>
      <ui-button id="popover1">I'm #popover1</ui-button>
      <ui-popover :popper-options="{placement:'right'}" trigger="hover" :destroy-on-leave="true">
        <ui-button slot="reference">destroy element on after leave</ui-button>
        <div>content</div>
      </ui-popover>
    </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'popover',

  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
