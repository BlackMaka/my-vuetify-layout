<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="6" sm="6" md="4" lg="3" v-for="i in 12" :key="i">
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
