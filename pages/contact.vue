<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">{{ t('contact.title') }}</h1>
    
    <div class="bg-white rounded-lg shadow-sm p-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.name') }}</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.email') }}</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.subject') }}</label>
          <input
            id="subject"
            v-model="formData.subject"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.message') }}</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="6"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? t('contact.sending') : t('contact.send') }}
        </button>
      </form>

      <div v-if="submitStatus" class="mt-6 p-4 rounded-md" :class="submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
        {{ t(`contact.${submitStatus.type}`) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const { t } = useLanguage()

definePageMeta({
  title: 'Contact'
})

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<{ type: 'success' | 'error' } | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // ここに実際のフォーム送信処理を実装
    // 例: API呼び出しなど
    await new Promise(resolve => setTimeout(resolve, 1000)) // デモ用の遅延

    submitStatus.value = {
      type: 'success'
    }

    // フォームをリセット
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
  } catch (error) {
    submitStatus.value = {
      type: 'error'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script> 