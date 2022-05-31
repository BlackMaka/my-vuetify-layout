<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <!-- <ProductItem :self-max-width="1000" height="700" /> -->

        <!-- dd -->
        <v-card class="mx-auto my-12">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            src="https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png"
          ></v-img>

          <v-card-title
            >[경희 한방바이오] 쏘팔 청춘파워 코사놀(1,000mg x 30캡슐 x
            2박스)</v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              <span style="font-size: 1.3rem; font-weight: bold; color: tomato"
                >83%</span
              >&nbsp;&nbsp;
              <span style="font-size: 1.5rem; font-weight: bold">19,900원</span
              >&nbsp;
              <del>120,000원</del>
            </div>

            <div>추가설명</div>
          </v-card-text>

          <v-divider class="mx-4 mb-10"></v-divider>
          <!-- <div id="floatdiv">zzzzzzzzzzzzzzzzzz</div>
          <v-banner
            app
            outlined
            sticky
            class="white"
            bottom
            style="z-index: 99999"
          >
            ddddd</v-banner
          > -->
          <v-tabs fixed-tabs background-color="primary" dark v-model="tab">
            <v-tabs-slider color="black"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item.name">
              {{ item.name }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.name">
              <v-card flat>
                <!-- <v-card-text v-text="item.text"></v-card-text> -->
                <template v-if="item.tab_dv === 'image'">
                  <v-img :src="item.url"></v-img>
                </template>
                <template v-else>
                  <v-card-text class="mb-10" v-text="item.text"></v-card-text>
                </template>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
        <!-- dd -->
        <v-footer v-bind="localAttrs" fluid class="px-0">
          <v-card width="100%" class="grey lighten-3 text-center" outlined>
            <!-- <v-card-text>
              <v-btn class="white mx-2" text-center icon>
                <v-icon size="24px">mdi-plus</v-icon>
              </v-btn>
              <v-btn large :ripple="false">1</v-btn>
              <v-btn class="white mx-2 mr-10" text-center icon>
                <v-icon size="24px">mdi-minus</v-icon>
              </v-btn>
            </v-card-text>

            <v-divider></v-divider> -->

            <v-card-text class="white--text">
              <!-- <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-btn class="white mx-4" text-center icon>
                      <v-icon size="24px">mdi-plus</v-icon>
                    </v-btn>
                    <v-btn large :ripple="false">1</v-btn>
                    <v-btn class="white mx-4" text-center icon>
                      <v-icon size="24px">mdi-minus</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn class="black" darken-5 text-center dark>
                      <v-icon size="24px" color="white"
                        >mdi-purse-outline
                      </v-icon>
                      구매하기
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container> -->

              <v-row justify="center" align="center">
                <v-col cols="2">
                  <v-icon size="24px" color="red">mdi-heart-outline</v-icon>
                  <!-- <v-icon>mdi-heart</v-icon> -->
                </v-col>
                <v-col class="px-2">
                  <v-btn
                    text-center
                    large
                    outlined
                    width="100%"
                    color="primary"
                  >
                    선물하기
                  </v-btn>
                </v-col>
                <v-col class="px-2">
                  <v-btn color="primary" text-center large dark width="100%">
                    구매하기
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  //import ProductItem from '@/views/product/ProductItem.vue';
  //import BackGround from '@/components/BackGround.vue';
  //import ImageCmp from '@/components/ImageCmp.vue';
  export default {
    components: {
      //ProductItem,
      //      BackGround,
      //ImageCmp,
    },
    data: () => ({
      selection: 0,
      tab: null,
      items: [
        {
          name: '상품설명',
          tab_dv: 'image',
          url: 'https://img.welfareplus.com/img/dtl/00309/w/3093119_0.jpg',
        },
        { name: 'Q&A', tab_dv: 'Question', text: '888882' },
      ],
    }),
    computed: {
      localAttrs() {
        const attrs = {};

        // if (this.variant === 'default') {
        //   attrs.absolute = false;
        //   attrs.fixed = false;
        // } else {
        //   attrs[this.variant] = true;
        // }
        attrs.fixed = true;
        return attrs;
      },
    },

    methods: {},
    mounted() {
      console.log(this.$route);
    },
  };
</script>

<style>
  #floatdiv {
    position: fixed;
    width: 175px;
    display: inline-block;
    right: 0px; /* 창에서 오른쪽 길이 */
    top: 94%; /* 창에서 위에서 부터의 높이 */
    background-color: transparent;
    margin: 0;
    z-index: 9999;
  }
</style>
