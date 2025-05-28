<template>
  <div v-if="!hasConsent" class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="text-sm">
        {{ t('cookieConsent.message') }}
        <a href="/privacy-policy" class="underline hover:text-blue-300">{{ t('cookieConsent.privacyPolicy') }}</a>
      </div>
      <div class="flex gap-4">
        <button
          @click="accept"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
        >
          {{ t('cookieConsent.accept') }}
        </button>
        <button
          @click="decline"
          class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm"
        >
          {{ t('cookieConsent.decline') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const hasConsent = useCookie('cookie-consent')

const accept = () => {
  const cookie = useCookie('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365 // 1年間有効
  })
  cookie.value = 'accepted'
}

const decline = () => {
  const cookie = useCookie('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365 // 1年間有効
  })
  cookie.value = 'declined'
}
</script> 