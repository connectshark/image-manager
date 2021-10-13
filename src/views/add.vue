<template>
<div class="add">
  <div class="preview">
    <h3 class="img-title">{{title}}</h3>
    <figure v-if="imgUrl">
      <img @dragstart.prevent :src="imgUrl" :alt="title" @error="errHandler">
    </figure>
    <div class="empty" v-else></div>
    <ul class="tag-group">
      <li v-for="(tag, index) in tags" :key="index" class="tag-item"><i class='bx bx-purchase-tag'></i>{{tag.value}}</li>
    </ul>
  </div>
  <div class="row">
    <h3 class="row-title"><i class='bx bx-images'></i>圖片網址</h3>
    <input type="url" ref="imgHtml" placeholder="https://example.png" pattern="https://.*" class="ip" v-model.trim.lazy="imgUrl">
  </div>
  <div class="row">
    <h3 class="row-title"><i class='bx bx-image-alt'></i>圖片標題</h3>
    <input type="text" ref="titleHtml" v-model="title" placeholder="圖片標題" class="ip">
  </div>
  <div class="row">
    <h3 class="row-title"><i class='bx bx-purchase-tag'></i>標記<span @click="addTag">+</span><span @click="removeTag">-</span></h3>
    <input v-for="(tag, index) in tags" :key="index" type="text" v-model.trim="tag.value" placeholder="圖片標記" class="ip" maxlength="20">
  </div>
  <div class="row">
    <Btn :callback="submit"/>
  </div>
</div>
</template>

<script>
import Btn from '../components/btn.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Btn
  },
  setup () {
    const store = useStore()
    const imgUrl = ref('')
    const imgHtml = ref(null)
    const title = ref('')
    const titleHtml = ref(null)
    const tags = ref([
      {
        value: ''
      }
    ])



    const addTag = () => {
      if (tags.value.length > 4) return
      tags.value.push({ value: '' })
    }

    const removeTag = () => {
      if (tags.value.length === 0) return
      tags.value.pop()
    }

    const submit = () => {

      if (imgUrl.value === '') {
        imgHtml.value.focus()
        return
      }
      if (title.value === '') {
        titleHtml.value.focus()
        return
      }


      const tag = tags.value.filter(item => item.value).map(item => item.value)
      const data = {
        url: imgUrl.value,
        title: title.value,
        tags: [...tag]
      }
      store.commit('addItem', data)
    }

    const errHandler = () => {
      imgUrl.value = ''
    }
    return {
      imgHtml,
      titleHtml,
      imgUrl,
      title,
      tags,
      addTag,
      removeTag,
      submit,
      errHandler
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';

.add{
  padding: 20px 0 0;
  .preview{
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    margin-bottom: 20px;
    .img-title{
      font-size: 20px;
      line-height: 2;
      font-weight: bold;
      min-height: 40px;
    }
    figure{
      img{
        border: 2px solid #ccc;
        border-radius: 20px;
        width: 50%;
        vertical-align: middle;
      }
    }
    .empty{
      width: 50%;
      padding: 50% 0 0;
      background-color: #ccc;
      margin: auto;
      border-radius: 20px;
    }
    .tag-group{
      .tag-item{
        display: inline-block;
        font-size: 14px;
        line-height: 1.1;
        color: #4338CA;
      }
    }
  }
  .row{
    width: 90%;
    margin: 0 auto 20px;
    color: #6e6e6e;
    .row-title{
      font-size: 18px;
      line-height: 1.1;
      font-weight: 500;
      text-align: left;
      margin-bottom: 10px;
    }
    .ip{
      color: #6e6e6e;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      font-size: 20px;
      line-height: 1.5;
      padding: 10px 20px;
      border-radius: 5px;
      outline: none;
      border: none;
      box-shadow: 0 0 0 2px $bar;
      transition: box-shadow .3s;
      margin-bottom: 10px;
      &:focus{
        box-shadow: 0 0 0 4px $main;
      }
    }
  }
}
</style>