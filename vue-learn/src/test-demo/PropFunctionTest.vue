<script setup lang="ts">
import { ref } from 'vue'
import PropFnVue from '../components/PropFn.vue'
const count = ref<number>(0)
const test = ref<HTMLDivElement>()
const increment = () => {
  count.value++
}
const lb = ref<User>()
const msg = ref('default msg')
const changeMsg = (e: MouseEvent) => {
  msg.value = 'change msg'
}

</script>

<template>
  <PropFnVue
    :msg="msg"
    :change-msg="changeMsg"
  />
  <p>{{ count }}</p>
  <p>{{ lb?.name }}</p>
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
