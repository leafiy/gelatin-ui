<template>
  <div class="container"> <ClientOnly>
    <div class="box">
      <span class="trigger1" @click="openPanel1">open a panel from right</span>
      <span class="trigger2" @click="openPanel2">open a panel from bottom</span>
      <span class="trigger3" @click="openPanel3">open a panel from top</span>
      <span class="trigger4" @click="openPanel4">open a panel from left</span>
      <span class="trigger5" @click="openPanel5">open a isolate panel</span>
      <ui-slide-panel :show="show" :direction="direction" :speed="1000">
        <div class="card">
          <ui-button @click.native="show = false">close panel</ui-button>
        </div>
      </ui-slide-panel>
      <ui-slide-panel :show="show2" isolate>
        <div class="card">
          <ui-button @click.native="show2 = false">close panel</ui-button>
        </div>
      </ui-slide-panel>
    </div></ClientOnly>
  </div>
</template>
<script>
export default {

  name: 'panel',

  data() {
    return {
      show: false,
      show2:false,
      direction: 'right',
    }
  },
  methods: {
    openPanel1() {
      this.direction = 'right'
      this.show = !this.show
    },
    openPanel2() {
      this.direction = 'up'
      this.show = !this.show
    },
    openPanel3() {
      this.direction = 'down'
      this.show = !this.show
    },
    openPanel4() {
      this.direction = 'left'
      this.show = !this.show
    },
    openPanel5() {
      this.show2 = !this.show
    },
  }
}

</script>
<style lang="scss" scoped>
.ui-slide-panel {
  height: 100%;

  &-isolate {
    bottom: 0;
    right: 0;
    width: 300px;
    height: 200px;
    background: #fff;
    border:3px solid #eee;
  }
}

.card {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .7);
}

.box {
  height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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
