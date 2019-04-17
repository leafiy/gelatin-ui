<template>
  <div class="container layout-doc">
    <div id="badge">breakponint: {{breakponint}}</div>
    <ui-container>
      <ui-row>
        <ui-col col-sm>
          col-sm
        </ui-col>
        <ui-col col-sm>
          col-sm
        </ui-col>
        <ui-col col-sm>
          col-sm
        </ui-col>
      </ui-row>
    </ui-container>
  </div>
</template>
<script>
export default {

  name: 'index',

  data() {
    return {
      breakponint: ''
    }
  },
  methods: {
    getBreakponint() {
      let w = window.innerWidth
      if (w > 0 && w <= 576) {
        this.breakponint = 'xs'
      }
      if (w > 576 && w <= 768) {
        this.breakponint = 'sm'
      }
      if (w > 768 && w <= 992) {
        this.breakponint = 'md'
      }
      if (w > 992 && w <= 1200) {
        this.breakponint = 'lg'
      }
      if (w > 1200) {
        this.breakponint = 'xl'
      }
    }
  },
  mounted() {
    this.getBreakponint()
    window.addEventListener('resize',this.getBreakponint)
  },
  destroyed(){
    window.removeEventListener('resize',this.getBreakponint)
  }
}

</script>
<style lang="scss" scoped>
.ui-layout-col {
  background: rgb(8, 215, 184);
  border: 1px solid darken(rgb(8, 215, 184), 10%);
  padding: .5rem;
  color: #fff;
  text-align: center;
}

#badge {
  position: fixed;
  bottom: 0;
  right: 0;
  background: #000;
  padding: .5em .75em;
  color: #fff;
  z-index: 1000;
}

</style>
