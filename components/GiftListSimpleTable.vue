<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const variants = 'tonal'
const color = ref('indigo')

const route = useRoute()
const router = useRouter()
const toggleValue = ref(route.query.param === '1')

const onChange = () => {
  const paramValue = toggleValue.value ? '1' : '0'
  router.push({ query: { param: paramValue } })
}

// ダイアログ内のデータ
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
    Charge3: '52,800ダイヤ',
    Gift2: '限定コイン20枚、能力選択型補給75個、プロモエピック25個 etc',
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
// const offWeekSatDayData = [
//   // 通常週土曜日
//   {
//     Charge1: '200ダイヤ',
//     Gift1: 'ダイヤ1500個、小型資源補給15個',
//   },
//   {
//     Charge2: '61,600ダイヤ',
//     Gift1: '能力選択箱Ⅱ3個、選択型プロモ70個、プロモエリート70個 etc',
//   },
// ]
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
        <td>チャージギフトあり</td>
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
        <td>なし</td>
        <td>
          <!-- <Dialog
            label="【通常週】土曜日"
            note="2024/1/20  チャジリベ開催
            2024/2/17  チャジリベ開催
            2024/4/13  チャジリベ開催"
          /> -->
        </td>
      </tr>
      <tr>
        <td>日曜日</td>
        <td>なし</td>
        <td></td>
      </tr>
    </tbody>
  </v-table>

  <v-card
    v-if="toggleValue == true"
    class="attention-card"
    :color="color"
    :variant="variants"
  >
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">Notes.</div>
        <div class="text-caption">
          通常週の週末にチャージリベートなどのイベントが開催される傾向がありますが、イベントの実施を保証するものではございません
        </div>
      </div>
    </v-card-item>
    <v-card-item>
      <Dialog
        variant="outlined"
        button-label="チャージリベート"
        label="チャージリベート報酬"
        img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1744120909/charge-rebate_min_it2zcd.png"
      />
    </v-card-item>
  </v-card>
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

//カード
.attention-card {
  margin: 20px 8px 8px;
  padding-bottom: 10px;
}

.v-card-item {
  padding: 0.625rem 1rem 0;
}
</style>
