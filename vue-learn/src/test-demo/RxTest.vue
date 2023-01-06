<script setup lang="ts">
import { onMounted } from 'vue'
import { Observable } from 'rxjs'

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
  <div>Rxjs测试</div>
</template>
