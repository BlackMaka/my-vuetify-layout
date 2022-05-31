<template>
  <v-container fluid>
    <!-- sticky 배너영역 -->
    <v-banner app sticky class="grey lighten-5" bottom style="z-index: 1">
      <v-chip-group>
        <v-chip v-for="chip in brandChips" :key="chip.id">
          {{ chip.brand.name }}
          <v-avatar right @click="removeBrand(chip)">
            <v-icon>mdi-close-circle</v-icon>
          </v-avatar>
        </v-chip>
        <v-chip v-for="chip in priceChips" :key="chip.id">
          {{ chip.info.name }}
          <v-avatar right @click="removeChip(chip)">
            <v-icon>mdi-close-circle</v-icon>
          </v-avatar>
        </v-chip>
        <v-chip v-for="chip in productTpChips" :key="chip.id">
          {{ chip.info.name }}
          <v-avatar right @click="removeChip(chip)">
            <v-icon>mdi-close-circle</v-icon>
          </v-avatar>
        </v-chip>
        <v-chip v-for="chip in rankTpChips" :key="chip.id">
          {{ chip.info.name }}
          <v-avatar right @click="removeChip(chip)">
            <v-icon>mdi-close-circle</v-icon>
          </v-avatar>
        </v-chip>
      </v-chip-group></v-banner
    >
    <!-- sticky 배너영역 -->
    <!-- bottom sheet 영역 -->
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
        <v-list height="500" class="overflow-y-auto">
          <!-- <v-subheader>
            
            <v-row>
              <v-col cols="6">
                <v-btn width="100%" color="white" @click="initChips()"
                  >초기화</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn width="100%" color="success" @click="confirmChips()"
                  >확인</v-btn
                >
              </v-col>
            </v-row>
          </v-subheader> -->
          <!-- <v-divider inset></v-divider> -->
          <v-speed-dial
            fixed
            v-model="fab"
            bottom
            right
            direction="top"
            :open-on-hover="hover"
            :transition="transition"
          >
            <template v-slot:activator>
              <v-btn v-model="fab" color="blue darken-2" dark fab>
                <v-icon v-if="fab"> mdi-close </v-icon>
                <v-icon v-else> mdi-account-circle </v-icon>
              </v-btn>
            </template>
            <!-- <v-btn fab dark small color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn> -->
            <v-btn fab dark small color="indigo" @click="confirmChips()">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn fab dark small color="red" @click="initChips()">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-speed-dial>
          <v-subheader>브랜드</v-subheader>
          <v-list-item v-for="category in categories" :key="category.id">
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${category.img}`"
                  :alt="category.alt"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-chip-group mandatory>
              <v-chip
                v-for="brand in category.brands"
                :key="brand.brand_cd"
                @click="addBrand(category, brand)"
                :class="{
                  'primary--text': brand.active,
                  ' v-chip--active': brand.active,
                }"
              >
                {{ brand.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item>
          <!-- 가격 -->
          <!-- <v-divider inset></v-divider>
          <v-subheader>가격</v-subheader>
          <v-list-item v-for="price in pricies" :key="price.id">
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${price.img}`"
                  :alt="price.alt"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-chip-group mandatory>
              <v-chip
                v-for="priceInfo in price.list"
                :key="priceInfo.price_cd"
                @click="addPrice(priceInfo)"
                :class="{
                  'primary--text': priceInfo.active,
                  ' v-chip--active': priceInfo.active,
                }"
              >
                {{ priceInfo.name }}
              </v-chip>
            </v-chip-group>
          </v-list-item> -->
          <ChipCmp :itemList="pricies" @addChipEmit="addChip"></ChipCmp>
          <ChipCmp :itemList="productTypes" @addChipEmit="addChip"></ChipCmp>
          <ChipCmp :itemList="rankTypes" @addChipEmit="addChip"></ChipCmp>
        </v-list>
      </v-bottom-sheet>
    </div>
    <!-- bottom sheet 영역 -->

    <!-- <BackGroundCmp roundCustom class="grey lighten-2 mt-8 mb-3 mx-3">
    </BackGroundCmp> -->
    <ProductItems />
    <!-- <ProductItems /> -->
  </v-container>
</template>

