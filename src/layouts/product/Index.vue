<template>
  <v-app>
    <ProductAppBar />
    <ProductView />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/product/AppBar.vue';
  import View from '@/layouts/product/View.vue';
  export default {
    name: 'App',
    components: {
      ProductAppBar: AppBar,
      ProductView: View,
    },
  };
</script>
