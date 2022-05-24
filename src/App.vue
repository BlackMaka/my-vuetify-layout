<template>
  <v-app>
    <SideDrawerBar @drawer="drawer = !drawer" />

    <v-navigation-drawer app v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>

    <BottomNavigation fixed />
  </v-app>
</template>

<script>
//import BottomNavigation from "@/views/BottomNavigation";
import SideDrawerBar from "../src/views/SideBar.vue";
import BottomNavigation from "../src/views/BottomNavigation.vue";
export default {
  components: {
    BottomNavigation,
    SideDrawerBar,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
