<template>
  <v-app-bar app color="white">
    <v-app-bar-nav-icon @click.stop="$emit('drawer')"></v-app-bar-nav-icon>

    <!-- <v-toolbar-title>
      <router-link to="/main">
        <v-img
          width="40"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
        />
      </router-link>
    </v-toolbar-title> -->
    <v-container fluid>
      <v-row>
        <v-col>
          <v-btn
            width="100%"
            to="/product"
            color="white"
            right
            height="40"
            outlined
            class="custom-btn"
          >
            <v-icon color="black">mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-btn icon width="10%">
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
  export default {};
</script>

<style scoped>
  .custom-btn {
    justify-content: right;
    border: 1px solid grey;
  }
</style>
