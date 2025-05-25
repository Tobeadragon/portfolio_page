<template>
  <div class="space-y-8">
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ t('nav.about') }}</h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/3">
          <div class="rounded-lg w-full aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="/images/profile.jpg"
              :alt="t('home.profile.name')"
              class="w-full h-full object-cover"
              @error="$event.target.style.display = 'none'"
            />
            <svg
              v-if="false"
              class="w-24 h-24 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
        <div class="md:w-2/3">
          <p class="text-lg text-gray-700 mb-4">{{ t('about.intro.p1') }}</p>
          <p class="text-lg text-gray-700 mb-4">{{ t('about.intro.p2') }}</p>
          <p class="text-lg text-gray-700">{{ t('about.intro.p3') }}</p>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('home.experience') }}</h2>
      <div class="space-y-6">
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="text-xl font-semibold">{{ t('about.experience.senior.company') }}</h3>
          <p class="text-gray-600">{{ t('about.experience.senior.period') }}</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li v-for="(task, index) in t('about.experience.senior.tasks')" :key="index">
              {{ task }}
            </li>
          </ul>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="text-xl font-semibold">{{ t('about.experience.developer.company') }}</h3>
          <p class="text-gray-600">{{ t('about.experience.developer.period') }}</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li v-for="(task, index) in t('about.experience.developer.tasks')" :key="index">
              {{ task }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()

definePageMeta({
  title: 'About'
})
</script> 