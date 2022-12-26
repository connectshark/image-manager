
<template>
  <main class="w-11/12 mx-auto max-w-xl py-6">
    <form @submit.prevent="upload(file)">
    <section class=" relative">
      <label for="upload" class="flex items-center justify-center py-10 bg-stone-200 hover:opacity-80 cursor-pointer rounded shadow">
        <span>上傳圖片區</span>
      </label>
      <input @change="fileHandler" accept="image/*" class=" absolute  top-0 left-0 -z-10 opacity-0" type="file" id="upload">
      <div v-if="file">
        <p>name: {{ file.name }}</p>
        <p>
          <span v-if="loading">...</span>
          <button class=" bg-stone-800 text-white rounded-2xl p-2 hover:opacity-80" v-else type="submit">上傳圖片</button>
        </p>
      </div>
    </section>
    </form>
    <section class=" grid grid-cols-3 gap-4 p-4">
      <div v-for="img in album" :key="img.id">
        <figure>
          <img :src="img.link" :alt="img.id">
        </figure>
        <div>
          <button @click.stop="deleteImage(img.deletehash)" class=" bg-stone-800 text-white rounded-2xl p-2 hover:opacity-80" type="button">delete</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useImage } from '../composable/useImage'
import { ref } from 'vue'

const file = ref(null)
const fileHandler = (e) => {
  const img = e.target.files[0]
  file.value = img
}

const {
  upload,
  loading,
  album,
  deleteImage,
  getImage
} = useImage()

getImage('82CJMWn')
</script>
