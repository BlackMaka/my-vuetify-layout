<template>
  <v-app>
    <DefaultAppbar @drawer="drawer = !drawer" />
    <DefaultNavigation
      v-model="drawer"
      temporary
      width="80%"
      height="100%"
      @drawer="drawer = !drawer"
    />
    <DefaultView />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/default/AppBar.vue';
  import Navigation from '@/layouts/default/Navigation.vue';
  import View from '@/layouts/default/View.vue';
  export default {
    name: 'App',
    components: {
      DefaultAppbar: AppBar,
      DefaultNavigation: Navigation,
      DefaultView: View,
    },

    data() {
      return {
        drawer: false,
      };
    },
    methods: {},
  };
</script>
