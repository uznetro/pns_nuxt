<script setup>
import { ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

const headers = [
  {
    title: '獅子奮迅',
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
    name: '9:00~16:55',
    Event: '装備 ＆ モジュール',
    Memo: 'N/A',
    isActive: true,
  },
  {
    name: '',
    Event: 'チップ＆キューブ',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '建築 ＆ 研究 ＆ 訓練（ブースト）',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '英雄の破片',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: 'ナノウェポン',
    Memo: 'N/A',
  },
  {
    name: '17:00~0:55',
    Event: ' 訓練（ポイント ＆ ブースト）',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '研究（ポイント ＆ ブースト）',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: 'スタミナ ＆ AP',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '研究（ポイント ＆ ブースト）',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: 'ナノウェポン',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '器官',
    Memo: 'N/A',
  },
  {
    name: '1:00~8:55',
    Event: 'ダイヤ消費',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '建築（ポイント ＆ ブースト）',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: '建築 ＆ 研究 ＆ 訓練（ポイント）',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: 'ミュータント＆ グローリー',
    Memo: 'N/A',
  },
  {
    name: '',
    Event: 'ナノウェポン',
    Memo: 'N/A',
  },
]
</script>

<template>
  <!-- <p>{{ gs.values }}</p> -->

  <v-data-table
    fixed
    header
    :headers="headers"
    :items="data"
    :items-per-page="20"
  >
  </v-data-table>
</template>

<style lang="scss">
.v-main .v-data-table-footer {
  padding: 25px 8px !important;
  justify-content: center !important;
}

//トグルスイッチ
.v-switch {
  display: flex;
  justify-content: center;
}
</style>
