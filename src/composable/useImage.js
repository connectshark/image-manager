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
    await fetch_response.json()
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
    album.value = res.images
  }

  const getGallery = async () => {
    const fetch_response = await fetch(DOMAIN + '/gallery')
    const res = await fetch_response.json()
  }

  const getImage = async (hash) => {
    const fetch_response = await fetch(DOMAIN + `/image?hash=${hash}`)
    const res = await fetch_response.json()
  }

  onMounted(getAlbum)

  return {
    upload,
    loading,
    error,
    album,
    deleteImage,
    getGallery,
    getImage
  }
}

export {
  useImage
}