<script setup>
const messages = [
  {
    title: '募集内容',
    lead: '100人受入可能な箱解放！！',
    caption: '今だけ、移民ギルドを【1箱のみ】受け入れ可能！',
    color: 'pink',
  },
  {
    title: '概要',
    lead: 'アクティブな環境で戦いたい！メンバー全員で移民OK',
    caption: 'サブギルドが欲しい場合は箱をお作りして待ってます',
    color: 'deep-purple-lighten-1',
  },
  {
    title: 'PRポイント',
    lead: '荒野:マスターorダイヤキープ',
    caption: 'hq40以上が多数在籍！（2025極地首領）',
    color: 'pink',
  },
  {
    title: '補足情報',
    lead: 'スタミナパーティーは最大60名程参加！',
    caption:
      'ギフトLVアップのため、移民譲渡用のギルドでスタミナパーティーを実施しています。',
    color: 'deep-purple-lighten-1',
  },
  {
    title: '応募方法',
    lead: 'Maw or SoDAまで！',
    caption: 'ASAギルド要塞 S:723 X:209 Y:493',
    color: 'pink',
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
                  <v-chip
                    size="x-large"
                    color="red"
                    class="mr-2 font-weight-bold"
                  >
                    723「ギルド移民」募集
                  </v-chip>
                  <v-chip
                    size="small"
                    color="blue"
                    variant="outlined"
                    style="font-weight: bold"
                    ><a href="/recruit" style="color: #2196f3">
                      723「ASA」求人情報</a
                    >
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
