<script setup lang="ts">
import MyButton from './components/Button/index.vue'
import FnCom from './components/jsx/funtion-component'
const log = console.log
</script>

<template>
  <FnCom message="hello world" @send="log"/>
  <MyButton type="primary">按钮</MyButton>
  <MyButton>按钮2</MyButton>
</template>

<style scoped>

</style>
