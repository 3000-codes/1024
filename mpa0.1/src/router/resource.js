import { createRouter, createWebHashHistory } from 'vue-router'

// 路由信息
const routes = [

]

// 导出路由
const router = createRouter({
  // 必须传入主页面的路径
  // 多页面应用不支持h5的history模式
  history: createWebHashHistory('/resource/index.html'),
  routes
})

export default router
