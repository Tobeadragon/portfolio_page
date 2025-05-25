<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- 左側：ナビゲーションメニュー -->
        <nav class="flex space-x-8">
          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            :class="{ 'text-blue-600': route.path === link.to }"
          >
            {{ t(link.text) }}
          </NuxtLink>
        </nav>

        <!-- 右側：言語切り替え -->
        <div class="flex space-x-2">
          <button
            v-for="lang in ['de', 'en', 'ja']"
            :key="lang"
            @click="setLanguage(lang)"
            class="px-2 py-1 rounded text-sm"
            :class="{
              'bg-blue-600 text-white': language === lang,
              'text-gray-600 hover:bg-gray-100': language !== lang
            }"
          >
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const { t, language, setLanguage } = useLanguage()

const links = [
  { to: '/', text: 'nav.home' },
  { to: '/about', text: 'nav.about' },
  { to: '/contact', text: 'nav.contact' }
]
</script>

<style scoped>
.group:hover .group-hover\:visible {
  visibility: visible;
}
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style> 