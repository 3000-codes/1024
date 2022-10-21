import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@styles/index.scss' // 引入主题样式
import '@utils/systemEnv'
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000, locale })
app.use(createPinia())
app.mount('#app')
