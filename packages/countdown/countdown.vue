<template>
  <div class="ui-countdown" :class="[`ui-countdown-theme-${theme}`]">
    <span class="ui-countdown-second" v-if="second">{{sec}}</span>
    <div class="ui-countdown-date" v-if="date">
      <div class="ui-countdown-date-d" v-if="showDays">{{days}}<slot name="day"><span class="ui-countdown-date-unit">天</span></slot>
      </div>
      <div class="ui-countdown-date-h" v-if="showHours">{{hours}}<slot name="hour"><span class="ui-countdown-date-unit">小时</span></slot>
      </div>
      <div class="ui-countdown-date-m" v-if="showMinutes">{{minutes}}<slot name="minute"><span class="ui-countdown-date-unit">分</span></slot>
      </div>
      <div class="ui-countdown-date-s" v-if="showSeconds">{{seconds}}<slot name="second"><span class="ui-countdown-date-unit">秒</span></slot>
      </div>
      <div class="ui-countdown-date-ms" v-if="showMs">{{ms}}<slot name="ms"><span class="ui-countdown-date-unit"></span></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import '../assets/scss/coutdown.scss'
export default {

  name: 'ui-countdown',

  data() {
    return {
      sec: '',
      timer: null,
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      ms: '00',
      endDate: '',
      startDate: ''

    }
  },
  props: {
    second: Number,
    date: [Date, String],
    delay: {
      type: Number,
      default: 1000
    },
    showDays: { type: Boolean, default: true },
    showHours: { type: Boolean, default: true },
    showMinutes: { type: Boolean, default: true },
    showSeconds: { type: Boolean, default: true },
    showMs: { type: Boolean, default: true },
    theme: {
      type: String,
      validator(val) {
        return ['card', 'flip'].includes(val)
      }
    }
  },
  computed: {

  },
  methods: {

    start() {
      if (this.second) {
        this.startSecond()
      }
      if (this.date) {
        this.endDate = new Date(this.date).getTime();
        if (isNaN(this.endDate)) {
          return;
        }
        if (typeof this.date == 'string') {

          this.startCountDate()
        } else {
          this.startCountDate()
        }
      }
      this.$emit('start')

    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
      this.$emit('stop')
    },
    startSecond() {
      this.sec = this.second
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.sec--
        if (this.sec <= 0) {
          this.stop()
        }
      }, this.delay)
    },
    parseFormat() {



    },
    startCountDate() {


      setInterval(this.calculate, this.delay);
    },
    calculate() {
      let start = new Date();
      this.startDate = start.getTime();

      let timeRemaining = parseInt((this.endDate - this.startDate) / 10);
      if (timeRemaining >= 0) {
        this.days = parseInt(timeRemaining / 8640000);
        timeRemaining = (timeRemaining % 8640000);

        this.hours = parseInt(timeRemaining / 360000);
        timeRemaining = (timeRemaining % 360000);

        this.minutes = parseInt(timeRemaining / 6000);
        timeRemaining = (timeRemaining % 6000);

        this.seconds = parseInt(timeRemaining / 100);
        timeRemaining = (timeRemaining % 100);
        this.ms = parseInt(timeRemaining);
      } else {
        this.$emit('stop')
      }
    }
  },
  mounted() {
    this.start()
  }
}

</script>
