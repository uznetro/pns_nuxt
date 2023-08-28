<script setup>
import { ref } from 'vue'
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

const headers = [
  {
    title: 'AceWeek',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '100px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
  { title: 'Memo', align: 'start', key: 'Memo' },
]
const headers2 = [
  {
    title: 'OffWeek',
    align: 'start',
    sortable: false,
    key: 'name',
    width: '100px',
  },
  { title: 'Event', align: 'start', key: 'Event' },
  { title: 'Memo', align: 'start', key: 'Memo' },
]

const data = [
  //エースコマンダー
  {
    name: 'Mon',
    Event: 'Hero & Nano Weapon',
    Memo: '',
  },
  {
    name: 'Tue',
    Event: 'Build & Research',
    Memo: '',
  },
  {
    name: 'Wed',
    Event: 'Stam & AP & Gather',
    Memo: '',
  },
  {
    name: 'Thu',
    Event: 'Troop SpeedUp',
    Memo: '',
  },
  {
    name: 'Fri',
    Event: 'Bioenhancer & Refiner',
    Memo: '',
  },
  {
    name: 'Sat',
    Event: 'Promote & Enhance & Remodeling',
    Memo: '',
  },
  {
    name: 'Sun',
    Event: 'Build & Train & Research',
    Memo: '',
  },
]

const data2 = [
  //通常週
  {
    name: 'Mon',
    Event: 'Hero',
    Memo: 'Joy777',
  },
  {
    name: 'Tue',
    Event: 'Build & Train & Research',
    Memo: 'Joy777',
  },
  {
    name: 'Wed',
    Event: 'Gear Upgrade',
    Memo: 'Joy777',
  },
  {
    name: 'Thu',
    Event: 'Nova & Module',
    Memo: '',
  },
  {
    name: 'Fri',
    Event: 'Glory & Bio',
    Memo: '',
  },
  {
    name: 'Sat',
    Event: 'Diamond',
    Memo: '',
  },
  {
    name: 'Sun',
    Event: 'Diamond & Chip & Cube',
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

//トグルスイッチ
.v-switch {
  display: flex;
  justify-content: center;
}
</style>
