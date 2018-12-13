<template>
  <div class="ui-typer">
    <transition-group appear name="fade">
      <span  v-for="(letter,index) of words" :key="index + letter" class="ui-typer-item">{{letter}}</span>
    </transition-group>
    <span class="ui-typer-cursor" v-if="cursor">{{cursor}}</span>
  </div>
</template>
<script>
import '../assets/scss/typer.scss'
export default {

  name: 'ui-typer',

  data() {
    return {
      timer: null,
      index: 0,
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },

    speed: {
      type: Number,
      default: 4,
      validator(value) {
        return value > 1 && value < 5
      }
    },
    loop: Boolean,
    loopDelay: {
      type: Number,
      default: 1000
    },
    cursor: {
      type: String
    }
  },
  computed: {
    currentWord() {

    },
    words() {
      return this.content.slice(0, this.index + 1)
    },
    isTyping() {
      return !!this.timer
    }
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.index++
      }, 1000 / this.speed)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    back() {
      this.timer = setInterval(() => {
        if (this.index == 0) {
          this.stop()
          this.start()
          return
        }
        this.index--
      }, 1000 / this.speed)
    }
  },
  watch: {
    index(val) {
      if (val == this.content.length) {
        if (this.loop) {
          this.stop()
          setTimeout(() => {
            this.back()
            this.$emit('back')
          }, this.loopDelay)
        } else {
          this.stop()
          this.$emit('stop')
        }
      }
    }
  },
  mounted() {
    this.start()
  }

}

</script>
<style lang="css" scoped>
</style>
