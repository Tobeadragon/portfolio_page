<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <ul class="flex space-x-6">
            <li><NuxtLink :to="'/'" class="text-gray-800 hover:text-blue-600">{{ t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink :to="'/projects'" class="text-gray-800 hover:text-blue-600">{{ t('nav.projects') }}</NuxtLink></li>
            <li><NuxtLink :to="'/about'" class="text-gray-800 hover:text-blue-600">{{ t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="'/contact'" class="text-gray-800 hover:text-blue-600">{{ t('nav.contact') }}</NuxtLink></li>
          </ul>
          <div class="flex space-x-2">
            <button
              v-for="lang in ['de', 'en', 'ja']"
              :key="lang"
              @click="setLanguage(lang)"
              class="px-3 py-1 rounded-md"
              :class="language === lang ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            >
              {{ lang.toUpperCase() }}
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-6 text-center">
        <p>&copy; 2024 Web Developer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { language, setLanguage, t } = useLanguage()
</script>
