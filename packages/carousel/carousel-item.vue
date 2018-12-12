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
  render(h) {
    return (
      this.item.tag ? <div ref="item" class="ui-carousel-item" >{this.item}</div> : ""
    )
  }
}

</script>
