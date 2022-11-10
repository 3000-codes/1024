import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import '@styles/index.scss' // 引入主题样式
import App from './App.vue'

const app = createApp(App, { title: '资源中心' })

app.use(ElementPlus)
app.mount('#app')
