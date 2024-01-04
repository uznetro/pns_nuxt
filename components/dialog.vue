<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref(false)

export interface Props {
  label?: string
  img: string
  id: string
  tableBody?: boolean
  data: string
  note: string
}

withDefaults(defineProps<Props>(), {
  label: 'Sample Component',
  tableBody: false,
  tableCaption: 'header text',
  tableLoop: 1,
})
</script>
<template>
  <v-dialog v-model="dialog" :retain-focus="false" width="auto">
    <template #activator="{ props }">
      <v-btn size="small" color="primary" v-bind="props"> Detail </v-btn>
    </template>

    <v-card :retain-focus="false">
      <v-card-text>
        <p class="label">{{ label }}</p>
        <br />
        <v-img max-width="280" :src="img" class="dialog-img" />
        <div v-if="tableBody">
          <v-table class="gift-table">
            <thead>
              <tr>
                <th width="105px" class="text-left">Charge</th>
                <th class="text-left">Gift</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in data" :key="i">
                <td v-for="(column, j) in row" :key="`${i}-${j}`">
                  {{ column }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <span v-if="note" class="note-text">
          [Note]<br />
          {{ note }}</span
        >
        <span class="attention-text"
          >※チャージ数、ギフト内容は変更となる場合があります</span
        >
      </v-card-text>
      <v-card-actions>
        <v-btn
          width="140"
          color="primary"
          variant="elevated"
          @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
// v-card
.v-dialog > .v-overlay__content > .v-card {
  align-items: center !important;
}
.v-dialog > .v-overlay__content > .v-card > .v-card-text {
  padding: 16px 15px 10px;
}
.v-card button {
  margin: auto;
}
.v-card-text img {
  width: 100%;
}

.note-text {
  font-size: 10px;
  text-align: center;
  margin-top: 15px;
  padding: 5px;
  display: block;
  border: 1px solid #aaa;
}
.attention-text {
  font-size: 10px;
  padding: 5px;
  text-align: center;
  margin-top: 10px;
  display: block;
}

.label {
  color: #ffffff;
  font-weight: bold;
  background: #e91e63;
  padding: 3px;
  border-radius: 4px;
  font-size: 11px;
  display: inline-block;
  margin-bottom: 15px;
}

// table
.gift-table {
  border-bottom: 1px solid #c2c2c2 !important;
  font-size: 11px;
}

thead {
  background: #dadada;
}

.dialog-img {
  border-radius: 5px;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > th,
.v-table--density-default > .v-table__wrapper > table > thead > tr > th,
.v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
  height: 42px;
  font-weight: bold;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > td,
.v-table--density-default > .v-table__wrapper > table > thead > tr > td {
  padding: 8px 16px;
}
</style>
