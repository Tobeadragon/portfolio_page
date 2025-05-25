<template>
  <div class="space-y-8">
    <section class="bg-white rounded-lg shadow-sm p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ t('about.title') }}</h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Profile"
            class="rounded-lg w-full"
          />
        </div>
        <div class="md:w-2/3">
          <p class="text-lg text-gray-700 mb-4">
            Hallo! Ich bin ein Full-Stack-Webentwickler mit über 5 Jahren Erfahrung.
            Ich bin leidenschaftlich daran interessiert, benutzerfreundliche und effiziente Webanwendungen zu entwickeln.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Ich halte mich stets über die neuesten Technologietrends auf dem Laufenden und strebe nach kontinuierlichem Lernen und Wachstum.
            Ich habe umfangreiche Erfahrung in der Teamarbeit und bin versiert im Projektmanagement mit agilen Entwicklungsmethoden.
          </p>
          <p class="text-lg text-gray-700">
            In meiner Freizeit schreibe ich technische Blogs und trage zu Open-Source-Projekten bei.
            Ich möchte durch die Weitergabe an die Community zur technologischen Entwicklung beitragen.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('about.experience') }}</h2>
      <div class="space-y-6">
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="text-xl font-semibold">{{ t('about.seniorDev') }}</h3>
          <p class="text-gray-600">Tech GmbH | 2020 - Present</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>Entwicklung und Design von großen Webanwendungen</li>
            <li>Leitung eines Teams von 5 Entwicklern</li>
            <li>Einführung von Microservices-Architektur</li>
          </ul>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="text-xl font-semibold">{{ t('about.webDev') }}</h3>
          <p class="text-gray-600">Startup GmbH | 2018 - 2020</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>Entwicklung und Wartung neuer Dienste</li>
            <li>Performance-Optimierung</li>
            <li>Verbesserung der Benutzererfahrung</li>
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