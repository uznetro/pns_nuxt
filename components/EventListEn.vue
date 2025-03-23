<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { VDataTable } from 'vuetify/labs/VDataTable'

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
    Event: 'Build/Research',
    Memo: '',
  },
  {
    name: 'Wed',
    Event: 'Stam/AP/Gather',
    Memo: '',
  },
  {
    name: 'Thu',
    Event: 'Troop SpeedUp',
    Memo: '',
  },
  {
    name: 'Fri',
    Event: 'Bioenhancer/Refiner',
    Memo: '',
  },
  {
    name: 'Sat',
    Event: 'Promote/Enhance/ Remodeling',
    Memo: '',
  },
  {
    name: 'Sun',
    Event: 'Build/Train/Research',
    Memo: '',
  },
]

const data2 = [
  //通常週
  {
    name: 'Mon',
    Event: 'Hero',
    Memo: 'Joy Capsule',
  },
  {
    name: 'Tue',
    Event: 'Build/Train/Research SpeedUp',
    Memo: 'Joy Capsule',
  },
  {
    name: 'Wed',
    Event: 'Gear & Core/Curio',
    Memo: 'Joy Capsule',
  },
  {
    name: 'Thu',
    Event: 'Nova/Module',
    Memo: '',
  },
  {
    name: 'Fri',
    Event: 'Glory/Bio',
    Memo: '',
  },
  {
    name: 'Sat',
    Event: 'Diamond',
    Memo: '',
  },
  {
    name: 'Sun',
    Event: 'Diamond & Chip/Cube',
    Memo: '',
  },
]

const route = useRoute()
const router = useRouter()
const toggleValue = ref(route.query.param === '1')

const onChange = () => {
  const paramValue = toggleValue.value ? '1' : '0'
  router.push({ query: { param: paramValue } })
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
