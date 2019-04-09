<template>
  <transition :name="transition">
    <div class="ui-spinner" :class="classes">
      <template v-if="type == 'dot'">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
      </template>
      <template v-if="type == 'bounce'">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
      </template>
      <template v-if="type == 'scale'">
        <div class="scale-inner"></div>
      </template>
      <template v-if="type=='circle'">
        <div class="ui-spinner-circle1 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle2 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle3 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle4 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle5 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle6 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle7 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle8 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle9 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle10 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle11 ui-spinner-circle-inner"></div>
        <div class="ui-spinner-circle12 ui-spinner-circle-inner"></div>
      </template>
      <template v-if="type =='ring'">
        <div class="ui-spinner-ring-inner"></div>
      </template>
    </div>
  </transition>
</template>
<script>
import "../assets/scss/spinner.scss";
export default {
  name: "ui-spinner",
  props: {
    type: {
      type: String,
      default: "dot"
    },
    transition: {
      type: String,
      default: 'fade'
    }
  },
  computed: {
    classes() {
      return [
        `ui-spinner-${this.type}`,
      ];
    }
  }
};

</script>
