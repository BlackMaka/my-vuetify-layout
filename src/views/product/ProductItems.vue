<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" sm="4" md="3" lg="3" v-for="i in 12" :key="i">
        <ProductItem />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ProductItem from '@/views/product/ProductItem.vue';
  export default {
    components: {
      ProductItem,
    },
    mounted() {
      console.log(this.$vuetify.breakpoint.md);
    },
  };
</script>

<style></style>
