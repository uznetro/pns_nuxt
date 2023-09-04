<script setup>
import { ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

const headers = [
  {
    title: 'エスコマ',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '90px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
  { title: 'Memo', align: 'start', key: 'Memo', value: 'switch' },
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
  { title: 'Memo', align: 'start', key: 'Memo', value: 'switch' },
]

const data = [
  //エースコマンダー
  {
    name: '月曜',
    Event: 'チャージギフトあり',
    Memo: 'N/A',
    isActive: true,
  },
  {
    name: '火曜',
    Event: 'チャージギフトあり',
    Memo: 'N/A',
  },
  {
    name: '水曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
  {
    name: '木曜',
    Event: 'チャージギフトあり',
    Memo: 'N/A',
  },
  {
    name: '金曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
  {
    name: '土曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
  {
    name: '日曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
]

const data2 = [
  //通常週
  {
    name: '月曜',
    Event: 'チャージギフトあり',
    Memo: 'N/A',
    isActive: true,
  },
  {
    name: '火曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
  {
    name: '水曜',
    Event: 'チャージギフトあり',
    Memo: 'N/A',
  },
  {
    name: '木曜',
    Event: 'チャージギフトあり',
    Memo: 'N/A',
  },
  {
    name: '金曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
  {
    name: '土曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
  {
    name: '日曜',
    Event: 'チャージギフトなし',
    Memo: 'N/A',
  },
]

const toggleValue = ref(false)
const onChange = () => {
  console.log('Switch value:', toggleValue.value)
  if (toggleValue.value === true) {
    return data2
  }
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
</template>

<style lang="scss">
//Tables
.v-main .v-data-table-footer {
  padding: 25px 8px !important;
  justify-content: center !important;
}

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
