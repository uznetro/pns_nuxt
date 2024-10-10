<script setup>
import { ref } from 'vue'
const toggleValue = ref(false)

// トグル内のデータ
const aceWeekManDayData = [
  {
    Charge1: '200 Diamond',
    Gift1: '1500 Diamond, 15 Lesser RSS BOX',
  },
  {
    Charge2: '39,600 Diamond',
    Gift2: '20 TimedRecruitCoin, 50 MightChoiceBox、50 PromoteBoxⅡ, etc',
  },
  {
    Charge3: '66,000 Diamond',
    Gift2: '20 TimedRecruitCoin, 100 MightChoiceBox、100 PromoteBoxⅡ, etc',
  },
  {
    Charge4: '99,000 Diamond',
    Gift2: '30 TimedRecruitCoin、100 MightChoiceBox、100 PromoteBoxⅡ, etc',
  },
]
const offWeekSatDayData = [
  {
    Charge1: '200 Diamond',
    Gift1: '1500 Diamond、15 LesserRssBox',
  },
  {
    Charge2: '61,600 Diamond',
    Gift1: '3 PowerChoiceChest、70 PromoteBox、70 PromoteBoxⅡ, etc',
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
          <span class="label">AceWeek</span>
        </th>
        <th class="text-left">Gift</th>
        <th class="text-left">Memo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mon</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog label="[AceWeek] Mon" table-body :data="aceWeekManDayData" />
        </td>
      </tr>
      <tr>
        <td>Tue</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog
            label="[AceWeek] Tue"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1703578656/ace-tue-gift-eng.png"
          />
        </td>
      </tr>
      <tr>
        <td>Wed</td>
        <td>No</td>
        <td></td>
      </tr>
      <tr>
        <td>Thu</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog
            label="[AceWeek] Thu"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1697700053/ace-thu-gift-eng.png"
          />
        </td>
      </tr>
      <tr>
        <td>Fri</td>
        <td>No</td>
        <td>DoomFest</td>
      </tr>
      <tr>
        <td>Sat</td>
        <td>No</td>
        <td>DoomFest</td>
      </tr>
      <tr>
        <td>Sun</td>
        <td>No</td>
        <td>DoomFest</td>
      </tr>
    </tbody>
  </v-table>

  <v-table v-if="toggleValue == true">
    <thead>
      <tr>
        <th width="90px" class="text-left">
          <span class="label">OffWeek</span>
        </th>
        <th class="text-left">Gift</th>
        <th class="text-left">Memo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mon</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog
            label="[OffWeek] Mon"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1701672218/off-mon-gift-eng.png"
          />
        </td>
      </tr>
      <tr>
        <td>Tue</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog
            label="[OffWeek] Mon"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1701853308/off-tue-gift-eng.png"
          />
        </td>
      </tr>
      <tr>
        <td>Wed</td>
        <td>No</td>
        <td></td>
      </tr>
      <tr>
        <td>Thu</td>
        <td>No</td>
        <td></td>
      </tr>
      <tr>
        <td>Fri</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog
            label="[OffWeek] Mon"
            img="https://res.cloudinary.com/dtvanb4qz/image/upload/v1702267948/off-fri-gift.png"
          />
        </td>
      </tr>
      <tr>
        <td>Sat</td>
        <td>Charge Gift Available!</td>
        <td>
          <Dialog label="[OffWeek] Mon" table-body :data="offWeekSatDayData" />
        </td>
      </tr>
      <tr>
        <td>Sun</td>
        <td>No</td>
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
