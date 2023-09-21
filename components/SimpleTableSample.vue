<script setup>
const promotions = [
  {
    label: '111',
    content: 'aaaaaa',
  },
  {
    label: '2222',
    content: 'bbbb',
  },
  {
    label: '3333',
    content: 'cccc',
  },
  {
    label: '4444',
    content: 'dddddd',
  },
  {
    label: '55555',
    content: 'eeeee',
  },
  {
    label: '6666',
    content: 'ffffffffff',
  },
]
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Label</th>
        <th class="text-left">Content</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in promotions" :key="item.name">
        <td>{{ item.label }}</td>
        <td>{{ item.content }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="scss"></style>
