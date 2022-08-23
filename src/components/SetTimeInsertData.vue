<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 11:32:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 14:16:01
-->
<template>
<div id="container">
</div>

</template>
<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  let all = 100000,     //总数
      num = 2000,           // 每个片段2条数据
      batch = all / num,  // 总共片段数量
      count = 0           // 已经添加的片段数
  const state = reactive({
    count: 0  
  })
  
  // requestAnimationFrame:是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。
  // 为了让各种网页动画效果（DOM动画、Canvas动画、SVG动画、WebGL动画）能够有一个统一的刷新机制，
  // 从而节省系统资源，提高系统性能，改善视觉效果
  const add=() => {
    const fra = document.createDocumentFragment() //创建文档碎片节点
    const  app = document.getElementById('#container') as Element
    for (let i = 0; i < num; i++) {
      const div = document.createElement('div')
      div.innerText = `你好，欢迎你，你是第${state.count * num + i+1}个`
      fra.appendChild(div)
    }
    app.appendChild(fra)
    state.count = state.count + 1;
    if(state.count < batch) {
      window.requestAnimationFrame(add)
    }
  }
  onMounted(()=>{
    add()
  })
</script>
<style scoped lang="less">
#container {
  height: 100%;
  overflow-y: scroll;
}
.item {
  display: block;
  line-height: 20px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
}
</style>
