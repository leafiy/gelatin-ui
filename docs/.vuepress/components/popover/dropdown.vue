<template>
  <div class="container">
    <ClientOnly>
    <ui-button @click="click" id="dropdown">click me</ui-button>
    <ui-button @click="click2" id="dropdown2">list dropdown menu</ui-button>
    </ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'dropdown',

  data() {
    return {

    }
  },
  methods: {
    click() {
      this.$UiDropdown({
        reference: '#dropdown',
        content: 'content'
      })
    },
    click2() {
      this.$UiDropdown({
        reference: '#dropdown2',
        list: [{
            title: 'list item 1',
            onClick: () => {
              this.$UiToast('clicked list item 1')
            }
          },
          {
            title: 'list item 2',
            onClick: () => {
              this.$UiToast('clicked list item 2')
            }
          },
          {
            title: 'list item 3',
            onClick: () => {
              this.$UiToast('clicked list item 3')
            }
          }
        ]
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>
