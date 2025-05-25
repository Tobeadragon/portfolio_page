<template>
  <div class="space-y-8">
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ t('nav.about') }}</h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Profile"
            class="rounded-lg w-full"
          />
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