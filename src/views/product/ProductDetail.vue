<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <!-- <ProductItem :self-max-width="1000" height="700" /> -->
        <ImageCmp />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  //import ProductItem from '@/views/product/ProductItem.vue';
  //import BackGround from '@/components/BackGround.vue';
  import ImageCmp from '@/components/ImageCmp.vue';
  export default {
    components: {
      //ProductItem,
      //      BackGround,
      ImageCmp,
    },
  };
</script>

<style></style>
