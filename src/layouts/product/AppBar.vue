<template>
  <v-app-bar app color="white" class="custom-app-bar">
    <v-icon size="30" class="mt-1">mdi-arrow-left</v-icon>

    <!-- <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="What state are you from?"
      solo-inverted
      dense
      color="white"
    ></v-autocomplete> -->

    <v-text-field outlined class="px-2 pt-7" dense color="111">
      <v-icon slot="append"> mdi-close-circle </v-icon>
    </v-text-field>
    <router-link to="/product/list">
      <v-icon size="30" class="pt-1">mdi-magnify</v-icon>
    </router-link>
  </v-app-bar>
  <!-- </v-toolbar> -->
</template>

<script>
  export default {
    data() {
      return {};
    },
    watch: {
      // search(val) {
      //   val && val !== this.select && this.querySelections(val);
      // },
    },
    methods: {},
  };
</script>

<style scoped>
  .custom-app-bar {
    /* box-shadow: none !important;
    border-bottom: 1px solid #111 !important; */
  }
  a {
    text-decoration: none;
  }
</style>
