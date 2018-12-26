<template>
 <div class="container"> <ClientOnly>
  还有
  <ui-countdown :date="new Date('2020-2-20 11:22:33:000')" :delay="10"></ui-countdown>
  被消灭

  <ui-hr>自定义文字</ui-hr>
  <ui-countdown :date="new Date('2020-2-20 11:22:33')" :delay="10"><span slot="day">❤️</span><span slot="hour">⛷️</span><span slot="minute">MinutE</span><span slot="second">💌</span><span slot="ms">🌰</span>  </ui-countdown>
  <ui-hr>时间格式</ui-hr>
  <ui-countdown date="2020-2-20 11:22:33:000" :show-ms="false" :show-hours="false"></ui-countdown>
  <ui-hr>加点样式</ui-hr>
  <ui-countdown :date="new Date('2020-2-20 11:22:33:000')"  :show-ms="false" theme="card"></ui-countdown></ClientOnly>
 </div>
</template>

<script>
export default {

  name: 'second3',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>