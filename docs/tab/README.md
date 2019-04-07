# Tab

<tab-index></tab-index>



 ```html
<template>
  <div class="container">
    <ui-tabs :items="items" v-model="active"></ui-tabs>

    <p>
     activeIndex : {{active}}
    </p>

    <ui-tabs :items="items" v-model="active2"></ui-tabs>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {
      active: 0,
      active2:2,
      items: [{
        title: 'User1',
        icon: 'user'
      },
      {
        title: 'User2',
        icon: 'user'
      },
      {
        title: 'User3',
        icon: 'user'
      },
      {
        title: 'User4',
        icon: 'user'
      }]

    }
  }
}
</script>
 ```



#### events

`change(index)`