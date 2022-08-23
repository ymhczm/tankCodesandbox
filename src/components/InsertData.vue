<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 11:10:09
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 14:06:10
-->

<template>
<div id="container">
  <div class="item" v-for="item in data">insert你好，欢迎你，你是第{{item}}个</div>
</div>

</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
const num = ref(100000)
onMounted(()=>{
  renderItem()
})
const renderItem = ()=> {
  const  app = document.getElementById('#container') as Element
  for(var i=0; i< num.value; i++) {
    let div = document.createElement('div'); 
    div.innerHTML = `insert你好，欢迎你，你是第${i+1}个`
    app.appendChild(div)
  }
}
</script>
<style scoped lang="less">
.id {
  height: 100vh;
  overflow-y: scroll;
}
.item {
  display: block;
  line-height: 20px;
  font-size: 16px;
}
</style>
