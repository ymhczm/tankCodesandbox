<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 10:37:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 10:42:23
-->
<template>
  <div class="card">
    <p >
     滚动:{{scrollY}}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useScrollPosition } from "tankhooks";
const { scrollY } = useScrollPosition();
</script>
<style scoped lang="less">
.card {
  height: 3000px;
  p {
    margin-top: 500px;
  }
}
</style>
