<script setup>
import { ref } from 'vue'

const data = [
  //エースコマンダー
  {
    name: '月曜',
    event: 'チャージギフトあり',
    img: 'https://chico-shikaku.com/wp-content/uploads/2019/05/ctito-1024x865.png',
    isActive: true,
  },
  {
    name: '火曜',
    event: 'チャージギフトあり',
    img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    //img: require('@/assets/images/bnr.png'),
  },
  {
    name: '水曜',
    event: 'なし',
    imgNA: 'N/A',
  },
  {
    name: '木曜',
    event: 'チャージギフトあり',
    img: 'N/A',
  },
  {
    name: '金曜',
    event: 'なし',
    imgNA: 'N/A',
  },
  {
    name: '土曜',
    event: 'なし',
    imgNA: 'N/A',
  },
  {
    name: '日曜',
    event: 'なし',
    imgNA: 'N/A',
  },
]

const data2 = [
  //通常週
  {
    name: '月曜',
    event: 'チャージギフトあり',
    img: 'N/A',
    isActive: true,
  },
  {
    name: '火曜',
    event: 'なし',
    imgNA: 'N/A',
  },
  {
    name: '水曜',
    event: 'チャージギフトあり',
    img: 'N/A',
  },
  {
    name: '木曜',
    event: 'チャージギフトあり',
    img: 'N/A',
  },
  {
    name: '金曜',
    event: 'なし',
    imgNA: 'N/A',
  },
  {
    name: '土曜',
    event: 'なし',
    imgNA: 'N/A',
  },
  {
    name: '日曜',
    event: 'なし',
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
  <!-- <p>{{ gs.values }}</p> -->
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
      <tr>
        <td>{{ data.name }}</td>
        <td>aaaaa</td>
        <td>
          <Dialog label="aaaaaa" img="https://placehold.jp/450x600.png" />
        </td>
      </tr>
      <tr>
        <td>bbbb</td>
        <td>bbbb</td>
        <td>
          <Dialog label="bbbbbb" img="https://placehold.jp/300x200.png" />
        </td>
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
              <v-card-text> ここにチャージギフトの画像とか </v-card-text>
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

<style lang="scss" scoped>
//Tables

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
