<template>
<li class="card">
  <figure>
    <img :src="url" :alt="title">
  </figure>
  <h4 class="title">{{title}}</h4>
  <p class="tag-group"><span v-for="tag in tags" :key="tag" class="tag-item">{{tag}}</span></p>
</li>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    },
    tags: {
      type: Array
    }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
img{
  max-width: 100%;
  vertical-align: middle;
}
.card{
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  .title{
    font-size: 30px;
    line-height: 2;
    word-break: break-all;
  }
  .tag-group{
    .tag-item{
      display: inline-block;
      background-color: $main;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
    }
  }
}
</style>