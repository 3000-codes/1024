<script setup>
import { ref, computed } from 'vue'
import Header from '@views/Header/index'
import Main from '@views/Main/index'
import Aside from '@views/Aside/index'

const currentPage = ref('1111')
const asideClosed = ref(false)
const handleAsideClosed = () => {
  asideClosed.value = !asideClosed.value
}
const asideWidth = computed(() => {
  return asideClosed.value ? '64px' : '300px'
})
</script>

<template>
  <el-container class="main">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container class="contain">
      <el-aside>
        <Transition name="slide-fade">
          <Aside @close-aside="handleAsideClosed" />
        </Transition>
      </el-aside>
      <el-main><Main :main-url="currentPage" /></el-main>
    </el-container>
  </el-container>
</template>

<style scoped  lang="scss">

.main{
  height: 100%;
  .header{
  height: 60px;
  background-color: #f5f5f5;
}
.contain{
  height: calc(100% - 60px);
  .el-aside{
    width: v-bind(asideWidth);
  }
}
}
</style>
