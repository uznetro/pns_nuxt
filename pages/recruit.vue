<script setup>
const messages = [
  {
    title: '募集条件',
    lead: 'hq40（T13）以上！荒野やギルドイベントにアクティブな方',
    caption: 'hq40以上が多数在籍！（2025極地首領）',
    color: 'pink',
  },
  {
    title: '概要',
    lead: 'アジア/欧米 多国籍ギルドです',
    caption: 'イベント時間は2330~(JST)',
    color: 'deep-purple-lighten-1',
  },
  {
    title: 'PRポイント',
    lead: '浄水70アカウント参加のアクティブギルドです',
    caption:
      '荒野はマスター・ダイヤモンドをキープ。荒野T11~参加でNAP（実質ALL NAP）',
    color: 'pink',
  },
  {
    title: '補足情報',
    lead: 'スタミナパーティーは最大60名程参加！',
    caption:
      'ギフトのLVアップのため、移民譲渡用のギルドでスタミナパーティーを実施しています。',
    color: 'deep-purple-lighten-1',
  },
  {
    title: '応募方法',
    lead: 'SoDAまで！',
    caption: 'ギルド要塞 S:723 X:212 Y:494',
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
