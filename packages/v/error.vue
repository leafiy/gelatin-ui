<template>
  <div>
    <slot></slot>
    <!-- <transition name="fade"> -->
    <ui-height-transition>
      <p class="ui-v-error-list" v-if="errorArr && errorArr.length">
        <span v-for="(index, item) of errorArr" :key="index + item"
          >{{ item.message }} <em>, </em>
        </span>
      </p>
    </ui-height-transition>
    <!-- </transition> -->
  </div>
</template>
<script>
import UiHeightTransition from "../height-transition/height-transition.vue";
export default {
  name: "ui-v-error",
  components: {
    UiHeightTransition
  },
  props: {
    errors: Array,
    name: String
  },
  computed: {
    errorArr() {
      return this.errors.filter(error => error.name == this.name);
    }
  }
};
</script>
<style>
.ui-v-error-list {
  margin-bottom: 10px;
}
</style>
