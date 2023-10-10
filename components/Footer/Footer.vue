<script setup lang="ts">
const icons = ['mdi-twitter']
</script>
<template>
  <v-footer color="primary" padless>
    <nuxt-link to="/terms">
      <v-card class="white--text text-center">
        <v-card-text class="white--text">
          <strong>&copy; {{ new Date().getFullYear() }} melon soda.</strong>
        </v-card-text>
      </v-card>
    </nuxt-link>
    <v-spacer></v-spacer>

    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4"
      dark
      icon
      href="https://twitter.com/melonsoda_pns"
    >
      <v-icon size="24px">
        {{ icon }}
      </v-icon>
    </v-btn>
  </v-footer>
  <!-- <p id="copy">© 2023 melon soda.</p> -->
</template>

<style scoped>
footer a {
  text-decoration: none;
}
#copy {
  padding: 3px;
  text-align: center;
  font-size: 11px;
  background: linear-gradient(to right, #792cbe, #6200ee);
  color: #fff;
}
</style>
