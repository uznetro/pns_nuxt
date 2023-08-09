<!-- https://reffect.co.jp/vue/nuxt3#i-6 -->
<script setup>
const {
  data: posts,
  error,
  refresh,
} = await useFetch('https://jsonplaceholder.typicode.com/posts/')
</script>
<template>
  <div>
    <h1>Posts</h1>
    <v-btn color="primary">my-btn</v-btn>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/user/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
