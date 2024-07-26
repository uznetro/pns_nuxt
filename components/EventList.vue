<script setup>
import { ref, computed, reactive } from 'vue'
import draggable from 'vuedraggable'
import Avatar from './Avatar/AvatarIcon.vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

// const {
//   data: posts,
//   error,
//   refresh,
// } = await useFetch('https://jsonplaceholder.typicode.com/posts/');
//console.log(posts.value);

let url =
  'https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A2:E?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI'

const { data: gs } = await useFetch(url)
console.log(gs.value.values[0]) //ヘッダー行だけ取得できた

const dataList1 = ref([])
const dataList2 = ref([])
const dataList3 = ref([])
const dataList4 = ref([])
const dataList5 = ref([])
console.log(dataList5.value)

const headers = [
  {
    title: 'エスコマ',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '90px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
  { title: 'Memo', align: 'start', key: 'Memo' },
]
const headers2 = [
  {
    title: '通常週',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '90px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
  { title: 'Memo', align: 'start', key: 'Memo' },
]

const data = [
  //エースコマンダー
  {
    name: '月曜',
    Event: '英雄獲得 ＆ ナノウェポン',
    Memo: '',
  },
  {
    name: '火曜',
    Event: '建築/研究',
    Memo: '',
  },
  {
    name: '水曜',
    Event: 'スタミナ/AP/採集/模擬訓練',
    Memo: '',
  },
  {
    name: '木曜',
    Event: '訓練ブースト',
    Memo: '',
  },
  {
    name: '金曜',
    Event: '器官強化/ギア',
    Memo: '',
  },
  {
    name: '土曜',
    Event: 'プロモート/強化/改造',
    Memo: '',
  },
  {
    name: '日曜',
    Event: '建築/研究/訓練',
    Memo: '荒野バフ',
  },
]

const data2 = [
  //通常週
  {
    name: '月曜',
    Event: '英雄強化',
    Memo: 'ラッキー７',
  },
  {
    name: '火曜',
    Event: '建築/研究/訓練',
    Memo: 'ラッキー７',
  },
  {
    name: '水曜',
    Event: '装備 ＆ 結晶核/収蔵品',
    Memo: 'ラッキー７',
  },
  {
    name: '木曜',
    Event: 'ミュータント/モジュール',
    Memo: '',
  },
  {
    name: '金曜',
    Event: '栄誉/器官強化',
    Memo: '',
  },
  {
    name: '土曜',
    Event: 'ダイヤの達人',
    Memo: '',
  },
  {
    name: '日曜',
    Event: 'ダイヤの達人 ＆ チップ/キューブ',
    Memo: '',
  },
]

const toggleValue = ref(false)
const onChange = () => {
  console.log('Switch value:', toggleValue.value)
  if (toggleValue.value === true) {
    return data2
  }
}

const onSwitchChange = (item) => {
  // Update the item's isActive property when the switch is toggled.
  item.isActive = !item.isActive
}
</script>

<template>
  <!-- <p>{{ gs.values }}</p> -->
  <v-switch
    v-model="toggleValue"
    prepend-icon="mdi-weather-night"
    append-icon="mdi-weather-partly-cloudy"
    @change="onChange"
  ></v-switch>

  <v-data-table
    v-if="toggleValue == false"
    fixed
    header
    :headers="headers"
    :items="data"
  >
  </v-data-table>
  <v-data-table
    v-if="toggleValue == true"
    fixed
    header
    :headers="headers2"
    :items="data2"
  >
  </v-data-table>
  <!-- <div id="master">
    <v-table fixed-header height="260px">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Player</th>
          <th scope="col">Type</th>
          <th scope="col">Tier</th>
          <th scope="col">Gather</th>
          <th scope="col">Deatil</th>
        </tr>
      </thead>
      <draggable
        v-model="gs.values"
        :group="{ name: 'wk', pull: pullFunction }"
        item-key="name"
        tag="tbody"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[0] }}</td>
            <td><Avatar :short-name="`${element[1]}`" />{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[3] }}</td>
            <td>{{ element[4] }}</td>
            <td>
              <v-btn color="primary" class="detail-btn"
                ><NuxtLink :to="`/user/${element[0]}`"
                  >View Detail</NuxtLink
                ></v-btn
              >
            </td>
          </tr>
        </template>
      </draggable>
    </v-table>
  </div> -->
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

//トグルスイッチ
.v-switch {
  display: flex;
  justify-content: center;
}
</style>
