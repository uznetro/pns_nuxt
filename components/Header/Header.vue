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
    link: '/event',
  },
  {
    title: 'Break Loose',
    subtitle: '獅子奮迅スケジュール',
    icon: 'mdi-image',
    link: '/break',
  },
  {
    title: 'Charge Gift',
    subtitle: 'チャージギフトある時ない時',
    icon: 'mdi-gift-open-outline',
    link: '/gift',
  },
  {
    title: 'Formation Simulator',
    subtitle: '荒野編成システム（プロトタイプ）',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    icon: 'mdi-gamepad-circle-right',
    //link: '/wk',
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
      <nuxt-link to="/" class="main-menu">
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
            <v-list-item-subtitle
              >イベントボーダーをアーカイブ</v-list-item-subtitle
            >
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
            本サイトは公式とは一切関係ございません。公式サイトへのお問い合わせはお控えください。
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined" to="/terms"> 利用規約について </v-btn>
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
