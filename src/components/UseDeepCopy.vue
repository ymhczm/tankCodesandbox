<template>
  <div class="card">
    <p>
     data:{{data}}
    </p>
    <p>
     newData:{{newData}}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useDeepCopy } from "tankhooks";
const data = {
  test:1,
  copy: {
    value: 8
  }
}
const newData = useDeepCopy(data);
console.log("data:", data)
console.log("newData:", newData)
data.test =2
console.log("data:", data)
console.log("newData:", newData)
</script>
<style scoped>
.card {
  height: 3000px;
}
</style>
