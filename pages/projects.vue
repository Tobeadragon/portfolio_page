<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">プロジェクト一覧</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Project 1 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Project 1" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Eコマースプラットフォーム</h2>
          <p class="text-gray-600 mb-4">
            React、Node.js、MongoDBを使用した最新のEコマースプラットフォーム。
            ユーザー認証、商品管理、決済システムを実装。
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">プロジェクトを見る →</a>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Project 2" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">タスク管理アプリ</h2>
          <p class="text-gray-600 mb-4">
            Vue.js、TypeScript、Firebaseを使用したリアルタイムタスク管理アプリケーション。
            ドラッグ＆ドロップ機能、リアルタイム更新を実装。
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Firebase</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">プロジェクトを見る →</a>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Project 3" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">天気予報アプリ</h2>
          <p class="text-gray-600 mb-4">
            Nuxt.js、TailwindCSS、OpenWeather APIを使用した天気予報アプリケーション。
            位置情報による自動天気取得、5日間予報を実装。
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Nuxt.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TailwindCSS</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">API統合</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">プロジェクトを見る →</a>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Project 4" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">ブログプラットフォーム</h2>
          <p class="text-gray-600 mb-4">
            Next.js、Prisma、PostgreSQLを使用したブログプラットフォーム。
            マークダウンエディタ、画像アップロード機能を実装。
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Prisma</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">プロジェクトを見る →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Projects'
})
</script> 