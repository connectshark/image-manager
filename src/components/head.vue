<template>
<header class="header">
  <h1>IMG MANAGER</h1>
  <nav class="nav">
    <ul class="nav-group">
      <li v-for="item in navs" :key="item.url" class="nav-item">
        <router-link :to="item.url" class="nav-text">{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  setup () {
    return {
      navs: [
        {
          url: '/',
          name: '首頁'
        },
        {
          url: '/add',
          name: '添加新圖'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
.header{
  background-color: $main;
  h1{
    color: #fff;
    font-size: 30px;
    line-height: 2;
  }
  .nav{
    padding-bottom: 10px;
  }
  .nav-item{
    display: inline-block;
    margin: 0 10px;
    .nav-text{
      font-size: 20px;
      text-decoration: none;
      line-height: 1.1;
      color: #fff;
    }
    &:hover{
      .nav-text{
        text-decoration: underline;
      }
    }
  }
}
</style>