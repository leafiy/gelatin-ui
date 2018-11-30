<template>
  <div class="ui-v"><slot></slot></div>
</template>

<script>
export default {
  name: "ui-v",

  data() {
    return {};
  },
  mounted() {
    console.log(this.$slots);
  }
};
</script>

<style lang="css" scoped></style>
