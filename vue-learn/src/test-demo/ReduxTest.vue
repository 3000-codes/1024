<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { reduxRef } from '../composables/reduxRef'
import reduxStore from '../store/reduxStore'

// const { dispatch, getState, subscribe } = reduxStore
// 无法使用computed获取state,computed依赖响应式数据触发更新
// const count = computed({
//   get: () => {
//     console.log('get count')
//     return getState().value
//   },
//   set: (val) => {
//     console.log('set count', val)
//     dispatch({ type: 'INCREMENT', payload: val })
//   }
// })
// 需要使用subscribe订阅store的变化再更新响应式数据或者在dispatch后手动更新
// const count = ref<Number>(getState().value)
// subscribe(() => {
//   count.value = getState().value
// })
// const increment = () => {
//   dispatch({ type: 'INCREMENT', payload: 1 })
//   // count.value = getState().value
// }

// 使用customRef对reduxStore进行包装
const count = reduxRef(reduxStore, 'value')
const increment = () => {
  count.value = { type: 'INCREMENT', payload: 1 }
}
</script>

<template>
  <div>Redux测试</div>
  <div>count: {{ count }}</div>
  <button @click="increment">
    increment
  </button>
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
