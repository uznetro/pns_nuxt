<script setup>
import { ref } from 'vue'
const toggleValue = ref(false)

// トグル内のデータ
// エスコマ週
const aceWeekManDayData = [
  // エスコマ週月曜日
  {
    Charge1: '200ダイヤ',
    Gift1: 'ダイヤ1500個、小型資源補給15個',
  },
  {
    Charge2: '39,600ダイヤ',
    Gift2: '限定コイン20枚、能力選択型補給50個、プロモエリート50個 etc',
  },
  {
    Charge3: '66,000ダイヤ',
    Gift2: '限定コイン20枚、能力選択型補給100個、プロモエリート100個 etc',
  },
  {
    Charge4: '99,000ダイヤ',
    Gift2: '限定コイン30枚、能力選択型補給100個、プロモエリート100個 etc',
  },
]
// 通常週
const offWeekThuDayData = [
  // 通常週木曜日（隔週で有無っぽい）
  {
    Charge1: '200ダイヤ',
    Gift1: 'ダイヤ1500個、小型資源補給15個',
  },
  {
    Charge1: '440ダイヤ',
    Gift1: '能力選択箱2個、ダイヤ1000個、小型資源補給30個',
  },
  {
    Charge2: '39,600ダイヤ',
    Gift2: '能力選択箱Ⅱ2個、能力選択型補給50個、プロモエリート50個 etc',
  },
]
const offWeekSatDayData = [
  // 通常週土曜日
  {
    Charge1: '200ダイヤ',
    Gift1: 'ダイヤ1500個、小型資源補給15個',
  },
  {
    Charge2: '61,600ダイヤ',
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
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1701672211/off-mon-gift.png"
          />
        </td>
      </tr>
      <tr>
        <td>火曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            label="【通常週】火曜日"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1701853308/off-tue-gift.png"
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
        <td>あり</td>
        <td>
          <Dialog
            label="【通常週】木曜日"
            note="2024/2/29 ギフト有
            2024/3/14 ギフト有
            2024/3/28 ギフト有"
            table-body
            :data="offWeekThuDayData"
          />
        </td>
      </tr>
      <tr>
        <td>金曜日</td>
        <td>チャージギフトあり</td>
        <td>
          <Dialog
            label="【通常週】金曜日"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1702267948/off-fri-gift.png"
          />
        </td>
      </tr>
      <tr>
        <td>土曜日</td>
        <td>なし（不定期？）</td>
        <td>
          <Dialog
            label="【通常週】土曜日"
            note="2024/1/20  チャジリベ開催
            2024/2/17  チャジリベ開催"
            table-body
            :data="offWeekSatDayData"
          />
        </td>
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
