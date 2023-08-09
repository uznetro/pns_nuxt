<script setup>
import { computed, useRoute } from 'vue'
const router = useRoute()

/**
 * useRouteで取得したURLパラメータに＋１して取得情報の差分を調整
 */
const incrementedParam = computed(() => {
  const param = router.params.id
  const incrementedValue = parseInt(param) + 1
  return incrementedValue
})
console.log(incrementedParam.value)
const id = incrementedParam.value

// console.log(router.params.id);
// console.log('** title **' + post.value.title)
// console.log('** body **' + post.value.body)

console.log(router.params)

let ssDataId = `https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A${id}:E${id}?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI`

const { data: gs } = await useFetch(ssDataId)
console.log(gs.value.values) //ヘッダー行だけ取得できた
</script>

<template>
  <div id="user-detail">
    <p>ID： {{ router.params.id }}</p>
    <p>Player： {{ gs.values[0][1] }}</p>
    <p>Type： {{ gs.values[0][2] }}</p>
    <p>Tier： {{ gs.values[0][3] }}</p>
    <p>Gather： {{ gs.values[0][4] }}</p>
    <NuxtLink to="/"><v-btn color="primary">Return HOME</v-btn></NuxtLink>
  </div>
</template>

<style scoped>
div#user-detail p {
  padding: 15px;
  border-bottom: 2px solid #ccc;
}
button {
  margin: 20px;
}
</style>
