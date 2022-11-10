<template>
  <AGHeaderVue>{{ props.title }}</AGHeaderVue>
</template>
<script setup>
import AGHeaderVue from '@components/AGHeader.vue'
const props = defineProps({
  title: {
    type: String,
    default: '资源中心'
  }
})
</script>
