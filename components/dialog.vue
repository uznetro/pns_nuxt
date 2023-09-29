<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref(false)

export interface Props {
  label?: string
  img?: string
  id: number
}

withDefaults(defineProps<Props>(), {
  label: 'Sample Component',
  img: 'Sample URL',
})
</script>
<template>
  <v-dialog v-model="dialog" :retain-focus="false" width="auto">
    <template #activator="{ props }">
      <v-btn size="small" color="primary" v-bind="props"> Detail </v-btn>
    </template>

    <v-card :retain-focus="false">
      <v-card-text>
        {{ label }}<br />
        <v-img :src="img" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
