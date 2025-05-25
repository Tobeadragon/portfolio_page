<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white text-gray-900">
      <!-- 装飾的な背景パターン -->
      <div class="absolute inset-0">
        <!-- グラデーション部分 -->
        <div class="absolute top-0 right-0 h-full w-[45%]" style="
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
          background: linear-gradient(45deg, 
            #1E3A8A 0%,
            #0F766E 30%,
            #0D9488 60%,
            #2DD4BF 100%
          );
        "></div>
      </div>
      
      <!-- コンテンツ -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <!-- 左側：テキストコンテンツ -->
          <div class="md:w-2/3 text-left">
            <h1 class="text-4xl font-bold text-teal-500 mb-4">{{ t('home.title') }}</h1>
            <p class="text-xl text-gray-600 mb-8">{{ t('home.subtitle') }}</p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                {{ t('home.contactButton') }}
              </NuxtLink>
              <a
                href="/documents/lebenslauf.pdf"
                download
                class="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {{ t('home.downloadCV') }}
              </a>
            </div>
          </div>

          <!-- 右側：プロフィール写真とポップアップ -->
          <div class="md:w-1/3 relative group">
            <div class="relative">
              <div class="w-64 h-64 mx-auto overflow-hidden rounded-full ring-4 ring-white hover:ring-teal-800 transition-all shadow-lg">
                <img
                  src="/images/profile.jpg"
                  :alt="t('home.profile.name')"
                  class="w-full h-full object-cover"
                  @error="$event.target.style.display = 'none'"
                />
                <div v-if="false" class="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg
                    class="w-24 h-24 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <!-- ホバー時のポップアップ -->
              <div class="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-0 md:translate-y-1/2 w-full md:w-5/6 py-4 px-6 bg-white rounded-lg shadow-xl mt-10 md:mt-0 md:opacity-0 md:group-hover:opacity-100 md:transition-all">
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
                    href="https://www.linkedin.com/in/tatsuya-yamashita-69895868/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="text-gray-600 hover:text-blue-600"
                  >
                    <span class="sr-only">{{ t('home.profile.socialLinks.linkedin') }}</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="mailto:mastertyj@hotmail.com" class="text-gray-600 hover:text-blue-600">
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
    <SkillsSection />
    
    <!-- Featured Projects -->
    <!-- 
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