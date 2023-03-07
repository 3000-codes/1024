import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { HelloWorld, LifeCycle, PropFn } from './components'
import components from './components'

const app = createApp(App)

// app.use(HelloWorld)
// app.use(LifeCycle)
// app.use(PropFn)

for (const key in components) {
  app.component(key, components[key])
}

app.mount('#app')
// createApp(App).mount(document.body)
