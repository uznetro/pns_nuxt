<script setup>
import { ref, computed, reactive } from 'vue'
import draggable from 'vuedraggable'
import Avatar from './Avatar/AvatarIcon.vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { headers } from './MemberData.js';
import { data } from './MemberData.js';


// const {
//   data: posts,
//   error,
//   refresh,
// } = await useFetch('https://jsonplaceholder.typicode.com/posts/');
//console.log(posts.value);

// let url =
//   'https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A2:E?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI'

// const { data: gs } = await useFetch(url)
// console.log(gs.value.values[0]) //ヘッダー行だけ取得できた

// const dataList1 = ref([])
// const dataList2 = ref([])
// const dataList3 = ref([])
// const dataList4 = ref([])
// const dataList5 = ref([])
// console.log(dataList5.value)

</script>

<template>
  <v-data-table
    fixed
    header
    :headers="headers"
    :items="data"
    :items-per-page="25"
  >
  </v-data-table>

</template>

<style lang="scss">
.v-main .v-data-table-footer {
  padding: 25px 8px !important;
  justify-content: center !important;
}
//エスコマ・通常週の識別ハイライト
th:first-child .v-data-table-header__content > span {
  color: #ffffff;
  font-weight: bold;
  background: #e91e63;
  padding: 3px;
  border-radius: 4px;
  font-size: 11px;
}
</style>
