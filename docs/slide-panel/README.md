# Slide Panel

<slide-panel-panel></slide-panel-panel>

#### usage

```html
 <template>
  <div class="container">
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
    </div>
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
```

#### props

|prop|type|default|description|
|--|--|--|--|
|show|Boolean||控制显示|
|speed|Number|300|动画速度|
|isolate|Boolean||true插入到body|
|zIndex|Number|||
|direction|String|right|'down', 'up', 'right', 'left'|


#### events
|event||
|--|--|
|open||
|close||