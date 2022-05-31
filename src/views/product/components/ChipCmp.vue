<template>
  <div>
    <!-- 가격 -->
    <!-- <v-divider inset></v-divider> -->
    <v-subheader>{{ itemList[0].name }}</v-subheader>
    <v-list-item v-for="item in itemList" :key="item.id">
      <v-list-item-avatar>
        <v-avatar size="32px" tile>
          <img
            :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${item.img}`"
            :alt="item.alt"
          />
        </v-avatar>
      </v-list-item-avatar>
      <v-chip-group mandatory>
        <v-chip
          v-for="listInfo in item.list"
          :key="listInfo.item_cd"
          @click="
            $emit(
              'addChipEmit',
              JSON.stringify({ id: item.id, type: item.type, info: listInfo }),
            )
          "
          :class="{
            'primary--text': listInfo.active,
            ' v-chip--active': listInfo.active,
          }"
        >
          {{ listInfo.name }}
        </v-chip>
      </v-chip-group>
    </v-list-item>
  </div>
</template>

<script>
  export default {
    props: {
      itemList: {
        type: Array,
        deefault: [],
      },
    },
  };
</script>

<style></style>
