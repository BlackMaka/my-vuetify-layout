<template>
  <v-app>
    <SideDrawerBar @drawer="drawer = !drawer" />
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
