<template>
  <v-app-bar app color="white" class="custom-app-bar">
    <v-icon size="30" class="mt-1" @click="$router.go(-1)"
      >mdi-arrow-left</v-icon
    >

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

    <v-text-field
      outlined
      class="px-2 pt-7"
      dense
      color="111"
      ref="search"
      placeholder="검색어를 입력하세요"
      v-model="search"
    >
      <v-icon
        slot="append"
        :class="{ showIcon: isText }"
        @click="deleteSearch()"
      >
        mdi-close-circle
      </v-icon>
    </v-text-field>
    <!-- <router-link :to="`/product/list/${search}`">
      
    </router-link> -->
    <v-btn icon @click="doSearch()">
      <v-icon size="30" class="pt-1">mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
  <!-- </v-toolbar> -->
</template>

<script>
  export default {
    data() {
      return {
        search: '',
      };
    },
    computed: {
      isText() {
        return !(this.search.length > 0);
      },
    },
    watch: {
      // search(val) {
      //   val && val !== this.select && this.querySelections(val);
      // },
    },
    methods: {
      deleteSearch() {
        this.search = '';
      },
      doSearch() {
        this.$router.push({
          name: 'ProductList', //path:'/product/list' 이건 안먹힘 (공식문서참조)
          params: { search: this.search },
        });
      },
    },
    mounted() {
      this.$refs.search.focus();
    },
  };
</script>

<style scoped>
  .showIcon {
    visibility: hidden;
  }
  /* .custom-app-bar {
    box-shadow: none !important;
    border-bottom: 1px solid #111 !important;
  } */
  a {
    text-decoration: none;
  }
</style>
