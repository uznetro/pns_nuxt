<script setup>
const cards = [
  {
    title: 'Event Schedule',
    lead: 'Ace Commander & Regular Event',
    src: 'https://res.cloudinary.com/dtvanb4qz/image/upload/f_auto,q_auto/bmoq1itmmgxpw7vnwheo',
    flex: 12,
    link: '/event',
  },
  {
    title: 'Break Loose',
    lead: '獅子奮迅スケジュール',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 6,
    link: '/break',
  },
  {
    title: 'Charge Gift',
    lead: 'チャージギフトスケジュール',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    //src: require('@/assets/images/header.png'),
    flex: 6,
    link: '/gift',
  },
  {
    title: 'Formation Simulator',
    lead: '荒野編成システム',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 6,
    link: '/wk',
  },
  {
    title: 'Event Database',
    lead: 'イベントボーダー',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    //src: require('@/assets/images/header.png'),
    flex: 6,
    link: '',
  },
]
</script>

<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex" x>
          <v-card class="caption">
            <router-link :to="card.link">
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="180px"
                cover
              >
                <v-card-title class="text-white caption">{{
                  card.title
                }}</v-card-title>
              </v-img>
            </router-link>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title-caption>{{ card.lead }}</v-card-title-caption>
              <v-btn
                size="small"
                color="surface-variant"
                variant="text"
                icon="mdi-share-variant"
                :to="card.link"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped lang="scss">
.v-card a {
  text-decoration: none;
}
.v-card-title {
  font-size: 1rem;
}
</style>
