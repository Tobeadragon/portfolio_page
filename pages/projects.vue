<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">{{ t('nav.projects') }}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Project 1 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="E-commerce Platform" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ t('projects.ecommerce.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('projects.ecommerce.description') }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">{{ t('home.viewProject') }} →</a>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Task Management App" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ t('projects.taskManager.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('projects.taskManager.description') }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Firebase</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">{{ t('home.viewProject') }} →</a>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Weather App" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ t('projects.weather.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('projects.weather.description') }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Nuxt.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TailwindCSS</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">API</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">{{ t('home.viewProject') }} →</a>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Blog Platform" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ t('projects.blog.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('projects.blog.description') }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Prisma</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">{{ t('home.viewProject') }} →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()

definePageMeta({
  title: 'Projects'
})
</script> 