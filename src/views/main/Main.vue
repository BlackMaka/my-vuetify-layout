<template>
  <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    :show-arrows="false"
    interval="10000"
    hide-delimiters
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      to="/product/list"
    >
      <!-- <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ slide }} Slide</div>
        </v-row>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      };
    },
  };
</script>

<style></style>
