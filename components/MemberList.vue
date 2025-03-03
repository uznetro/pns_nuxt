<script setup>
import { ref, computed, reactive } from 'vue'
import draggable from 'vuedraggable'
import Avatar from './Avatar/AvatarIcon.vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

// const {
//   data: posts,
//   error,
//   refresh,
// } = await useFetch('https://jsonplaceholder.typicode.com/posts/');
//console.log(posts.value);

// let url =
//   'https://sheets.googleapis.com/v4/spreadsheets/1BNYi1rOkTqAD68XCctYsrWG7gnrX6k9AwAOPNBT5RPg/values/datalist!A2:E?key=AIzaSyC_3hocHw2LKLvOsXPgTH2uIfnjzD2OiqI'

// const { data: gs } = await useFetch(url)
// console.log(gs.value.values[0]) //ヘッダー行だけ取得できた

// const dataList1 = ref([])
// const dataList2 = ref([])
// const dataList3 = ref([])
// const dataList4 = ref([])
// const dataList5 = ref([])
// console.log(dataList5.value)

const headers = [
  {
    title: 'Main',
    align: 'start',
    sortable: false,
    key: 'main',
    width: '120px',
  },
  { title: 'HQ', align: 'start', key: 'hq' },
  { title: 'Type', align: 'start', key: 'type' },
  { title: 'Mini', align: 'start', key: 'mini' },
  { title: 'Nation', align: 'start', key: 'nation' },
]

