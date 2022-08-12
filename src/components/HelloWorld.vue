<template>
  <button @click="copy('测试copy')">复制到剪切板</button>
</template>
<script setup lang="ts">
import { useCopy } from "tankhooks";
console.log(1)
const copy = async(value:string)=>{
  const result = await useCopy(value);
  if(result==="SUCCESS") {
      console.log("复制到剪切板成功")
  } else if(result==="ERROR"){
      console.log("复制到剪切板失败")
  }
}
</script>
<style scoped>

</style>
