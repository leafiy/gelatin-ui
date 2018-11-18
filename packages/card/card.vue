<template>
  <div class="ui-card" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import '../assets/scss/card.scss';
export default {

  name: 'ui-card',

  data() {
    return {

    }
  },
  props: {
    shadow: {
      type: Boolean,
      default: true
    },
    shadowHover: {
      type: Boolean,
      default: false
    },
    type: String,

  },
  computed: {
    classes() {
      return [{
          "ui-card-shadow": this.shadow,
          "ui-card-shadow-hover": this.shadowHover
        },
        this.type ? `ui-card-${this.type}` : ""
      ];
    }
  }
}

</script>
