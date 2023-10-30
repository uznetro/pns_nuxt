<script setup>
import { ref } from 'vue'
import SubMenu from '../SubMenu.vue'
const drawer = ref(false) // ドロワーの初期状態

const variants = 'tonal'
const color = ref('indigo')

const items = [
  {
    title: 'Event Schedule',
    subtitle: 'Ace Commander & Regular Event',
    icon: 'mdi-calendar-multiselect',
    link: '/en/event',
  },
  {
    title: 'Break Loose',
    subtitle: 'Break Loose Event List',
    icon: 'mdi-image',
    link: '/en/break',
  },
  {
    title: 'Charge Gift',
    subtitle: 'Charge Gift Schedule',
    icon: 'mdi-gift-open-outline',
    link: '/en/gift',
  },
  {
    title: 'Formation Simulator(test)',
    lead: 'Wasteland King Tool',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    icon: 'mdi-gamepad-circle-right',
    link: '/wk',
  },
]

const show = ref(false) // ドロワーの初期状態
</script>
<template>
  <v-app-bar color="primary" app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title>PNS APP</v-toolbar-title>
    <SubMenu />
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer">
    <v-list-item min-height="70px">
      <nuxt-link to="/en" class="main-menu">
        <v-icon>mdi-lead-pencil</v-icon>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Index Page </v-list-item-title>
          <v-list-item-subtitle>
            Event Schedule & Knowledge</v-list-item-subtitle
          >
        </v-list-item-content>
      </nuxt-link>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        min-height="70px"
      >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle> {{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item min-height="70px">
        <a
          href="https://lookerstudio.google.com/reporting/a4c22382-1584-40ce-ba09-424c8b6239bd/page/6zXD"
          target="_blank"
          class="main-menu"
        >
          <v-icon>mdi-google-analytics</v-icon>
          <v-list-item-content>
            <v-list-item-title>Event DataBase</v-list-item-title>
            <v-list-item-subtitle>Event Border Line</v-list-item-subtitle>
          </v-list-item-content>
        </a>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card class="attention-card" :color="color" :variant="variants">
      <v-card-item>
        <div>
          <div class="text-h6 mb-1">Notes.</div>
          <div class="text-caption">
            This site has nothing to do with the official site. Please refrain
            from contacting the official site.
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined" to="/terms"> Terms of Use </v-btn>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
  <!-- <img src="~/assets/images/header.png" /> -->
</template>

<style scoped lang="scss">
//navigation
.main-menu {
  display: flex;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
}
.v-list-item {
  color: rgba(0, 0, 0, 0.7);

  .v-icon {
    color: #e57373;
    margin-right: 1em;
    opacity: 1;
  }
}
.v-list-item-subtitle {
  font-size: 9px;
  margin-top: 5px;
}
.v-list-item-title {
  font-size: 16px;
}

.attention-card {
  margin: 8px;
}
</style>
