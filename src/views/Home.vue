<template>
  <div id="home" class="home">
    <div><i class="iconfont iconchuang"></i></div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  
}
</script>

<style lang="less" scoped>
  .home div {
    div{
      background: greenyellow;
      width: 75px;
      height: 75px;
      font-size: 18px;
      i {
        color: red;
      }
    }
  }
</style>

