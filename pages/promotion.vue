<script setup>
const messages = [
  {
    title: '募集職種',
    lead: 'hq38（T12）以上！成長を止めず前向きに育成予定の方はhq35〜でも可能です',
    caption: 'ギルド内にcc40多数在籍しています！（現在7名）',
    color: 'pink',
  },
  {
    title: '業務内容',
    lead: '荒野、浄水などでわちゃわちゃ遊びましょう！',
    caption: '荒野参加は任意です！ご予定に合わせて参加いただけます',
    color: 'deep-purple-lighten-1',
  },

  {
    title: 'ギルド概要',
    lead: '荒野プラチナキープ、ギル対常に完走（ノルマなし）、ギフトLv30などなど',
    caption: '無理な戦いは基本しません...諦めも大事',
    color: 'pink',
  },
  {
    title: 'PRポイント',
    lead: 's425のTOPギルド！！とてもアクティブです。戦力上位は海外の方でまぁまぁ多国籍ギルド！',
    caption:
      '戦力順でサブ垢1対は同ギルド所属可。サブ・姉妹ギルドもあるので複数垢でもOK',
    color: 'deep-purple-lighten-1',
  },
  {
    title: 'デメリット的な',
    lead: '国自体が超アクティブで過密なのでLv6〜採集（ガス・鉄）はなかなか大変です',
    caption: 'Lv5採集出来たらいいや〜って感じでやってます',
    color: 'pink',
  },
  {
    title: '応募方法',
    lead: 'melon soda.か、ギルド官職者まで！',
    caption: 'ギルド要塞 S:425 X:235 Y:477',
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
                    s425「AAA」の求人情報
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
