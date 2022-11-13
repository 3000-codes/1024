<script setup lang="ts">
import Slot from './slots/Index.vue'
defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>
  <Slot />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
