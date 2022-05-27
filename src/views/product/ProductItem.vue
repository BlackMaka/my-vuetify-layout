<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" sm="4" md="3" lg="3" v-for="i in 12" :key="i">
        <v-card
          class="mx-auto"
          :max-width="
            ($vuetify.breakpoint.mdAndDown && 250) ||
            ($vuetify.breakpoint.mdAndUp && 400)
          "
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
          </v-img>

          <v-card-subtitle class="pb-0"> 상품이름 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>30,000</div>

            <div><del>45,000</del></div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="green" text>
              구매하기 <v-icon>mdi-purse-outline</v-icon>
            </v-btn>

            <v-btn color="pink" text>
              찜하기 <v-icon>mdi-heart</v-icon>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$vuetify.breakpoint.md);
    },
  };
</script>

<style></style>
