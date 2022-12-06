<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Observable } from 'rxjs'
const count = ref<number>(0)
const test = ref<HTMLDivElement>()
const increment = () => {
  count.value++
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
onMounted(() => {
  Observable.create((observer: any) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete()
  }).subscribe((x: any) => console.log(x))
})
</script>

<template>
  <p>{{ count }}</p>
  <div>
    ddd
  </div>
  <button
    @click="increment"
    ref="test"
  >
    点击
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
