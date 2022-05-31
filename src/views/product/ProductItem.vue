<template>
  <v-card class="mx-auto" outlined to="/product/detail/3">
    <v-list-item three-line>
      <v-list-item-avatar tile size="120" color="grey">
        <v-img
          src="https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="text-subtitle-2 mb-1">
          [내셔널지오그래픽] 22년 신상 친환경 효성 REGEN 반팔티 2종 택1
        </div>
        <v-list-item-title class="text-subtitle-1 mb-1">
          <span class="font-weight-medium mr-2">49%</span>
          <del style="color: grey">79,000원</del>
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6" style="color: red"
          >40,500원
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {};
</script>

<style scoped>
  .v-list-item__content {
    padding: 16px 0;
  }
</style>
<!--
<template>
  <v-card
    class="mx-auto"
    :max-width="
      (!!selfMaxWidth && selfMaxWidth) ||
      ($vuetify.breakpoint.mdAndDown && 500) ||
      ($vuetify.breakpoint.mdAndUp && 700)
    "
    v-bind="$attrs"
    to="/product/detail/3"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      align="right"
    >
    </v-img>

    <v-card-subtitle class="pb-0"> 상품이름 </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>30,000</div>

      <div><del>45,000</del></div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      selfMaxWidth: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        overlay: false,
      };
    },
    mounted() {},
  };
</script>

<style></style>
 -->
