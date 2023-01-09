<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const num = ref(0);
defineProps<{ nums: number; addNum: () => void }>();
</script>

<template>
  <header>
    <div class="wrapper">
      {{ num }}
      <HelloWorld msg="You did it!" />
      {{ nums }}
      <button @click="num++">jia</button>
      <button @click="addNum()">jia</button>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
