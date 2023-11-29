<script setup lang="ts">
import DialogTable from './DialogTable.vue'
import { ref } from 'vue'
const dialog = ref(false)

export interface Props {
  label?: string
  img?: string
  id: string
  tableBody?: boolean
  data: string
}

withDefaults(defineProps<Props>(), {
  label: 'Sample Component',
  img: 'Sample URL',
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
        <v-img max-width="280" :src="img" />
        <div v-if="tableBody">
          <v-table>
            <thead>
              <tr>
                <th width="120px" class="text-left">Charge</th>
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
        <span class="attention-text"
          >※チャージ数、ギフト内容は変更となる場合があります</span
        >
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" variant="elevated" @click="dialog = false"
          >Close Dialog</v-btn
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
.v-card button {
  margin: auto;
}
.v-card-text img {
  width: 100%;
}

.attention-text {
  font-size: 10px;
  text-align: center;
  margin-top: 5px;
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
thead {
  background: #f0f8ff;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > th,
.v-table--density-default > .v-table__wrapper > table > thead > tr > th,
.v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
  height: 42px;
}
</style>
