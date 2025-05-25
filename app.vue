<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// グローバルな言語状態を初期化
const { language } = useLanguage()

// ブラウザの言語設定に基づいて初期言語を設定
onMounted(() => {
  const browserLang = navigator.language.split('-')[0]
  if (['de', 'en', 'ja'].includes(browserLang)) {
    language.value = browserLang
  }
})
</script>
