<template>
  <v-navigation-drawer app v-bind="$attrs">
    <v-container>
      <v-list>
        <v-list-item>
          <BadgesCmp
            bordered
            offset-x="30"
            offset-y="20"
            color="red accent-7"
            content="6"
          >
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
            </v-list-item-avatar>
          </BadgesCmp>

          <v-list-item-content>
            <v-list-item-title
              v-html="'이수한 [테스트판매사]'"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-html="'completed0728@gmail.com'"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="font-size: 1.2rem; font-weight: bold"
              >카테고리</v-list-item-title
            >
            <v-list-item-subtitle>
              <v-row justify="center">
                <v-col cols="6" sm="6" md="4" lg="3" v-for="i in 6" :key="i">
                  <v-card
                    class="mt-5"
                    outlined
                    to="/product/list"
                    @click.stop="$emit('drawer')"
                  >
                    <v-img
                      class="mx-auto"
                      width="50%"
                      height="100"
                      src="https://dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000107.png"
                    ></v-img>
                    <div align="center">카페</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- 공지메뉴2 -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>공지</v-list-item-title>
            <v-list-item-subtitle>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card class="mx-auto mt-5" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">주제</div>
                        <v-list-item-title class="text-h5 mb-1">
                          타이들
                        </v-list-item-title>
                        <v-list-item-subtitle> 서브 </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  import BadgesCmp from '@/components/BadgesCmp.vue';
  //import NaviMenuCard from '@/components/NaviMenuCard.vue';
  //import Avatar from '@/components/Avatar.vue';
  export default {
    components: {
      BadgesCmp,
      // NaviMenuCard,
      //Avatar,
    },
    data() {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
      };
    },
  };
</script>

<style></style>
