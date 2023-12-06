<script setup>
import { ref } from 'vue'

const data = [
  //エースコマンダー
  {
    name: '月曜',
    event: 'チャージギフトあり',
    isActive: true,
  },
  {
    name: '火曜',
    event: 'チャージギフトあり',
    //img: require('@/assets/images/bnr.png'),
  },
  {
    name: '水曜',
    event: 'なし',
  },
  {
    name: '木曜',
    event: 'チャージギフトあり',
  },
  {
    name: '金曜',
    event: 'なし',
  },
  {
    name: '土曜',
    event: 'なし',
  },
  {
    name: '日曜',
    event: 'なし',
  },
]

const data2 = [
  //通常週
  {
    name: '月曜',
    event: 'チャージギフトあり',
    isActive: true,
  },
  {
    name: '火曜',
    event: 'なし',
  },
  {
    name: '水曜',
    event: 'チャージギフトあり',
  },
  {
    name: '木曜',
    event: 'チャージギフトあり',
  },
  {
    name: '金曜',
    event: 'なし',
  },
  {
    name: '土曜',
    event: 'なし',
  },
  {
    name: '日曜',
    event: 'なし',
  },
]

const toggleValue = ref(false)
const onChange = () => {
  console.log('Switch value:', toggleValue.value)
  if (toggleValue.value === true) {
    return data2
  }
}

const aceWeekManDayData = [
  {
    Charge1: '200ダイヤ',
    Gift1: 'ダイヤ1500個、小型資源補給15個',
  },
  {
    Charge2: '39,600ダイヤ',
    Gift2: '限定コイン20枚、能力選択型補給50個、プロモエリート50個 etc',
  },
]
const offWeekThursDayData = [
  {
    Charge1: '200ダイヤ',
    Gift1: 'ダイヤ1500個、小型資源補給15個',
  },
  {
    Charge1: '61,600ダイヤ',
    Gift1: '能力選択箱Ⅱ3個、選択型プロモ70個、プロモエリート70個 etc',
  },
]
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
        <td>月曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            label="【エスコマ】月曜日"
            table-body
            :data="aceWeekManDayData"
          />
        </td>
      </tr>
      <tr>
        <td>火曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            width="100%"
            label="【エスコマ】火曜日"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1701245479/ace-tue-gift.png"
          />
        </td>
      </tr>
      <tr>
        <td>水曜日</td>
        <td>なし</td>
        <td></td>
      </tr>
      <tr>
        <td>木曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            width="100%"
            label="【エスコマ】木曜日"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1697700052/ace-thu-gift.png"
          />
        </td>
      </tr>
      <tr>
        <td>金曜日</td>
        <td>なし</td>
        <td>末日フェス</td>
      </tr>
      <tr>
        <td>土曜日</td>
        <td>なし</td>
        <td>末日フェス</td>
      </tr>
      <tr>
        <td>日曜日</td>
        <td>なし</td>
        <td>末日フェス</td>
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
      <tr>
        <td>月曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            label="【通常週】月曜日"
            width="100%"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1701672211/off-mon-gift.png"
          />
        </td>
      </tr>
      <tr>
        <td>火曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            label="【通常週】水曜日"
            img="https://placehold.jp/300x200.png"
          />
        </td>
      </tr>
      <tr>
        <td>水曜日</td>
        <td>なし</td>
        <td></td>
      </tr>
      <tr>
        <td>木曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            label="【通常週】木曜日"
            table-body
            :data="offWeekThursDayData"
          />
        </td>
      </tr>
      <tr>
        <td>金曜日</td>
        <td>なし</td>
        <td></td>
      </tr>
      <tr>
        <td>土曜日</td>
        <td>なし</td>
        <td></td>
      </tr>
      <tr>
        <td>日曜日</td>
        <td>なし</td>
        <td></td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="scss" scoped>
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
