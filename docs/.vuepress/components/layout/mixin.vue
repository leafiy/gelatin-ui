<template>
  <div class="container">
    <div id="example-element">改变窗口大小试试</div>
  </div>
</template>
<script>
export default {

  name: 'mixin',

  data() {
    return {

    }
  }
}

</script>
<style lang="scss" scoped>
$xs:0;
$sm:576px;
$md:768px;
$lg:992px;
$xl:1200px;

@mixin xs {
  @media (min-width: $xs) {
    @content
  }
}

@mixin sm {
  @media (min-width: $sm) {
    @content
  }
}

@mixin md {
  @media (min-width: $md) {
    @content
  }
}

@mixin lg {
  @media (min-width: $lg) {
    @content
  }
}

@mixin xl {
  @media (min-width: $xl) {
    @content
  }
}

#example-element {
  width: 100px;
  height: 100px;

  @include xs {
    background: #000;
  }

  @include sm {
    background: red;
  }

  @include md {
    background: green;
  }

  @include lg {
    background: silver;
  }

  @include xl {
    background: blue;
  }


}

</style>
