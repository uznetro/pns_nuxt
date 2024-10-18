<script setup>
const messages = [
  {
    title: '募集職種',
    lead: 'hq38（T12）以上！浄水などのイベントにアクティブな方歓迎',
    caption: 'ギルド内にcc40多数在籍しています！（ASAのR5は歴戦17億）',
    color: 'pink',
  },
  {
    title: '業務内容',
    lead: '浄水リーグや極地などSvSイベント楽しみたいメンバーが集まっています',
    caption: 'SvS系イベントが好きな方はすごくマッチするかも！？',
    color: 'deep-purple-lighten-1',
  },

  {
    title: 'ギルド概要',
    lead: 'アジア多国籍ギルドです',
    caption:
      'ギルドを立ち上げたばかりです。色々大変ですが一緒にギルドを作りましょう',
    color: 'pink',
  },
  {
    title: 'PRポイント',
    lead: 's723の戦力TOPギルド！個人的に新興国はイベントやコロシアムなどすごく緩い印象です',
    caption:
      'ギルマスはとても温和で優しいです！強国から経験者が多数集まっていますが国の運営に寄り添いながら成長しようと考えています',
    color: 'deep-purple-lighten-1',
  },
  {
    title: '補足情報',
    lead: '国がアクティブで過密なのでLv6〜採集（ガス・鉄）は大変',
    caption: 'まだまだ若い国です。これからの成長に期待',
    color: 'pink',
  },
  {
    title: '応募方法',
    lead: 'melon sodaまで！',
    caption: 'ギルド要塞 S:723 X:212 Y:494',
    color: 'deep-purple-lighten-1',
  },
]
</script>

<template>
  <v-app>
    <Header />

    <v-main>
      <v-container>
        <v-row justify="space-around">
          <v-card width="400">
            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">
                <h2 class="heading">
                  <v-chip size="x-large" color="red" style="font-weight: bold">
                    s723「ASA」の求人情報
                  </v-chip>
                </h2>
              </div>

              <v-timeline density="compact" align="start">
                <v-timeline-item
                  v-for="message in messages"
                  :key="message.caption"
                  :dot-color="message.color"
                  size="x-small"
                >
                  <div class="mb-4 message-body">
                    <div class="font-weight-normal">
                      <strong>{{ message.title }}</strong>
                    </div>
                    <div class="lead">{{ message.lead }}</div>
                    <div class="caption">{{ message.caption }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped>
.heading {
  color: #444645;
}
.v-timeline-item__body {
  font-size: 13px;
}

.lead {
  margin: 7px 0;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 7px;
}
.message-body {
  font-size: 14px;
}
</style>
