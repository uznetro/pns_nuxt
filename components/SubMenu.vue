<script setup>
const items = [
  {
    title: 'English',
    link: '/en/',
  },
  {
    title: '日本語',
    link: '/',
  },
]
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn class="lang-btn" v-bind="props">Language</v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.link"
        :value="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
.lang-btn {
  border: 1px solid rgb(255 255 255 / 75%);
}
</style>
