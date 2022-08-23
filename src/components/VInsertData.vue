<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 13:51:05
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 14:34:33
-->
<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 11:10:09
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 13:44:57
-->

<template>
<div class="container">
  <div class="item" v-for="item in data">你好，欢迎你，你是第{{item+1}}个</div>
</div>

</template>
<script setup lang="ts">
import { ref } from "vue"
const data = ref(100000)
</script>
<style scoped lang="less">
.container {
  height: 100%;
  overflow-y: scroll;
}
.item {
  display: block;
  line-height: 20px;
  font-size: 16px;
}
</style>
