<script setup></script>

<template>
  <v-app>
    <Header />

    <v-main>
      <v-container class="mx-auto contents-wrap" fluid style="max-width: 530px">
        <v-row dense>
          <v-col cols="12">
            <div class="pr-contents" height="100%">
              <h3 class="title">サイト利用規約</h3>
              <p class="heading">本アプリの目的</p>
              <p class="lead">
                パズル＆サバイバル（PNS）のプレイヤーの攻略と利便性のために個人開発したモバイル向けアプリケーションです。
              </p>
              <p class="heading">推奨利用環境</p>
              <p class="lead">
                【OS】iOS 16.7以上 / Android OS 11.0以上推奨<br />
                【ブラウザ】Google Chrome / Safari （最新版）
              </p>
              <p class="lead annotation">
                ※その他の環境でも一部ご利用いただけますが、Androidはエミュレーターでの確認となっています<br />
                ※モバイル向けアプリとなりますが、リキッドデザインなのでデスクトップ・タブレットでの閲覧も可能です
              </p>

              <p class="heading">お問合せについて</p>
              <p class="lead">
                本アプリのアイデア、フィードバック、バグなどのイシューに関しては、私個人の<a
                  href="https://twitter.com/melonsoda_pns"
                  target="_blank"
                  >Twitter（X）</a
                >へDMをお願いします。
                ただし、営利を目的としない個人開発となりますので、対応可否についてはこちらで判断いたします。
              </p>

              <p class="heading">本アプリの著作権について</p>
              <p class="lead">
                自由に本アプリケーションを共有いただいても問題ありませんが、
                当サイトで提供しているデザイン、アプリケーション等に関する著作権は私個人に帰属します。
                また、一部フリー素材からイラスト・写真を利用している素材は提供者に帰属します。
                ユーザーは、情報等やそれらに包含される内容を複製・公開・送信・頒布・譲渡・貸与・使用許諾・再利用はできません。
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped>
.contents-wrap {
  margin-top: 10px;
}

.pr-contents {
  position: relative;
  padding: 20px 10px 5px;
  border: 2px solid #e9edf2;
}
.title {
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0 auto;
  padding: 0 14px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #4a4a4a;
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.025em;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
}

.heading {
  border-left: 2px solid #74b9c3;
  border-bottom: 0px solid #dbeae5;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 200;
  line-height: 1.5;
  padding: 0 0 0px 8px;
  margin-bottom: 5px;
  font-weight: bold;
}

.lead {
  margin-bottom: 10px;
  font-size: 12px;
  color: #4a4a4a;
  font-weight: bold;
}
.annotation {
  font-size: 11px;
}
</style>
