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
const observer = {
  next: (x: any) => console.log('Observer got a next value: ' + x),
  error: (err: any) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
}
onMounted(() => {
  const observable$ = new Observable((subscriber: any) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.complete()
  })
  observable$.subscribe(observer)
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
