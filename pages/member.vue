<!-- <script>
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  Cookies.remove('loggedIn');
  router.push('/login');
};
</script> -->
<template>
  <v-app>
    <head>
      <meta name="robots" content="noindex" />
    </head>

    <Header />

    <v-main>
      <div class="member-title">
        <p>ASA Members List</p>
        <small>The member database is regularly updated.</small>
      </div>
      <MemberList />
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
.member-title {
  padding: 20px;
  background: #e9e9e9;
}
</style>
