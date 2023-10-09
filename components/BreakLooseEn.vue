<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'

const headers = [
  {
    title: 'Break Loose',
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
    Event: 'Gear & Module',
  },
  {
    name: '',
    Event: 'Chip & Cube',
  },
  {
    name: '',
    Event: 'Build & Train & Research (SpeedUp)',
  },
  {
    name: '',
    Event: 'Hero',
  },
  {
    name: '',
    Event: 'Nano Weapon',
  },
  {
    name: '17:00〜0:55',
    Event: 'Troop (Point+SpeedUp)',
  },
  {
    name: '',
    Event: 'Research (Point+Speedup)',
  },
  {
    name: '',
    Event: 'Stam & AP',
  },
  {
    name: '',
    Event: 'Nano Weapon',
  },
  {
    name: '',
    Event: 'Bioenhancer',
  },
  {
    name: '1:00〜8:55',
    Event: 'Diamond',
  },
  {
    name: '',
    Event: 'Build (Point+SpeedUp)',
  },
  {
    name: '',
    Event: 'Build & Train & Research (Point)',
  },
  {
    name: '',
    Event: 'Nova & Glory',
  },
  {
    name: '',
    Event: 'Nano Weapon',
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
