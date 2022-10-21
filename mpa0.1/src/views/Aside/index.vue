<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits({
  closeAside: {
    type: 'closeAside',
    handler (val) {
      this.asideClosed.value = val
    }
  }
})
const isCollapse = ref(false)
const icon = ref('Fold')
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
  icon.value = isCollapse.value ? 'Expand' : 'Fold'
  emit('closeAside', isCollapse.value)
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title>
            <span>Group One</span>
          </template>
          <el-menu-item index="1-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-2">
            item two
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">
            item three
          </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>
            <span>item four</span>
          </template>
          <el-menu-item index="1-4-1">
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          Navigator Two
        </template>
      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <el-icon><document /></el-icon>
        <template #title>
          Navigator Three
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>
          Navigator Four
        </template>
      </el-menu-item>
    </el-menu>
    <div class="menu-foot">
      <el-icon @click="handleCollapse">
        <component :is="icon" />
      </el-icon>
    </div>
  </div>
</template>

<style  lang="scss">
.menu{
  height: 100%;
  position: relative;
  border-right: solid 1px var(--el-menu-border-color);
  .el-menu{
    border-right: none;
    width: calc(100% - 1px);
  }
  .menu-foot{
    position: absolute;
    right:  0;
    bottom: 0;
    height: 28px;
    font-size: 24px;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .el-icon{
      cursor: pointer;
    }
  }
}
</style>
