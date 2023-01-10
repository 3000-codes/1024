<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

import { useStore } from "./store/index";
const store = useStore();
defineProps({
  appName: {
    type: String,
    default: "Hello World",
  },
});
</script>

<template>
  <h2>我是{{ appName }}</h2>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment">increment</button>
  <HelloWorld msg="=====" />
  <hr />
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
