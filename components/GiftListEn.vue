<script setup>
import { ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

const headers = [
  {
    title: 'AceWeek',
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
    title: 'OffWeek',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '90px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
  { title: 'Memo', align: 'start', key: 'Memo', value: 'switch' },
]

const data = [
  //エスコマ週
  {
    name: 'Mon',
    Event: 'Charge Gift Available!',
    Memo: 'N/A',
    isActive: true,
  },
  {
    name: 'Tue',
    Event: 'Charge Gift Available!',
    Memo: 'N/A',
  },
  {
    name: 'Wed',
    Event: 'No!!!',
    Memo: 'N/A',
  },
  {
    name: 'Thu',
    Event: 'Charge Gift Available!',
    Memo: 'N/A',
  },
  {
    name: 'Fri',
    Event: '？？？',
    Memo: 'N/A',
  },
  {
    name: 'Sat',
    Event: '？？？',
    Memo: 'N/A',
  },
  {
    name: 'Sun',
    Event: '？？？',
    Memo: 'N/A',
  },
]

const data2 = [
  //通常週
  {
    name: 'Mon',
    Event: 'Charge Gift Available!',
    Memo: 'N/A',
    isActive: true,
  },
  {
    name: 'Tue',
    Event: 'No!!!',
    Memo: 'N/A',
  },
  {
    name: 'Wed',
    Event: 'Charge Gift Available!',
    Memo: 'N/A',
  },
  {
    name: 'Thu',
    Event: 'Charge Gift Available!',
    Memo: 'N/A',
  },
  {
    name: 'Fri',
    Event: '？？？',
    Memo: 'N/A',
  },
  {
    name: 'Sat',
    Event: '？？？',
    Memo: 'N/A',
  },
  {
    name: 'Sun',
    Event: '？？？',
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

//トグルスイッチ
.v-switch {
  display: flex;
  justify-content: center;
}
</style>
