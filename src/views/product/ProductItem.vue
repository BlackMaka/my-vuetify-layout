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
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
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
