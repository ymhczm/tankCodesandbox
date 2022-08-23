<script setup lang="ts">

</script>

<template>
<div class="contain">
  <div class="subMenu">
    <router-link to="/">默认页面</router-link>
    <router-link to="/useMousePosition">useMousePosition</router-link>
    <router-link to="/useScrollPosition">useScrollPosition</router-link>
    <router-link to="/useDeepCopy">useDeepCopy</router-link>
    <router-link to="/UseSleep">UseSleep</router-link>
    <router-link to="/useCopy">useCopy</router-link>
    <router-link to="/insertData">insertData</router-link>
    <router-link to="/setTimeInsertData">setTimeInsertData</router-link>
    <router-link to="/vInsertData">vInsertData</router-link>

  </div>
  <router-view class="content"></router-view>
</div>
  
</template>

<style scoped lang="less">
.contain {
  width: 100vw;
  height: 100vh;
  display: flex;
  .subMenu {
    width: 200px;
    text-align: center;
    a {
      display: block;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
