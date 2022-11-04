<template>
  <el-header class="ag-header">
    <h1 class="pro-logo">
      <i class="el-icon-cloudy" />
      <span>{{ frameTitle }}</span>
    </h1>
    <div class="flex-1 top-center flex-box">
      <div class="font-w-b">
        <el-button
          link
          class="cloud-btn"
        >
          111
        </el-button>
      </div>
      <div
        :class="['checked-cloud', 'flex-1', 'flex-box']"
        ref="checkedCloud"
      >
        <div ref="topMenuRef">
          <el-button
            link
            v-for="(item, index) in checkCloudList"
            :class="['yes-save', 'header-active']"
            :key="index"
            :style="{maxWidth: isSave&&'100%'}"
            :title="item.menuName"
            @click="headerBtnFn(item, index)"
          >
            <template v-if="isSave">
              <!-- <img class="cloud-icon cloud-icon2" src=""  alt=""> -->
            </template>
            {{ item.menuName }}
          </el-button>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script setup>
import { ref } from 'vue'
const frameTitle = ref('资源中心')
const checkCloudList = ref([])
const isSave = ref(true)
const headerBtnFn = (item, index) => {}
</script>
<style lang="scss" scoped>
.ag-header{

}
</style>
