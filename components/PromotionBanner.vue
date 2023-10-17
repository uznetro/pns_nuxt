<script setup></script>
<template>
  <!-- <v-container class="mx-auto" fluid style="max-width: 530px">
    <v-row dense>
      <v-col cols="12">
        <v-card height="100%">
          <v-card-title>[PR] s425移民募集！（ページ作成中）</v-card-title>
          <img class="bnr-img" src="~/assets/images/bnr.png" />
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->

  <v-container class="mx-auto" fluid style="max-width: 530px">
    <v-row dense>
      <v-col cols="12">
        <div class="pr-contents" height="100%">
          <h3 class="title">promotion</h3>
          <p class="lead">
            S425
            [AAA]移民者募集中！浄水リーグ２連続プレーオフ進出、荒野プラチナキープなアクティブギルドです！
          </p>
          <nuxt-link to="/promotion">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              class="bnr-img"
              src="https://res.cloudinary.com/dtvanb4qz/image/upload/v1695287857/s7uquku0oocar2u5oari.png"
          /></nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.bnr-img {
  width: 100%;
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
  color: #e58a1d;
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.025em;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
}
.lead {
  margin-bottom: 7px;
  font-size: 12px;
  color: #4a4a4a;
  font-weight: bold;
}
</style>
