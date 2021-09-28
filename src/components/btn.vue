<template>
<input type="button" class="btn" value="確定" @click="callback">
</template>

<script>
export default {
  props: {
    callback: {
      type: Function
    }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  background-color: #198754;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 0 2px #198754aa;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.1;
  cursor: pointer;
  transition: box-shadow .3s;
  &:active{
    box-shadow: 0 0 0 5px #198754aa;
  }
}
</style>