<script setup>
import { ref, computed } from 'vue'
const tempUrl = ref('http://127.0.0.1:9527/datastore-portal-ui/pages/resource/index.html')
const props = defineProps({
  mainUrl: {
    type: String,
    default: ''
  }
})
const fullUrl = computed(() => {
  // console.log(import.meta.env.DEV)//根据这个判断是否是开发环境生成登录页面
  return props.mainUrl
})
console.log(fullUrl.value)
</script>

<template>
  <div>
    <iframe
      :src="tempUrl"
      frameborder="0"
      name="_blank"
    />
  </div>

  <el-tabs
    class="content-top-tabs"
    v-model="activeTabIframe"
    closable
    @tab-remove="removeTab"
    @tab-click="changeTab"
    @contextmenu.prevent="tabMouseRightClick"
  >
    <el-tab-pane
      v-for="(item) in activeTabData"
      :key="item.id"
      :label="item.menuCnName"
      :id="item.id"
      :name="item.menuId"
    >
      <div
        class="content-iframe"
        :style="{ height: (curHeight-115) + 'px' }"
      >
        <iframe
          :src="item.menuInnerUrl"
          class="iframe-border"
          name="_blank"
        />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style  lang="scss">

</style>