<script>
  import ProductItems from '@/views/product/ProductItems.vue';
  //import BackGroundCmp from '@/components/BackGroundCmp.vue';
  import ChipCmp from '@/views/product/components/ChipCmp.vue';

  export default {
    components: {
      ProductItems,
      ChipCmp,
    },
    data() {
      return {
        fab: false,
        hover: false,
        transition: 'slide-y-reverse-transition',
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
        brandChips: [],
        priceChips: [],
        productTpChips: [],
        rankTpChips: [], //new popular recomand

        categories: [
          {
            id: 1,
            img: 'keep.png',
            alt: 'Keep',
            name: '카페',
            brands: [
              { name: '스타벅스', brand_cd: 'a1', active: false },
              { name: '커핀그루나루', brand_cd: 'a2', active: false },
              { name: '투썸플레이스', brand_cd: 'a3', active: false },
              { name: '스무디킹', brand_cd: 'a4', active: false },
              { name: '쥬씨', brand_cd: 'a5', active: false },
            ],
          },
          {
            id: 2,
            img: 'inbox.png',
            alt: 'Inbox',
            name: '치킨',
            brands: [
              { name: '교촌치킨', brand_cd: 'b1', active: false },
              { name: '호치킨', brand_cd: 'b2', active: false },
            ],
          },
          {
            id: 3,
            img: 'hangouts.png',
            alt: 'Hangouts',
            name: '편의점',
            brands: [
              { name: 'CU', brand_cd: 'c1', active: false },
              { name: 'GS25', brand_cd: 'c2', active: false },
            ],
          },
          {
            id: 4,
            img: 'messenger.png',
            alt: 'Messenger',
            name: '상품권',
            brands: [
              { name: '롯데멤버스', brand_cd: 'd1', active: false },
              { name: '쿠팡이즈', brand_cd: 'd2', active: false },
              { name: 'PCM코리아', brand_cd: 'd3', active: false },
              { name: '컬쳐랜드', brand_cd: 'd4', active: false },
              { name: '요기요', brand_cd: 'd5', active: false },
            ],
          },
          {
            id: 5,
            img: 'google.png',
            alt: 'Google+',
            name: '기타',
            brands: [
              { name: '페이즈', brand_cd: 'e1', active: false },
              { name: '소품상품', brand_cd: 'e2', active: false },
              { name: '글라스박스', brand_cd: 'e3', active: false },
              { name: '인터컨티넨탈', brand_cd: 'e4', active: false },
              { name: '배송상품', brand_cd: 'e5', active: false },
            ],
          },
        ],
        pricies: [
          {
            id: 333,
            type: 'pri',
            img: 'keep.png',
            alt: 'Keep',
            name: '가격',
            list: [
              { name: '3천원 미만', item_cd: 'p1', active: false },
              { name: '3천원 ~ 5천원 미만', item_cd: 'p2', active: false },
              { name: '5천원 ~ 1만원 미만', item_cd: 'p3', active: false },
              { name: '1만원 ~ 3만원 미만', item_cd: 'p4', active: false },
              { name: '3만원 ~ 5만원 미만', item_cd: 'p5', active: false },
              { name: '5만원 ~ 10만원 미만', item_cd: 'p6', active: false },
              { name: '10만원 이상', item_cd: 'p7', active: false },
            ],
          },
        ],
        productTypes: [
          {
            id: 444,
            type: 'ptp',
            img: 'keep.png',
            alt: 'Keep',
            name: '상품유형',
            list: [
              { name: '상품교환권', item_cd: 'pt1', active: false },
              { name: '금액상품권', item_cd: 'pt2', active: false },
              { name: '지류상품권', item_cd: 'pt3', active: false },
              { name: '배송상품권', item_cd: 'pt4', active: false },
            ],
          },
        ],
        rankTypes: [
          {
            id: 555,
            type: 'rnk',
            img: 'keep.png',
            alt: 'Keep',
            name: '랭킹순',
            list: [
              { name: '신규상품', item_cd: 'new', active: false },
              { name: '인기상품(판매수량별)', item_cd: 'pop', active: false },
              { name: '추천상품(어드민정의)', item_cd: 'adm', active: false },
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
      //배너용 브랜드 칩 등록, 카테고리 acitve 활성
      addBrand(categoryItem, brandItem) {
        if (this.brandChips.length > 0) {
          this.brandChips = []; //배너칩스 초기화
          this.brandChips = this.brandChips.filter((chip) => {
            return chip.id !== categoryItem.id;
          });
        }
        this.brandChips.push({
          brand: brandItem,
          id: categoryItem.id,
        });

        this.setCategories({
          type: 'add',
          categoryId: categoryItem.id,
          brandItem,
          isActive: true,
        });
      },
      //배너용 브랜드칩 삭제, 카테고리 acitve 해제
      removeBrand(item) {
        const categoryId = item.id;
        this.brandChips = this.brandChips.filter((chip) => {
          return chip.id !== categoryId;
        });
        this.setCategories({
          type: 'remove',
          categoryId,
          brandItem: item.brand,
          isActive: false,
        });
      },
      //카테고리 데이터 셋팅 add, remove
      setCategories(item) {
        const { type, categoryId, brandItem, isActive } = item;
        console.log(type);
        console.log(categoryId);
        this.categories = this.categories.map((category) => {
          category.brands.map((brand) => {
            //add일때만 추가되는 로직 (같은 카테고리의 다른 브랜드 선택시 올 false)
            // if (type === 'add' && categoryId === category.id) {
            //   brand.active = false;
            // }
            if (type === 'add') {
              brand.active = false;
            }
            //선택 칩 add일시 true로 변경, remove일시 false로 변경
            if (brand.brand_cd === brandItem.brand_cd) {
              brand.active = isActive;
            }
            return brand;
          });
          return category;
        });
      },
      // 바텀시트 초기화버튼 배너칩 및 카테고리 초기셋팅
      initChips() {
        this.brandChips = [];
        this.priceChips = [];
        this.productTpChips = [];
        this.rankTpChips = [];
        this.categories.forEach((category) => {
          category.brands.forEach((brand) => {
            brand.active = false;
          });
        });

        //코드 줄이기 (나중에)
        this.pricies.forEach((item) => {
          item.list.forEach((e) => {
            e.active = false;
          });
        });
        this.productTypes.forEach((item) => {
          item.list.forEach((e) => {
            e.active = false;
          });
        });
        this.rankTypes.forEach((item) => {
          item.list.forEach((e) => {
            e.active = false;
          });
        });
        this.closeBottomSheet();
      },
      // 바텀시트 확인버튼 배너칩 및 카테고리 확정셋팅
      confirmChips() {
        this.closeBottomSheet();
      },
      closeBottomSheet() {
        this.sheet = false;
      },
      addChip(item) {
        const obj = JSON.parse(item);
        //객체에  데이터로 typeName : 'pricies', typeChipName : 'priceChips'로 넣어두고
        //this.cmmAddChip(obj['typeName'], obj['typeChipName'], obj);
        //한줄로 줄이는거 가능함. (나중에)
        switch (obj.type) {
          case 'pri':
            this.cmmAddChip('priceChips', 'pricies', obj);
            break;
          case 'ptp':
            //productTpChips: [],
            this.cmmAddChip('productTpChips', 'productTypes', obj);
            break;
          case 'rnk':
            //rankTpChips: [], //new popular recomand
            this.cmmAddChip('rankTpChips', 'rankTypes', obj);
            break;
        }
      },
      cmmAddChip(listName, dataName, obj) {
        //listName : this.priceChips ...
        if (this[listName].length > 0) {
          this[listName] = []; //배너칩스 초기화
          this[listName] = this[listName].filter((chip) => {
            return chip.id !== obj.id;
          });
        }
        this[listName].push({
          info: obj.info,
          id: obj.id,
          type: obj.type,
        });
        //dataName : this.pricies
        this[dataName] = this[dataName].map((price) => {
          price.list.map((info) => {
            info.active = false;
            if (info.item_cd === obj.info.item_cd) {
              info.active = true;
            }
            return info;
          });

          return price;
        });
      },
      removeChip(item) {
        switch (item.type) {
          case 'pri':
            this.priceChips = [];
            this.pricies.forEach((item) => {
              item.list.forEach((item2) => {
                item2.active = false;
              });
            });
            break;
          case 'ptp':
            //productTpChips: [],
            this.productTpChips = [];
            this.productTypes.forEach((item) => {
              item.list.forEach((item2) => {
                item2.active = false;
              });
            });
            break;
          case 'rnk':
            //rankTpChips: [], //new popular recomand
            this.rankTpChips = [];
            this.rankTypes.forEach((item) => {
              item.list.forEach((item2) => {
                item2.active = false;
              });
            });
            break;
        }
      },
      close(item) {
        // this.chips.splice(this.chips.indexOf(item.id), 1);
        // this.chips = [...this.chips];
        this.chips = this.chips.filter((chip) => {
          return chip.id != item.id;
        });
      },
    },
    mounted() {
      console.log(this.$route.params.search); //이거로 여기서 api호출 날려서 조회한다음
      //프롭스로 아이템리스트 뿌려주기
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
