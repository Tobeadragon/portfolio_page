<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-20 bg-white rounded-lg shadow-sm">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('home.title') }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ t('home.subtitle') }}</p>
      <NuxtLink
        to="/contact"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {{ t('home.contactButton') }}
      </NuxtLink>
    </section>

    <!-- Skills Section -->
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('home.skills') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('home.featuredProjects') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/600x400" alt="Project 1" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p class="text-gray-600">Modern e-commerce platform built with React, Node.js, and MongoDB.</p>
          </div>
        </div>
        <div class="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/600x400" alt="Project 2" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Task Management App</h3>
            <p class="text-gray-600">Real-time task management application with Vue.js and Firebase.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()

definePageMeta({
  title: 'Home'
})
</script> 