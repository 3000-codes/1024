<template>
  <el-header class="ag-header">
    <h1 class="pro-logo">
      <i class="el-icon-cloudy" />
      <span><slot /></span>
    </h1>
  </el-header>
</template>
<script setup>
// import { ref } from 'vue'
// const frameTitle = ref('资源中心')
// const checkCloudList = ref([])
// const isSave = ref(true)
// const headerBtnFn = (item, index) => { }
// const props = defineProps({
//   title: {
//     type: String,
//     default: '资源中心'
//   }
// })
</script>
<style lang="scss" scoped>
.ag-header {
  width: 100%;
  height: 52px !important;
  background-color: #262F3E;

  h1 {
    margin: 0;
  }

  .pro-logo {
    height: 52px;
    line-height: 52px;
    padding-right: 57px;
    overflow: hidden;
    font-size: 18px;
    color: #fff;
    font-weight: normal;
    font-family: Source Han Sans CN Medium;

    .el-icon-cloudy {
      display: inline-block;
      font-family: element-icons !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      vertical-align: baseline;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      width: 32px;
      height: 32px;
      margin-top: -4px;
      margin-right: 4px;
      font-size: 38px;
      vertical-align: middle;
      font-weight: bolder;
      background: url(../assets/logo.png);
    }
  }
}
</style>
