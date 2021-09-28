<template>
<div class="add">
  <div class="preview">
    <figure v-show="imgUrl">
      <img @dragstart.prevent :src="imgUrl" :alt="title">
    </figure>
  </div>
  <div class="row">
    <input type="url" placeholder="https://example.png" pattern="https://.*" class="ip" v-model.trim.lazy="imgUrl">
  </div>
  <div class="row">
    <input type="text" v-model="title" placeholder="圖片標題" class="ip">
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const imgUrl = ref('https://i.imgur.com/0Dtbf1s.png')
    const title = ref('')
    return {
      imgUrl,
      title
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
    figure{
      img{
        border: 2px solid #ccc;
        border-radius: 20px;
        width: 50%;
        vertical-align: middle;
      }
    }
  }
  .row{
    margin-bottom: 20px;
    .ip{
      box-sizing: border-box;
      width: 90%;
      margin: 0 auto;
      font-size: 20px;
      line-height: 1.5;
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid $bar;
      outline: none;
      box-shadow: 0 0 0 1px $bar;
      &:focus{
        border: 1px solid $main;
        box-shadow: 0 0 0 3px $main;
      }
    }
  }
}
</style>