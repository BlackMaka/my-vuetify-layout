<template>
  <v-container fluid>
    <v-banner app sticky class="grey lighten-5" bottom style="z-index: 1">
      <v-chip-group mandatory>
        <v-chip v-for="chip in bannerChips" :key="chip.brand_cd">
          {{ chip.name }}
        </v-chip>
      </v-chip-group></v-banner
    >
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-fab-transition>
            <v-btn
              color="pink"
              dark
              bottom
              right
              fab
              fixed
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
          <!-- <v-btn color="purple" dark v-bind="attrs" v-on="on"> Open In </v-btn> -->
        </template>
        <v-list>
          <v-subheader>
            <v-btn width="100%" color="success" @click="sheet = false"
              >확인</v-btn
            >
          </v-subheader>
          <v-list-item v-for="category in categories" :key="category.id">
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${category.img}`"
                  :alt="category.alt"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-chip-group mandatory active-class="primary--text">
              <v-chip
                v-for="brand in category.brands"
                :key="brand.brand_cd"
                @click="selectBrands(category, brand)"
              >
                {{ brand.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </div>
    <!-- dddddddddddddddddddddddddddddddddddddddddddddddddd -->
    <BackGroundCmp roundCustom class="grey lighten-2 mt-5 mb-3 mx-3 px-3">
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
    </BackGroundCmp>

    <BackGroundCmp
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
    </BackGroundCmp>

    <BackGroundCmp roundCustom class="grey lighten-2 mt-8 mb-3 mx-3">
      <ProductItems />
    </BackGroundCmp>

    <!-- <ProductItems /> -->
  </v-container>
</template>

<script>
  import ProductItems from '@/views/product/ProductItems.vue';
  import BackGroundCmp from '@/components/BackGroundCmp.vue';
  export default {
    components: {
      ProductItems,
      BackGroundCmp,
    },
    data() {
      return {
        chips: [
          { id: 1, name: 'Programming' },
          { id: 2, name: 'Playing' },
          { id: 3, name: 'Watching' },
          { id: 4, name: 'Sleeping' },
          { id: 5, name: 'Programming' },
          { id: 6, name: 'Playing' },
          { id: 7, name: 'Watching' },
          { id: 8, name: 'Sleeping' },
        ],
        sheet: false,
        bannerChips: [],
        categories: [
          {
            id: 1,
            img: 'keep.png',
            alt: 'Keep',
            name: '카페',
            brands: [
              { name: '스타벅스', brand_cd: 'a1' },
              { name: '커핀그루나루', brand_cd: 'a2' },
              { name: '투썸플레이스', brand_cd: 'a3' },
              { name: '스무디킹', brand_cd: 'a4' },
              { name: '쥬씨', brand_cd: 'a5' },
            ],
          },
          {
            id: 2,
            img: 'inbox.png',
            alt: 'Inbox',
            name: '치킨',
            brands: [
              { name: '교촌치킨', brand_cd: 'b1' },
              { name: '호치킨', brand_cd: 'b2' },
            ],
          },
          {
            id: 3,
            img: 'hangouts.png',
            alt: 'Hangouts',
            name: '편의점',
            brands: [
              { name: 'CU', brand_cd: 'c1' },
              { name: 'GS25', brand_cd: 'c2' },
            ],
          },
          {
            id: 4,
            img: 'messenger.png',
            alt: 'Messenger',
            name: '상품권',
            brands: [
              { name: '롯데멤버스', brand_cd: 'd1' },
              { name: '쿠팡이즈', brand_cd: 'd2' },
              { name: 'PCM코리아', brand_cd: 'd3' },
              { name: '컬쳐랜드', brand_cd: 'd4' },
              { name: '요기요', brand_cd: 'd5' },
            ],
          },
          {
            id: 5,
            img: 'google.png',
            alt: 'Google+',
            name: '기타',
            brands: [
              { name: '페이즈', brand_cd: 'e1' },
              { name: '소품상품', brand_cd: 'e2' },
              { name: '글라스박스', brand_cd: 'e3' },
              { name: '인터컨티넨탈', brand_cd: 'e4' },
              { name: '배송상품', brand_cd: 'e5' },
            ],
          },
        ],
      };
    },
    watch: {
      chips(oldValue, newValue) {
        console.log(oldValue, newValue);
      },
    },
    methods: {
      selectBrands(category, brand) {
        if (this.bannerChips.length > 0) {
          this.bannerChips = this.bannerChips.filter((chip) => {
            return chip.id !== category.id;
          });
        }

        this.bannerChips.push({
          ...brand,
          id: category.id,
        });
      },
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
