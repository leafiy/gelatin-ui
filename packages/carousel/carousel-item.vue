<script>
export default {

  name: 'ui-carousel-item',

  data() {
    return {
      width: ''
    }
  },
  props: {
    item: Object,
    index: Number
  },

  mounted() {
    // this.$emit('mounted', { index: this.index, width: this.$el.getBoundingClientRect().width })
    // this.width = this.$el.clientWidth
  },
  render(h) {
    return (
      this.item.tag ? <div ref="item" class="ui-carousel-item" >{this.item}</div> : ""
    )
  }
}

</script>
