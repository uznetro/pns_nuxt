<script setup>
// eslint-disable-next-line no-undef
const router = useRoute()
const id = router.params.id
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${id}`
)
// console.log(router.params.id);
// console.log('** title **' + post.value.title)
// console.log('** body **' + post.value.body)
// console.log(id)

// interface gss {
//   id : number,
//   name: string,
//   rally: number,
// }
// const {
//   data: gs,
// } = await useFetch<gss[]>(url);

// let url = 'https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A2:C?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI'
let ssDataId = `https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A${id}:C${id}?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI`

const { data: gs } = await useFetch(ssDataId)
console.log(gs.value.values) //ヘッダー行だけ取得できた

// interface Props {
//   id?:  number;
//   userName?: string;
//   troop?: number;
//   larry?: number;
// }

// const props = withDefaults(defineProps<Props>(), {
//   id: undefined,
//   userName: undefined,
//   troop: undefined,
//   larry: undefined,
// });
</script>

<template>
  <p>ID: {{ id }}</p>
  <p>ID_SS: {{ gs.values[0] }}</p>
  <p>ID_SS: {{ gs.values[0][0] }}</p>
  <p>Title: {{ post.title }}</p>
  <NuxtLink :to="id">＋</NuxtLink>
  <NuxtLink to="/"><v-btn color="primary">HOME</v-btn></NuxtLink>
</template>
