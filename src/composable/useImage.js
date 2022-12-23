import { onMounted, ref, unref } from 'vue'
const DOMAIN = import.meta.env.VITE_API_DOMAIN

const useImage = () => {
  const loading = ref(false)
  const error = ref('')

  const album = ref([])

  const upload = async (image) => {
    loading.value = true
    const img = unref(image)
    const formData = new FormData()
    formData.append('file', img)
    const fetch_response = await fetch(DOMAIN + '/image', {
      method: 'POST',
      body: formData
    })
    if (!fetch_response.ok) {
      error.value = fetch_response.statusText
      loading.value = false
      return
    }
    const res = await fetch_response.json()
    await getAlbum()
    loading.value = false
  }

  const deleteImage = async (hash) => {
    loading.value = true
    const fetch_response = await fetch(DOMAIN + '/image', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hash
      })
    })
    await fetch_response.json()
    await getAlbum()
    loading.value = false
  }

  const getAlbum = async () => {
    const fetch_response = await fetch(DOMAIN + '/album')
    const res = await fetch_response.json()
    album.value = res.data.images
  }

  onMounted(getAlbum)

  return {
    upload,
    loading,
    error,
    album,
    deleteImage
  }
}

export {
  useImage
}