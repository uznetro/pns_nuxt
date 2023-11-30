<script setup>
const cards = [
  {
    title: 'Event Schedule',
    lead: 'エースコマンダー & レギュラーイベント',
    src: 'https://res.cloudinary.com/dtvanb4qz/image/upload/f_auto,q_auto/bmoq1itmmgxpw7vnwheo',
    flex: 12,
    link: '/event',
  },
  {
    title: 'Break Loose',
    lead: '獅子奮迅スケジュール',
    src: 'https://res.cloudinary.com/dtvanb4qz/image/upload/v1701331609/main-thumb-breakloose.png',
    flex: 6,
    link: '/break',
  },
  {
    title: 'Charge Gift',
    lead: 'チャージギフトスケジュール',
    src: 'https://res.cloudinary.com/dtvanb4qz/image/upload/v1701330874/main-thumb-gift.png',
    //src: require('@/assets/images/header.png'),
    flex: 6,
    link: '/gift',
  },
  {
    title: 'Formation Simulator(test)',
    lead: '荒野編成システム',
    src: 'https://res.cloudinary.com/dtvanb4qz/image/upload/v1701333573/main-thumb-wk.png',
    flex: 6,
    link: '/',
  },
  {
    title: 'Event Database',
    lead: 'イベントボーダー',
    src: 'https://res.cloudinary.com/dtvanb4qz/image/upload/v1701333904/main-thumb-border.png',
    //src: require('@/assets/images/header.png'),
    flex: 6,
    link: 'event_db',
  },
]

const getCreateUrl = (url) => {
  if (url === 'event_db') {
    location.href =
      'https://lookerstudio.google.com/u/0/reporting/a4c22382-1584-40ce-ba09-424c8b6239bd/page/6zXD'
  } else {
    location.href = `${url}`
  }
}
</script>

<template>
  <v-card class="mx-auto card-wrap" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex" x>
          <v-card class="caption">
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
              cover
              @click="getCreateUrl(card.link)"
            >
              <v-card-title class="text-white caption">{{
                card.title
              }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title-caption>{{ card.lead }}</v-card-title-caption>
              <v-btn
                size="small"
                color="surface-variant"
                variant="text"
                icon="mdi-share-variant"
                :to="card.link"
                @click="getCreateUrl(card.link)"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped lang="scss">
.card-wrap {
  box-shadow: none;
}
.v-card a {
  text-decoration: none;
}
.v-card-title {
  font-size: 1rem;
}
.v-img__gradient:hover {
  cursor: pointer;
}
</style>
