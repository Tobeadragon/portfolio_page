<template>
  <section class="bg-teal-50 rounded-lg shadow-sm p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('home.skills') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div class="p-4 border rounded-lg bg-white">
        <h3 class="text-xl font-semibold mb-3">{{ t('home.frontend') }}</h3>
        <ul class="space-y-2">
          <li>HTML</li>
          <li>CSS / SCSS</li>
          <li>JavaScript</li>
          <li>Vue.js / Nuxt.js</li>
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div class="p-4 border rounded-lg bg-white">
        <h3 class="text-xl font-semibold mb-3">{{ t('home.backend') }}</h3>
        <ul class="space-y-2">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div class="p-4 border rounded-lg bg-white">
        <h3 class="text-xl font-semibold mb-3">{{ t('home.qa') }}</h3>
        <ul class="space-y-2">
          <li>Jest</li>
          <li>Vitest</li>
          <li>Cypress</li>
          <li>TestCafe</li>
          <li>Unit / E2E Testing</li>
        </ul>
      </div>
      <div class="p-4 border rounded-lg bg-white">
        <h3 class="text-xl font-semibold mb-3">{{ t('home.pcSupport') }}</h3>
        <ul class="space-y-2">
          <li>MS Office 365</li>
          <li>Word / Excel</li>
          <li>PowerPoint</li>
          <li>Windows / macOS</li>
        </ul>
      </div>
      <div class="p-4 border rounded-lg bg-white">
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
</template>

<script setup lang="ts">
const { t } = useLanguage()
</script> 