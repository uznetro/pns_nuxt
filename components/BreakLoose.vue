<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'

const headers = [
  {
    title: '獅子奮迅',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '120px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
]

const data = [
  {
    name: '9:00〜16:55',
    Event: '装備 ＆ モジュール',
  },
  {
    name: '',
    Event: 'チップ ＆ キューブ',
  },
  {
    name: '',
    Event: '建築 ＆ 研究 ＆ 訓練（ブースト）',
  },
  {
    name: '',
    Event: '英雄の破片',
  },
  {
    name: '',
    Event: 'ナノウェポン',
  },
  {
    name: '17:00〜0:55',
    Event: ' 訓練（ポイント ＆ ブースト）',
  },
  {
    name: '',
    Event: '研究（ポイント ＆ ブースト）',
  },
  {
    name: '',
    Event: 'スタミナ ＆ AP',
  },
  {
    name: '',
    Event: 'ナノウェポン',
  },
  {
    name: '',
    Event: '器官 ＆ 結晶核',
  },
  {
    name: '1:00〜8:55',
    Event: 'ダイヤ消費',
  },
  {
    name: '',
    Event: '建築（ポイント ＆ ブースト）',
  },
  {
    name: '',
    Event: '建築 ＆ 研究 ＆ 訓練（ポイント）',
  },
  {
    name: '',
    Event: 'ミュータント ＆ グローリー',
  },
  {
    name: '',
    Event: 'ナノウェポン',
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
