<script setup>
const openDialog = (item) => {
  item.dialogVisible = true
}

const closeDialog = (item) => {
  item.dialogVisible = false
}
</script>
<template>
  <v-data-table :items="items" :headers="headers">
    <template v-slot:item.actions="{ item }">
      <v-btn @click="openDialog(item)">Open Dialog</v-btn>
      <v-dialog v-model="item.dialogVisible" max-width="500px">
        <v-card>
          <v-card-title>Dialog Title</v-card-title>
          <v-card-text>
            This is the content of the dialog for {{ item.name }}.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="closeDialog(item)">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-data-table>
</template>

<style scoped></style>
