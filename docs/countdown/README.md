# Countdown

#### 基础用法，直接传入second
<countdown-second></countdown-second>

<code-code>
 ```html
<ui-countdown :second="30">s</ui-countdown>
 ```
</code-code>

#### 与button或text一同使用
<countdown-second2></countdown-second2>

<code-code>
 ```html
<ui-button :disabled="disabled">
      <ui-countdown ref="countdown" :second="30" @start="start" @stop="stop">s</ui-countdown>
    </ui-button>
    <ui-button @click.native="restart">重新开始计时</ui-button>
    <span v-ui-loading="loading"><ui-countdown ref="countdown2" :second="10" @start="start2" @stop="stop2">s</ui-countdown>我是文字哈</span>
 ```

 ```js
 start() {
      this.disabled = true
    },
    stop() {
      this.disabled = false
    },
    start2() {
      this.loading = true
    },
    stop2() {
      this.loading = false
    },
    restart() {
      this.$refs['countdown'].start()
    }
 ```
</code-code>


#### Date类型用法
<countdown-second3></countdown-second3>

<code-code>
 ```html
<ui-countdown :date="new Date('2020-2-20 11:22:33')" :delay="10"></ui-countdown>
<ui-countdown :date="new Date('2020-2-20 11:22:33')" :delay="10"><span slot="day">❤️</span><span slot="hour">⛷️</span><span slot="minute">MinutE</span><span slot="second">💌</span><span slot="ms">🌰</span>  </ui-countdown>
<ui-countdown date="2020-2-20 11:22:33:000" :show-ms="false" :show-hours="false"></ui-countdown>
<ui-countdown :date="new Date('2020-2-20 11:22:33:000')"  :show-ms="false" theme="card"></ui-countdown>
 ```
</code-code>