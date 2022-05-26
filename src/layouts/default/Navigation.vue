<template>
  <v-navigation-drawer app v-bind="$attrs">
    <!-- <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <Badges
            bordered
            offset-x="30"
            offset-y="20"
            color="red accent-7"
            content="6"
          >
            <Avatar
              size="50"
              src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
            ></Avatar>
          </Badges>
        </v-list-item-title>

        <v-list-item-subtitle> test</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item> -->

    <!-- <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->

    <v-container>
      <v-list>
        <v-list-item>
          <Badges
            bordered
            offset-x="30"
            offset-y="20"
            color="red accent-7"
            content="6"
          >
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
            </v-list-item-avatar>
          </Badges>

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
                  <v-card class="mt-5">
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

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>자주묻는 질문</v-list-item-title>
            <v-list-item-subtitle>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card class="mx-auto mt-5" outlined fluid>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">FAQ/공지사항</div>
                        <v-list-item-title class="text-h5 mb-1">
                          자주묻는 질문
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle
                        >
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                      <v-btn outlined rounded text> 바로가기 </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>공지사항</v-list-item-title>
            <v-list-item-subtitle>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card class="mx-auto mt-5" outlined fluid>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">공지사항</div>
                        <v-list-item-title class="text-h5 mb-1">
                          자주묻는 질문
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle
                        >
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                      <v-btn outlined rounded text> 바로가기 </v-btn>
                    </v-card-actions>
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
  import Badges from '@/components/Badges.vue';
  //import Avatar from '@/components/Avatar.vue';
  export default {
    components: {
      Badges,
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
