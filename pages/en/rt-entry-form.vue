<script setup>
import { ref } from 'vue'

const defaultRules = [(v) => !!v || 'Required.']

const numberRules = [
  (v) => !!v || 'Required',
  (v) =>
    (!isNaN(parseFloat(v)) && isFinite(v)) || 'Please enter a numerical value',
]

const marchRules = [
  (v) => !!v || 'Required',
  (v) =>
    (!isNaN(parseFloat(v)) && isFinite(v)) || 'Please enter a numerical value',
  (v) => parseInt(v) > 99999 || 'The number is less than 100K',
]

const rallyRules = [
  (v) => !!v || 'Required',
  (v) =>
    (!isNaN(parseFloat(v)) && isFinite(v)) || 'Please enter a numerical value',
  (v) => parseInt(v) > 999999 || 'Number is less than 1M',
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
              <img src="../../assets/images/leagues/title-en.png" />
            </p>
            <p class="hero-sub-title">
              <img src="../../assets/images/leagues/sub-title-en.png" />
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
          label="Player Name"
          type="text"
          placeholder="Enter your name"
          name="entry.1139618865"
          :rules="defaultRules"
        >
        </v-text-field>
        <br />

        <v-select
          variant="outlined"
          color="primary"
          label="Alliance"
          type="text"
          placeholder="Enter your alliance"
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
          label="HQ Level"
          :items="['40', '39', '38', '37', '36', '35', '34']"
          name="entry.895839231"
          :rules="defaultRules"
        >
        </v-select>
        <br />

        <v-select
          variant="outlined"
          color="primary"
          label="Troop Type"
          :items="['Fighter', 'Rider', 'Shooter']"
          name="entry.454623683"
          :rules="defaultRules"
        >
        </v-select>
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="Total number of troops in T11"
          type="number"
          placeholder="Enter your troops in T11"
          name="entry.37680000"
          :rules="numberRules"
        />
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="Total number of troops in T12"
          type="number"
          placeholder="Enter your troops in T12"
          name="entry.683225459"
          :rules="numberRules"
        />
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="Total number of troops in T13"
          type="number"
          placeholder="Enter your troops in T13"
          name="entry.1574216805"
          :rules="numberRules"
        />
        <br />

        <v-text-field
          color="primary"
          variant="outlined"
          label="Troops Size"
          type="number"
          placeholder="Enter your troops size"
          name="entry.1531579332"
          :rules="marchRules"
        />
        <br />

        <v-text-field
          v-model="number"
          color="primary"
          variant="outlined"
          label="Rally Size"
          type="number"
          placeholder="Enter your rally size"
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
        </div>
      </v-form>
    </v-container>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.container-wrap {
  background: url('../../assets/images/leagues/bg.png');
  background-color: rgba(255, 255, 255, 0.8);
  background-repeat: repeat;
}
.home-hero {
  margin-top: 64px; // v-main使うとローディング時レイアウトシフト発生するので
}
.home-hero__content {
  background: url('../../assets/images/leagues/hero.png');
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
  margin-top: 20px;
}
</style>

<style>
.form-wrap {
  .v-field {
    background: rgba(255, 255, 255, 0.25);
  }
}
</style>
