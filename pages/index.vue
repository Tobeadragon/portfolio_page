<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-20 bg-white rounded-lg shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <!-- 左側：テキストコンテンツ -->
          <div class="md:w-2/3 text-left">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('home.title') }}</h1>
            <p class="text-xl text-gray-600 mb-8">{{ t('home.subtitle') }}</p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {{ t('home.contactButton') }}
              </NuxtLink>
              <NuxtLink
                to="/projects"
                class="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {{ t('home.viewProjectsButton') }}
              </NuxtLink>
            </div>
          </div>

          <!-- 右側：プロフィール写真とポップアップ -->
          <div class="md:w-1/3 relative group">
            <div class="relative">
              <div class="w-64 h-64 mx-auto overflow-hidden rounded-full ring-4 ring-white hover:ring-blue-600 transition-all shadow-lg bg-gray-100">
                <img
                  :src="'/images/profile.jpg'"
                  :alt="t('home.profile.name')"
                  class="w-full h-full object-cover"
                  @error="$event.target.style.display = 'none'"
                />
              </div>
              <!-- ホバー時のポップアップ -->
              <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-5/6 py-4 px-6 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all">
                <p class="font-semibold text-lg text-gray-900">{{ t('home.profile.name') }}</p>
                <p class="text-gray-600">{{ t('home.profile.title') }}</p>
                <div class="flex justify-center space-x-4 mt-3">
                  <a 
                    href="https://github.com/Tobeadragon" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="text-gray-600 hover:text-blue-600"
                  >
                    <span class="sr-only">{{ t('home.profile.socialLinks.github') }}</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="text-gray-600 hover:text-blue-600"
                  >
                    <span class="sr-only">{{ t('home.profile.socialLinks.linkedin') }}</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="mailto:your.email@example.com" class="text-gray-600 hover:text-blue-600">
                    <span class="sr-only">{{ t('home.profile.socialLinks.email') }}</span>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('home.skills') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div class="p-4 border rounded-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('home.frontend') }}</h3>
          <ul class="space-y-2">
            <li>Vue.js / Nuxt.js</li>
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div class="p-4 border rounded-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('home.backend') }}</h3>
          <ul class="space-y-2">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div class="p-4 border rounded-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('home.qa') }}</h3>
          <ul class="space-y-2">
            <li>Jest</li>
            <li>Cypress</li>
            <li>TestCafe</li>
            <li>Unit / E2E Testing</li>
          </ul>
        </div>
        <div class="p-4 border rounded-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('home.pcSupport') }}</h3>
          <ul class="space-y-2">
            <li>MS Office 365</li>
            <li>Word / Excel</li>
            <li>PowerPoint</li>
            <li>Windows / macOS</li>
          </ul>
        </div>
        <div class="p-4 border rounded-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('home.other') }}</h3>
          <ul class="space-y-2">
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <!-- 一時的に非表示
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('home.featuredProjects') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/600x400" :alt="t('projects.ecommerce.title')" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ t('projects.ecommerce.title') }}</h3>
            <p class="text-gray-600">{{ t('projects.ecommerce.description') }}</p>
          </div>
        </div>
        <div class="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/600x400" :alt="t('projects.taskManager.title')" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ t('projects.taskManager.title') }}</h3>
            <p class="text-gray-600">{{ t('projects.taskManager.description') }}</p>
          </div>
        </div>
      </div>
    </section>
    -->
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()

definePageMeta({
  title: 'Home'
})
</script> 