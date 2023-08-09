<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** shortName：文字列先頭の２文字を設定します */
  shortName: string
  size?: 'small' | 'medium' | 'large'
  imageSrc?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
  imageSrc: undefined,
})

/**
 * 文字列先頭の２文字で正規化する
 */
const normalizedUserName = computed(() => {
  const replaceName = props.shortName.replace(/\s/g, '').slice(0, 2)
  return replaceName
})

/**
 * アバター背景とテキストカラーのスタイル用配列（クラス名）
 */
const avatarBgColor = [
  'colorCode01',
  'colorCode02',
  'colorCode03',
  'colorCode04',
]

const randColor = () => {
  // 配列からランダムに選ぶ
  const index = Math.floor(Math.random() * 4)
  // ランダムにカラークラスをセット
  const currentColor = avatarBgColor[index]
  return currentColor
}

const setColor = randColor()

/**
 * LocalStorageでカラークラスを固定化
 */
// const setLocalStorage = useStorage(
//   'avatar_bgColor',
//   { color: setColor },
//   localStorage
// )
</script>

<template>
  <div :class="['avatar', setColor, size]">
    <img v-if="imageSrc" :src="props.imageSrc" :alt="props.shortName" />
    <span v-else>{{ normalizedUserName }}</span>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: inherit;
  }

  &.small {
    --sizeSmall: 36px;

    width: var(--sizeSmall);
    height: var(--sizeSmall);
    font-size: calc(var(--sizeSmall) / 2.4);
  }

  &.medium {
    --sizeMedium: 48px;

    width: var(--sizeMedium);
    height: var(--sizeMedium);
    font-size: calc(var(--sizeMedium) / 2.4);
  }

  &.large {
    --sizeLarge: 60px;

    width: var(--sizeLarge);
    height: var(--sizeLarge);
    font-size: calc(var(--sizeLarge) / 2.4);
  }

  &.colorCode01 {
    color: #4b4b4b;
    background: #ffc2c7;
  }

  &.colorCode02 {
    color: #4b4b4b;
    background: #b6e5d8;
  }

  &.colorCode03 {
    color: #4b4b4b;
    background: #fbe5c8;
  }

  &.colorCode04 {
    color: #4b4b4b;
    background: #8fdde7;
  }
}
</style>
