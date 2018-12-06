<template>
  <div>
    <slot></slot>
    <transition name="fade">
      <p class="ui-v-error-list" v-if="errorArr && errorArr.length">
        <span v-for="item of errorArr">{{item.message}} <em>, </em> </span>
      </p>
    </transition>
  </div>
</template>
<script>
export default {

  name: 'ui-v-error',

  props: {
    errors: Array,
    name: String
  },
  computed: {
    errorArr() {
      return this.errors.filter(error => error.name == this.name)
    }
  }
}

</script>
<style>
.ui-v-error-list {
  margin-bottom: 10px;
}

</style>
