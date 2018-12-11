<template>
  <div class="container">
    <div class="box">
      <span class="trigger1" @click="openPanel1">open a panel1</span>
      <span class="trigger2" @click="openPanel2">open a panel2</span>
      <span class="trigger3" @click="openPanel3">open a panel3</span>
      <span class="trigger4" @click="openPanel4">open a panel4</span>
      <span class="trigger4" @click="openPanel5">open a panel5</span>
      <ui-slide-panel :show="panel1" :direction="direction">
        <ui-card>
          <ui-button @click.native="panel1 = false">close panel</ui-button>
        </ui-card>
      </ui-slide-panel>
    </div>
  </div>
</template>
<script>
export default {

  name: 'panel',

  data() {
    return {
      panel1: false,
      direction: 'right'
    }
  },
  methods: {
    openPanel1() {
      this.panel1 = !this.panel1
    },
    openPanel2() {
      this.direction = ''
      this.panel1 = !this.panel1
    },
    openPanel3() {
      this.direction = ''
      this.panel1 = !this.panel1
    },
    openPanel4() {
      this.direction = ''
      this.panel1 = !this.panel1
    },
    openPanel5() {
      this.direction = ''
      this.panel1 = !this.panel1
    },
  }
}

</script>
<style lang="scss" scoped>
.box {
  height: 300px;
  position: relative;
  // overflow: hidden;

  span {
    cursor: pointer;
    color: #fff;
    position: absolute;
  }

  .trigger1 {
    top: 10px;
    right: 20px;
  }

  .trigger2 {
    bottom: 10px;
    right: 20px;
  }

  .trigger3 {
    top: 10px;
    left: 20px;
  }

  .trigger4 {
    bottom: 10px;
    left: 20px;
  }
}

</style>
