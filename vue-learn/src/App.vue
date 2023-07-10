<script setup lang="ts">
// import ReduxTest from './test-demo/ReduxTest.vue'
// import tsx from './test-demo/tsx.vue'
import LifeCycle from './components/LifeCycle.vue'
import StateProp from './test-demo/StateProp.vue'
import { ref, watch } from 'vue'

const lc = ref()

const test = () => {
  console.log(lc)

  lc.value?.changeMsg()
}

const count = ref({ val: 10 })
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

</script>

<template>
  <div @click="test">
    主页
  </div>
  <!-- <ReduxTest />
  <tsx /> -->
  <LifeCycle ref="lc" />
  <StateProp :count="count" />
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
