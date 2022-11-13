<script setup lang="ts">
import { ref } from 'vue'
import ListItem from './ListItem.vue'
const dataList = ref(Array.from({ length: 20 }, (_, ix) => ({ name: '张三' + ix, index: ix })))
const handleEvent = (scope, index) => {
  console.log(scope, index)
}
</script>
<template>
  <ListItem v-model:list="dataList">
    <template #itemRow="{scope,index}">
      <span @click="handleEvent(scope,index)">{{ scope.name }}</span>
    </template>
  </ListItem>
</template>
