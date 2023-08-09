<script setup lang="ts">
const icons = ['mdi-twitter']
</script>
<template>
  <v-footer color="primary" padless>
    <v-card class="white--text text-center">
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} <strong>melon soda. s425</strong>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>

    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4"
      dark
      icon
      href="https://twitter.com/uz_wildbluebell"
    >
      <v-icon size="24px">
        {{ icon }}
      </v-icon>
    </v-btn>
  </v-footer>
</template>
