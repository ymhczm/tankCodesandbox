
<template>

  <div class="card">
    <p>
     clickX:{{clickX}}
    </p>
    <p>
     clickY:{{clickY}}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useMousePosition } from "tankhooks";

const { clickY, clickX } = useMousePosition();

</script>
<style scoped>

</style>
