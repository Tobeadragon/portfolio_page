<template>
  <header class="fixed w-full top-0 z-50">
    <div class="bg-green-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- ハンバーガーメニューボタン（モバイルのみ） -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 text-white"
          >
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- ナビゲーションメニュー -->
          <div 
            :class="{
              'hidden md:block': !isMenuOpen,
              'absolute top-16 left-0 right-0 bg-gray-800 shadow-lg md:shadow-none md:relative md:top-0 md:block': isMenuOpen
            }"
            class="w-full md:w-auto"
          >
            <nav class="md:flex md:space-x-8 px-6 md:px-0 py-2 md:py-0">
              <NuxtLink
                v-for="(link, index) in links"
                :key="index"
                :to="link.to"
                class="block md:inline-block text-gray-300 hover:text-white py-2 text-sm font-medium pl-4 md:pl-0"
                :class="{ 'text-white': route.path === link.to }"
                @click="isMenuOpen = false"
              >
                {{ t(link.text) }}
              </NuxtLink>
            </nav>
          </div>

          <!-- 右側：言語切り替え -->
          <div class="flex space-x-2">
            <button
              v-for="lang in ['de', 'en', 'ja']"
              :key="lang"
              @click="setLanguage(lang)"
              class="px-2 py-1 rounded text-sm"
              :class="{
                'bg-blue-600 text-white': language === lang,
                'text-gray-300 hover:text-white hover:bg-gray-700': language !== lang
              }"
            >
              {{ lang.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const { t, language, setLanguage } = useLanguage()
const isMenuOpen = ref(false)

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