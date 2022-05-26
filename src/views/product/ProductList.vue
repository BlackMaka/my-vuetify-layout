<template>
  <v-container fluid>
    <BackGround roundCustom class="grey lighten-3 mt-3 mb-3">
      <v-row justify="center" v-for="i in 2" :key="i">
        <v-col cols="auto">
          <v-checkbox
            label="카페"
            color="secondary"
            value="카페"
            hide-details
            class="mb-3 mx-3"
          ></v-checkbox>
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            label="치킨"
            color="secondary"
            value="치킨"
            hide-details
            class="mb-3 mx-3"
          ></v-checkbox>
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            label="편의점"
            color="secondary"
            value="편의점"
            hide-details
            class="mb-3 mx-3"
          ></v-checkbox>
        </v-col>
      </v-row>
    </BackGround>

    <ProductItem />
  </v-container>
</template>

<script>
  import ProductItem from '@/views/product/ProductItem.vue';
  import BackGround from '@/components/BackGround.vue';
  export default {
    components: {
      ProductItem,
      BackGround,
    },
  };
</script>

<style></style>
