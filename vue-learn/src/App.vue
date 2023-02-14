<script setup lang="ts">
import ReduxTest from './test-demo/ReduxTest.vue'
import tsx from './test-demo/tsx.vue'
import LifeCycle from './components/LifeCycle.vue'
</script>

<template>
  <div>主页</div>
  <ReduxTest />
  <tsx />
  <LifeCycle />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
