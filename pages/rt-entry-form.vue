<script setup>
import { ref } from 'vue'

const defaultRules = [(v) => !!v || '必須です']
// const nameRules = [
//   (v) => !!v || '必須です',
//   (v) => (v && v.length <= 10) || '名前は10文字以下でなければなりません',
// ]

const numberRules = [
  (v) => !!v || '数値を入力してください',
  (v) => (!isNaN(parseFloat(v)) && isFinite(v)) || '数値を入力してください',
]

const marchRules = [
  (v) => !!v || '数値を入力してください',
  (v) => (!isNaN(parseFloat(v)) && isFinite(v)) || '数値を入力してください',
  (v) => parseInt(v) > 99999 || '数値が10万未満です',
]

const rallyRules = [
  (v) => !!v || '数値を入力してください',
  (v) => (!isNaN(parseFloat(v)) && isFinite(v)) || '数値を入力してください',
  (v) => parseInt(v) > 999999 || '数値が100万未満です',
]

// const form = ref(null)

// const submitForm = () => {
//   // フォームが有効かどうかをチェック
//   if (form.value.validate()) {
//     // フォーム送信のロジックをここに追加
//     console.log('フォームが送信されました')
//   }
//   return {
//     submitForm,
//     form: ref(null), // フォームの参照を設定
//   }
// }

const showButton = ref(false)
const name = ref('')
const number = ref('')

const checkInput = () => {
  // 入力が完了したらボタンを表示する
  if (number.value) {
    showButton.value = true
    console.log('true')
  } else {
    showButton.value = false
    console.log('false')
  }
  return {
    name,
    number,
    showButton,
    form: ref(null), // フォームの参照を設定
  }
}
</script>

<template>
  <div class="container-wrap">
    <Header />
    <section class="home-hero">
      <v-container fluid fill-height class="home-hero__content">
        <v-row>
          <v-col class="home-hero__content-text">
            <p class="hero-title">
              <img
                src="https://res.cloudinary.com/dtvanb4qz/image/upload/v1710071357/rt-form/title_wf8mfd.png"
              />
            </p>
            <p class="hero-sub-title">
              <img
                src="https://res.cloudinary.com/dtvanb4qz/image/upload/v1710071357/rt-form/sub-title_txswxr.png"
              />
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-container class="form-wrap">
      <v-form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKp71s4Naw3vgoAwngh3veQMiNyCCGfdwfA1bGWTampOXpXw/formResponse"
        target="dummy"
      >
        <br />
        <v-text-field
          variant="outlined"
          color="primary"
          label="プレイヤー名"
          type="text"
          placeholder="プレイヤー名を入れてね"
          name="entry.1139618865"
          :rules="defaultRules"
        >
        </v-text-field>
        <br />

        <v-select
          variant="outlined"
          color="primary"
          label="所属ギルド"
          type="text"
          placeholder="ギルド名を入れてね"
          :items="[
            'AAA',
            'BEE',
            'BMX',
            'GBM',
            'KGZ',
            'MMK',
            'MKI',
            'PYN',
            'SKR',
            'sun',
            'TKG',
            'TMN',
            'XXX',
            'YUK',
          ]"
          name="entry.810065195"
          :rules="defaultRules"
        />
        <br />

        <v-select
          variant="outlined"
          color="primary"
          label="CCレベル"
          :items="['40', '39', '38', '37', '36', '35', '34']"
          name="entry.895839231"
          :rules="defaultRules"
        >
        </v-select>
        <br />

        <v-select
          variant="outlined"
          color="primary"
          label="特化兵種"
          :items="['Fighter', 'Rider', 'Shooter']"
          name="entry.454623683"
          :rules="defaultRules"
        >
        </v-select>
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="T11部隊の兵数"
          type="number"
          placeholder="T11の部隊総数を入れてね"
          name="entry.37680000"
          :rules="numberRules"
        />
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="T12部隊の兵数"
          type="number"
          placeholder="T12の部隊総数を入れてね"
          name="entry.683225459"
          :rules="numberRules"
        />
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="T13部隊の兵数"
          type="number"
          placeholder="T13の部隊総数を入れてね"
          name="entry.1574216805"
          :rules="numberRules"
        />
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="部隊規模数"
          type="number"
          placeholder="部隊規模数を入れてね"
          name="entry.1531579332"
          :rules="marchRules"
        />
        <br />

        <v-text-field
          v-model="number"
          color="primary"
          variant="outlined"
          label="ギャザー規模数"
          type="number"
          placeholder="ギャザー規模数を入れてね"
          name="entry.1156223477"
          :rules="rallyRules"
          @input="checkInput"
        />
        <br />

        <div style="text-align: center">
          <v-btn
            v-if="showButton"
            size="x-large"
            color="primary"
            type="submit"
            name="button"
            value="送信"
            >送信！</v-btn
          >
          <!-- <v-btn
            v-if="showButton"
            size="x-large"
            color="primary"
            type="submit"
            name="button"
            value="送信"
            @click="$router.push('rt-entry-completed')"
            >送信！</v-btn> -->
        </div>
      </v-form>
    </v-container>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.container-wrap {
  background: url('https://res.cloudinary.com/dtvanb4qz/image/upload/v1710071356/rt-form/bg_s26aez.png');
  background-color: rgba(255, 255, 255, 0.8);
  background-repeat: repeat;
}
.home-hero {
  margin-top: 64px; // v-main使うとローディング時レイアウトシフト発生するので
}
.home-hero__content {
  background: url('https://res.cloudinary.com/dtvanb4qz/image/upload/v1710072578/rt-form/hero_v8hji1.png');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  position: relative;

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    max-width: 370px;
  }
}
.hero-sub-title {
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  img {
    max-width: 360px;
  }
}

.form-wrap {
  margin-top: 25px;
}
</style>

<style>
.form-wrap {
  .v-field {
    background: rgba(255, 255, 255, 0.25);
  }
}
</style>
