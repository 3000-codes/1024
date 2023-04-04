<script setup lang="ts">
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <li
    v-for="(row,index) of list"
    :key="index"
  >
    <slot
      name="itemRow"
      :scope="row"
      :index="index"
    />
  </li>
</template>
