<template>
  <!-- style="background-color: blue; " -->
  <div :class="{ roundCustom }" class="outlineCustom" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      roundCustom: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style>
  .roundCustom {
    border-radius: 15px;
  }
</style>
