<script setup></script>

<template>
  <Header />
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <div class="hero-title">
            <h2>Thanks<br />for<br />Submitting <br /></h2>
            <v-btn color="primary">home</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.home-hero__content {
  background: url('../assets/images/leagues/hero.png');
  background-size: cover;
  background-position: center 63px;
  width: 100%;
  height: 100vh;
  position: relative;

  &-text {
    color: white;
    text-align: center;
    font-size: 36px;
    line-height: 1.2;
    font-weight: bold;
    text-shadow: 3px 3px 10px rgb(52, 52, 52);
  }
}
.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    max-width: 360px;
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
  margin-top: 40px;
}
</style>
