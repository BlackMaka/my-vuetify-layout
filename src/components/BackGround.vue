<template>
  <!-- style="background-color: blue; " -->
  <div :class="{ roundCustom: true }" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      rounded: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style>
  .bgColor {
    background-color: red;
  }
  .roundCustom {
    border-radius: 20px;
  }
</style>
