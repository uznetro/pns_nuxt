<script setup>
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import Avatar from './Avatar/AvatarIcon.vue'

// import { useClipboard } from '@vueuse/core';
// const textToCopy = ref('');
// const { copy, copied, text, isSupported } = useClipboard({
//   copiedDuring: 3000,
// });

const copyToClipboard = (containerid) => {
  /**
   * @link https://stackoverflow.com/questions/61895994/copy-table-to-clipboard-in-vue-js
   **/
  var range = document.createRange()
  let containerNode = document.getElementById(containerid) //// this part
  range.selectNode(containerNode) //// this part
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()
  alert('data copied')
}

// const {
//   data: posts,
//   error,
//   refresh,
// } = await useFetch('https://jsonplaceholder.typicode.com/posts/');
// //console.log(posts.value);

let url =
  'https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A2:E?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI'

const { data: gs } = await useFetch(url)
console.log(gs.value.values[0]) //ヘッダー行だけ取得できた

const dataList1 = ref([])
const dataList2 = ref([])
const dataList3 = ref([])
const dataList4 = ref([])
const dataList5 = ref([])

// const myFunction = (event) => {
//   console.log(event);
//   console.log(event.target.dataset.sample);
// }refs
</script>

<template>
  <p>{{ total }}</p>

  <div id="master">
    <v-table fixed-header height="260px">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Player</th>
          <th scope="col">Type</th>
          <th scope="col">Tier</th>
          <th scope="col">Gather</th>
          <th scope="col">Deatil</th>
        </tr>
      </thead>
      <draggable
        v-model="gs.values"
        :group="{ name: 'wk', pull: pullFunction }"
        item-key="name"
        tag="tbody"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[0] }}</td>
            <td><Avatar :short-name="`${element[1]}`" />{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[3] }}</td>
            <td>{{ element[4] }}</td>
            <td>
              <v-btn color="primary" class="detail-btn"
                ><NuxtLink :to="`/user/${element[0]}`"
                  >View Detail</NuxtLink
                ></v-btn
              >
            </td>
          </tr>
        </template>
      </draggable>
    </v-table>
  </div>

  <div id="wrapper">
    <v-table>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Rally</th>
        </tr>
      </thead>
      <draggable
        v-model="dataList1"
        :group="{ name: 'wk' }"
        item-key="name"
        tag="tbody"
        id="copyToClipboard01"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[4] }}</td>
          </tr>
        </template>
      </draggable>
      <v-btn class="clip-btn" v-on:click="copyToClipboard('copyToClipboard01')"
        >Click To Copy</v-btn
      >
    </v-table>

    <v-table>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Rally</th>
        </tr>
      </thead>
      <draggable
        v-model="dataList2"
        :group="{ name: 'wk' }"
        item-key="name"
        tag="tbody"
        id="copyToClipboard02"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[4] }}</td>
          </tr>
        </template>
      </draggable>
      <v-btn class="clip-btn" v-on:click="copyToClipboard('copyToClipboard02')"
        >Click To Copy</v-btn
      >
    </v-table>

    <v-table>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Rally</th>
        </tr>
      </thead>
      <draggable
        v-model="dataList3"
        :group="{ name: 'wk' }"
        item-key="name"
        tag="tbody"
        id="copyToClipboard03"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[4] }}</td>
          </tr>
        </template>
      </draggable>
      <v-btn class="clip-btn" v-on:click="copyToClipboard('copyToClipboard03')"
        >Click To Copy</v-btn
      >
    </v-table>

    <v-table>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Rally</th>
        </tr>
      </thead>
      <draggable
        v-model="dataList4"
        :group="{ name: 'wk' }"
        item-key="name"
        tag="tbody"
        id="copyToClipboard04"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[4] }}</td>
          </tr>
        </template>
      </draggable>
      <v-btn class="clip-btn" v-on:click="copyToClipboard('copyToClipboard04')"
        >Click To Copy</v-btn
      >
    </v-table>

    <v-table>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Rally</th>
        </tr>
      </thead>
      <draggable
        v-model="dataList5"
        :group="{ name: 'wk' }"
        item-key="name"
        tag="tbody"
        id="copyToClipboard05"
      >
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element[1] }}</td>
            <td>{{ element[2] }}</td>
            <td>{{ element[4] }}</td>
          </tr>
        </template>
      </draggable>
      <v-btn class="clip-btn" v-on:click="copyToClipboard('copyToClipboard05')"
        >Click To Copy</v-btn
      >
    </v-table>
  </div>
</template>

<style scoped lang="scss">
/**datalistのコンテンツスタイル */
#master {
  min-height: 100px;
  margin-bottom: 50px;
  border-bottom: 3px solid #c4c4c4;
}
#wrapper {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
#wrapper > div {
  min-height: 500px;
  width: 100%;
  max-width: calc(100vw / 5);
}
#wrapper > div:nth-child(odd) {
  background: #e8e8e8;
}

.data-list {
  display: block;
  margin-right: 15px;
}
.detail-btn a {
  color: #f3f3f3 !important;
  text-decoration: none;
}
.clip-btn {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}

.data-list:nth-child(2):after {
  color: #d730ee;
  content: '●';
  margin-left: 15px;
}

.avatar {
  margin-right: 20px;
}

/**table style */
.v-table {
  position: relative;
}
.v-table.v-table--fixed-header > .v-table__wrapper > table > thead > tr > th {
  background: #f9fafb;
}

#master .v-table table thead th:last-child,
#master .v-table table tbody td:last-child {
  text-align: center;
}

.user-link {
  margin-left: 15px;
}
.box {
  width: 50%;
  border: 1px solid #333;
}
.post2 {
  background: #aaa;
}

.dragArea {
  width: 100%;
  height: 100%;
}
</style>
