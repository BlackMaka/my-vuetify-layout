<template>
  <v-avatar v-bind="$attrs">
    <v-img :src="src"></v-img>
    <!-- <v-img src="@/assets/account.png"></v-img> -->
  </v-avatar>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      src: {
        type: String,
        default: require(`@/assets/account.png`),
      },
    },
  };
</script>

<style></style>
