<template>
  <v-container fluid>
    <BackGround roundCustom class="grey lighten-2 mt-5 mb-3 mx-3 px-3">
      <v-row justify="center" v-for="i in 2" :key="i">
        <v-col cols="4">
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            />
          </v-card>
        </v-col>

        <!-- <v-col>
          <v-checkbox
            label="편의점"
            color="secondary"
            value="편의점"
            hide-details
            class="mb-3 mx-3"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            label="편의점"
            color="secondary"
            value="편의점"
            hide-details
            class="mb-3 mx-3"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            label="편의점"
            color="secondary"
            value="편의점"
            hide-details
            class="mb-3 mx-3"
          ></v-checkbox>
        </v-col> -->
      </v-row>
    </BackGround>

    <BackGround
      roundCustom
      class="grey lighten-2 mt-8 mb-3 mx-3 overflow-x-auto overflow-y-hidden"
      style="display: flex"
      outlined
    >
      <v-row justify="center">
        <v-col cols="auto">
          <div style="display: inline-flex">
            <!-- <span v-for="item in chips" :key="item.id">{{ item.name }}</span> -->
            <v-chip
              color="teal"
              class="ma-2"
              text-color="white"
              v-for="item in chips"
              :key="item.id"
            >
              {{ item.name }}
              <v-avatar right @click="close(item)">
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </BackGround>

    <BackGround roundCustom class="grey lighten-2 mt-8 mb-3 mx-3">
      <ProductItem />
    </BackGround>

    <ProductItem />
  </v-container>
</template>

<script>
  import ProductItem from '@/views/product/ProductItem.vue';
  import BackGround from '@/components/BackGround.vue';
  export default {
    components: {
      ProductItem,
      BackGround,
    },
    data() {
      return {
        chips: [
          { id: 1, name: 'Programming' },
          { id: 2, name: 'Playing' },
          { id: 3, name: 'Watching' },
          { id: 4, name: 'Sleeping' },
          { id: 1, name: 'Programming' },
          { id: 2, name: 'Playing' },
          { id: 3, name: 'Watching' },
          { id: 4, name: 'Sleeping' },
        ],
      };
    },
    watch: {
      chips(oldValue, newValue) {
        console.log(oldValue, newValue);
      },
    },
    methods: {
      aa() {
        console.log('ih');
      },
      close(item) {
        // this.chips.splice(this.chips.indexOf(item.id), 1);
        // this.chips = [...this.chips];
        this.chips = this.chips.filter((chip) => {
          return chip.id != item.id;
        });
      },
    },
  };
</script>

<style scoped>
  /*특정 부분 스크롤바 없애기*/

  .overflow-x-auto {
    -ms-overflow-style: none;
  }
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
</style>
