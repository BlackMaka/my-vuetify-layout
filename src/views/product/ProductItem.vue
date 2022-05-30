<template>
  <v-card
    class="mx-auto"
    :max-width="
      (!!selfMaxWidth && selfMaxWidth) ||
      ($vuetify.breakpoint.mdAndDown && 500) ||
      ($vuetify.breakpoint.mdAndUp && 700)
    "
    v-bind="$attrs"
    to="/product/detail/3"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      align="right"
    >
    </v-img>

    <v-card-subtitle class="pb-0"> 상품이름 </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>30,000</div>

      <div><del>45,000</del></div>
    </v-card-text>

    <!-- <div align="center">
      <v-btn color="black" dark width="95%" class="my-2">
        구매하기 -->
    <!-- <v-icon>mdi-purse-outline</v-icon> -->
    <!-- </v-btn>
    </div> -->
  </v-card>
</template>

<script>
  export default {
    props: {
      selfMaxWidth: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        overlay: false,
      };
    },
    mounted() {
      console.log(this.$vuetify.breakpoint.md);
    },
  };
</script>

<style></style>
