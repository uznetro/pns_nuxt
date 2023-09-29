<script setup>
import { ref } from 'vue'

const data = [
  //エスコマ週
  {
    name: 'Mon',
    event: 'Charge Gift Available!',
    img: 'N/A',
    isActive: true,
  },
  {
    name: 'Tue',
    event: 'Charge Gift Available!',
    img: 'N/A',
  },
  {
    name: 'Wed',
    event: 'No!!!',
    imgNA: 'N/A',
  },
  {
    name: 'Thu',
    event: 'Charge Gift Available!',
    img: 'N/A',
  },
  {
    name: 'Fri',
    event: 'No!!!',
    imgNA: 'N/A',
  },
  {
    name: 'Sat',
    event: 'No!!!',
    imgNA: 'N/A',
  },
  {
    name: 'Sun',
    event: 'No!!!',
    imgNA: 'N/A',
  },
]

const data2 = [
  //通常週
  {
    name: 'Mon',
    event: 'Charge Gift Available!',
    img: 'N/A',
    isActive: true,
  },
  {
    name: 'Tue',
    event: 'No!!!',
    imgNA: 'N/A',
  },
  {
    name: 'Wed',
    event: 'Charge Gift Available!',
    img: 'N/A',
  },
  {
    name: 'Thu',
    event: 'Charge Gift Available!',
    img: 'N/A',
  },
  {
    name: 'Fri',
    event: 'No!!!',
    imgNA: 'N/A',
  },
  {
    name: 'Sat',
    event: 'No!!!',
    imgNA: 'N/A',
  },
  {
    name: 'Sun',
    event: 'No!!!',
    imgNA: 'N/A',
  },
]

const toggleValue = ref(false)
const onChange = () => {
  console.log('Switch value:', toggleValue.value)
  if (toggleValue.value === true) {
    return data2
  }
}

const dialog = ref(false)
</script>

<template>
  <v-switch
    v-model="toggleValue"
    prepend-icon="mdi-weather-night"
    append-icon="mdi-weather-partly-cloudy"
    @change="onChange"
  ></v-switch>

  <v-table v-if="toggleValue == false">
    <thead>
      <tr>
        <th width="90px" class="text-left">
          <span class="label">エスコマ</span>
        </th>
        <th class="text-left">Gift</th>
        <th class="text-left">Memo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.event }}</td>
        <td v-if="item.img">
          <v-dialog v-model="dialog" :retain-focus="false" width="auto">
            <template #activator="{ props }">
              <v-btn size="small" color="primary" v-bind="props">
                Detail
              </v-btn>
            </template>

            <v-card :retain-focus="false">
              <v-card-text>
                under development
                <br />Gift image will be set here
                <!-- <v-img
                  src="https://res.cloudinary.com/dtvanb4qz/image/upload/v1695287857/s7uquku0oocar2u5oari.png"
                /> -->
                <!-- <v-img :src="item.img" /> -->
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false"
                  >Close Dialog</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </td>
        <td v-if="item.imgNA">N/A</td>
      </tr>
    </tbody>
  </v-table>

  <v-table v-if="toggleValue == true">
    <thead>
      <tr>
        <th width="90px" class="text-left">
          <span class="label">通常週</span>
        </th>
        <th class="text-left">Gift</th>
        <th class="text-left">Memo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data2" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.event }}</td>
        <td v-if="item.img">
          <v-dialog v-model="dialog" width="auto">
            <template #activator="{ props }">
              <v-btn size="small" outlined color="primary" v-bind="props">
                Detail
              </v-btn>
            </template>

            <v-card>
              <v-card-text>
                under development <br />Gift image will be set here</v-card-text
              >
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false"
                  >Close Dialog</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </td>
        <td v-if="item.imgNA">N/A</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="scss">
//エスコマ・通常週の識別ハイライト
.label {
  color: #ffffff;
  font-weight: bold;
  background: #e91e63;
  padding: 3px;
  border-radius: 4px;
  font-size: 11px;
  display: inline-block;
}

//トグルスイッチ
.v-switch {
  display: flex;
  justify-content: center;
}
</style>