const data = [
{
    "main": "༺ঔৣ Tam★Leঔৣ࿐",
    "hq": 43,
    "type": "All",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "ᶺᶳᶺ Gizmo",
    "hq": 43,
    "type": "Rider",
    "mini": "babyGizmo",
    "nation": "USA"
  },
  {
    "main": "ᶺᶳᶺ SöDA",
    "hq": 43,
    "type": "Rider",
    "mini": "ᶺᶳᶺ ɱini SöDA",
    "nation": "JPN"
  },
  {
    "main": "Dr Baek Kang-hyuk",
    "hq": 43,
    "type": "S/F",
    "mini": "NA",
    "nation": "USA"
  },
  {
    "main": ".༺༺ༀ༒Tomo༒ༀ༻ ༻.",
    "hq": 43,
    "type": "All",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "ᴺᶠᴳ̷M̷a̷̷v̷",
    "hq": 43,
    "type": "All",
    "mini": "barbiequinn",
    "nation": "USA"
  },
  {
    "main": "殺Fluffy ITALIA戮",
    "hq": 43,
    "type": "Fighter",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "sᴘᴀᴡɴ",
    "hq": 42,
    "type": "Shooter",
    "mini": "Small Spawn",
    "nation": "USA"
  },
  {
    "main": "❁AzelealoveAsher❁",
    "hq": 42,
    "type": "Rider",
    "mini": "❁AzelealoveAsherN❁",
    "nation": "SG"
  },
  {
    "main": "Rachel Cutter",
    "hq": 41,
    "type": "Fighter",
    "mini": "Rachel hacker",
    "nation": "SG"
  },
  {
    "main": "みんなの♡だいふく",
    "hq": 41,
    "type": "Fighter",
    "mini": "大福3150",
    "nation": "JPN"
  },
  {
    "main": ".¥ Gemini ¥.",
    "hq": 41,
    "type": "Shooter",
    "mini": ".¥ MiniG ¥.",
    "nation": "VN/KOR"
  },
  {
    "main": "Mɾ Sϙυιɠɠʅҽ",
    "hq": 41,
    "type": "Rider",
    "mini": "NA",
    "nation": "USA"
  },
  {
    "main": "༺༒lien༒༻",
    "hq": 41,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "ᶺᶳᶺ Scarlet-y",
    "hq": 41,
    "type": "Fighter",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "ᶺᶳᶺULIULI",
    "hq": 41,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "ঔৣ༆Gol☆Kichi༆ঔ",
    "hq": 40,
    "type": "Fighter",
    "mini": "mini gol",
    "nation": "JPN"
  },
  {
    "main": "Brassiere",
    "hq": 40,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "~Mochito~",
    "hq": 40,
    "type": "Rider",
    "mini": "Moch's",
    "nation": "EURO"
  },
  {
    "main": "༺ༀ.KURUMI.ༀ༻",
    "hq": 40,
    "type": "Rider",
    "mini": "kurumiの2号機.༻",
    "nation": "JPN"
  },
  {
    "main": "༺✠T༒T✠༻",
    "hq": 40,
    "type": "Rider",
    "mini": "༺T༒T༻",
    "nation": "VN"
  },
  {
    "main": "ᶺᶳᶺ pico",
    "hq": 40,
    "type": "Shooter",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "˚₊̥Säყä˚₊̥",
    "hq": 40,
    "type": "Rider",
    "mini": "꒰ঌSena໒꒱",
    "nation": "JPN"
  },
  {
    "main": "カビゴン★☆",
    "hq": 40,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "Midnight white",
    "hq": 40,
    "type": "Rider",
    "mini": "Mini white",
    "nation": "Rider"
  },
  {
    "main": "WarCmdr40Fighters",
    "hq": 40,
    "type": "Fighter",
    "mini": "NA",
    "nation": "SG"
  },
  {
    "main": "★國泰建設★",
    "hq": 40,
    "type": "Rider",
    "mini": "NA",
    "nation": "TW"
  },
  {
    "main": "Λяѕєη",
    "hq": 39,
    "type": "Rider",
    "mini": "TBC",
    "nation": "EURO"
  },
  {
    "main": "༄༂ASA_Huy ༂࿐",
    "hq": 39,
    "type": "Rider",
    "mini": "༄༂MiniHuy ༂࿐",
    "nation": "VN"
  },
  {
    "main": ".༺Diễm Mai ༻.",
    "hq": 39,
    "type": "Fighter",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "Trinity(とりにてぃ)",
    "hq": 39,
    "type": "Fighter",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "༺ʍαℓ༻",
    "hq": 39,
    "type": "Rider",
    "mini": "༺ʍąℓ༻",
    "nation": "MY"
  },
  {
    "main": "ᶺᶳᶺ マウmaw",
    "hq": 39,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "•✿•Cẩm Tú•✿•",
    "hq": 39,
    "type": "Shooter",
    "mini": "✿•Cẩm Tú•✿",
    "nation": "VN"
  },
  {
    "main": "⋆☽✶Levina✶☾⋆",
    "hq": 39,
    "type": "Rider",
    "mini": "༒OMG༒",
    "nation": "THAI"
  },
  {
    "main": "Xá xị",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "-Vui Vẻ-",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": ".BERLIAN",
    "hq": 38,
    "type": "Rider",
    "mini": ".RATU BERLIAN",
    "nation": "INDO"
  },
  {
    "main": "edkhtan",
    "hq": 38,
    "type": "Shooter",
    "mini": "NA",
    "nation": "MY"
  },
  {
    "main": "TuấnPhương88",
    "hq": 38,
    "type": "Shooter",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "TínhGià",
    "hq": 38,
    "type": "Fighter",
    "mini": "TínhGià.Mini",
    "nation": "VN"
  },
  {
    "main": "Zombie Slayer ♡",
    "hq": 38,
    "type": "Rider",
    "mini": "༺lil zom༻",
    "nation": "USA"
  },
  {
    "main": "༄ঔ༒sunny༒ঔ࿐",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "ཌༀ۝VICTOR۝ༀད",
    "hq": 38,
    "type": "Fighter",
    "mini": "༺ MILO ༻",
    "nation": "THAI"
  },
  {
    "main": "ᶺᶳᶺ Thanh Nguyễn",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "ᶺᶳᶺ Zen_ou",
    "hq": 38,
    "type": "Fighter",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "⍣⃝ KAIDO⍣⃝",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "INDO"
  },
  {
    "main": "★ᴍʀ ᴅ ᴀ ʀ ᴋ★",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "☆Itto~_~Coffe☆",
    "hq": 38,
    "type": "Rider",
    "mini": "☆Itooコーヒー☆",
    "nation": "VN/KOR"
  },
  {
    "main": "☞╯ƙє√ɨɲ︵☆",
    "hq": 38,
    "type": "Shooter",
    "mini": "~Kevin~",
    "nation": "VN"
  },
  {
    "main": "✯꧁MinioN꧂✯",
    "hq": 38,
    "type": "Rider",
    "mini": "➷Minion 2.0 ᥫ᭡",
    "nation": "TBC"
  },
  {
    "main": "廴ᴋᴇɴᴾᴿᴼシ404",
    "hq": 38,
    "type": "Rider",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "꧁༺ LÊ TÙNG ꧂",
    "hq": 38,
    "type": "Fighter",
    "mini": "Lê Tùng 9",
    "nation": "VN"
  },
  {
    "main": "ᶺᶳᶺÐařŧhŽaža",
    "hq": 37,
    "type": "Rider",
    "mini": "ᶺᶳᶺÐařŧhŽořo",
    "nation": "VN"
  },
  {
    "main": "Acid Black Cherry♡",
    "hq": 36,
    "type": "Rider",
    "mini": "NA",
    "nation": "JPN"
  },
  {
    "main": "꧁༺AFK༻꧂.",
    "hq": 36,
    "type": "Shooter",
    "mini": "꧁༺. BụIcÁm.༻꧂",
    "nation": "VN"
  },
  {
    "main": "βaby SöDA",
    "hq": 31,
    "type": "Rider",
    "mini": "NA",
    "nation": "TW"
  },
  {
    "main": "sain❁ty",
    "hq": 30,
    "type": "Shooter",
    "mini": "NA",
    "nation": "USA"
  },
  {
    "main": "ᶺᶳᶺ NARCISO",
    "hq": 29,
    "type": "Rider",
    "mini": "NA",
    "nation": "EURO"
  },
  {
    "main": "Bυttʅҽʂtιƈƙʂ",
    "hq": 29,
    "type": "Fighter",
    "mini": "NA",
    "nation": "SG"
  },
  {
    "main": "Dαყɱαn",
    "hq": 28,
    "type": "Rider",
    "mini": "NA",
    "nation": "EURO"
  },
  {
    "main": "◣_◢ Panda_ꓘſ",
    "hq": 27,
    "type": "Rider",
    "mini": "NA",
    "nation": "TBC"
  },
  {
    "main": "NgọcDuySàiGòn",
    "hq": 27,
    "type": "Rider",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "༺Ċherry༻",
    "hq": 27,
    "type": "Shooter",
    "mini": "NA",
    "nation": "EURO"
  },
  {
    "main": "вαιт",
    "hq": 26,
    "type": "Rider",
    "mini": "NA",
    "nation": "SG"
  },
  {
    "main": "༺❀Tâm的小弟❀༻",
    "hq": 25,
    "type": "Fighter",
    "mini": "NA",
    "nation": "SG"
  },
  {
    "main": "SP…",
    "hq": 24,
    "type": "Shooter",
    "mini": "NA",
    "nation": "VN"
  },
  {
    "main": "Clear",
    "hq": 24,
    "type": "Rider",
    "mini": "NA",
    "nation": "KOR"
  },
  {
    "main": "༺ʍǟℓ༻",
    "hq": 24,
    "type": "Rider",
    "mini": "NA",
    "nation": "TW"
  },
  {
    "main": "Princess",
    "hq": 19,
    "type": "Fighter",
    "mini": "NA",
    "nation": "USA"
  }
]
</script>

<template>
  <v-data-table
    fixed
    header
    :headers="headers"
    :items="data"
    :items-per-page="25"
  >
  </v-data-table>

</template>

<style lang="scss">
.v-main .v-data-table-footer {
  padding: 25px 8px !important;
  justify-content: center !important;
}
//エスコマ・通常週の識別ハイライト
th:first-child .v-data-table-header__content > span {
  color: #ffffff;
  font-weight: bold;
  background: #e91e63;
  padding: 3px;
  border-radius: 4px;
  font-size: 11px;
}
</style>
